import clsx from "clsx";
import React from "react";
import { inter } from "@/Fonts";
import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";

interface ProjectContentProps {
    name: string,
    scope: React.RefObject<HTMLDivElement>,
    imagePath: string,
    imageDimensions: { width: number, height: number },
    description: string,
    technologies: string[],
    repoLink?: string,
    siteLink?: string
}

export default function ProjectContent({ name, scope, imagePath, imageDimensions, description, technologies, repoLink, siteLink }: ProjectContentProps) {
    return (
        <div
            ref={scope}
            className={clsx(
                "mt-0 flex flex-col gap-2 h-0 opacity-0 overflow-hidden",
                "lg:grid lg:grid-cols-2",
                inter.className
            )}
        >
            <Image
                src={imagePath}
                alt={`Image of my project ${name}`}
                width={imageDimensions.width}
                height={imageDimensions.height}
                loading="lazy"
                className={clsx(
                    "w-auto",
                    "lg:w-full"
                )}
            />

            <div className={clsx("flex flex-col gap-4 text-base text-text", "lg:text-lg")}>
                <div className="flex flex-col">
                    <p>
                        {description}
                    </p>
                </div>

                <div className={clsx("flex flex-col gap-2")}>
                    <p>Technologies used:</p>

                    <div className="flex flex-row flex-wrap gap-2.5">
                        {technologies.map((technology, index) => (
                            <div
                                key={`technology-${index + 1}`}
                                className={clsx(
                                    "px-2.5 py-1 rounded-full text-sm text-background-950 bg-secondary"
                                )}
                            >
                                {technology}
                            </div>
                        ))}
                    </div>
                </div>

                <div className={clsx("flex flex-col gap-1 text-base", "lg:text-lg")}>
                    {siteLink && (
                        <a
                            href={siteLink}
                            target="_blank"
                            className={clsx(
                                "flex flex-row items-center gap-1 text-text underline"
                            )}
                        >
                            <span>View Website</span>
                            <ExternalLinkIcon className="w-4 h-4" />
                        </a>
                    )}

                    {repoLink && (
                        <a
                            href={repoLink}
                            target="_blank"
                            className={clsx(
                                "flex flex-row items-center gap-1 text-text underline",
                            )}
                        >
                            <span>View Repository</span>
                            <ExternalLinkIcon className="w-4 h-4"/>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
