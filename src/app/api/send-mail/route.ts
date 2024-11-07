import envConfig from "@/src/config/envConfig";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();
  console.log(email, subject, message);
  // Configure NodeMailer transport (use environment variables for sensitive info)
  const transporter = nodemailer.createTransport({
    host: envConfig.EMAIL_HOST,
    port: envConfig.EMAIL_PORT,
    secure: envConfig.EMAIL_SECURE === "true",
    auth: {
      user: envConfig.EMAIL_USER,
      pass: envConfig.EMAIL_PASSWORD,
    },
  } as SMTPTransport.Options);

  try {
    // Send mail with defined transport object
    await transporter.sendMail({
      from:email ,
      to:envConfig.EMAIL_USER,
      subject, // Subject line
      html: ` <div>
      <p>
        From:
        <Link href="#" underline="always">
          ${email}
        </Link>
      </p>
      <b className="font-bold mb-1">${name}</b>
      <p>${message}</p>
    </div>`,
    });

    return NextResponse.json({ message: "Your email has been sent successfully. I will be in contact with you at the earliest opportunity." });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ error: "Failed to send email" });
  }
}
