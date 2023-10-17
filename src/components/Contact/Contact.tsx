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
			<SectionText id="contact">Contact Me</SectionText>

			<div className="flex flex-col gap-2">
				<div className={clsx(
                    "flex flex-col gap-0.5 text-lg text-text-50 text-center",
                    "xl:w-10/12 xl:mx-auto"
                )}>
					<p>
						Thanks for reaching out! Feel free to use this form to message me. Alternatively, <a href="mailto:gavind2559@gmail.com" className="underline">send me an email</a>.
					</p>

					<p>
						Also, check me out on the following platforms:
					</p>
				</div>

				<div className="w-full flex flex-row justify-center items-center gap-4 flex-wrap text-text-50">
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
