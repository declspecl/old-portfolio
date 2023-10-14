"use client";

import clsx from "clsx";
import { inter } from "@/Fonts";
import * as Form from "@radix-ui/react-form";
import SectionText from "../Typography/SectionText";
import { InstagramIcon } from "lucide-react";

export default function Contact() {
	return (
		<section id="contact" className={clsx(
			"flex flex-col items-center gap-8 text-lg",
			inter.className
		)}>
			<div className="flex flex-row justify-center">
				<SectionText>Contact Me</SectionText>
			</div>

			<p className={clsx(
				"inline-block text-lg text-text-50 text-center flex flex-col items-center",
				"xl:w-3/4 xl:mx-auto"
			)}>
				Thanks for contacting me! Feel free to use this form to send me a message. Alternatively, you can reach me on any of the following social media accounts:

			</p>

				<div className="-mt-4 w-full flex flex-row justify-center gap-20 text-text-50">
					<div className="flex flex-row gap-1"><InstagramIcon /><span>yoyoman23292282827</span></div>
					<div className="flex flex-row gap-1"><InstagramIcon /><span>declspecl</span></div>
					<div className="flex flex-row gap-1"><InstagramIcon /><span>gavindhondt</span></div>
				</div>
				
			<Form.Root
				onSubmit={(e) => e.preventDefault()}
				className="w-full flex flex-col items-center gap-4"
			>
				<Form.Field className="w-full" name="name">
					<div className="flex flex-col gap-1">
						<Form.Label className="text-text-50">Name</Form.Label>

						<Form.Control className={clsx(
							"px-2.5 py-1.5 text-background-900 bg-background-50 rounded-md border-2 border-background-50",
							"focus:border-primary-500 focus:!outline-none"
						)}/>
					</div>
				</Form.Field>

				<Form.Field name="email" className="w-full">
					<div className="flex flex-col gap-1">
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
							className={clsx(
								"px-2.5 py-1.5 text-background-900 bg-background-50 rounded-md border-2 border-background-50",
								"focus:border-primary-500 focus:!outline-none"
							)}
							required
						/>
					</div>

				</Form.Field>

				<Form.Field className="w-full" name="message">
					<div className="flex flex-col gap-1">
						<div className="flex flex-row justify-between">
							<Form.Label className="text-text-50">Message *</Form.Label>

							<Form.Message match="valueMissing" className="text-secondary-300">
								Please enter a message
							</Form.Message>
						</div>

						<Form.Control asChild>
							<textarea
								required
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
