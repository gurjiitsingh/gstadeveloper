// src/lib/sendContactEmail.ts

type ContactFormDataType = {
  name: string;
  email: string;
  country: string;
  phone?: string;
  message: string;
};

export async function sendContactFormEmail(data: ContactFormDataType) {
  try {
    const Mailgun = (await import("mailgun.js")).default;
    const formData = (await import("form-data")).default;

    const DOMAIN = process.env.MAILGUN_DOMAIN!;
    const API_KEY = process.env.MAILGUN_API_KEY!;
    const FROM = process.env.MAILGUN_FROM_EMAIL!;
    const TO_ADMIN = process.env.ADMIN_CONTACT_EMAIL!; // 👈 separate env var for contact

    const mg = new Mailgun(formData);
    const client = mg.client({
      username: "api",
      key: API_KEY,
      url: "https://api.eu.mailgun.net",
    });

    // Email body for admin
    const htmlAdmin = `
      <h3>New Contact Form Submission:</h3>
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Country:</b> ${data.country}</p>
      <p><b>Phone:</b> ${data.phone || "Not provided"}</p>
      <p><b>Message:</b></p>
      <p>${data.message}</p>
    `;

    // Send to admin
    const adminResponse = await client.messages.create(DOMAIN, {
      from: FROM,
      to: TO_ADMIN,
      subject: "📩 New Contact Form Submission",
      html: htmlAdmin,
    });

    if (!adminResponse?.id) {
      return { success: false, message: "Failed to send contact form to admin" };
    }

    // Auto-response to user
    try {
      const htmlUser = `
        <h3>Thank you for contacting us, ${data.name}!</h3>
        <p>We have received your message and will get back to you shortly.</p>
        <hr />
        <p><b>Your message:</b></p>
        <blockquote>${data.message}</blockquote>
      `;

      await client.messages.create(DOMAIN, {
        from: FROM,
        to: data.email,
        subject: "✅ We’ve received your message",
        html: htmlUser,
      });
    } catch (err) {
      console.warn("Customer auto-reply failed but admin email was sent.", err);
    }

    return { success: true };
  } catch (error) {
    console.error("Error sending contact form email:", error);
    return { success: false, message: "Internal error while sending contact form" };
  }
}
 