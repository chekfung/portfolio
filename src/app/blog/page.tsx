import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export default function Blog() {
    const posts = getSortedPostsData();

    return (
        <main className="min-h-screen relative flex flex-col font-sans bg-[#FAF9F6] text-stone-900">
            <Navigation variant="solid" />

            <div className="flex-grow max-w-3xl mx-auto w-full px-6 pt-32 pb-24">
                <div className="border-b border-stone-300 pb-8 mb-12">
                    <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 mb-3">
                        Blog & Notes
                    </h1>
                    <p className="text-stone-600 text-base">
                        Writing on computer architecture, machine learning research, and technical side projects.
                    </p>
                </div>

                <div className="space-y-6">
                    {posts.map((post) => (
                        <article key={post.slug} className="bg-white border border-stone-200/90 p-8 rounded-xl hover:border-stone-400 hover:shadow-xs transition-all group">
                            <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
                                <Calendar size={13} />
                                {post.date}
                            </div>
                            <Link href={`/blog/${post.slug}`}>
                                <h2 className="font-serif text-2xl font-bold text-stone-900 group-hover:text-stone-700 transition-colors mb-3 leading-snug">
                                    {post.title}
                                </h2>
                            </Link>
                            <p className="text-stone-600 text-base leading-relaxed mb-6">
                                {post.excerpt}
                            </p>
                            <Link href={`/blog/${post.slug}`} className="text-xs font-semibold uppercase tracking-wider text-stone-900 group-hover:text-stone-700 inline-flex items-center gap-1.5 transition-colors">
                                Read Note <ArrowRight size={13} />
                            </Link>
                        </article>
                    ))}

                    {posts.length === 0 && (
                        <div className="text-center py-16 bg-white rounded-xl border border-stone-200">
                            <p className="text-stone-500 font-medium">No posts published yet.</p>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </main>
    );
}
