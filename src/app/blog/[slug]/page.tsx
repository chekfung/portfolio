import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    const post = getPostData(slug);

    if (!post) {
        return (
            <main className="min-h-screen flex flex-col font-sans bg-[#FAF9F6] text-stone-900">
                <Navigation variant="solid" />
                <div className="flex-grow flex items-center justify-center py-32">
                    <p className="text-stone-500 font-medium">Post not found.</p>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main className="min-h-screen relative flex flex-col font-sans bg-[#FAF9F6] text-stone-900">
            <Navigation variant="solid" />

            <div className="flex-grow max-w-3xl mx-auto w-full px-6 pt-32 pb-24">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-500 hover:text-stone-900 transition-colors mb-8"
                >
                    <ArrowLeft size={14} /> Back to Blog
                </Link>

                <article className="bg-white border border-stone-200 p-8 md:p-12 rounded-2xl shadow-xs">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4">
                        <Calendar size={13} />
                        {post.date}
                    </div>

                    <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-8 leading-snug">
                        {post.title}
                    </h1>

                    <div className="border-t border-stone-200 pt-8">
                        <div className="whitespace-pre-wrap font-sans text-stone-800 text-base leading-relaxed space-y-4">
                            {post.content}
                        </div>
                    </div>
                </article>
            </div>

            <Footer />
        </main>
    );
}
