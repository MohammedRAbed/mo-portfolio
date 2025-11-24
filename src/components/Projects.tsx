"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { ExternalLink, FolderGit2, Layers } from "lucide-react";
import Link from "next/link";

export default function Projects() {
    const { projects } = portfolioData;

    return (
        <section id="projects" className="section-padding bg-white dark:bg-slate-900">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Layers className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                        <span className="text-sm font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                            Portfolio
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">
                        Featured Projects
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
                        >
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-3 bg-teal-50 dark:bg-teal-900/30 rounded-xl text-teal-600 dark:text-teal-400 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                        <FolderGit2 className="w-6 h-6" />
                                    </div>
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        className="text-slate-400 dark:text-slate-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </Link>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-600 dark:text-slate-300 mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.techStack.slice(0, 3).map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-md"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.techStack.length > 3 && (
                                            <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-md">
                                                +{project.techStack.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    <ul className="space-y-2">
                                        {project.details.slice(0, 2).map((detail, i) => (
                                            <li key={i} className="text-sm text-slate-500 dark:text-slate-400 flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-1.5 shrink-0" />
                                                <span className="line-clamp-2">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
