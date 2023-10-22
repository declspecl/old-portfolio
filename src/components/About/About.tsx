import clsx from "clsx";
import { inter, jbMono } from "@/Fonts";
import Section from "@/components/Layout/Section";
import SectionText from "@/components/Typography/SectionText";

export default function About() {
    return (
        <Section>
            <SectionText id="about">About</SectionText>

            <div className={clsx(
                "flex flex-col-reverse gap-4",
                "md:flex-row md:justify-center"
            )}>
                <div className={clsx(
                    "flex flex-col gap-5",
                    "md:flex-1",
                    "lg:py-6",
                    "xl:py-12"
                )}>
                    <div className={clsx(
                        "flex flex-col gap-3",
                        jbMono.className
                    )}>
                        <h2 className="text-4xl text-primary-200 font-medium">
                            Hello!
                        </h2>

                        <h3 className={clsx(
                            "text-2xl text-text-50"
                        )}>
                            I&apos;m Gavin, a student and software engineer.
                        </h3>
                    </div>

                    <div className={clsx(
                        "flex flex-col gap-3 text-text-50 text-base",
                        "lg:text-lg",
                        "xl:text-xl",
                        inter.className
                    )}>
                        <p>
                            I have been programming for over 6 years, and it is by far my greatest passion.
                        </p>

                        <p>
                            I went to an International Baccalaureate high school, graduating with a 4.2 GPA as a valedictorian and receiving my IB Diploma.
                            During this time, I took a higher level computer science class, achieving the highest score in my school.
                            Currently, I attend Oakland University as a Computer Science major.
                        </p>

                        <p>
                            Outside of academics, I enjoy playing video games, playing instruments, and, generally, learning.
                            I am always learning something, whether it be a new computer science concept, a new song, or a new skill.
                        </p>
                    </div>
                </div>

                <div className="md:relative md:flex-1">
                    <img
                        src="/senior-pic.webp"
                        alt="My senior picture"
                        className={clsx(
                            "md:absolute md:w-full md:h-full md:object-cover md:object-top"
                        )}
                    />
                </div>
            </div>
        </Section>
    );
}
