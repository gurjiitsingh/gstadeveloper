import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { token, ...form } = body;

  const secretKey = process.env.RECAPTCHA_SECRET_KEY!;
  const res = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
    { method: "POST" }
  );
  const data = await res.json();

  if (!data.success) {
    return NextResponse.json({ success: false, error: "Invalid captcha" });
  }

  // ✅ captcha passed → continue saving/sending
  return NextResponse.json({ success: true });
}
