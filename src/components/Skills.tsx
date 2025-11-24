"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Code, Database, Layout, Server, Settings, Terminal } from "lucide-react";

import { skillIcons } from "@/lib/skillIcons";


const iconMap: Record<string, any> = {
    languages: Code,
    frameworks: Layout,
    webAndCms: Server,
    databases: Database,
    tools: Terminal,
};

const labelMap: Record<string, string> = {
    languages: "Languages",
    frameworks: "Frameworks & Libraries",
    webAndCms: "Web & CMS",
    databases: "Databases",
    tools: "Tools & Architecture",
};

export default function Skills() {
    const { skills } = portfolioData;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <section id="skills" className="section-padding bg-slate-50 dark:bg-slate-950">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Settings className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                        <span className="text-sm font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                            My Skills
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">
                        Technical Expertise
                    </h2>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {Object.entries(skills).map(([category, items]) => {
                        const Icon = iconMap[category] || Code;
                        return (
                            <motion.div
                                key={category}
                                variants={item}
                                className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-teal-50 dark:bg-teal-900/30 rounded-xl text-teal-600 dark:text-teal-400">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                                        {labelMap[category]}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    {items.map((skill) => {
                                        const SkillIcon = skillIcons[skill] || Code;
                                        return (
                                            <div
                                                key={skill}
                                                className="group relative flex items-center justify-center p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-300"
                                            >
                                                <SkillIcon className="w-8 h-8 text-slate-600 dark:text-slate-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors" />

                                                {/* Tooltip */}
                                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                                                    {skill}
                                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900 dark:border-t-slate-100" />
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
