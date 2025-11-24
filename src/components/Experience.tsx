"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
    const { experience } = portfolioData;

    return (
        <section id="experience" className="section-padding bg-slate-50 dark:bg-slate-950">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Briefcase className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                        <span className="text-sm font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                            Career Path
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">
                        Work Experience
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto relative">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 -translate-x-1/2 hidden md:block" />

                    <div className="space-y-12">
                        {experience.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-teal-600 rounded-full border-4 border-white dark:border-slate-900 shadow-sm -translate-x-[5px] md:-translate-x-1/2 mt-1.5 hidden md:block" />

                                {/* Content */}
                                <div className="flex-1 md:w-1/2">
                                    <div className={`bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 relative ${index % 2 === 0 ? "md:text-left" : "md:text-right"
                                        }`}>
                                        <div className={`flex items-center gap-2 text-sm text-teal-600 dark:text-teal-400 font-medium mb-2 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                                            }`}>
                                            <Calendar className="w-4 h-4" />
                                            {job.period}
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                                            {job.role}
                                        </h3>
                                        <div className="text-slate-600 dark:text-slate-300 font-medium mb-4">
                                            {job.company}
                                        </div>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                            {job.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Empty Space for alignment */}
                                <div className="flex-1 md:w-1/2 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
