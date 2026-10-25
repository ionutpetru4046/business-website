
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { rateLimit } from "@/app/lib/rate-limit";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // 1. Identify the client IP address
    const ip =
      request.headers.get("x-real-ip") ??
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();

    if (!ip) {
      return NextResponse.json(
        { error: "Unable to verify request source." },
        { status: 400 }
      );
    }

    // 2. Apply rate limiting
    const { success, reset } = await rateLimit.limit(ip);

    if (!success) {
      const retryAfter = Math.max(
        1,
        Math.ceil((reset - Date.now()) / 1000)
      );

      return NextResponse.json(
        { error: "Too many enquiries. Please try again later." },
        {
          status: 429,
          headers: {
            "Retry-After": String(retryAfter),
          },
        }
      );
    }

    // 3. Parse the request body
    let body: unknown;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON request body." },
        { status: 400 }
      );
    }

    if (typeof body !== "object" || body === null) {
      return NextResponse.json(
        { error: "Please provide valid enquiry details." },
        { status: 400 }
      );
    }

    const { name, email, message } = body as Record<string, unknown>;

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json(
        { error: "Please provide valid enquiry details." },
        { status: 400 }
      );
    }

    // 4. Normalize and validate input
    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!cleanName || cleanName.length > 100) {
      return NextResponse.json(
        { error: "Name is required and must be 100 characters or fewer." },
        { status: 400 }
      );
    }

    if (
      !emailPattern.test(cleanEmail) ||
      cleanEmail.length > 254
    ) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!cleanMessage || cleanMessage.length > 5000) {
      return NextResponse.json(
        { error: "Your message must be between 1 and 5000 characters." },
        { status: 400 }
      );
    }

    // 5. Send the enquiry email
    const { data, error } = await resend.emails.send({
      from: "Coste.Dev Enquiries <onboarding@resend.dev>",
      to: ["costewebdev@gmail.com"],
      subject: `New website enquiry from ${cleanName}`,
      replyTo: cleanEmail,
      text: [
        `Name: ${cleanName}`,
        `Email: ${cleanEmail}`,
        "",
        "Message:",
        cleanMessage,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend email error:", error);

      return NextResponse.json(
        { error: "Unable to send your enquiry right now." },
        { status: 502 }
      );
    }

    // 6. Return success
    return NextResponse.json(
      { message: "Enquiry sent successfully.", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Enquiry API error:", error);

    return NextResponse.json(
      { error: "An unexpected server error occurred." },
      { status: 500 }
    );
  }
}
