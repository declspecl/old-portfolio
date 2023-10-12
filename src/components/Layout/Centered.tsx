import clsx from "clsx";
import React from "react";

interface CenteredProps {
	children: React.ReactNode
}

export default function Centered({ children }: CenteredProps) {
	return (
		<div className={clsx(
			"mx-auto",
			"xs:max-w-xs",
			"sm:max-w-lg",
			"md:max-w-screen-sm",
			"lg:max-w-screen-md",
			"xl:max-w-screen-lg",
			"2xl:max-w-screen-xl"
		)}>
			{children}
		</div>
	);
}
