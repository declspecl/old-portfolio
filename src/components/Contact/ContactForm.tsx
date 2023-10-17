"use client";

import clsx from "clsx";
import { useRef, useState } from "react";
import * as Form from "@radix-ui/react-form";
import { Loader2Icon } from "lucide-react";

enum EmailStatus {
	NotSent,
	Sending,
	Error,
	Sent
}

export default function ContactForm() {
	const [emailStatus, setEmailStatus] = useState(EmailStatus.NotSent);

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

		setEmailStatus(EmailStatus.Sending);

		setTimeout(async () => {
			// const res = await fetch("/api/email", {
			// 	method: "POST",
			// 	headers: {
			// 		"Content-Type": "application/json"
			// 	},
			// 	body: JSON.stringify({ name, email, message, apiAuthUsername, apiAuthPassword, toEmails })
			// });

			// if (res.status === 200) {
			// 	setEmailStatus(EmailStatus.Sent);

			// 	nameRef.current.value = "";
			// 	emailRef.current.value = "";
			// 	messageRef.current.value = "";
			// }
			// else {
			// 	setEmailStatus(EmailStatus.Error);
			// }

			// return res;
			
			if (true) {
				setEmailStatus(EmailStatus.Sent);

				nameRef.current.value = "";
				emailRef.current.value = "";
				messageRef.current.value = "";
			}
			else {
				setEmailStatus(EmailStatus.Error);
			}
		}, 1500);
	}

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		await sendEmail();
	}

	return (
		<Form.Root
			onSubmit={handleSubmit}
			className="w-full flex flex-col items-center gap-4 text-base"
		>
			<Form.Field className="w-full" name="name">
				<div className="flex flex-col">
					<Form.Label className="text-text-50">Name</Form.Label>

					<Form.Control
						ref={nameRef}
						disabled={emailStatus === EmailStatus.Sending}
						className={clsx(
							"px-2 py-1 text-background-950 bg-background-50 rounded-md border-2 border-background-50",
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
						disabled={emailStatus === EmailStatus.Sending}
						className={clsx(
							"px-2.5 py-1 text-background-950 bg-background-50 rounded-md border-2 border-background-50",
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
							disabled={emailStatus === EmailStatus.Sending}
							className={clsx(
								"px-3 py-1 min-h-[6em] text-background-950 bg-background-50 rounded-md border-2 border-background-50 resize-y",
								"focus:border-primary-500 focus:!outline-none"
							)}
						/>
					</Form.Control>
				</div>
			</Form.Field>

			{emailStatus === EmailStatus.Sent && (
				<p className="text-text-50">
					Message sent successfully! Thanks for reaching out, I&apos;ll get back to you as soon as I can.
				</p>
			)}

			{emailStatus === EmailStatus.Error && (
				<p className="text-text-50">
					The message failed to send. Please try again.
				</p>
			)}

			<Form.Submit className="px-2 py-1 w-24 h-10 flex flex-row justify-center items-center text-background-950 font-medium bg-secondary-300 text-xl text-center rounded-md">
				<Loader2Icon
					className={clsx(
						"h-[1.5rem] w-[1.5rem] stroke-background-900 animate-spin",
						{ "hidden" : emailStatus !== EmailStatus.Sending },
						{ "inline-block" : emailStatus !== EmailStatus.Sending }
					)}
				/>

				<span className={clsx(
					{ "inline" : emailStatus !== EmailStatus.Sending },
					{ "hidden": emailStatus === EmailStatus.Sending }
				)}>Send</span>
			</Form.Submit>
		</Form.Root>
	);
}
