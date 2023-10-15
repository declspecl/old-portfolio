"use client";

import clsx from "clsx";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionProps {
    className?: string,
    children: React.ReactNode
}

export default function Section({ className, children }: SectionProps) {
    const ref = useRef<HTMLDivElement>(null!);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.section
            ref={ref}
            style={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 100
            }}
            className={clsx(
                "flex flex-col gap-6 opacity-0 translate-y-[50px] transition-all duration-300",
                className
            )}
        >
            {children}
        </motion.section>
    );
}
