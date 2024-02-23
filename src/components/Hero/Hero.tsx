"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { inter, jbMono } from "@/Fonts";
import TypedGreeting from "./TypedGreeting";
import Image from "next/image";

export default function Hero() {
    const variants = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        }
    };

    return (
        <motion.section className="w-full h-screen" variants={variants} initial="initial" animate="animate">
            <div className="w-auto h-full flex flex-col justify-center items-center gap-6">
                <Image
                    src="/profile-picture.webp"
                    alt="my profile picture"
                    width={218}
                    height={218}
                    loading="eager"
                    className={clsx(
                        "w-28 aspect-square rounded-full bg-text-100 drop-shadow-hero transform-gpu",
                        "sm:w-36"
                    )}
                />

                <div className={clsx(
                    "flex flex-col gap-2 text-text text-center",
                    "xl:w-3/4"
                )}>
                    <TypedGreeting
                        targetText="Hi. I'm Gavin D'Hondt."
                        delay={500}
                        className={clsx(
                            "text-3xl",
                            "lg:text-4xl",
                            jbMono.className
                        )}
                    />

                    <p className={clsx(
                        "text-base",
                        "lg:text-lg",
                        inter.className
                    )}>
                        I&apos;m a passionate programmer and student studying Computer Science at Oakland University. I&apos;m actively seeking internship/co-op opportunities and freelance web development jobs.
                    </p>
                </div>

                <div className={clsx(
                    "flex flex-col justify-center items-center gap-2 text-base",
                    "sm:flex-row sm:gap-6",
                    "lg:text-lg",
                    inter.className
                )}>
                    <div className={clsx(
                        "basis-0 grow px-3 py-1.5 bg-secondary rounded-md transition-[background-color]",
                        "hover:bg-secondary-200"
                    )}>
                        <a
                            href="#about"
                            className="inline-block min-w-[10ex] text-background-950 text-center"
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
                            className={clsx(
                                "mx-3 my-1.5 inline-block min-w-[10ex] text-text text-center",
                                "hover:underline"
                            )}
                        >
                            Resumé
                        </a>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
