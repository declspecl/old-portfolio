"use client";

import clsx from "clsx";
import { useRef } from "react";
import { inter } from "@/Fonts";
import * as Form from "@radix-ui/react-form";
import { MailIcon } from "lucide-react";
import SectionText from "../Typography/SectionText";

export default function Contact() {
	const nameRef = useRef<HTMLInputElement>(null!);
	const emailRef = useRef<HTMLInputElement>(null!);
	const messageRef = useRef<HTMLTextAreaElement>(null!);

	async function sendEmail() {
		const name = nameRef.current.value;
		const email = emailRef.current.value;
		const message = messageRef.current.value;

		const apiAuthUsername = process.env.API_AUTH_USERNAME;
		const apiAuthPassword = process.env.API_AUTH_PASSWORD;
		const toEmails = process.env.TO_EMAILS;

		const res = await fetch("/api/email", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ name, email, message, apiAuthUsername, apiAuthPassword, toEmails })
		});

		if (res.status !== 200) {
			console.error("Failed to send email");

			nameRef.current.value = "";
			emailRef.current.value = "";
			messageRef.current.value = "";
		}
		else {
			console.log("Email sent!");
		}

		return res;
	}

	async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
		sendEmail()

	}

	return (
		<section id="contact" className={clsx(
			"flex flex-col items-center gap-6 text-lg",
			inter.className
		)}>
			<div className="flex flex-row justify-center">
				<SectionText>Contact Me</SectionText>
			</div>

			<div className="flex flex-col gap-6">
				<p className={clsx(
					"inline-block text-lg text-text-50 text-center items-center",
					"xl:w-3/4 xl:mx-auto"
				)}>
					Thanks for contacting me! Feel free to use this form to send me a message. Alternatively, you can reach me on any of the following social media accounts:
				</p>

				<div className="-mt-4 w-full flex flex-col items-center text-text-50">
					<div className="flex flex-row items-center gap-1">
						<img
							src="/discord-logo.png"
							className="h-[1em] aspect-auto"
						/>
						<span>declspecl</span>
					</div>
					<div className="flex flex-row items-center gap-1">
						<MailIcon className="h-[1em] w-[1em] stroke-secondary-300" />
						<a href="mailto:gavindhondt0@gmail.com">gavindhondt0@gmail.com</a>
					</div>
				</div>
			</div>
				
			<Form.Root
				onSubmit={() => sendEmail()}
				className="w-full flex flex-col items-center gap-4"
			>
				<Form.Field className="w-full" name="name">
					<div className="flex flex-col">
						<Form.Label className="text-text-50">Name</Form.Label>

						<Form.Control
							ref={nameRef}
							className={clsx(
								"px-2.5 py-1.5 text-background-900 bg-background-50 rounded-md border-2 border-background-50",
								"focus:border-primary-500 focus:!outline-none"
							)}
						/>
					</div>
				</Form.Field>

				<Form.Field name="email" className="w-full">
					<div className="flex flex-col">
						<div className="flex flex-row justify-between text-text-50">
							<Form.Label>Email *</Form.Label>

							<Form.Message match="valueMissing" className="text-secondary-300">
								Please enter an email
							</Form.Message>

							<Form.Message match="typeMismatch" className="text-secondary-300">
								Please enter a valid email
							</Form.Message>
						</div>

						<Form.Control
							type="email"
							ref={emailRef}
							className={clsx(
								"px-2.5 py-1.5 text-background-900 bg-background-50 rounded-md border-2 border-background-50",
								"focus:border-primary-500 focus:!outline-none"
							)}
							required
						/>
					</div>

				</Form.Field>

				<Form.Field className="w-full" name="message">
					<div className="flex flex-col">
						<div className="flex flex-row justify-between">
							<Form.Label className="text-text-50">Message *</Form.Label>

							<Form.Message match="valueMissing" className="text-secondary-300">
								Please enter a message
							</Form.Message>
						</div>

						<Form.Control asChild>
							<textarea
								required
								ref={messageRef}
								className={clsx(
									"px-3 py-1.5 min-h-[6em] text-background-900 bg-background-50 rounded-md border-2 border-background-50",
									"focus:border-primary-500 focus:!outline-none"
								)}
							/>
						</Form.Control>
					</div>
				</Form.Field>

				<Form.Submit className="px-5 py-1.5 text-background-900 bg-secondary-300 text-xl text-center rounded-md resize-y">
					Send
				</Form.Submit>
			</Form.Root>
		</section>
	);
}
