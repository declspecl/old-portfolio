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
                    description="O.U. Confidential is an anonymous forum website that allows Oakland University students to chat anxiety-free. I managed a Postgres database through Supabase and used Next.js 14's new features to deploy a highly performant, anonymous, and secure forum website."
                    technologies={["React", "Next.js 14", "TailwindCSS", "Radix UI", "RSCs", "RSAs", "Supabase", "PostgreSQL"]}
                    siteLink="https://ouconfidential.vercel.app"
                    repoLink="https://github.com/declspecl/ouconfidential"
                />

                <Separator.Root decorative orientation="horizontal" className="w-full h-[1px] bg-text opacity-50" />

                <Project
                    name="ValoGuessr"
                    imagePath="/valoguessr-menu.webp"
                    imageDimensions={{ width: 950, height: 530 }}
                    description="ValoGuessr is a GeoGuessr-like desktop game based on Valorant. I engineered an extensive and customizable GUI library from scratch in C++ using OpenGL that I used to develop this program. I also designed a binary file format to track players' progress as well as a plain text format to support sharing games between players."
                    technologies={["C++", "GLSL", "OpenGL", "GLFW", "GLAD", "glm", "stb", "irrKlang", "FreeType"]}
                    repoLink="https://github.com/declspecl/ValoGuessr"
                    animationDelay={850}
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
            </Accordion.Root>
        </Section>
    );
}
