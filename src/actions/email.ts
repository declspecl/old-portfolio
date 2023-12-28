"use server";

import { Resend } from "resend";
import EmailTemplate from "@/components/Contact/EmailTemplate";

export async function SendEmail(name: string | undefined, email: string, message: string) {
    const RESEND_API_KEY: string = process.env.RESEND_API_KEY;
    const TO_EMAILS: string[] = process.env.TO_EMAILS.split(" ");

    const resend = new Resend(RESEND_API_KEY);

    const response = await resend.emails.send({
        from: "Contact Form Response <responses@gavindhondt.com>",
        to: TO_EMAILS,
        subject: "Portfolio Contact Form Response",
        react: EmailTemplate({ name, email, message })
    });

    console.log(response);
}
