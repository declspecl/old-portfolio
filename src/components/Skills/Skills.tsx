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
                    I have extensive experience in building full-stack applications, and I love to tinker in my free time.
                    I aim to build highly performant products that provide first-class accessibility, interactivity, and user experience.
                </p>

                <div className={clsx(
                    "flex flex-col gap-12",
                    "sm:grid sm:grid-cols-2 sm:gap-y-12"
                )}>
                    <SkillGroup
                        title="Frontend"
                        skills={["React", "Typescript", "TailwindCSS", "framer-motion", "Solid.js"]}
                    />

                    <SkillGroup
                        title="Backend"
                        skills={["Next.js", "Supabase", "PostgreSQL", "AWS", "Axum"]}
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
