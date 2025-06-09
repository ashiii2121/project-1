import User from '../model/Usermodel.js'
import { transporter } from '../configue/Mailservice.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { config } from 'dotenv'

// Load environment variables
config()

const secretKey = "mychoice"

// In-memory store — temporary for development only
let otpStore = {}

// OTP expiration time (10 minutes)
const OTP_EXPIRY_TIME = 10 * 60 * 1000

// Rate limiting: 1 OTP per minute per email
const OTP_RATE_LIMIT = 60 * 1000

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

// Clean up expired OTPs
function cleanupExpiredOTPs() {
  const now = Date.now()
  for (const email in otpStore) {
    if (now - otpStore[email].timestamp > OTP_EXPIRY_TIME) {
      delete otpStore[email]
      console.log(`🧹 Cleaned up expired OTP for: ${email}`)
    }
  }
}

// Run cleanup every 5 minutes
setInterval(cleanupExpiredOTPs, 5 * 60 * 1000)

// Verify OTP function
function verifyOTP(email, otp) {
  const storedOtpData = otpStore[email]

  if (!storedOtpData) {
    return { success: false, error: "OTP not found. Please request a new OTP." }
  }

  // Check if OTP has expired
  if (Date.now() - storedOtpData.timestamp > OTP_EXPIRY_TIME) {
    delete otpStore[email] // Clean up expired OTP
    return { success: false, error: "OTP has expired. Please request a new OTP." }
  }

  // Check for too many failed attempts
  if (storedOtpData.attempts >= 3) {
    delete otpStore[email] // Clean up after too many attempts
    return { success: false, error: "Too many failed attempts. Please request a new OTP." }
  }

  // Check if OTP matches
  if (storedOtpData.otp !== otp) {
    storedOtpData.attempts = (storedOtpData.attempts || 0) + 1
    const remainingAttempts = 3 - storedOtpData.attempts
    return {
      success: false,
      error: `Invalid OTP. ${remainingAttempts} attempts remaining.`
    }
  }

  // OTP is valid
  delete otpStore[email] // Clean up successful OTP
  return { success: true }
}

// ✅ Authentication check using JWT
export const authChecking = async (req, res) => {
  try {
    const token = req.cookies.token
    if (!token) {
      return res.status(401).json({ error: "User not logged in", authenticated: false })
    }

    const decoded = jwt.verify(token, secretKey)
    console.log("Decoded token:", decoded)

    res.status(200).json({ authenticated: true })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Internal server error" })
  }
}

