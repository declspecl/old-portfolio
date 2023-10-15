import clsx from "clsx";
import { inter, jbMono } from "@/Fonts";
import Section from "@/components/Layout/Section";
import SectionText from "@/components/Typography/SectionText";

export default function About() {
	return (
		<Section>
			<div className="flex flex-row justify-center">
				<SectionText id="about">About</SectionText>
			</div>

			<div className={clsx(
				"gap-4",
				"flex flex-col-reverse",
				"md:grid md:grid-cols-2",
			)}>
				{/* information column */}
				<div className={clsx(
					"col-start-1 col-span-1 w-full flex flex-col gap-4"
				)}>
					<div className={clsx(
						"flex flex-col gap-2 text-text-50",
						jbMono.className
					)}>
						<h2 className={clsx(
							"text-primary-200 text-2xl",
							"md:text-3xl",
							"lg:text-4xl"
						)}>
							Hello!
						</h2>

						<h3 className={clsx(
							"text-xl",
							"lg:text-2xl"
						)}>
							I&apos;m Gavin. I&apos;m a student and software engineer.
						</h3>
					</div>

					<div className={clsx(
						"flex flex-col gap-3 text-text-50",
						"text-base",
						"lg:text-lg",
						"xl:text-xl",
						inter.className
					)}>
						<p>
							I have been programming for over 6 years, and it is by far my greatest passion.
						</p>

						<p>
							I went to an International Baccalaureate high school, graduating as a valedictorian with a 4.2 GPA.
							During this time, I took HL IB Computer Science, receiving a 7 on my IA and a 5 on the exam.
							Currently, I attend Oakland University as a Computer Science major.
						</p>

						<p>
							Outside of academics, I love playing video games, playing instruments, and, generally, learning.
							I love learning about people, languages, and various other topics.
						</p>
					</div>
				</div>

				{/* picture column */}
				<img
					width={446}
					height={563}
					src="/senior-pic.jpg"
					alt="My senior picture"
					className={clsx(
						"col-start-2 col-span-1"
					)}
				/>
			</div>
		</Section>
	);
}
