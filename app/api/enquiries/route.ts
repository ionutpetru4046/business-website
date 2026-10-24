
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return NextResponse.json(
        { error: "Please provide your name, email, and message." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Coste.Dev Enquiries <onboarding@resend.dev>",
      to: ["costewebdev@gmail.com"],
      subject: `New website enquiry from ${name.trim()}`,
      replyTo: email.trim(),
      text: [
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        "",
        "Message:",
        message.trim(),
      ].join("\n"),
    });

    if (error) {
      console.error("Resend email error:", error);

      return NextResponse.json(
        { error: "Unable to send your enquiry right now." },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { message: "Enquiry sent successfully.", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Enquiry API error:", error);

    return NextResponse.json(
      { error: "Invalid request or email service unavailable." },
      { status: 400 }
    );
  }
}
