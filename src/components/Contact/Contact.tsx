"use client";

import clsx from "clsx";
import { inter } from "@/Fonts";
import { CircleIcon, MailIcon } from "lucide-react";
import SectionText from "@/components/Typography/SectionText";

export default function Contact() {
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
					"text-lg text-text-50 text-center",
					"xl:inline-block xl:w-3/4 xl:mx-auto"
				)}>
					Thanks for contacting me! Feel free to use this form to send me a message. Alternatively, you can reach me using any of the following:
				</p>

				<div className="-mt-4 w-full flex flex-row flex-wrap justify-center items-center gap-4 text-text-50">
					<div className="flex flex-row items-center gap-1">
						<img
							width={22}
							height={16}
							alt="Discord logo"
							src="/discord-logo.png"
							className="h-[1em] aspect-auto"
						/>

						<span>declspecl</span>
					</div>

					<CircleIcon
						className={clsx(
							"h-[0.35em] w-[0.35em] stroke-text-50 fill-text-50 hidden",
							"md:inline-block"
						)}
					/>

					<div className="flex flex-row items-center gap-1">
						<MailIcon
							width={16}
							height={16}
							className="h-[1em] w-[1em] stroke-secondary-300"
						/>

						<a href="mailto:gavind2559@gmail.com">gavind2559@gmail.com</a>
					</div>
				</div>
			</div>
				
		</section>
	);
}
