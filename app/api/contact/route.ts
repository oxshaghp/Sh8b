import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  CONTACT_RECIPIENT = "bdallhalbnt@gmail.com",
} = process.env;

const isEmailConfigured =
  SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS ? true : false;

const transporter = isEmailConfigured
  ? nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    })
  : null;

export async function POST(req: Request) {
  const data = (await req.json()) as ContactPayload;
  const name = data?.name?.trim();
  const email = data?.email?.trim();
  const message = data?.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      {
        success: false,
        message: "INVALID_PAYLOAD",
      },
      { status: 400 }
    );
  }

  if (!transporter) {
    console.error("SMTP configuration is missing.");
    return NextResponse.json(
      {
        success: false,
        message: "EMAIL_NOT_CONFIGURED",
      },
      { status: 500 }
    );
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${SMTP_USER}>`,
      to: CONTACT_RECIPIENT,
      replyTo: email,
      subject: `New message from ${name}`,
      text: message,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message.replace(
        /\n/g,
        "<br/>"
      )}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact email failed", error);
    return NextResponse.json(
      {
        success: false,
        message: "EMAIL_FAILED",
      },
      { status: 500 }
    );
  }
}
