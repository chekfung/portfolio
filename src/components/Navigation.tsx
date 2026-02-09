"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { Menu, X, FileText } from "lucide-react";

interface NavigationProps {
    variant?: "transparent" | "solid";
}

export default function Navigation({ variant = "transparent" }: NavigationProps) {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

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
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link
                    href="/"
                    className={clsx(
                        "text-2xl md:text-3xl font-bold transition-colors z-[101]",
                        isSolid ? "text-stone-100 hover:text-stone-300" : "text-stone-100 hover:text-stone-300 drop-shadow-md"
                    )}
                >
                    Jason Ho
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-stone-100 z-[101] p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-10">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={clsx(
                                "text-sm font-bold uppercase tracking-[0.2em] relative group transition-colors",
                                isSolid ? "text-stone-300 hover:text-stone-100" : "text-stone-100/90 hover:text-white drop-shadow-sm"
                            )}
                        >
                            {link.label}
                            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                    <a
                        href="/portfolio/CV_2025_2026.pdf"
                        target="_blank"
                        className={clsx(
                            "border-2 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2",
                            isSolid
                                ? "border-stone-100 bg-stone-100 text-stone-900 hover:bg-transparent hover:text-stone-100"
                                : "border-white bg-white text-stone-900 hover:bg-transparent hover:text-white"
                        )}
                    >
                        <FileText size={14} />
                        Résumé PDF
                    </a>
                </div>

                {/* Mobile Overlay Menu */}
                <div
                    className={clsx(
                        "fixed inset-0 bg-stone-950/98 backdrop-blur-xl transition-all duration-500 md:hidden flex flex-col items-center justify-center gap-8",
                        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    )}
                >
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-3xl font-bold text-stone-100 hover:text-stone-400 transition-colors tracking-widest uppercase"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href="/portfolio/CV_2025_2026.pdf"
                        target="_blank"
                        onClick={() => setIsOpen(false)}
                        className="mt-4 border-2 border-stone-100 text-stone-100 px-8 py-4 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-stone-100 hover:text-stone-900 transition-all flex items-center gap-3"
                    >
                        <FileText size={20} />
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
