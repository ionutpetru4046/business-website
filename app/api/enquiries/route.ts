
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
            typeof message !== "string"
        ) {
            return NextResponse.json(
                { error: "Please provide valid enquiry details." },
                { status: 400 }
            );
        }

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

        if (!emailPattern.test(cleanEmail) || cleanEmail.length > 254) {
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
