import { Resend } from "resend";
import { NextResponse } from "next/server";
import EmailTemplate from "@/components/Contact/EmailTemplate";

const RESEND_API_KEY: string = process.env.RESEND_API_KEY;
const TO_EMAILS: string[] = process.env.TO_EMAILS.split(" ");

const resend = new Resend(RESEND_API_KEY);

export async function POST(request: Request) {
    const { name, email, message } = await request.json();

    try {
        const response = await resend.emails.send({
            from: "Contact Form Response <responses@gavindhondt.com>",
            to: TO_EMAILS,
            subject: "Portfolio Contact Form Response",
            react: EmailTemplate({ name, email, message })
        });

        return NextResponse.json({ response });
    }
    catch (error) {
        return NextResponse.json({ error });
    }
}
