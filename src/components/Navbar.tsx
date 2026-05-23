"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { portfolioData } from "@/data/portfolioData";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { resumeUrl } = portfolioData.personalInfo;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed left-0 right-0 top-4 z-50 px-3 transition-all duration-300 md:top-5",
                scrolled
                    ? "translate-y-0"
                    : "translate-y-0"
            )}
        >
            <div className="mx-auto max-w-5xl">
                <div
                    className={cn(
                        "glass-panel flex h-16 items-center justify-between rounded-full px-4 transition-all duration-300 md:h-18 md:px-5",
                        scrolled
                            ? "shadow-2xl shadow-teal-900/15 ring-1 ring-teal-400/20"
                            : "shadow-lg shadow-slate-900/5"
                    )}
                >
                    {/* Logo */}
                    <Link
                        href="/"
                        className="group flex items-center gap-2 rounded-full pr-2 text-lg font-black tracking-tight text-slate-900 transition-transform hover:-translate-y-0.5 dark:text-slate-100 md:text-xl"
                    >
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-slate-950 text-teal-300 shadow-lg shadow-teal-600/20 transition-colors group-hover:bg-teal-600 group-hover:text-white dark:bg-white dark:text-teal-700">
                            <Code2 className="h-5 w-5" />
                        </span>
                        <span>Mohammed<span className="text-teal-600 dark:text-teal-400">.dev</span></span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-2 md:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="group relative rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition-all hover:bg-teal-50 hover:text-teal-700 dark:text-slate-300 dark:hover:bg-teal-400/10 dark:hover:text-teal-300"
                            >
                                {link.name}
                                <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 bg-gradient-to-r from-transparent via-teal-500 to-transparent transition-transform group-hover:scale-x-100" />
                            </Link>
                        ))}
                    </div>

                    <div className="hidden items-center gap-3 md:flex">
                        <ThemeSwitcher />
                        <Link
                            href={resumeUrl}
                            target="_blank"
                            className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-slate-900/15 transition-all hover:-translate-y-0.5 hover:bg-teal-600 hover:shadow-teal-600/25 dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-300"
                        >
                            Resume
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-4 md:hidden">
                        <ThemeSwitcher />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="rounded-full p-2 text-slate-600 transition-colors hover:bg-teal-50 hover:text-teal-600 dark:text-slate-300 dark:hover:bg-teal-400/10 dark:hover:text-teal-300"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.98 }}
                        className="glass-panel mt-3 overflow-hidden rounded-3xl md:hidden"
                    >
                        <div className="flex flex-col gap-2 p-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-600 transition-colors hover:bg-teal-50 hover:text-teal-600 dark:text-slate-300 dark:hover:bg-teal-400/10"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href={resumeUrl}
                                target="_blank"
                                onClick={() => setIsOpen(false)}
                                className="w-full rounded-2xl bg-teal-600 px-5 py-3 text-center text-base font-bold text-white transition-colors hover:bg-teal-700"
                            >
                                Resume
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
