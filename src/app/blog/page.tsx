import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";

export default function Blog() {
    const posts = getSortedPostsData();

    return (
        <main className="min-h-screen relative flex flex-col font-serif">
            <Navigation variant="solid" />

            <div className="flex-grow container mx-auto px-6 max-w-4xl py-32 animate-fade-in-up">
                <h1 className="text-5xl font-bold mb-12 text-stone-100 border-b border-white/20 pb-6 drop-shadow-md">
                    Blog
                </h1>

                <div className="grid gap-8">
                    {posts.map((post) => (
                        <article key={post.slug} className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/10 hover:bg-white/20 transition-all duration-300 group">
                            <Link href={`/blog/${post.slug}`}>
                                <h2 className="text-2xl font-bold mb-3 text-stone-100 group-hover:text-white transition-colors">
                                    {post.title}
                                </h2>
                            </Link>
                            <div className="text-sm text-stone-300 mb-4 font-sans tracking-wide uppercase">{post.date}</div>
                            <p className="text-stone-200 leading-relaxed mb-6 font-medium">
                                {post.excerpt}
                            </p>
                            <Link href={`/blog/${post.slug}`} className="text-stone-100 font-bold hover:text-white flex items-center gap-2">
                                Read more <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </article>
                    ))}

                    {posts.length === 0 && (
                        <div className="text-center py-20 bg-white/5 rounded-xl border-2 border-dashed border-white/20">
                            <p className="text-stone-300 text-xl font-bold">No posts yet.</p>
                            <p className="text-stone-400 mt-2">Check back soon for updates!</p>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </main>
    );
}
