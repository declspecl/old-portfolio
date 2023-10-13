import clsx from "clsx"
import { inter } from "@/Fonts";

export default function Navi() {
	return (
		<div className={clsx(
			"fixed top-0 z-30 w-full bg-background-900 bg-opacity-10 transition-[background-color]",
			"hover:bg-opacity-75"
		)}>
			<div className={clsx(
				"my-5 flex flex-row justify-between text-text-50 text-base",
				"mx-auto w-[90%]",
				"xl:mx-32 xl:w-auto",
				inter.className
			)}>
				<a href="#">
					<span>Gavin D&apos;Hondt</span>
				</a>

				<div className="flex flex-row gap-8">
					<a href="#">Home</a>
					<a href="/resume.pdf">Resumé</a>
					<a href="#about">About</a>
					<a href="#projects">Projects</a>
					<a href="#skills">Skills</a>
					<a href="#contact">Contact</a>
				</div>
			</div>
		</div>
	);
}
