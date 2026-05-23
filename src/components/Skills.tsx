"use client";

import { motion } from "framer-motion";
import { Code, Settings } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { skillIcons } from "@/lib/skillIcons";

function SkillPill({ skill }: { skill: string }) {
    const SkillIcon = skillIcons[skill] || Code;

    return (
        <div className="group mx-3 grid h-20 w-20 shrink-0 place-items-center rounded-3xl border border-slate-200 bg-white/80 shadow-lg shadow-slate-900/5 backdrop-blur transition-all hover:-translate-y-1 hover:border-teal-300 hover:bg-teal-50 dark:border-white/10 dark:bg-slate-900/80 dark:hover:border-teal-400/50 dark:hover:bg-teal-400/10" aria-label={skill} title={skill}>
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-slate-100 text-slate-600 transition-colors group-hover:bg-teal-600 group-hover:text-white dark:bg-slate-800 dark:text-slate-300">
                <SkillIcon className="h-8 w-8" />
            </span>
        </div>
    );
}

export default function Skills() {
    const { skillMarquee } = portfolioData;
    const doubledSkills = [...skillMarquee, ...skillMarquee];

    return (
        <section id="skills" className="section-padding relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/70 via-teal-50/40 to-white/60 dark:from-slate-950/60 dark:via-teal-950/20 dark:to-slate-950/60" />
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.35 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto mb-12 max-w-3xl text-center"
                >
                    <span className="section-eyebrow">
                        <Settings className="h-4 w-4" />
                        My Skills
                    </span>
                    <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] text-slate-950 dark:text-white md:text-5xl">
                        A focused stack for mobile, backend, and commerce delivery.
                    </h2>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.55 }}
                className="relative mx-auto max-w-[1500px] overflow-hidden py-4"
            >
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-950" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-50 to-transparent dark:from-slate-950" />
                <div className="marquee-track flex w-max py-3">
                    {doubledSkills.map((skill, index) => (
                        <SkillPill key={`${skill}-${index}`} skill={skill} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
