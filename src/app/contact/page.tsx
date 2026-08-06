import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
    return (
        <main className="min-h-screen relative flex flex-col font-sans bg-[#FAF9F6] text-stone-900">
            <Navigation variant="solid" />

            <div className="flex-grow flex flex-col justify-center items-center px-6 py-32">
                <div className="max-w-2xl w-full text-center">
                    <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 mb-4">
                        Contact & Links
                    </h1>
                    <p className="text-stone-600 text-base mb-10 max-w-xl mx-auto leading-relaxed">
                        Always open to connecting! Please send inquiries to my email first for research and outreach, linkedin for work-related inquiries. Feel free to check out my github as well on all my research and personal projects!
                    </p>

                    <div className="grid gap-4 sm:grid-cols-3 max-w-2xl mx-auto">
                        <a
                            href="mailto:jasonchekfungho@gmail.com"
                            className="bg-white border border-stone-200/90 p-6 rounded-xl hover:border-stone-400 hover:shadow-sm transition-all group flex flex-col items-center gap-3 text-stone-900"
                        >
                            <div className="bg-stone-100 p-3 rounded-full text-stone-800 group-hover:bg-stone-900 group-hover:text-white transition-colors">
                                <Mail size={22} />
                            </div>
                            <div className="text-center">
                                <h3 className="font-semibold text-sm mb-0.5">Email</h3>
                                <p className="text-stone-500 text-xs truncate max-w-[160px]">jasonchekfungho@gmail.com</p>
                            </div>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/chekfung/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white border border-stone-200/90 p-6 rounded-xl hover:border-stone-400 hover:shadow-sm transition-all group flex flex-col items-center gap-3 text-stone-900"
                        >
                            <div className="bg-stone-100 p-3 rounded-full text-stone-800 group-hover:bg-[#0077b5] group-hover:text-white transition-colors">
                                <Linkedin size={22} />
                            </div>
                            <div className="text-center">
                                <h3 className="font-semibold text-sm mb-0.5">LinkedIn</h3>
                                <p className="text-stone-500 text-xs">/in/chekfung</p>
                            </div>
                        </a>

                        <a
                            href="https://github.com/chekfung"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white border border-stone-200/90 p-6 rounded-xl hover:border-stone-400 hover:shadow-sm transition-all group flex flex-col items-center gap-3 text-stone-900"
                        >
                            <div className="bg-stone-100 p-3 rounded-full text-stone-800 group-hover:bg-stone-900 group-hover:text-white transition-colors">
                                <Github size={22} />
                            </div>
                            <div className="text-center">
                                <h3 className="font-semibold text-sm mb-0.5">GitHub</h3>
                                <p className="text-stone-500 text-xs">@chekfung</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
