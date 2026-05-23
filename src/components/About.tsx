"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, MapPin, User } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function About() {
    const { personalInfo } = portfolioData;

    return (
        <section id="about" className="section-padding relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-teal-400/60 to-transparent" />
            <div className="container-custom">
                <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
                    <motion.div
                        initial={{ opacity: 0, x: -28 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.35 }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                        className="group relative min-h-[460px] w-full overflow-hidden lg:min-h-[680px]"
                    >
                        <Image
                            src={personalInfo.formalImage}
                            alt={`${personalInfo.name} portrait`}
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                        />
                        <div className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 skew-x-[-18deg] bg-white/20 blur-sm transition-transform duration-700 ease-out group-hover:translate-x-[340%]" />
                        <span className="pointer-events-none absolute left-5 top-5 h-20 w-20 border-l-2 border-t-2 border-teal-300/80 transition-all duration-500 group-hover:left-3 group-hover:top-3 group-hover:border-cyan-200" />
                        <span className="pointer-events-none absolute bottom-5 right-5 h-20 w-20 border-b-2 border-r-2 border-teal-300/80 transition-all duration-500 group-hover:bottom-3 group-hover:right-3 group-hover:border-cyan-200" />
                        <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/80 px-4 py-2 text-xs font-black text-slate-800 shadow-xl shadow-slate-900/10 backdrop-blur dark:border-white/10 dark:bg-slate-950/70 dark:text-slate-100">
                            <MapPin className="h-4 w-4 text-teal-600 dark:text-teal-300" />
                            <span className="font-mono uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">Based in</span>
                            <span>{personalInfo.location}</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 28 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.35 }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                    >
                        <span className="section-eyebrow">
                            <User className="h-4 w-4" />
                            About Me
                        </span>

                        <h2 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-[-0.04em] text-slate-950 dark:text-white md:text-5xl">
                            I turn product ideas into <span className="text-teal-600 dark:text-teal-300">usable systems</span>, from Android screens to backend workflows.
                        </h2>

                        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
                            {personalInfo.aboutBio}
                        </p>

                        <div className="mt-8 rounded-[2rem] border border-teal-200/70 bg-teal-50/70 p-6 dark:border-teal-400/20 dark:bg-teal-400/5">
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-teal-700 shadow-sm dark:bg-slate-900 dark:text-teal-300">
                                <Award className="h-4 w-4" />
                                BSc Graduate
                            </div>
                            <p className="text-lg font-black tracking-[-0.03em] text-slate-950 dark:text-white md:text-2xl">
                                Software Development, Faculty of IT
                            </p>
                            <p className="mt-3 text-sm font-semibold leading-6 text-slate-600 dark:text-slate-300">
                                IUG, Gaza, Palestine · Graduated 2025
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
