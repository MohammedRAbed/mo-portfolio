import type { Metadata } from "next";
import { JetBrains_Mono, Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "@/components/Providers";

const merriweather = Merriweather({
    subsets: ["latin"],
    weight: ["300", "400", "700", "900"],
    variable: "--font-merriweather",
});

const jetbrains = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains",
});

export const metadata: Metadata = {
    title: "Mohammed Abed | Android, Backend & WordPress Developer",
    description: "Portfolio of Mohammed Abed, a Software Developer building Android apps, Laravel/Node.js backends, and WordPress commerce platforms.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <body className={`${merriweather.variable} ${merriweather.className} ${jetbrains.variable} bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300`}>
                <Providers>
                    <Navbar />
                    <main className="min-h-screen">
                        {children}
                    </main>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
