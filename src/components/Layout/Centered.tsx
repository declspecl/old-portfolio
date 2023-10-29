import clsx from "clsx";
import React from "react";

interface CenteredProps {
    children: React.ReactNode,
    className?: string
}

export default function Centered({ children, className }: CenteredProps) {
    return (
        <div className={clsx(
            "relative w-4/5 mx-auto z-20",
            "xl:w-8/12",
            "2xl:w-3/5",
            className
        )}>
            {children}
        </div>
    );
}
