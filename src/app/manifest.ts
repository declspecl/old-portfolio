import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Gavin D'Hondt Portfolio - Software Engineer and Student from Michigan",
		short_name: "Gavin D'Hondt Portfolio",
		description: "I'm Gavin D'Hondt. I'm a software engineer studying Computer Science at Oakland University. I'm actively seeking internship opportunities and freelance web development jobs.",
		start_url: "/",
		display: "standalone",
		background_color: "#16161b",
		theme_color: "#16161b",
		icons: [
			{
				src: "/favicon.ico",
				sizes: "any",
				type: "image/x-icon"
			}
		]
	}
}
