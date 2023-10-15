import "./globals.css"
import { inter } from "@/Fonts";
import type { Metadata } from "next"

export const metadata: Metadata =
{
	title: "Gavin D'Hondt",
	description: "I'm Gavin D'Hondt. I'm a software engineer studying Computer Science at Oakland University. I'm actively seeking internship opportunities and freelance web development jobs.",
	authors: { name: "Gavin D'Hondt" },
	keywords: ["Software engineer", "Student", "Rust", "C++", "Tauri", "React", "Web developer", "Oakland University", "Michigan", "Programmer"],
	colorScheme: "dark"
}

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	)
}
