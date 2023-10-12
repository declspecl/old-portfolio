import clsx from "clsx";
import React from "react";

interface XMarginProps {
	children: React.ReactNode
}

export default function XMargin({ children }: XMarginProps) {
	return (
		<div className={clsx(
			"mx-64 w-auto",
			"lg:mx-48",
			"md:mx-32",
			"sm:mx-16"
		)}>
			{children}
		</div>
	);
}
