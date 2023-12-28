"use client";

import clsx from "clsx";
import { Loader2Icon } from "lucide-react";
import { SendEmail } from "@/actions/email";
import * as Form from "@radix-ui/react-form";
import { useEffect, useState, useOptimistic, useRef } from "react";

enum EmailStatus {
    NotSent,
    Sending,
    Error,
    Sent
}

export default function ContactForm() {
    const [realEmailStatus, setRealEmailStatus] = useState<EmailStatus>(EmailStatus.NotSent);
    const [liveEmailStatus, setLiveEmailStatus] = useOptimistic<EmailStatus>(EmailStatus.NotSent);

    const formRef = useRef<HTMLFormElement>(null!);

    async function clientFormAction(formData: FormData) {
        const name = formData.get("name") as string | undefined;
        const email = formData.get("email") as string;
        const message = formData.get("message") as string;

        if (!email || !message) {
            setLiveEmailStatus(EmailStatus.Error);
            setRealEmailStatus(EmailStatus.Error);
            return;
        }

        setLiveEmailStatus(EmailStatus.Sending);

        try {
            await SendEmail(name, email, message);

            setLiveEmailStatus(EmailStatus.Sent);
            setRealEmailStatus(EmailStatus.Sent);

            formRef.current.reset();
        }
        catch (err) {
            setLiveEmailStatus(EmailStatus.Error);
            setRealEmailStatus(EmailStatus.Error);
        }
    }

    return (
        <Form.Root
            className="w-full flex flex-col items-center gap-4 text-base lg:text-lg"
            action={clientFormAction}
            ref={formRef}
        >
            <Form.Field className="w-full" name="name">
                <div className="flex flex-col">
                    <Form.Label className="text-text">Name</Form.Label>

                    <Form.Control
                        type="text"
                        autoComplete="name"
                        disabled={liveEmailStatus === EmailStatus.Sending}
                        className={clsx(
                            "px-3 py-1.5 text-text-50 bg-background-800 bg-opacity-90 border border-background-700 border-opacity-75 rounded-md",
                            "focus:border-primary focus:!outline-none"
                        )}
                    />
                </div>
            </Form.Field>

            <Form.Field name="email" className="w-full" >
                <div className="flex flex-col">
                    <div className="flex flex-row justify-between">
                        <Form.Label className="text-text">Email <span className="text-primary-200">*</span></Form.Label>

                        <Form.Message match="valueMissing" className="text-secondary">
                            Please enter an email
                        </Form.Message>

                        <Form.Message match="typeMismatch" className="text-secondary">
                            Please enter a valid email
                        </Form.Message>
                    </div>

                    <Form.Control
                        type="email"
                        autoComplete="email"
                        disabled={liveEmailStatus === EmailStatus.Sending}
                        className={clsx(
                            "px-3 py-1.5 text-text-50 bg-background-800 bg-opacity-90 border border-background-700 border-opacity-75 rounded-md",
                            "focus:border-primary focus:!outline-none"
                        )}
                        required
                    />
                </div>

            </Form.Field>

            <Form.Field className="w-full" name="message">
                <div className="flex flex-col">
                    <div className="flex flex-row justify-between">
                        <Form.Label className="text-text">Message <span className="text-primary-200">*</span></Form.Label>

                        <Form.Message match="valueMissing" className="text-secondary">
                            Please enter a message
                        </Form.Message>
                    </div>

                    <Form.Control asChild>
                        <textarea
                            required
                            disabled={liveEmailStatus === EmailStatus.Sending}
                            className={clsx(
                                "px-3 py-1.5 min-h-[6rem] text-text-50 bg-background-800 bg-opacity-90 border border-background-700 border-opacity-75 rounded-md text-base resize-y",
                                "focus:border-primary focus:!outline-none"
                            )}
                        />
                    </Form.Control>
                </div>
            </Form.Field>

            {realEmailStatus === EmailStatus.Sent && (
                <p className="text-text">
                    Message sent successfully! Thanks for reaching out, I&apos;ll get back to you as soon as I can.
                </p>
            )}

            {realEmailStatus === EmailStatus.Error && (
                <p className="text-text">
                    The message failed to send. Please try again.
                </p>
            )}

            <Form.Submit className={clsx(
                "px-2 py-1 w-24 h-10 flex flex-row justify-center items-center text-background-950 bg-secondary text-xl text-center rounded-md transition-[background-color]",
                "hover:bg-secondary-200"
            )}>
                <Loader2Icon
                    className={clsx(
                        "h-[1.5rem] w-[1.5rem] stroke-background animate-spin",
                        { "hidden" : liveEmailStatus !== EmailStatus.Sending },
                        { "inline-block" : liveEmailStatus !== EmailStatus.Sending }
                    )}
                />

                <span className={clsx(
                    { "inline" : liveEmailStatus !== EmailStatus.Sending },
                    { "hidden": liveEmailStatus === EmailStatus.Sending }
                )}>Send</span>
            </Form.Submit>
        </Form.Root>
    );
}
