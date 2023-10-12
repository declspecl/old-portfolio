import clsx from "clsx";

interface SectionTextProps {
	text: string,
	id: string,
	className?: string
}

export default function SectionText({ text, id, className }: SectionTextProps) {
	return (
		<h1
			id={id}
			className={clsx(
				"inline-block bg-gradient-to-r from-secondary-300 to-accent-600 text-text-50 text-opacity-0 bg-clip-text",
				className
			)}
		>
			{text}
		</h1>
	);
}
