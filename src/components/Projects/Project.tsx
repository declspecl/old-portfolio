import clsx from "clsx";
import React from "react";
import { jbMono } from "@/Fonts";
import ProjectContent from "./ProjectContent";
import { ChevronDownIcon } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";

interface ProjectProps {
	name: string,
	imagePath: string,
	description: string,
	technologies: string[],
	repoLink?: string,
	siteLink?: string,
	animationDelay?: number
}

export default function Project({ name, imagePath, description, technologies, repoLink, siteLink, animationDelay = 0 }: ProjectProps) {
	const [isExpanded, setIsExpanded] = React.useState(false);

	const nameValue = name.toLowerCase().replace(" ", "-");

	return (
		<Accordion.Item value={nameValue} className="w-full group">
			<Accordion.Trigger
				onClick={() => setIsExpanded(!isExpanded)}
				className={clsx(
					"w-full flex flex-row justify-between items-center text-2xl",
					"sm:text-4xl"
				)}
			>
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
					strokeWidth={1.5}
					className={clsx(
						"w-[1em] h-[1em] text-text-50 transition-[transform] animate-pulse",
						"group-data-state-open:-rotate-180 group-data-state-open:animate-none"
					)}
					style={{ animationDelay: animationDelay.toString() + "ms", animationDuration: "2.5s" }}
				/>
			</Accordion.Trigger>

			<AnimatePresence>
				{isExpanded && (
					<Accordion.Content forceMount>
						<ProjectContent
							name={name}
							imagePath={imagePath}
							description={description}
							technologies={technologies}
							repoLink={repoLink}
							siteLink={siteLink}
						/>
					</Accordion.Content>
				)}
			</AnimatePresence>
		</Accordion.Item>
	);
}
