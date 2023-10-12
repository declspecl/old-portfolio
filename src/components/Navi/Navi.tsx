import clsx from "clsx"
import { inter } from "@/Fonts";

export default function Navi() {
	return (
		<div className={clsx(
			"fixed top-0 w-full bg-background-900 bg-opacity-25 transition-[background-color]",
			"hover:bg-opacity-100"
		)}>
			<div className={clsx("mx-32 py-5 flex flex-row justify-between text-text-50 text-base", inter.className)}>
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
