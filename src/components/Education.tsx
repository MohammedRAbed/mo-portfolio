"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { GraduationCap } from "lucide-react";

export default function Education() {
    const { education } = portfolioData;

    return (
        <section id="education" className="section-padding bg-white dark:bg-slate-900">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <GraduationCap className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                        <span className="text-sm font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                            Academic Background
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">
                        Education
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center hover:border-teal-200 dark:hover:border-teal-800 transition-colors"
                        >
                            <div className="p-4 bg-white dark:bg-slate-900 rounded-full shadow-sm mb-6">
                                <GraduationCap className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                                {edu.degree}
                            </h3>
                            <div className="text-teal-600 dark:text-teal-400 font-medium mb-2">
                                {edu.institution}
                            </div>
                            <div className="text-slate-500 dark:text-slate-400 text-sm">
                                {edu.period}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
