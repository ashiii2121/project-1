import User from '../model/Usermodel.js'
import { transporter } from '../configue/Mailservice.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const secretKey = "mychoice"

// In-memory store — temporary for development only
let otpStore = {}

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

    if (otpStore[email] !== otp) {
      return res.status(400).json({ error: "Invalid OTP" })
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
    otpStore[email] = otp

    const mailOptions = {
      from: 'ashiiik2121@gmail.com',

      to: email,
      subject: 'OTP from ShopEasy',
      html: `<h2>Your OTP is <strong>${otp}</strong></h2>`
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Email Error:', error)
        return res.status(500).json({ error: 'Error sending email' })
      }
      console.log('Email sent:', info.response)
      res.status(200).json({ message: 'OTP sent successfully' })

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


