import envConfig from '@/src/config/envConfig';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'
export  async function POST(req:Request) {
    
      const { email, subject, message } = await req.json()
  console.log(email, subject, message)
      // Configure NodeMailer transport (use environment variables for sensitive info)
      const transporter = nodemailer.createTransport({
        host: envConfig.EMAIL_HOST,
        port: envConfig.EMAIL_PORT,
        secure: envConfig.EMAIL_SECURE === 'true', 
        auth: {
          user: envConfig.EMAIL_USER,
          pass: envConfig.EMAIL_PASSWORD,
        },
      });
  
      try {
        // Send mail with defined transport object
        await transporter.sendMail({
          from:envConfig.EMAIL_USER, 
          to:email, // list of receivers
          subject, // Subject line
          text: message, // plain text body
        });
  
        return NextResponse.json({ message: 'Email sent successfully' });
      } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json({ error: 'Failed to send email' });
      }
    
  }