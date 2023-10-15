"use client";

import clsx from "clsx";
import { useRef, useEffect } from "react";
import { jbMono } from "@/Fonts";
import { motion, Variants, useInView } from "framer-motion";

interface SectionTextProps {
	id: string,
	className?: string
	children: React.ReactNode,
}

export default function SectionText({ id, className, children }: SectionTextProps) {
	const ref = useRef<HTMLHeadingElement>(null!);
	const isInView = useInView(ref, { once: true });

	const h1Style: React.CSSProperties = isInView ? {
		transform: "translateY(0)",
		opacity: 1
	} : {
		transform: "translateY(100px)",
		opacity: 0
	};

	return (
		<motion.h1
			id={id}
			ref={ref}
			style={h1Style}
			className={clsx(
				"inline-block bg-gradient-to-r from-secondary-300 to-accent-600 text-text-50 text-opacity-0 bg-clip-text text-center",
				"text-4xl",
				"lg:text-5xl",
				jbMono.className,
				className
			)}
		>
			{children}
		</motion.h1>
	);
}
