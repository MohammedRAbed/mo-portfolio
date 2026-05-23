import Link from "next/link";
import { Code2, Github, Linkedin, Mail } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
    const { personalInfo } = portfolioData;
    const currentYear = new Date().getFullYear();
    const linkedInUrl = personalInfo.socials.find((social) => social.name === "LinkedIn")?.url ?? "#";
    const githubUrl = personalInfo.socials.find((social) => social.name === "GitHub")?.url ?? "#";
    const whatsappUrl = `https://wa.me/${personalInfo.whatsapp.replace("+", "")}`;
    const contactLinks = [
        { name: "Email", href: `mailto:${personalInfo.email}`, icon: Mail },
        { name: "LinkedIn", href: linkedInUrl, icon: Linkedin },
        { name: "WhatsApp", href: whatsappUrl, icon: SiWhatsapp },
        { name: "GitHub", href: githubUrl, icon: Github },
    ];

    return (
        <footer className="relative overflow-hidden border-t border-teal-200/50 bg-white/70 py-12 backdrop-blur dark:border-white/10 dark:bg-slate-950/80">
            <div className="absolute inset-0 -z-10 tech-texture opacity-40" />
            <div className="container-custom">
                <div className="glass-panel rounded-[2rem] p-6 md:p-8">
                    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                        <Link href="/" className="flex items-center gap-3 text-slate-950 dark:text-white">
                            <span className="grid h-11 w-11 place-items-center rounded-full bg-slate-950 text-teal-300 dark:bg-white dark:text-teal-700">
                                <Code2 className="h-5 w-5" />
                            </span>
                            <span className="text-lg font-black tracking-tight">
                                Mohammed<span className="text-teal-600 dark:text-teal-300">.dev</span>
                            </span>
                        </Link>

                        <div className="text-center">
                            <p className="text-sm font-bold text-slate-600 dark:text-slate-300">
                                © {currentYear} {personalInfo.name}. All rights reserved.
                            </p>
                            <p className="mt-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
                                Made with love ❤️ in Gaza, Palestine.
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            {contactLinks.map((contact) => (
                                <Link
                                    key={contact.name}
                                    href={contact.href}
                                    target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
                                    rel={contact.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                                    className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-teal-600 hover:text-white dark:bg-slate-800 dark:text-slate-300"
                                    aria-label={contact.name}
                                    title={contact.name}
                                >
                                    <contact.icon className="h-5 w-5" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
