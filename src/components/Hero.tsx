"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import Image from "next/image";

export default function Hero() {
    const { personalInfo } = portfolioData;

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-teal-50/50 dark:bg-teal-900/20 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-50/50 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-sm font-semibold tracking-wide border border-teal-100 dark:border-teal-800 mb-6">
                            Available for Hire
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-6">
                            Hi, I'm <span className="text-teal-600 dark:text-teal-400">{personalInfo.name}</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-300 mb-8">
                            {personalInfo.title}
                        </h2>
                        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10">
                            {personalInfo.bio}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <Link
                                href="#contact"
                                className="w-full sm:w-auto px-8 py-4 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/25 flex items-center justify-center gap-2 group"
                            >
                                Contact Me
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <div className="flex items-center gap-4">
                                <Link
                                    href="/CV-Work.pdf"
                                    target="_blank"
                                    className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold rounded-full border border-slate-200 dark:border-slate-700 hover:border-teal-600 dark:hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 transition-all flex items-center justify-center gap-2"
                                >
                                    <Download className="w-4 h-4" />
                                    Download CV
                                </Link>
                                <div className="flex items-center gap-2 pl-4 border-l border-slate-200 dark:border-slate-700">
                                    {personalInfo.socials.map((social) => (
                                        <Link
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 text-slate-400 dark:text-slate-500 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/30 rounded-full transition-all"
                                            aria-label={social.name}
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative flex-shrink-0 group"
                    >
                        <div className="relative w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full z-10 overflow-hidden">
                            <Image
                                src="/me_1.png"
                                alt={personalInfo.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Blurred colored effect around the image */}
                        <div className="absolute inset-0 -z-10 bg-teal-500 rounded-full blur-2xl opacity-40 scale-90 animate-pulse group-hover:opacity-0 transition-opacity duration-500" />

                        {/* Colorful gradient glow on hover */}
                        <div className="absolute -inset-4 -z-20 bg-gradient-to-tr from-teal-400 via-purple-500 to-amber-500 rounded-full blur-3xl opacity-0 group-hover:opacity-80 transition-all duration-500 scale-90 group-hover:scale-110" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
