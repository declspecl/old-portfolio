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
					name="ValoGuessr"
					imagePath="/valoguessr-menu.webp"
                    imageDimensions={{ width: 1583, height: 884 }}
					description="ValoGuessr is a GeoGuessr-like desktop game based on Valorant. I made it by creating a UI library from scratch in C++ using OpenGL and GLFW. I also designed a binary file format to store the user’s progress as well as a plain text format to allow players to send and load games to and from friends."
					technologies={["C++", "GLSL", "OpenGL", "GLFW", "GLAD", "glm", "stb", "irrKlang", "FreeType"]}
					repoLink="https://github.com/declspecl/ValoGuessr"
				/>

				<Separator.Root decorative orientation="horizontal" className="w-full h-[1px] bg-text-50 opacity-50" />

				<Project
					name="Haley Puri Portfolio"
					imagePath="/haley-portfolio.webp"
                    imageDimensions={{ width: 1280, height: 720 }}
					description="I made this website for my client Haley Puri as a way for him to easily display his art and brand himself online."
					technologies={["React", "Next.js", "TailwindCSS", "Radix UI", "framer-motion", "Resend"]}
					siteLink="https://haleypuri.com"
					animationDelay={425}
				/>

				<Separator.Root decorative orientation="horizontal" className="w-full h-[1px] bg-text-50 opacity-50" />

				<Project
					name="pow (WIP)"
					imagePath="/pow.webp"
                    imageDimensions={{ width: 917, height: 572 }}
					description="pow is a windows file explorer desktop app made with Tauri and React. It is a highly customizable and performant file explorer, supporting various quality of life features like a YAML config file, fuzzy finding, environment variable resolution, sorting, and more."
					technologies={["Rust", "Tauri", "React", "TailwindCSS", "Radix UI", "react-spring"]}
					repoLink="https://github.com/declspecl/pow"
					animationDelay={850}
				/>
			</Accordion.Root>
		</Section>
	);
}
