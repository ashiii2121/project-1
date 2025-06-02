import nodemailer from 'nodemailer'
import {config} from 'dotenv'
config()

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL_ID,
      pass: process.env.NODEMAILER_EMAIL_PASS
    }
  });