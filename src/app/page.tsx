import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Calendar, FileText, Mail, BookOpen } from "lucide-react";
import { getSortedPostsData } from "@/lib/posts";

async function getRecentPosts() {
    const allPosts = getSortedPostsData();
    return allPosts.slice(0, 3);
}

export default async function Home() {
    const recentPosts = await getRecentPosts();

    return (
        <main className="min-h-screen relative flex flex-col font-sans bg-[#FAF9F6] text-stone-900">
            <Navigation variant="solid" />

            <div className="flex-grow pt-32 pb-20 px-6 max-w-5xl mx-auto w-full">
                {/* HERO SECTION */}
                <section className="flex flex-col md:flex-row items-start gap-10 md:gap-14 pb-16 border-b border-stone-200">
                    
                    {/* Headshot */}
                    <div className="shrink-0 w-full md:w-80">
                        <div className="relative rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 shadow-sm aspect-[4/5] w-full max-w-[320px] mx-auto md:max-w-none">
                            <img
                                src="/portfolio/img/me_reduced_size.jpg"
                                alt="Jason Ho"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* Bio & Information */}
                    <div className="flex flex-col items-start max-w-2xl">
                        <span className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-2 font-sans">
                            Ph.D. Candidate @ UT Austin
                        </span>
                        
                        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 mb-4 leading-tight">
                            Jason Ho
                        </h1>

                        <p className="text-stone-700 text-lg sm:text-xl leading-relaxed mb-8 font-normal">
                            Researching ML Accelerators and Neuromorphic Computing.
                        </p>

                        {/* Research Topics */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {researchTopics.map((topic) => (
                                <span
                                    key={topic}
                                    className="bg-stone-100 border border-stone-200/80 text-stone-700 text-xs font-medium px-3 py-1.5 rounded-md"
                                >
                                    {topic}
                                </span>
                            ))}
                        </div>

                        {/* Quick CTA Links */}
                        <div className="flex flex-wrap items-center gap-4">
                            <a
                                href="/portfolio/CV_2025_2026.pdf"
                                target="_blank"
                                className="bg-stone-900 hover:bg-stone-800 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors flex items-center gap-2 shadow-xs"
                            >
                                <FileText size={16} /> View CV / Résumé
                            </a>
                            <Link
                                href="/resume#publications"
                                className="border border-stone-300 hover:border-stone-800 bg-white hover:bg-stone-50 text-stone-800 text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors flex items-center gap-2"
                            >
                                <BookOpen size={16} /> Publications
                            </Link>
                            <Link
                                href="/contact"
                                className="text-stone-600 hover:text-stone-900 text-sm font-semibold px-4 py-2.5 transition-colors flex items-center gap-1.5"
                            >
                                <Mail size={16} /> Contact
                            </Link>
                        </div>
                    </div>
                </section>

                {/* RECENT RESEARCH UPDATES & NOTES */}
                <section className="pt-16">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                                Recent Updates & Notes
                            </h2>
                            <p className="text-stone-500 text-sm mt-1 font-sans">
                                Research highlights, publications, and occasional writing.
                            </p>
                        </div>
                        <Link
                            href="/blog"
                            className="hidden sm:flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-600 hover:text-stone-900 transition-colors"
                        >
                            All Posts <ArrowRight size={14} />
                        </Link>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {recentPosts.length > 0 ? (
                            recentPosts.map((post) => (
                                <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
                                    <article className="bg-white h-full p-6 rounded-xl border border-stone-200/90 shadow-xs hover:border-stone-400 hover:shadow-md transition-all flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center gap-1.5 text-xs font-medium text-stone-400 mb-3 font-sans">
                                                <Calendar size={13} />
                                                {post.date}
                                            </div>
                                            <h3 className="font-serif text-lg font-bold text-stone-900 mb-3 group-hover:text-stone-700 transition-colors leading-snug">
                                                {post.title}
                                            </h3>
                                            <p className="text-stone-600 text-sm leading-relaxed line-clamp-3 mb-6">
                                                {post.excerpt}
                                            </p>
                                        </div>
                                        <span className="text-xs font-semibold uppercase tracking-wider text-stone-900 group-hover:text-stone-700 flex items-center gap-1 transition-colors">
                                            Read Note <ArrowRight size={13} />
                                        </span>
                                    </article>
                                </Link>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-12 bg-white rounded-xl border border-stone-200">
                                <p className="text-stone-500 text-sm">No notes published yet.</p>
                            </div>
                        )}
                    </div>

                    <div className="mt-8 text-center sm:hidden">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-700 hover:text-stone-900"
                        >
                            View All Posts <ArrowRight size={14} />
                        </Link>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}

const researchTopics = [
    "Neuromorphic Computing",
    "ML Hardware Co-Design",
    "Surrogate Modeling",
    "Analog VLSI",
    "Spiking Neural Networks",
];
