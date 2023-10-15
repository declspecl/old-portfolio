import clsx from "clsx"
import { inter } from "@/Fonts";

export default function Navi() {
	return (
		<div className={clsx(
			"hidden fixed top-0 z-30 w-full bg-background-900 bg-opacity-50 transition-[background-color]",
			"md:block",
			"hover:bg-opacity-90"
		)}>
			<div className={clsx(
				"mx-auto my-5 w-[90%] flex flex-row justify-center items-center text-text-50 text-base",
				"md:justify-between",
				"xl:mx-32 xl:w-auto",
				inter.className
			)}>
				<a
					href="#"
					className={clsx(
						"transition-[transform]",
						"hover:scale-105"
					)}
				>
					Gavin D&apos;Hondt
				</a>

				<div className={clsx(
					"hidden flex-row gap-8",
					"md:flex"
				)}>
					<a href="#" className="hover:underline">Home</a>
					<a href="#about" className="hover:underline">About</a>
					<a href="#projects" className="hover:underline">Projects</a>
					<a href="#skills" className="hover:underline">Skills</a>
					<a href="#contact" className="hover:underline">Contact</a>
					<a href="/resume.pdf" target="_blank" className="hover:underline">Resumé</a>
				</div>
			</div>
		</div>
	);
}
