"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { User } from "lucide-react";

export default function About() {
    const { personalInfo } = portfolioData;

    return (
        <section id="about" className="section-padding bg-white dark:bg-slate-900 relative overflow-hidden">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <User className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                        <span className="text-sm font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                            About Me
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
                        Passionate about building <span className="text-teal-600 dark:text-teal-400">exceptional</span> digital experiences.
                    </h2>

                    <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                        {personalInfo.bio}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
