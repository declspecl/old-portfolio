import clsx from "clsx";

import { inter, jbMono } from "@/Fonts";
import Image from "next/image";

export default function Hero() {
	return (
		<div className="w-full h-screen">
			<div className="w-auto h-full flex flex-col justify-center items-center gap-6">
				<Image
					width={144}
					height={144}
					src="/devour-square.png"
					alt="my profile picture"
					className="w-36 h-36 rounded-full bg-text-100"
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
					"flex flex-row justify-center items-center gap-6",
					inter.className
				)}>
					<a
						href="#about"
						className="px-3 py-2 min-w-[12ex] bg-secondary-300 rounded-md text-black"
					>
						Learn more
					</a>

					<a
						href="/Resume.pdf"
						className="mx-3 my-2 min-w-[12ex] text-text-50"
					>
						Resumé
					</a>
				</div>
			</div>
		</div>
	);
}
