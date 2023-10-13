"use client";

import Project from "./Project";
import SectionText from "../Typography/SectionText";
import * as Accordion from "@radix-ui/react-accordion";
import * as Separator from "@radix-ui/react-separator";

export default function Projects() {
	return (
		<div>
			<div className="flex flex-row justify-center items-center">
				<SectionText id="projects">Projects</SectionText>
			</div>

			<Accordion.Root type="multiple" className="flex flex-col gap-4">
				<Project
					projectName="ValoGuessr"
					imagePath="/valoguessr-menu.png"
					description="ValoGuessr is a GeoGuessr-like desktop game based on Valorant. I made it by creating a UI library from scratch in C++ using OpenGL and GLFW. I also designed a binary file format to store the user’s progress as well as a game string format to allow players to send and load games to and from friends."
					technologies={["C++", "GLSL", "OpenGL", "GLFW", "GLAD", "glm", "stb", "irrKlang", "FreeType"]}
					repoLink="https://github.com/declspecl/ValoGuessr"
				/>

				<Separator.Root decorative orientation="horizontal" className="w-full h-[1px] bg-text-50 opacity-50" />

				<Project
					projectName="Haley Puri Portfolio"
					imagePath="/haley-portfolio.png"
					description="I made this website for my friend Haley Puri as a way for him to easily display his art as well as advertise himself."
					technologies={["React", "Next.js", "TailwindCSS", "Radix UI", "framer-motion", "Resend"]}
					siteLink="https://haleypuri.com"
				/>

				<Separator.Root decorative orientation="horizontal" className="w-full h-[1px] bg-text-50 opacity-50" />

				<Project
					projectName="Pow"
					imagePath="/pow.png"
					description="Pow is a windows file explorer desktop app using Tauri and React. It is designed to be a highly customizable and performant file explorer"
					technologies={["Rust", "Tauri", "React", "TailwindCSS", "Radix UI", "react-spring"]}
					repoLink="https://github.com/declspecl/pow"
				/>
			</Accordion.Root>
		</div>
	);
}
