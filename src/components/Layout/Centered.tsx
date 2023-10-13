import clsx from "clsx";
import React from "react";

interface CenteredProps {
	children: React.ReactNode
}

export default function Centered({ children }: CenteredProps) {
	return (
		<div className={clsx(
			"relative w-4/5 max-w-screen-lg mx-auto z-20"
		)}>
			{children}
		</div>
	);
}
