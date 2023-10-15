"use client";

import clsx from "clsx";
import React, { useEffect } from "react";

const SCALE_FACTOR = 0.0545;

export default function Background() {
	const backgroundRef = React.useRef<HTMLDivElement>(null!);

	function updateBackgroundScale() {
		const newScale = 1 + ((window.document.documentElement.scrollTop / 1000) * SCALE_FACTOR);

		backgroundRef.current.style.setProperty("--scale", `${newScale}`);
	}

	function scrollListener() {
		updateBackgroundScale();
	}

	useEffect(() => {
		updateBackgroundScale();

		document.addEventListener("scroll", scrollListener);

		return () => {
			document.removeEventListener("scroll", scrollListener);
		}
	}, [scrollListener]);

	return (
		<div
			ref={backgroundRef}
			className={clsx(
				"fixed left-0 bottom-0 w-full h-full scale-[var(--scale)] z-10 bg-background-900",
				"bg-starfield bg-contain bg-repeat"
			)}
		/>
	);
}
