import "./globals.css"
import { inter } from "@/Fonts";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata =
{
    title: "Gavin D'Hondt",
    description: "I'm Gavin D'Hondt. I'm a software engineer studying Computer Science at Oakland University. I'm actively seeking internship opportunities and freelance web development jobs.",
    authors: { name: "Gavin D'Hondt" },
    keywords: ["Gavin D'Hondt", "Software engineer", "Student", "Rust", "C++", "React", "Developer", "Oakland University", "Michigan", "Programmer"],
    metadataBase: new URL("https://www.gavindhondt.com"),
    openGraph: {
        title: "Gavin D'Hondt",
        description: "I'm Gavin D'Hondt. I'm a software engineer studying Computer Science at Oakland University. I'm actively seeking internship opportunities and freelance web development jobs.",
        url: "https://www.gavindhondt.com",
        images: "/opengraph-image.png"
    }
}

export const viewport: Viewport = {
    colorScheme: "dark"
}

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <head>
                <link rel="canonical" href="https://www.gavindhondt.com" />
            </head>

            <body className={inter.className}>
                {children}

                <Analytics />
            </body>
        </html>
    )
}
