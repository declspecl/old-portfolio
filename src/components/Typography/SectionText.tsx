import clsx from "clsx";
import { jbMono } from "@/Fonts";

interface SectionTextProps {
	className?: string
	children: React.ReactNode,
}

export default function SectionText({ className, children }: SectionTextProps) {
	return (
		<h1
			className={clsx(
				"inline-block bg-gradient-to-r from-secondary-300 to-accent-600 text-text-50 text-opacity-0 bg-clip-text text-center",
				"text-4xl",
				"lg:text-5xl",
				jbMono.className,
				className
			)}
		>
			{children}
		</h1>
	);
}
