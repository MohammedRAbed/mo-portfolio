import { portfolioData } from "@/data/portfolioData";
import { Code2 } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const { personalInfo } = portfolioData;
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <Code2 className="w-6 h-6 text-teal-600" />
                        <span className="font-bold text-lg text-slate-900 dark:text-slate-100">
                            Mohammed<span className="text-teal-600 dark:text-teal-400">.dev</span>
                        </span>
                    </div>

                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                        © {currentYear} {personalInfo.name}. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4">
                        {personalInfo.socials.map((social) => (
                            <Link
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 dark:text-slate-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                                aria-label={social.name}
                            >
                                <social.icon className="w-5 h-5" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
