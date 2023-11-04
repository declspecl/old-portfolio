import clsx from "clsx";
import { inter } from "@/Fonts";
import SkillGroup from "./SkillGroup";
import Section from "@/components/Layout/Section";
import SectionText from "@/components/Typography/SectionText";

export default function Skills() {
    return (
        <Section>
            <SectionText id="skills">Skills</SectionText>

            <div className="flex flex-col gap-6">
                <p className={clsx(
                    "text-base text-text text-center",
                    "lg:text-lg",
                    "xl:w-10/12 xl:mx-auto",
                    inter.className
                )}>
                    Most of all, I love working with low level languages, and I spend most of my time working in Rust or C++. I also enjoy web development, so I have gathered a wide range of skills from various different branches of computer science.
                </p>

                <div className={clsx(
                    "flex flex-col gap-12",
                    "sm:grid sm:grid-cols-2 sm:gap-y-12"
                )}>
                    <SkillGroup
                        title="Frontend"
                        skills={["React", "Typescript", "TailwindCSS", "framer-motion", "react-spring"]}
                    />

                    <SkillGroup
                        title="Backend"
                        skills={["Next.js", "PostgreSQL", "Axum", "AWS"]}
                    />

                    <SkillGroup
                        title="Systems Programming"
                        skills={["Rust", "C/C++", "x86-64 ASM", "Linux"]}
                    />

                    <SkillGroup
                        title="Miscellaneous"
                        skills={["Git", "IDA", "Cheat Engine", "Python", "Java"]}
                    />
                </div>
            </div>
        </Section>
    );
}
