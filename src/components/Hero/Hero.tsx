import clsx from "clsx";

import { inter, jbMono } from "@/Fonts";
import Image from "next/image";

export default function Hero() {
	return (
		<div className="w-full h-screen">
			<div className="w-auto h-full flex flex-col justify-center items-center gap-6">
				<Image
					width={112}
					height={112}
					src="/devour-square.png"
					alt="my profile picture"
					className={clsx(
						"w-28 aspect-square rounded-full bg-text-100",
						"sm:w-36"
					)}
				/>

				<div className={clsx(
					"flex flex-col gap-2 text-text-50 text-center",
					"xl:w-3/4"
				)}>
					<p className={clsx(
						"text-2xl",
						"lg:text-4xl",
						jbMono.className
					)}>
						Hi! I&apos;m Gavin D&apos;Hondt.
					</p>

					<p className={clsx(
						"text-base",
						"lg:text-lg",
						inter.className
					)}>
						I&apos;m a software engineer studying Computer Science at Oakland University. I&apos;m actively seeking internship opportunities and freelance web development jobs.
					</p>
				</div>

				<div className={clsx(
					"flex flex-row justify-center items-center gap-8",
					inter.className
				)}>
					<div className="basis-0 grow px-3 py-2 bg-secondary-300 rounded-md">
						<a
							href="#about"
							className="inline-block min-w-[10ex] text-black text-center"
						>
							Learn more
						</a>
					</div>

					<div className="basis-0 grow relative right-3">
						<a
							href="/resume.pdf"
							className="mx-3 my-2 inline-block min-w-[10ex] text-text-50 text-center"
						>
							Resumé
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
