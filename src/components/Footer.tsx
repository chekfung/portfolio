import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#F0EEE9] text-stone-700 py-12 border-t border-stone-300/80 font-sans">
            <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h3 className="font-serif font-bold text-lg text-stone-900">Jason Ho</h3>
                    <p className="text-stone-500 text-xs mt-0.5">
                        Ph.D. Candidate in ECE @ UT Austin · SLAM Lab
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/chekfung"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-stone-600 hover:text-stone-900 transition-colors flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider"
                    >
                        <Github size={16} /> GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/chekfung/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-stone-600 hover:text-stone-900 transition-colors flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider"
                    >
                        <Linkedin size={16} /> LinkedIn
                    </a>
                    <a
                        href="mailto:jasonchekfungho@gmail.com"
                        className="text-stone-600 hover:text-stone-900 transition-colors flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider"
                    >
                        <Mail size={16} /> Email
                    </a>
                </div>

                <p className="text-stone-400 text-xs">
                    © {new Date().getFullYear()} Jason Ho
                </p>
            </div>
        </footer>
    );
}
