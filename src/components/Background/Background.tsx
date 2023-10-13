"use client";

import clsx from "clsx";
import React, { useEffect } from "react";

const MAX_ADDITIONAL_SCALE_PROPORTION: number = 0.1;

export default function Background() {
	const backgroundRef = React.useRef<HTMLDivElement>(null!);

	function updateBackgroundScale() {
		const documentElement = window.document.documentElement;
		
		const scrollRatio = documentElement.scrollTop / (documentElement.scrollHeight - documentElement.clientHeight);

		const newScale = 1 + (scrollRatio * MAX_ADDITIONAL_SCALE_PROPORTION);
		const newTranslation = scrollRatio * MAX_ADDITIONAL_SCALE_PROPORTION * 35;

		backgroundRef.current.style.setProperty("--scale", `${newScale}`);
		backgroundRef.current.style.setProperty("--translate", `${newTranslation}%`);
	}

	useEffect(() => {
		updateBackgroundScale();

		document.addEventListener("scroll", () => {
			updateBackgroundScale();
		});
	}, []);

	return (
		<div
			ref={backgroundRef}
			className={clsx(
				"fixed left-0 bottom-0 w-full h-full scale-[var(--scale)] -translate-y-[var(--translate)] z-10 bg-background-900",
				"bg-starfield bg-contain bg-repeat"
			)}
		/>
	);
}
