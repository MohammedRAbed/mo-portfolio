import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-jakarta"
});

export const metadata: Metadata = {
    title: "Mohammed Abed | Android & Full-Stack Developer",
    description: "Portfolio of Mohammed Abed, a Software Developer specializing in Android (Kotlin, Jetpack Compose) and Full-Stack Web Development.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <body className={`${inter.variable} ${jakarta.variable} font-sans bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300`}>
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
