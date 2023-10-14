import clsx from "clsx";
import React from "react";
import { jbMono } from "@/Fonts";
import ProjectContent from "./ProjectContent";
import { ChevronDownIcon } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";

interface ProjectProps {
	name: string,
	imagePath: string,
	description: string,
	technologies: string[],
	repoLink?: string,
	siteLink?: string,
	rtl?: boolean
}

export default function Project({ name, imagePath, description, technologies, repoLink, siteLink, rtl }: ProjectProps) {
	const nameValue = name.toLowerCase().replace(" ", "-");

	return (
		<Accordion.Item value={nameValue} className="w-full group">
			<Accordion.Trigger className={clsx(
				"w-full flex flex-row justify-between items-center text-2xl",
				"sm:text-4xl"
			)}>
				<h2
					className={clsx(
						"text-background-700 transition-[color] text-left",
						"group-hover:text-background-600",
						"group-data-state-open:text-text-50",
						jbMono.className
					)}
				>
					{name}
				</h2>

				<ChevronDownIcon
					strokeWidth={1.25}
					className={clsx(
						"w-[1em] h-[1em] text-text-50 transition-[transform]",
						"group-data-state-open:-rotate-180"
					)}
				/>
			</Accordion.Trigger>

			<Accordion.Content className="my-4">
				<ProjectContent
					name={name}
					imagePath={imagePath}
					description={description}
					technologies={technologies}
					repoLink={repoLink}
					siteLink={siteLink}
					rtl
				/>
			</Accordion.Content>
		</Accordion.Item>
	);
}
