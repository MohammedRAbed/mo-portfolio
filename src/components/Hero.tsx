"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { SiAndroid, SiLaravel, SiWordpress } from "react-icons/si";
import { ArrowRight, Download, Github, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const roleSequence = [
    { title: "Android", icon: SiAndroid, color: "text-[#3DDC84]", glow: "shadow-[#3DDC84]/25" },
    { title: "Backend", icon: SiLaravel, color: "text-[#FF2D20]", glow: "shadow-[#FF2D20]/25" },
    { title: "WordPress", icon: SiWordpress, color: "text-[#21759B]", glow: "shadow-[#21759B]/25" },
];

export default function Hero() {
    const { personalInfo } = portfolioData;
    const githubUrl = personalInfo.socials.find((social) => social.name === "GitHub")?.url ?? "#";
    const [roleIndex, setRoleIndex] = useState(0);
    const [typedRole, setTypedRole] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roleSequence[roleIndex].title;
        const isComplete = typedRole === currentRole;
        const isEmpty = typedRole.length === 0;

        const delay = isComplete && !isDeleting ? 1200 : isDeleting ? 34 : 68;

        const timer = window.setTimeout(() => {
            if (!isDeleting && !isComplete) {
                setTypedRole(currentRole.slice(0, typedRole.length + 1));
                return;
            }

            if (!isDeleting && isComplete) {
                setIsDeleting(true);
                return;
            }

            if (isDeleting && !isEmpty) {
                setTypedRole(currentRole.slice(0, typedRole.length - 1));
                return;
            }

            setIsDeleting(false);
            setRoleIndex((index) => (index + 1) % roleSequence.length);
        }, delay);

        return () => window.clearTimeout(timer);
    }, [isDeleting, roleIndex, typedRole]);

    const activeRole = roleSequence[roleIndex];
    const ActiveRoleIcon = activeRole.icon;

    return (
        <section className="relative flex min-h-screen items-center overflow-hidden px-0 pb-16 pt-32 md:pt-36">
            <div className="absolute inset-0 -z-10 tech-texture opacity-70" />
            <div className="absolute left-1/2 top-24 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-teal-300/20 blur-3xl dark:bg-teal-400/15" />
            <div className="absolute -right-24 bottom-20 -z-10 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-400/10" />

            <div className="container-custom">
                <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, ease: "easeOut" }}
                        className="text-center lg:text-left"
                    >
                        <div className="mb-6 flex justify-center lg:justify-start">
                            <span className="section-eyebrow">
                                <Sparkles className="h-4 w-4" />
                                Available to Hire
                            </span>
                        </div>

                        <h1 className="max-w-5xl whitespace-nowrap text-4xl font-black leading-[0.96] tracking-[-0.06em] text-slate-950 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
                            Mohammed <span className="text-teal-600 dark:text-teal-300">Abed</span>
                        </h1>

                        <div className="mx-auto mt-7 flex min-h-16 max-w-2xl items-center justify-center gap-3 rounded-3xl border border-teal-200/70 bg-white/75 px-5 py-4 shadow-lg shadow-teal-900/5 backdrop-blur dark:border-teal-400/20 dark:bg-slate-900/70 lg:mx-0 lg:justify-start">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={roleIndex}
                                    initial={{ opacity: 0, rotate: -8, scale: 0.75 }}
                                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                    exit={{ opacity: 0, rotate: 8, scale: 0.75 }}
                                    transition={{ duration: 0.22 }}
                                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/70 bg-white shadow-lg dark:border-white/10 dark:bg-slate-950 ${activeRole.color} ${activeRole.glow}`}
                                >
                                    <ActiveRoleIcon className="h-6 w-6" />
                                </motion.span>
                            </AnimatePresence>
                            <span className="role-font text-lg font-bold text-slate-800 dark:text-slate-100 md:text-2xl">
                                {typedRole}
                                <span className="ml-1 inline-block h-7 w-0.5 translate-y-1 bg-teal-500 animate-pulse" />
                                <span className="ml-2 font-sans text-slate-500 dark:text-slate-300">Developer</span>
                            </span>
                        </div>

                        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg lg:mx-0">
                            {personalInfo.bio}
                        </p>

                        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                            <Link
                                href="#projects"
                                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-600 px-8 py-4 text-sm font-black text-white shadow-xl shadow-teal-600/25 transition-all hover:-translate-y-1 hover:bg-teal-700 hover:shadow-teal-600/35 sm:w-auto"
                            >
                                View Projects
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link
                                href={personalInfo.resumeUrl}
                                target="_blank"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-8 py-4 text-sm font-black text-slate-800 shadow-lg shadow-slate-900/5 backdrop-blur transition-all hover:-translate-y-1 hover:border-teal-400 hover:text-teal-700 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:border-teal-400 sm:w-auto"
                            >
                                <Download className="h-4 w-4" />
                                Download CV
                            </Link>
                            <Link
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/github inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white/80 text-slate-800 shadow-lg shadow-slate-900/5 backdrop-blur transition-all hover:w-40 hover:border-slate-900 hover:bg-slate-950 hover:text-white dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:border-teal-400 dark:hover:bg-teal-500 dark:hover:text-slate-950"
                                aria-label="Visit GitHub"
                            >
                                <Github className="h-5 w-5 shrink-0" />
                                <span className="ml-0 max-w-0 whitespace-nowrap text-sm font-black opacity-0 transition-all group-hover/github:ml-2 group-hover/github:max-w-24 group-hover/github:opacity-100">
                                    Visit GitHub
                                </span>
                            </Link>
                        </div>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.94 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
                        className="relative mx-auto w-full max-w-md lg:max-w-lg"
                    >
                        <div className="group relative rounded-[2.5rem] border border-teal-200/60 bg-gradient-to-br from-white/90 via-teal-50/70 to-cyan-50/80 p-5 shadow-2xl shadow-teal-900/15 transition-all duration-500 hover:-translate-y-1 hover:border-teal-400 hover:shadow-teal-500/25 dark:border-teal-400/20 dark:from-slate-900/90 dark:via-slate-900/75 dark:to-teal-950/50 dark:hover:border-teal-300/70 dark:hover:shadow-teal-300/15">
                            <span className="absolute left-0 top-0 h-16 w-16 rounded-tl-[2.5rem] border-l-2 border-t-2 border-teal-500/80 transition-all duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:border-cyan-300" />
                            <span className="absolute right-0 top-0 h-16 w-16 rounded-tr-[2.5rem] border-r-2 border-t-2 border-teal-500/80 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:border-cyan-300" />
                            <span className="absolute bottom-0 left-0 h-16 w-16 rounded-bl-[2.5rem] border-b-2 border-l-2 border-teal-500/80 transition-all duration-500 group-hover:-translate-x-1 group-hover:translate-y-1 group-hover:border-cyan-300" />
                            <span className="absolute bottom-0 right-0 h-16 w-16 rounded-br-[2.5rem] border-b-2 border-r-2 border-teal-500/80 transition-all duration-500 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:border-cyan-300" />
                            <div className="absolute inset-4 rounded-[2rem] border border-white/70 transition-colors duration-500 group-hover:border-teal-300/70 dark:border-white/10" />
                            <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-teal-100 dark:bg-slate-800">
                                <Image
                                    src={personalInfo.avatarImage}
                                    alt={`${personalInfo.name} avatar`}
                                    fill
                                    priority
                                    sizes="(min-width: 1024px) 520px, 90vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
