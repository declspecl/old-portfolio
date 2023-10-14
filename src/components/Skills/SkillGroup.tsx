import clsx from "clsx";
import { inter, jbMono } from "@/Fonts";

interface SkillGroupProps {
	title: string,
	skills: string[],
	className?: string
}

export default function SkillGroup({ title, skills, className }: SkillGroupProps) {
	return (
		<div className={clsx("flex flex-col items-center gap-3", className)}>
			<h2 className={clsx(
				"inline-block bg-gradient-to-r from-primary-200 to-accent-500 text-text-50 text-opacity-0 bg-clip-text",
				"text-3xl text-center",
				jbMono.className
			)}>
				{title}
			</h2>
			
			<ul className="flex flex-col items-center gap-2">
				{skills.map(skill => (
					<li
						key={skill.toLowerCase()}
						className={clsx(
							"text-lg text-text-50",
							inter.className
						)}
					>
						{skill}
					</li>
				))}
			</ul>
		</div>
	);
}
