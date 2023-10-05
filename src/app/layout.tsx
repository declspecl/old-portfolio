import "./globals.css"
import { inter } from "@/Fonts";
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Gavin D'Hondt Portfolio",
	description: "Gavin D'Hondt's Portfolio"
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
