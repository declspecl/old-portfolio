"use client";

import clsx from "clsx";
import React, { useRef } from "react";
import { useInView } from "framer-motion";

interface SectionProps {
    className?: string,
    children: React.ReactNode
}

export default function Section({ className, children }: SectionProps) {
    const ref = useRef<HTMLDivElement>(null!);
    const isInView = useInView(ref, { once: true });

    return (
        <section
            ref={ref}
            style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(100px)"
            }}
            className={clsx(
                "flex flex-col opacity-0 translate-y-[100px] transition-all duration-300",
                className
            )}
        >
            {children}
        </section>
    );
}
