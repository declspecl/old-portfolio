"use client";

import clsx from "clsx";
import { useRef } from "react";
import { inter, jbMono } from "@/Fonts";
import { useInView } from "framer-motion";

interface SkillGroupProps {
	title: string,
	skills: string[],
	className?: string
}

export default function SkillGroup({ title, skills, className }: SkillGroupProps) {
    const ref = useRef<HTMLDivElement>(null!);
    const isInView = useInView(ref, { once: true });

	return (
		<div
            ref={ref}
            style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(75px)"
            }}
            className={clsx(
                "flex flex-col items-center gap-4 opacity-0 translate-y-[75px] transition-all duration-300",
                className
            )}
        >
			<h2 className={clsx(
				"inline-block bg-gradient-to-r from-primary-200 to-accent-400 text-text-50 font-semibold text-opacity-0 bg-clip-text",
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
