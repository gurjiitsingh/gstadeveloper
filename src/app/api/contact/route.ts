// src/app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { token, name, email, country, phone, message } = body;

    // --- 1. Verify reCAPTCHA ---
   const secretKey = process.env.RECAPTCHA_SECRET_KEY!
    const recaptchaRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
      { method: "POST" }
    );
    const recaptchaData = await recaptchaRes.json();

    if (!recaptchaData.success) {
      return NextResponse.json({ success: false, error: "Invalid captcha" }, { status: 400 });
    }

    // --- 2. Prepare Brevo config ---
    const API_KEY = process.env.BREVO_API_KEY!;
    const ADMIN_EMAIL = process.env.ADMIN_CONTACT_EMAIL!;
    const SENDER_EMAIL = process.env.SENDER_EMAIL!;
    const SENDER_NAME = process.env.SENDER_NAME || "Website Contact";

    console.log("this---------", ADMIN_EMAIL, SENDER_EMAIL,SENDER_NAME)

    // --- 3. Send email to Admin ---
    const adminHtml = `
      <h3>New Contact Form Submission:</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Country:</b> ${country || "Not provided"}</p>
      <p><b>Phone:</b> ${phone || "Not provided"}</p>
      <p><b>Message:</b></p>
      <p>${message}</p>
    `;

    const adminRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": API_KEY,
      },
      body: JSON.stringify({
        sender: { name: SENDER_NAME, email: SENDER_EMAIL },
        to: [{ email: ADMIN_EMAIL }],
        subject: "📩 New Contact Form Submission",
        htmlContent: adminHtml,
      }),
    });

    const adminResult = await adminRes.json();
    if (!adminRes.ok) {
      console.error("Brevo admin send error:", adminResult);
      return NextResponse.json(
        { success: false, error: "Failed to send admin email", details: adminResult },
        { status: 500 }
      );
    }

    // --- 4. Auto-response to User (optional) ---
    const userHtml = `
      <h3>Hello ${name},</h3>
      <p>Thank you for contacting us! We have received your message and will reply soon.</p>
      <hr />
      <p><b>Your message:</b></p>
      <blockquote>${message}</blockquote>
    `;

    await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": API_KEY,
      },
      body: JSON.stringify({
        sender: { name: SENDER_NAME, email: SENDER_EMAIL },
        to: [{ email }],
        subject: "✅ We’ve received your message",
        htmlContent: userHtml,
      }),
    });

    return NextResponse.json({ success: true, message: "Emails sent successfully" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error", details: error },
      { status: 500 }
    );
  }
}
