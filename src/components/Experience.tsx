"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, GitBranch } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Experience() {
    const { experience } = portfolioData;

    return (
        <section id="experience" className="section-padding relative overflow-hidden">
            <div className="absolute inset-x-0 top-1/2 -z-10 h-80 -translate-y-1/2 bg-gradient-to-r from-transparent via-teal-100/70 to-transparent blur-3xl dark:via-teal-950/30" />
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.35 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto mb-16 max-w-3xl text-center"
                >
                    <span className="section-eyebrow">
                        <Briefcase className="h-4 w-4" />
                        Career Path
                    </span>
                    <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] text-slate-950 dark:text-white md:text-5xl">
                        Work Experience
                    </h2>
                </motion.div>

                <div className="relative mx-auto max-w-5xl">
                    <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-teal-400/70 to-transparent md:left-1/2" />

                    <div className="space-y-10">
                        {experience.map((job, index) => (
                            <motion.div
                                key={`${job.role}-${job.period}`}
                                initial={{ opacity: 0, y: 26 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.28 }}
                                transition={{ duration: 0.55, delay: index * 0.1 }}
                                className="relative grid gap-6 pl-12 md:grid-cols-2 md:pl-0"
                            >
                                <div className="absolute left-4 top-7 z-10 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full border-4 border-white bg-teal-600 text-white shadow-lg shadow-teal-600/25 dark:border-slate-950 md:left-1/2">
                                    <GitBranch className="h-4 w-4" />
                                </div>

                                <article className={`glass-panel relative rounded-[2rem] p-6 transition-all hover:-translate-y-1 hover:border-teal-300 dark:hover:border-teal-400/40 ${index % 2 === 0 ? "md:col-start-2" : "md:col-start-1 md:row-start-1"}`}>
                                    <div className="mb-4 flex flex-wrap items-center gap-3 text-sm font-bold text-teal-700 dark:text-teal-300">
                                        <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1.5 dark:bg-teal-400/10">
                                            <Calendar className="h-4 w-4" />
                                            {job.period}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-black tracking-[-0.03em] text-slate-950 dark:text-white">
                                        {job.role}
                                    </h3>
                                    <p className="mt-2 text-sm font-bold text-slate-500 dark:text-slate-400">
                                        {job.company}
                                    </p>
                                    <ul className="mt-5 space-y-3">
                                        {job.description.map((item) => (
                                            <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                                                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
