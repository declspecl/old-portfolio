"use client";

import Project from "./Project";
import Section from "@/components/Layout/Section";
import * as Accordion from "@radix-ui/react-accordion";
import * as Separator from "@radix-ui/react-separator";
import SectionText from "@/components/Typography/SectionText";

export default function Projects() {
    return (
        <Section>
            <SectionText id="projects">Projects</SectionText>

            <Accordion.Root type="multiple" className="flex flex-col gap-4">
                <Project
                    name="O.U. Confidential"
                    imagePath="/ouconfidential.webp"
                    imageDimensions={{ width: 853, height: 480 }}
                    description="O.U. Confidential is a reddit-like website that allows Oakland University students to anonymously chat and answer questions anxiety-free. I made it for my honors college class to improve my skills with backend technologies as well as learn Next 14's new features like server components, server actions, and dynamic routes."
                    technologies={["React", "Next.js 14", "TailwindCSS", "Radix UI", "RSCs", "RSAs", "Supabase", "PostgreSQL"]}
                    siteLink="https://ouconfidential.vercel.app"
                    repoLink="https://github.com/declspecl/ouconfidential"
                />

                <Separator.Root decorative orientation="horizontal" className="w-full h-[1px] bg-text opacity-50" />

                <Project
                    name="pow"
                    imagePath="/pow.webp"
                    imageDimensions={{ width: 917, height: 572 }}
                    description="pow is a cross platform file explorer desktop app made with Tauri and React. It is highly customizable and performant, providing various quality of life features like a YAML config file with a GUI editor, path autocompletion, fuzzy finding, environment variable resolution, sorting, and more."
                    technologies={["Rust", "Tauri", "React", "TailwindCSS", "Radix UI", "framer-motion"]}
                    repoLink="https://github.com/declspecl/pow"
                    animationDelay={425}
                />

                <Separator.Root decorative orientation="horizontal" className="w-full h-[1px] bg-text opacity-50" />

                <Project
                    name="ValoGuessr"
                    imagePath="/valoguessr-menu.webp"
                    imageDimensions={{ width: 950, height: 530 }}
                    description="ValoGuessr is a GeoGuessr-like desktop game based on Valorant. I made it by creating a UI library from scratch in C++ using OpenGL and GLFW. I also designed a binary file format to store the user’s progress as well as a plain text format to allow players to send and load games to and from friends."
                    technologies={["C++", "GLSL", "OpenGL", "GLFW", "GLAD", "glm", "stb", "irrKlang", "FreeType"]}
                    repoLink="https://github.com/declspecl/ValoGuessr"
                    animationDelay={850}
                />

                <Separator.Root decorative orientation="horizontal" className="w-full h-[1px] bg-text opacity-50" />

                <Project
                    name="Haley Puri Portfolio"
                    imagePath="/haley-portfolio.webp"
                    imageDimensions={{ width: 768, height: 432 }}
                    description="I made this website for my client Haley Puri as a way for him to easily display his art and brand himself online."
                    technologies={["React", "Next.js", "TailwindCSS", "Radix UI", "framer-motion", "Resend"]}
                    siteLink="https://haleypuri.com"
                    animationDelay={1275}
                />
            </Accordion.Root>
        </Section>
    );
}
