import clsx from "clsx"
import { inter } from "@/Fonts";

export default function Navi() {
	return (
		<div className={clsx(
			"fixed top-0 z-30 w-full bg-background-900 bg-opacity-10 transition-[background-color]",
			"hover:bg-opacity-75"
		)}>
			<div className={clsx(
				"mx-auto my-5 w-[90%] flex flex-row justify-center items-center text-text-50 text-base",
				"md:justify-between",
				"xl:mx-32 xl:w-auto",
				inter.className
			)}>
				<a href="#">
					<span>Gavin D&apos;Hondt</span>
				</a>

				<div className={clsx(
					"hidden flex-row gap-8",
					"md:flex"
				)}>
					<a href="#">Home</a>
					<a href="#about">About</a>
					<a href="#projects">Projects</a>
					<a href="#skills">Skills</a>
					<a href="#contact">Contact</a>
					<a href="/resume.pdf" target="_blank">Resumé</a>
				</div>
			</div>
		</div>
	);
}
