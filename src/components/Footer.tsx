import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-stone-900 text-stone-300 py-12 border-t border-stone-800">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-serif font-bold mb-8 text-stone-100">Contact</h2>

                <div className="flex justify-center gap-8 mb-8">
                    <a
                        href="https://www.linkedin.com/in/chekfung/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-400 transition-colors transform hover:scale-110"
                    >
                        <Linkedin size={32} />
                    </a>
                    <a
                        href="https://github.com/chekfung"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-400 transition-colors transform hover:scale-110"
                    >
                        <Github size={32} />
                    </a>
                    <a
                        href="mailto:jasonchekfungho@gmail.com"
                        className="hover:text-purple-400 transition-colors transform hover:scale-110"
                    >
                        <Mail size={32} />
                    </a>

                </div>

                <p className="text-stone-500 text-sm mb-2">
                    jasonchekfungho@gmail.com
                </p>
                <p className="text-stone-600 text-xs">
                    © {new Date().getFullYear()} Jason Ho. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
