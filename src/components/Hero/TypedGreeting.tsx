import clsx from "clsx";
import { useState, useEffect } from "react";

interface TypedGreetingProps {
    targetText: string,
    className?: string,
    delay?: number
}

export default function TypedGreeting({ targetText, className, delay }: TypedGreetingProps) {
    const [currentText, setCurrentText] = useState("");

    useEffect(() => {
        async function type() {
            await new Promise(resolve => setTimeout(resolve, delay ?? 0));

            for (let i = 0; i < targetText.length; i++) {
                setCurrentText(targetText.slice(0, i + 1));

                await new Promise(resolve => setTimeout(resolve, 75));
            }
        }

        type();
    }, [delay, targetText]);

    return (
        <p className={className}>
            {currentText}
            <span
                className={clsx(
                    "align-middle -translate-y-0.5 inline-block w-[0.5em] h-[1em] bg-text",
                    { "animate-blink" : currentText === targetText || currentText === "" }
                )}
            >
            </span>
        </p>
    );
}
