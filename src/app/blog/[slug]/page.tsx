import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getPostData, getSortedPostsData } from "@/lib/posts";

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    // Await params in newer Next.js versions if needed, but for now strict access
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    const post = getPostData(slug);

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <main className="min-h-screen relative flex flex-col font-serif">
            <Navigation variant="solid" />

            <div className="flex-grow container mx-auto px-6 max-w-3xl py-32 animate-fade-in-up">
                <article className="bg-white/95 backdrop-blur-md p-8 md:p-12 rounded-xl shadow-2xl border border-white/20">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-stone-900 leading-tight">
                        {post.title}
                    </h1>
                    <div className="text-stone-500 mb-8 pb-6 border-b border-stone-200 font-sans font-medium tracking-wide uppercase text-sm">
                        {post.date}
                    </div>

                    <div className="prose prose-lg prose-stone max-w-none text-stone-800 leading-loose">
                        {/* We are using dangerouslySetInnerHTML or just rendering children if it's already parsed? 
                            The current code just renders {post.content} which assumes it's raw text? 
                            Wait, the previous code used whitespace-pre-wrap on post.content.
                            If it's markdown, we should render it properly, but for now maintaining existing behavior 
                            which seems to be raw text treated as pre-wrap?
                            
                            Ah, looked at previous file:
                            <div className="whitespace-pre-wrap ...">{post.content}</div>
                            
                            I'll keep that but style it better.
                        */}
                        <div className="whitespace-pre-wrap font-serif">
                            {post.content}
                        </div>
                    </div>
                </article>
            </div>

            <Footer />
        </main>
    );
}
