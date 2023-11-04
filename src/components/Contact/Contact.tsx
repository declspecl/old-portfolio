import clsx from "clsx";
import { inter } from "@/Fonts";
import ContactForm from "./ContactForm";
import Section from "@/components/Layout/Section";
import SectionText from "@/components/Typography/SectionText";
import { CircleIcon, GithubIcon, LinkedinIcon } from "lucide-react";

export default function Contact() {
    return (
        <Section className={clsx(
            "items-center",
            inter.className
        )}>
            <SectionText id="contact">Contact Me</SectionText>

            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                    <div className={clsx(
                        "flex flex-col gap-0.5 text-base text-text text-center",
                        "lg:text-lg",
                        "xl:w-10/12 xl:mx-auto"
                    )}>
                        <p>
                            Thanks for reaching out! Feel free to use this form to message me. Alternatively, <a href="mailto:gavind2559@gmail.com" className="underline">send me an email</a>.
                        </p>

                        <p>
                            Also, check me out on the following platforms:
                        </p>
                    </div>

                    <div className="w-full flex flex-row justify-center items-center gap-4 flex-wrap text-text">
                        <a
                            href="https://github.com/declspecl"
                            target="_blank"
                            className="flex flex-row items-center gap-[6px] group"
                        >
                            <GithubIcon
                                className="h-[1.25em] w-[1.25em] bg-text-800 stroke-text rounded-md"
                            />

                            <span className="group-hover:underline">declspecl</span>
                        </a>

                        <CircleIcon
                            className={clsx(
                                "h-[0.35em] w-[0.35em] stroke-text fill-text hidden",
                                "md:inline-block"
                            )}
                        />

                        <a
                            href="https://www.linkedin.com/in/gavindhondt/"
                            target="_blank"
                            className="flex flex-row items-center gap-[6px] group"
                        >
                            <LinkedinIcon
                                className="h-[1.25em] w-[1.25em] bg-primary-600 rounded-sm p-0.5 stroke-1 stroke-text fill-text"
                            />

                            <span className="group-hover:underline">gavindhondt</span>
                        </a>
                    </div>
                </div>

                <ContactForm />
            </div>
        </Section>
    );
}
