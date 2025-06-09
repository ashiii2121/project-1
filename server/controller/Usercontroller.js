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

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString()
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

    if (!name || !email || !password || !otp) {
      return res.status(400).json({ error: "All fields are required" })
    }

    if (!name) {
      return res.status(400).json({ error: 'fullname is required' });
    }


    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(409).json({ error: "Email already registered" })
    }

    // Check if OTP exists and is valid
    const storedOtpData = otpStore[email]
    if (!storedOtpData) {
      return res.status(400).json({ error: "OTP not found. Please request a new OTP." })
    }

    // Check if OTP has expired
    if (Date.now() - storedOtpData.timestamp > OTP_EXPIRY_TIME) {
      delete otpStore[email] // Clean up expired OTP
      return res.status(400).json({ error: "OTP has expired. Please request a new OTP." })
    }

    // Check if OTP matches
    if (storedOtpData.otp !== otp) {
      return res.status(400).json({ error: "Invalid OTP. Please check and try again." })
    }


    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await User.create({ name, email, password: hashedPassword })
    console.log(newUser);


    // Clear OTP from memory
    delete otpStore[email]

    res.status(200).json({ message: "Registration successful", user: newUser.email })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Internal server error" })
  }
}

// ✅ Send OTP handler
export const sendOTPhandler = async (req, res) => {
  try {
    const { email } = req.body
    if (!email) {
      return res.status(400).json({ error: "Invalid email ID" })
    }

    const otp = generateOTP()
    // Store OTP with timestamp for expiration
    otpStore[email] = {
      otp: otp,
      timestamp: Date.now()
    }

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
    transporter.verify((error, success) => {
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


