import clsx from "clsx";
import { inter, jbMono } from "@/Fonts";

interface SectionTextProps {
	id: string,
	className?: string
	children: React.ReactNode,
}

export default function SectionText({ id, className, children }: SectionTextProps) {
	return (
		<h1
			id={id}
			className={clsx(
				"inline-block bg-gradient-to-r from-secondary-300 to-accent-600 text-text-50 text-opacity-0 bg-clip-text text-center",
				"lg:text-5xl",
				"text-4xl",
				inter.className,
				// jbMono.className,
				className
			)}
		>
			{children}
		</h1>
	);
}
