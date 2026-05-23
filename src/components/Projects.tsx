"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Layers, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Projects() {
    const { projects } = portfolioData;

    return (
        <section id="projects" className="section-padding relative overflow-hidden">
            <div className="absolute inset-0 -z-10 tech-texture opacity-40" />
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.35 }}
                    transition={{ duration: 0.5 }}
                    className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
                >
                    <div>
                        <span className="section-eyebrow">
                            <Layers className="h-4 w-4" />
                            Featured Projects
                        </span>
                        <h2 className="mt-6 max-w-3xl text-4xl font-black tracking-[-0.04em] text-slate-950 dark:text-white md:text-5xl">
                            Top Five builds across Android, web dashboards, and backend APIs.
                        </h2>
                    </div>
                    <p className="max-w-sm text-sm font-semibold leading-7 text-slate-500 dark:text-slate-400">
                        Every card opens the GitHub repository with implementation details and source code.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
                    {projects.map((project, index) => {
                        const isLarge = index === 0 || index === 1;

                        return (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.22 }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                className={isLarge ? "lg:col-span-3" : "lg:col-span-2"}
                            >
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block h-full"
                                    aria-label={`Open ${project.title} on GitHub`}
                                >
                                    <article className="glass-panel flex h-full flex-col overflow-hidden rounded-[2rem] transition-all duration-300 hover:-translate-y-2 hover:border-teal-300 hover:shadow-2xl hover:shadow-teal-900/15 dark:hover:border-teal-400/40">
                                        <div className="relative aspect-[16/8.3] overflow-hidden bg-slate-100 dark:bg-slate-800">
                                            <Image
                                                src={project.banner}
                                                alt={`${project.title} banner`}
                                                fill
                                                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/5 to-transparent opacity-70" />
                                            <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/80 px-3 py-1.5 text-xs font-black text-slate-800 shadow-lg backdrop-blur dark:bg-slate-950/70 dark:text-white">
                                                {project.category}
                                            </div>
                                            <div className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-teal-500 text-white shadow-lg shadow-teal-900/20 transition-transform group-hover:rotate-6 group-hover:scale-110">
                                                <ExternalLink className="h-5 w-5" />
                                            </div>
                                        </div>

                                        <div className="flex flex-1 flex-col p-6">
                                            <div className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
                                                <Sparkles className="h-3.5 w-3.5" />
                                                {project.role}
                                            </div>
                                            <h3 className="text-2xl font-black tracking-[-0.03em] text-slate-950 transition-colors group-hover:text-teal-700 dark:text-white dark:group-hover:text-teal-300">
                                                {project.title}
                                            </h3>
                                            <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                                                {project.description}
                                            </p>

                                            <div className="mt-5 flex flex-wrap gap-2">
                                                {project.techStack.slice(0, 4).map((tech) => (
                                                    <span key={tech} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            <ul className="mt-5 space-y-2">
                                                {project.details.slice(0, 2).map((detail) => (
                                                    <li key={detail} className="flex gap-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                                                        <span>{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </article>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
