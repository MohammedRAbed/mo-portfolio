"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Education() {
    const { education } = portfolioData;

    return (
        <section id="education" className="section-padding relative overflow-hidden">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.35 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto mb-12 max-w-3xl text-center"
                >
                    <span className="section-eyebrow">
                        <GraduationCap className="h-4 w-4" />
                        Academic Background
                    </span>
                    <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] text-slate-950 dark:text-white md:text-5xl">
                        Education
                    </h2>
                </motion.div>

                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
                    {education.map((edu, index) => (
                        <motion.div
                            key={`${edu.degree}-${edu.period}`}
                            initial={{ opacity: 0, y: 22 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="glass-panel rounded-[2rem] p-7 transition-all hover:-translate-y-1 hover:border-teal-300 dark:hover:border-teal-400/40"
                        >
                            <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-teal-50 text-teal-700 dark:bg-teal-400/10 dark:text-teal-300">
                                <GraduationCap className="h-7 w-7" />
                            </div>
                            <h3 className="text-2xl font-black tracking-[-0.03em] text-slate-950 dark:text-white">
                                {edu.degree}
                            </h3>
                            <p className="mt-3 font-bold text-teal-700 dark:text-teal-300">
                                {edu.institution}
                            </p>
                            <p className="mt-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
                                {edu.period}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
