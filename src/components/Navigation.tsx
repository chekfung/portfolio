"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import clsx from "clsx";

interface NavigationProps {
    variant?: "transparent" | "solid";
}

export default function Navigation({ variant = "transparent" }: NavigationProps) {
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isSolid = variant === "solid" || scrolled;

    return (
        <nav
            className={clsx(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 font-serif tracking-wide",
                isSolid
                    ? "bg-stone-900/95 backdrop-blur-md py-4 shadow-lg border-b border-stone-800"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <Link
                    href="/"
                    className={clsx(
                        "text-2xl font-bold transition-colors z-[101]",
                        isSolid ? "text-stone-100 hover:text-purple-300" : "text-stone-900 hover:text-purple-800"
                    )}
                >
                    Jason Ho
                </Link>

                {/* Links - Always visible, responsive layout */}
                <div className="flex flex-wrap justify-center gap-6 items-center">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={clsx(
                                "text-sm font-semibold uppercase tracking-widest relative group transition-colors",
                                isSolid ? "text-stone-300 hover:text-purple-400" : "text-stone-900 hover:text-purple-800"
                            )}
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-800 transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                    <a
                        href="/CV_2025_2026.pdf"
                        target="_blank"
                        className={clsx(
                            "hidden sm:block border px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all",
                            isSolid
                                ? "border-stone-600 hover:bg-stone-100 hover:text-stone-900 text-stone-200"
                                : "border-stone-900 hover:bg-stone-900 hover:text-stone-100 text-stone-900"
                        )}
                    >
                        Résumé PDF
                    </a>
                </div>
            </div>
        </nav>
    );
}

const links = [
    { href: "/", label: "Home" },
    { href: "/resume", label: "Résumé" },
    { href: "/gallery", label: "Gallery" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];
