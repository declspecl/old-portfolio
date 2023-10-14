import { Resend } from "resend";
import { NextResponse } from "next/server";
import EmailTemplate from "@/components/Contact/EmailTemplate";

const RESEND_API_KEY: string = process.env.RESEND_API_KEY;
const API_AUTH_USERNAME: string = process.env.API_AUTH_USERNAME;
const API_AUTH_PASSWORD: string = process.env.API_AUTH_PASSWORD;
const TO_EMAILS: string = process.env.TO_EMAILS.split(" ");

const resend = new Resend(RESEND_API_KEY);

export async function POST(request: Request) {
	const { name, email, message, apiAuthUsername, apiAuthPassword } = await request.json();

	if (apiAuthUsername === API_AUTH_USERNAME || apiAuthPassword === API_AUTH_PASSWORD) {
		try {
			await resend.emails.send({
				from: "Contact Form Response <responses@gavindhondt.com>",
				to: TO_EMAILS,
				subject: "Website Contact Form Response",
				react: EmailTemplate({ name, email, message })
			});

			return NextResponse.json({
				status: "Ok"
			}, {
				status: 200
			})
		}
		catch (error) {
			return NextResponse.json({ error });
		}
	}
	else {
		return NextResponse.json(new Error("Access denied to API with credentials provided."));
	}
}
