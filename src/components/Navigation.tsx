"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { Menu, X, FileText } from "lucide-react";

interface NavigationProps {
    variant?: "transparent" | "solid";
}

export default function Navigation({ variant = "solid" }: NavigationProps) {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={clsx(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 font-sans",
                scrolled
                    ? "bg-[#FAF9F6]/95 backdrop-blur-md py-3.5 border-b border-stone-200 shadow-sm"
                    : "bg-[#FAF9F6]/80 backdrop-blur-sm py-4 border-b border-stone-200/60"
            )}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Link
                        href="/"
                        className="font-serif text-xl md:text-2xl font-bold text-stone-900 hover:text-stone-700 transition-colors z-[101]"
                    >
                        Jason Ho
                    </Link>
                    <span className="hidden sm:inline-block text-xs text-stone-400 font-sans tracking-tight border-l border-stone-300 pl-3">
                        Ph.D. Candidate @ UT Austin
                    </span>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    className="md:hidden text-stone-800 z-[101] p-2 hover:text-stone-600 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-xs font-semibold uppercase tracking-wider text-stone-600 hover:text-stone-900 transition-colors relative py-1"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href="/portfolio/CV_2025_2026.pdf"
                        target="_blank"
                        className="border border-stone-300 hover:border-stone-900 bg-white hover:bg-stone-900 text-stone-700 hover:text-white transition-all duration-200 text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full flex items-center gap-1.5 shadow-xs"
                    >
                        <FileText size={13} />
                        CV / Résumé
                    </a>
                </div>

                {/* Mobile Overlay Menu */}
                <div
                    className={clsx(
                        "fixed inset-0 bg-[#FAF9F6]/98 backdrop-blur-xl transition-all duration-300 md:hidden flex flex-col items-center justify-center gap-8 z-[100]",
                        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    )}
                >
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-serif font-bold text-stone-800 hover:text-stone-600 transition-colors tracking-wide"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href="/portfolio/CV_2025_2026.pdf"
                        target="_blank"
                        onClick={() => setIsOpen(false)}
                        className="mt-4 border border-stone-900 bg-stone-900 text-white px-8 py-3.5 rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-stone-800 transition-all flex items-center gap-2"
                    >
                        <FileText size={18} />
                        CV / Résumé (PDF)
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