// ✅ Signup Handler
export const signUpHandler = async (req, res) => {
  try {
    const { name, email, password, otp } = req.body

    // Validate all required fields
    if (!name || !email || !password || !otp) {
      return res.status(400).json({ error: "All fields are required" })
    }

    // Validate email format
    if (!EMAIL_REGEX.test(email)) {
      return res.status(400).json({ error: "Please enter a valid email address" })
    }

    // Validate password strength
    if (password.length < 6) {
      return res.status(400).json({ error: "Password must be at least 6 characters long" })
    }

    // Validate name
    if (name.trim().length < 2) {
      return res.status(400).json({ error: "Name must be at least 2 characters long" })
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(409).json({ error: "Email already registered. Please login instead." })
    }

    // Verify OTP
    const otpVerification = verifyOTP(email, otp)
    if (!otpVerification.success) {
      return res.status(400).json({ error: otpVerification.error })
    }


    // Hash password and create user
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await User.create({
      name: name.trim(),
      email: email.toLowerCase(),
      password: hashedPassword
    })

    console.log('✅ New user registered:', newUser.email)

    res.status(201).json({
      message: "Registration successful! You can now login.",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email
      }
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Internal server error" })
  }
}

// ✅ Send OTP handler
export const sendOTPhandler = async (req, res) => {
  try {
    const { email } = req.body

    // Validate email presence
    if (!email) {
      return res.status(400).json({ error: "Email is required" })
    }

    // Validate email format
    if (!EMAIL_REGEX.test(email)) {
      return res.status(400).json({ error: "Please enter a valid email address" })
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(409).json({ error: "Email already registered. Please login instead." })
    }

    // Rate limiting: Check if OTP was sent recently
    const existingOtpData = otpStore[email]
    if (existingOtpData) {
      const timeSinceLastOtp = Date.now() - existingOtpData.timestamp
      if (timeSinceLastOtp < OTP_RATE_LIMIT) {
        const remainingTime = Math.ceil((OTP_RATE_LIMIT - timeSinceLastOtp) / 1000)
        return res.status(429).json({
          error: `Please wait ${remainingTime} seconds before requesting a new OTP`
        })
      }
    }

    // Generate and store new OTP
    const otp = generateOTP()
    otpStore[email] = {
      otp: otp,
      timestamp: Date.now(),
      attempts: 0 // Track verification attempts
    }

    console.log(`🔐 Generated OTP for ${email}: ${otp}`) // For development only

    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL_ID,
      to: email,
      subject: 'OTP from ShopEasy',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; text-align: center;">ShopEasy OTP Verification</h2>
          <p style="font-size: 16px; color: #666;">Hello,</p>
          <p style="font-size: 16px; color: #666;">Your OTP for account verification is:</p>
          <div style="text-align: center; margin: 20px 0;">
            <span style="font-size: 32px; font-weight: bold; color: #007bff; background: #f8f9fa; padding: 10px 20px; border-radius: 5px; letter-spacing: 3px;">${otp}</span>
          </div>
          <p style="font-size: 14px; color: #999;">This OTP is valid for 10 minutes.</p>
          <p style="font-size: 14px; color: #999;">If you didn't request this, please ignore this email.</p>
        </div>
      `
    }

    // Verify transporter configuration before sending
    transporter.verify((error) => {
      if (error) {
        console.error('SMTP Configuration Error:', error)
        return res.status(500).json({
          error: 'Email service configuration error. Please check your email settings.'
        })
      }

      // Send the email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Email Sending Error:', error)
          return res.status(500).json({
            error: 'Failed to send OTP. Please try again or check your email address.'
          })
        }
        console.log('✅ Email sent successfully:', info.response)
        console.log('📧 OTP sent to:', email)
        res.status(200).json({
          message: 'OTP sent successfully! Please check your email.',
          email: email
        })
      })
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Internal server error" })
  }
}

// ✅ Login Handler
export const userLoginHandler = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: "Both email and password are required" })
    }

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(404).json({ error: "User not found" })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid password" })
    }

    const payload = {
      id: user._id,
      fullname: user.fullname,
      email: user.email
    }

    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' })

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
      maxAge: 86400000
    })

    res.status(200).json({ message: "Login successful", token })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Internal server error" })
  }
}

// ✅ Verify OTP Handler (for testing purposes)
export const verifyOTPHandler = async (req, res) => {
  try {
    const { email, otp } = req.body

    if (!email || !otp) {
      return res.status(400).json({ error: "Email and OTP are required" })
    }

    // Validate email format
    if (!EMAIL_REGEX.test(email)) {
      return res.status(400).json({ error: "Please enter a valid email address" })
    }

    // Verify OTP
    const otpVerification = verifyOTP(email, otp)
    if (!otpVerification.success) {
      return res.status(400).json({ error: otpVerification.error })
    }

    res.status(200).json({
      message: "OTP verified successfully!",
      email: email
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Internal server error" })
  }
}

// ✅ Get OTP Status (for debugging)
export const getOTPStatus = async (req, res) => {
  try {
    const { email } = req.query

    if (!email) {
      return res.status(400).json({ error: "Email is required" })
    }

    const otpData = otpStore[email]
    if (!otpData) {
      return res.status(404).json({ message: "No OTP found for this email" })
    }

    const timeRemaining = Math.max(0, OTP_EXPIRY_TIME - (Date.now() - otpData.timestamp))
    const isExpired = timeRemaining === 0

    res.status(200).json({
      email: email,
      hasOTP: true,
      isExpired: isExpired,
      timeRemainingMs: timeRemaining,
      timeRemainingMin: Math.ceil(timeRemaining / 60000),
      attempts: otpData.attempts || 0,
      maxAttempts: 3
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Internal server error" })
  }
}