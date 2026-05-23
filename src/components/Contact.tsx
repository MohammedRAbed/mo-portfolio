"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Linkedin, Mail, MessageSquare, Send } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import Link from "next/link";
import { useState, useRef } from "react";
import { sendEmail } from "@/app/actions/sendEmail";

export default function Contact() {
    const { personalInfo } = portfolioData;
    const linkedInUrl = personalInfo.socials.find((social) => social.name === "LinkedIn")?.url ?? "#";
    const whatsappUrl = `https://wa.me/${personalInfo.whatsapp.replace("+", "")}`;
    const contactLinks = [
        { name: "Email", href: `mailto:${personalInfo.email}`, icon: Mail },
        { name: "LinkedIn", href: linkedInUrl, icon: Linkedin },
        { name: "WhatsApp", href: whatsappUrl, icon: SiWhatsapp },
    ];
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);
        setSuccessMessage("");
        setErrorMessage("");

        const formData = new FormData(event.currentTarget);

        // Call the server action
        // We pass null as the first argument because the action expects prevState
        const result = await sendEmail(null, formData);

        if (result.success) {
            setSuccessMessage(result.message);
            if (formRef.current) {
                formRef.current.reset();
            }
        } else {
            setErrorMessage(result.message);
        }
        setIsSubmitting(false);
    }

    return (
        <section id="contact" className="section-padding relative overflow-hidden">
            <div className="absolute inset-x-0 bottom-0 -z-10 h-80 bg-gradient-to-t from-teal-100/60 to-transparent dark:from-teal-950/25" />
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                    className="glass-panel mx-auto max-w-5xl overflow-hidden rounded-[2rem]"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="tech-texture flex flex-col justify-between bg-slate-950 p-10 text-white dark:bg-teal-950/70">
                            <div>
                                <div className="flex items-center gap-2 mb-6">
                                    <MessageSquare className="w-6 h-6" />
                                    <span className="font-bold tracking-[0.18em] uppercase">Contact</span>
                                </div>
                                <h2 className="mb-6 text-4xl font-black tracking-[-0.04em] md:text-5xl">
                                    Let&apos;s work together!
                                </h2>
                                <p className="mb-8 leading-8 text-teal-50/85">
                                    I&apos;m currently available for freelance work or full-time opportunities.
                                    If you have a project that needs some creative touch, or just want to say hi,
                                    feel free to drop me a message.
                                </p>
                            </div>

                            <div className="flex gap-3">
                                {contactLinks.map((contact) => (
                                    <Link
                                        key={contact.name}
                                        href={contact.href}
                                        target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
                                        rel={contact.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                                        className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-teal-50 transition-all hover:-translate-y-1 hover:bg-teal-500 hover:text-white"
                                        aria-label={contact.name}
                                        title={contact.name}
                                    >
                                        <contact.icon className="h-5 w-5" />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="p-8 md:p-10">
                            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-teal-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-teal-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        className="w-full resize-none rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-teal-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                {successMessage && (
                                    <div className="p-4 bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-lg text-sm font-medium">
                                        {successMessage}
                                    </div>
                                )}

                                {errorMessage && (
                                    <div className="p-4 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg text-sm font-medium">
                                        {errorMessage}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-teal-600 py-4 font-black text-white shadow-lg shadow-teal-600/20 transition-all hover:-translate-y-0.5 hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-300"
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                    {!isSubmitting && <Send className="w-4 h-4" />}
                                </button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
