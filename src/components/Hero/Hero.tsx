"use client";

import clsx from "clsx";
import Image from "next/image";
import { inter, jbMono } from "@/Fonts";
import TypedGreeting from "./TypedGreeting";

export default function Hero() {
	return (
		<section className="w-full h-screen">
			<div className="w-auto h-full flex flex-col justify-center items-center gap-6">
				<Image
					width={112}
					height={112}
					src="/devour-square.png"
					alt="my profile picture"
					className={clsx(
						"w-28 aspect-square rounded-full bg-text-100 drop-shadow-hero",
						"sm:w-36"
					)}
				/>

				<div className={clsx(
					"flex flex-col gap-2 text-text-50 text-center",
					"xl:w-3/4"
				)}>
					<TypedGreeting
						targetText="Hi! I'm Gavin D'Hondt."
						delay={200}
						className={clsx(
							"text-2xl",
							"lg:text-4xl",
							jbMono.className
						)}
					/>

					<p className={clsx(
						"text-base",
						"lg:text-lg",
						inter.className
					)}>
						I&apos;m a software engineer studying Computer Science at Oakland University. I&apos;m actively seeking internship opportunities and freelance web development jobs.
					</p>
				</div>

				<div className={clsx(
					"flex flex-col justify-center items-center gap-2",
					"sm:flex-row sm:gap-6",
					inter.className
				)}>
					<div className="basis-0 grow px-3 py-2 bg-secondary-300 rounded-md">
						<a
							href="#about"
							className="inline-block min-w-[10ex] text-background-900 text-center"
						>
							Learn more
						</a>
					</div>

					<div className={clsx(
						"basis-0 grow relative right-0",
						"sm:right-3"
					)}>
						<a
							href="/resume.pdf"
							target="_blank"
							className="mx-3 my-2 inline-block min-w-[10ex] text-text-50 text-center"
						>
							Resumé
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
