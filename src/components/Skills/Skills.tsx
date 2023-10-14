import clsx from "clsx";
import { inter } from "@/Fonts";
import SkillGroup from "./SkillGroup";
import SectionText from "../Typography/SectionText";

export default function Skills() {
	return (
		<section id="skills" className="flex flex-col gap-6">
			<div className="flex flex-row justify-center items-center">
				<SectionText>Skills</SectionText>
			</div>

			<div className="flex flex-col gap-12">
				<p className={clsx(
					"text-lg text-text-50 text-center",
					"xl:w-3/4 xl:mx-auto",
					inter.className
				)}>
					My true passion is working with low level languages, and I spend most of time working in Rust or C++. Though, I also enjoy web development, so I have gathered a wide range of skills from various branches of computer science.
				</p>

				<ul className={clsx(
					"flex flex-col gap-12",
					"sm:grid sm:grid-cols-2 sm:gap-y-16 sm:gap-x-24"
				)}>
					<SkillGroup
						title="Frontend"
						skills={["React", "Typescript", "TailwindCSS", "framer-motion", "react-spring"]}
						className="col-start-1 col-span-1"
					/>

					<SkillGroup
						title="Backend"
						skills={["Next.js", "PostgreSQL", "Axum", "AWS"]}
						className="col-start-2 col-span-1"
					/>

					<SkillGroup
						title="Systems Programming"
						skills={["Rust", "C/C++", "x86-64 ASM", "Linux"]}
						className="col-start-1 col-span-1"
					/>

					<SkillGroup
						title="Misc"
						skills={["Git", "IDA", "Cheat Engine", "Python", "Java"]}
						className="col-start-2 col-span-1"
					/>
				</ul>
			</div>
		</section>
	);
}
