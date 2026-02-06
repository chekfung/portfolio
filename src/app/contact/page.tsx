import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Github, Linkedin, Twitter, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <main className="min-h-screen relative flex flex-col font-serif">
            <Navigation variant="solid" />

            <div className="flex-grow flex flex-col justify-center items-center px-4 py-32 animate-fade-in-up">
                <div className="max-w-3xl w-full text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-stone-100 mb-6 drop-shadow-md">
                        Contact
                    </h1>
                    <p className="text-xl text-stone-200 mb-12 max-w-xl mx-auto font-medium">
                        Always open to connecting! Please send inquiries to my email first for research and outreach, linkedin for work-related inquiries.
                        Feel free to check out my github as well on all my research and personal projects!
                    </p>

                    <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
                        <a
                            href="mailto:jasonchekfungho@gmail.com"
                            className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center gap-4 shadow-lg text-stone-100"
                        >
                            <div className="bg-stone-900 p-4 rounded-full text-stone-100 group-hover:scale-110 transition-transform">
                                <Mail size={32} />
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold mb-1">Email</h3>
                                <p className="text-stone-300">jasonchekfungho@gmail.com</p>
                            </div>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/chekfung/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center gap-4 shadow-lg text-stone-100"
                        >
                            <div className="bg-[#0077b5] p-4 rounded-full text-white group-hover:scale-110 transition-transform">
                                <Linkedin size={32} />
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold mb-1">LinkedIn</h3>
                                <p className="text-stone-300">Connect professionally</p>
                            </div>
                        </a>

                        <a
                            href="https://github.com/chekfung"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center gap-4 shadow-lg text-stone-100"
                        >
                            <div className="bg-stone-800 p-4 rounded-full text-white group-hover:scale-110 transition-transform">
                                <Github size={32} />
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold mb-1">GitHub</h3>
                                <p className="text-stone-300">Check out my code</p>
                            </div>
                        </a>


                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
