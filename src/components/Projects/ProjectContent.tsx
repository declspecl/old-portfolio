import clsx from "clsx";
import { inter } from "@/Fonts";
import { ArrowUpRightIcon } from "lucide-react";
import { motion, Variants } from "framer-motion";

interface ProjectContentProps {
	name: string,
	imagePath: string,
	description: string,
	technologies: string[],
	repoLink?: string,
	siteLink?: string
}

export default function ProjectContent({ name, imagePath, description, technologies, repoLink, siteLink }: ProjectContentProps) {
	const variants: Variants = {
		initial: {
			height: 0,
			marginTop: 0,
			opacity: 0
		},
		animate: {
			height: "auto",
			marginTop: "12px",
			opacity: 1
		},
		exit: {
			height: 0,
			marginTop: 0,
			opacity: 0
		}
	};

	return (
		<motion.div
			variants={variants}
			initial="initial"
			animate="animate"
			exit="exit"
			className={clsx(
				"flex flex-col gap-4 overflow-hidden",
				"lg:grid lg:grid-cols-2",
				inter.className
			)}
		>
			<img
				width={540}
				height={304}
				src={imagePath}
				alt={`Image of my project ${name}`}
				className={clsx(
					"w-auto",
					"lg:w-full"
				)}
			/>

			<div className={clsx("flex flex-col gap-4")}>
				<div className="flex flex-col text-text-50">
					<p className="text-lg">
						{description}
					</p>
				</div>

				<div className={clsx("flex flex-col gap-2 text-text-50")}>
					<p className="text-lg">Technologies used:</p>

					<div className="flex flex-row flex-wrap gap-2.5">
						{technologies.map((technology, index) => (
							<div
								key={`technology-${index + 1}`}
								className={clsx(
									"px-2.5 py-1 rounded-full text-base text-background-950 bg-secondary-300"
								)}
							>
								{technology}
							</div>
						))}
					</div>
				</div>

				<div className="flex flex-col gap-1">
					{repoLink && (
						<a
							href={repoLink}
							target="_blank"
							className={clsx(
								"flex flex-row items-center text-lg text-text-50 underline",
							)}
						>
							<span>View Repository</span>
							<ArrowUpRightIcon className="w-[1em] h-[1em]" />
						</a>
					)}

					{siteLink && (
						<a
							href={siteLink}
							target="_blank"
							className={clsx(
								"flex flex-row items-center text-text-50 underline"
							)}
						>
							<span>View Website</span>
							<ArrowUpRightIcon className="w-[1em] h-[1em]" />
						</a>
					)}
				</div>
			</div>
		</motion.div>
	);
}
