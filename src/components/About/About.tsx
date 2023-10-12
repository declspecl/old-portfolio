import clsx from "clsx";
import { inter, jbMono } from "@/Fonts";
import SectionText from "../Typography/SectionText";

export default function About() {
	return (
		<div className="flex flex-col gap-8">
			<div className="flex flex-row justify-center">
				<SectionText id="about" text="About" className="text-5xl text-center" />
			</div>

			<div className="flex flex-row gap-4">
				<div className="my-4 flex-1 flex flex-col gap-4">
					<div className={clsx("flex flex-col gap-2 text-text-50", jbMono.className)}>
						<h2 className="text-4xl">
							Hello!
						</h2>

						<h3 className="text-2xl">
							I&apos;m Gavin. I&apos;m a student and software engineer.
						</h3>
					</div>

					<div className={clsx("flex flex-col gap-2 text-lg text-text-50", inter.className)}>
						<p>
							I have been teaching myself programming for over 7 years, and it is by far my greatest passion. In high school, I went to an International Baccalaureate school, graduating as a valedictorian with a 4.2 GPA. Currently, I attend Oakland University as a Computer Science major.
						</p>

						<p>
							Outside of academics, I love playing video games, playing instruments, and, generally, learning. To me, learning is always exciting and enriching, no matter the topic. I strive to learn from every aspect of my life, and this philosophy has largely shaped me into the person I am today.
						</p>
					</div>
				</div>

				<div className="flex-1 mb-96">
					<div className="w-full h-[600px] bg-text-50" />
				</div>
			</div>
		</div>
	);
}
