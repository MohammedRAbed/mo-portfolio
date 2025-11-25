"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Mail, MessageSquare, Send } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";
import { sendEmail } from "@/app/actions/sendEmail";

export default function Contact() {
    const { personalInfo } = portfolioData;
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
        <section id="contact" className="section-padding bg-slate-50 dark:bg-slate-950">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-10 bg-teal-600 text-white flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-2 mb-6">
                                    <MessageSquare className="w-6 h-6" />
                                    <span className="font-bold tracking-wide uppercase">Contact</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    Let's work together!
                                </h2>
                                <p className="text-teal-100 leading-relaxed mb-8">
                                    I'm currently available for freelance work or full-time opportunities.
                                    If you have a project that needs some creative touch, or just want to say hi,
                                    feel free to drop me a message.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-teal-200" />
                                    <a href={`mailto:${personalInfo.email}`} className="hover:text-teal-100 transition-colors">
                                        {personalInfo.email}
                                    </a>
                                </div>
                                <div className="flex gap-4 mt-8">
                                    {personalInfo.socials.map((social) => (
                                        <Link
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            className="p-2 bg-teal-700/50 rounded-lg hover:bg-teal-700 transition-colors"
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="p-10">
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
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
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
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
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
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all resize-none"
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
                                    className="w-full py-4 bg-slate-900 dark:bg-teal-600 text-white font-bold rounded-lg hover:bg-slate-800 dark:hover:bg-teal-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
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
