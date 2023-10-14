import clsx from "clsx";
import { inter, jbMono } from "@/Fonts";
import SectionText from "../Typography/SectionText";

export default function About() {
	return (
		<section className="flex flex-col gap-8">
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
							"text-2xl",
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
							I have been teaching myself programming for over 7 years, and it is by far my greatest passion.
						</p>

						<p>
							In high school, I went to an International Baccalaureate school, graduating as a valedictorian with a 4.2 GPA.
							Currently, I attend Oakland University as a Computer Science major.
						</p>

						<p>
							Outside of academics, I love playing video games, playing instruments, and, generally, learning.
							To me, learning is always exciting and enriching, no matter the topic.
							I strive to learn from every aspect of my life, and this philosophy has largely shaped me into the person I am today.
						</p>
					</div>
				</div>

				{/* picture column */}
				<img
					src="/senior-pic.jpg"
					alt="my senior picture"
					className={clsx(
						"col-start-2 col-span-1"
					)}
				/>
			</div>
		</section>
	);
}
