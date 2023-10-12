"use client";

import clsx from "clsx";
import { useState, useEffect } from "react";

interface WithBackgroundProps {
	children: React.ReactNode;
}

export default function WithBackground({ children }: WithBackgroundProps) {
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		document.addEventListener("scroll", (e) => {
			setOffset(window.scrollY / window.document.body.clientHeight);
		});
	}, [setOffset]);

	return (
		<div className={clsx(
			"fixed top-[] left-0 w-screen h-screen bg-background-900 scale-[1.15]",
			"bg-starfield bg-contain bg-repeat bg-local"
		)}>
			{children}
		</div>
	);
}
