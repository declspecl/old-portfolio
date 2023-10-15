import clsx from "clsx";
import { inter } from "@/Fonts";
import ContactForm from "./ContactForm";
import Section from "@/components/Layout/Section";
import SectionText from "@/components/Typography/SectionText";
import { CircleIcon, GithubIcon, LinkedinIcon } from "lucide-react";

export default function Contact() {
	return (
		<Section className={clsx(
			"items-center text-lg",
			inter.className
		)}>
			<div className="flex flex-row justify-center">
				<SectionText id="contact">Contact Me</SectionText>
			</div>

			<div className="flex flex-col gap-6">
				<div className="flex flex-col gap-[6px]">
					<p className={clsx(
						"text-lg text-text-50 text-center",
						"xl:inline-block xl:w-3/4 xl:mx-auto"
					)}>
						Thanks for reaching out to me! Feel free to use this form to send me a message. Alternatively, <a href="mailto:gavind2559@gmail.com" className="underline">send me an email</a>.
					</p>

					<p className={clsx(
						"text-lg text-text-50 text-center",
						"xl:inline-block xl:w-3/4 xl:mx-auto"
					)}>
						Also, check me out on the following platforms:
					</p>
				</div>

				<div className="-mt-4 w-full flex flex-row flex-wrap justify-center items-center gap-4 text-text-50">
					<div className="flex flex-row items-center gap-[6px]">
						<img
							width={22.44}
							height={17}
							alt="Discord logo"
							src="/discord-logo.png"
							className="aspect-auto h-[1.25em] w-[1.65em]"
						/>

						<span>declspecl</span>
					</div>

					<CircleIcon
						className={clsx(
							"h-[0.35em] w-[0.35em] stroke-text-50 fill-text-50 hidden",
							"md:inline-block"
						)}
					/>

					<div className="flex flex-row items-center gap-[6px]">
						<GithubIcon
							className="h-[1.25em] w-[1.25em] bg-text-900 stroke-text-50 rounded-sm"
						/>

						<a href="https://github.com/declspecl" target="_blank">declspecl</a>
					</div>

					<CircleIcon
						className={clsx(
							"h-[0.35em] w-[0.35em] stroke-text-50 fill-text-50 hidden",
							"md:inline-block"
						)}
					/>

					<div className="flex flex-row items-center gap-[6px]">
						<LinkedinIcon
							className="h-[1.25em] w-[1.25em] bg-primary-600 rounded-sm p-0.5 stroke-1 stroke-text-50 fill-text-50"
						/>

						<a href="https://www.linkedin.com/in/gavindhondt/" target="_blank">gavindhondt</a>
					</div>
				</div>
			</div>

			<ContactForm />
		</Section>
	);
}
