import clsx from "clsx";
import React from "react";
import { jbMono } from "@/Fonts";
import ProjectContent from "./ProjectContent";
import { ChevronDownIcon } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";

interface ProjectProps {
	projectName: string,
	imagePath: string,
	description: string,
	technologies: string[],
	repoLink?: string,
	siteLink?: string,
	rtl?: boolean
}

export default function Project({ projectName, imagePath, description, technologies, repoLink, siteLink, rtl }: ProjectProps) {
	const projectNameValue = projectName.toLowerCase().replace(" ", "-");

	return (
		<Accordion.Item value={projectNameValue} className="w-full group">
			<Accordion.Trigger className={clsx(
				"w-full flex flex-row justify-between items-center text-2xl",
				"sm:text-4xl"
			)}>
				<h2
					className={clsx(
						"text-background-800 transition-[color] text-left",
						"group-hover:text-background-700",
						"group-data-state-open:text-text-50",
						jbMono.className
					)}
				>
					{projectName}
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
