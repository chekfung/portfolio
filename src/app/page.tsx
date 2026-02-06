import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BackgroundCarousel from "@/components/BackgroundCarousel";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { getSortedPostsData } from "@/lib/posts";

async function getRecentPosts() {
    const allPosts = getSortedPostsData();
    return allPosts.slice(0, 3);
}

export default async function Home() {
    const recentPosts = await getRecentPosts();

    return (
        <main className="min-h-screen relative flex flex-col font-serif">
            {/* 
              Background is handled by globals.css (#8ca883), 
              but we add the carousel here. 
            */}
            <Navigation variant="transparent" />

            {/* Carousel acts as the "Hero Background" but we'll overlay it differently */}
            <div className="fixed inset-0 z-0 h-screen pointer-events-none opacity-50">
                <BackgroundCarousel />
            </div>

            {/* Main Content Container - acts as floating "papers" on the green desk */}
            <div className="relative z-10 flex flex-col gap-12 pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto w-full">

                {/* HERO CARD */}
                <section className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 animate-fade-in-up max-w-6xl mx-auto">

                    {/* Text Content */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-stone-900 drop-shadow-sm">
                            Jason Ho
                        </h1>

                        <div className="bg-stone-900 text-stone-100 px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm mb-8 shadow-md">
                            Ph.D. Candidate @ UT Austin
                        </div>

                        <p className="text-xl md:text-2xl text-stone-100 mb-10 leading-relaxed font-medium drop-shadow-md">
                            Researching ML Accelerators and Neuromorphic Computing.
                        </p>

                        <div className="flex gap-5">
                            <Link
                                href="/resume"
                                className="bg-stone-900 hover:bg-stone-800 hover:-translate-y-0.5 text-white text-lg px-10 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl font-bold tracking-wide flex items-center justify-center gap-2"
                            >
                                View Resume <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Headshot with Professional Border */}
                    <div className="relative group shrink-0">
                        <div className="w-56 h-56 md:w-80 md:h-80 rounded-full border-[6px] border-white/30 shadow-2xl overflow-hidden relative z-10 transition-transform duration-500">
                            <img
                                src="/portfolio/img/me_reduced_size.jpg"
                                alt="Jason Ho"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                </section>


                {/* RECENT UPDATES CARD */}
                <section className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-white/30 pb-6">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-2">Recent Updates</h2>
                            <p className="text-stone-200 font-sans font-medium">Research, life or both!</p>
                        </div>
                        <Link href="/blog" className="hidden md:flex text-white font-bold hover:text-stone-300 items-center gap-2 transition-colors">
                            All Posts <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {recentPosts.length > 0 ? (
                            recentPosts.map((post) => (
                                <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
                                    <article className="bg-white/95 backdrop-blur-sm h-full p-8 rounded-xl border border-stone-200 shadow-md hover:shadow-2xl hover:border-stone-300 transition-all duration-300 flex flex-col transform hover:-translate-y-1">
                                        <div className="flex items-center gap-2 text-xs font-bold text-stone-500 mb-4 uppercase tracking-wider font-sans">
                                            <Calendar size={14} />
                                            {post.date}
                                        </div>
                                        <h3 className="text-xl font-bold text-stone-900 mb-4 group-hover:text-stone-700 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-stone-600 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow ">
                                            {post.excerpt}
                                        </p>
                                        <span className="text-sm font-bold text-stone-900 flex items-center gap-1 group-hover:gap-2 transition-all">
                                            Read more <ArrowRight size={16} />
                                        </span>
                                    </article>
                                </Link>
                            ))
                        ) : (
                            [1, 2, 3].map((i) => (
                                <div key={i} className="bg-stone-50 rounded-xl p-8 h-64 border-2 border-dashed border-stone-300 flex flex-col justify-center items-center text-center opacity-70">
                                    <p className="text-stone-400 mb-2 font-bold">Coming Soon</p>
                                </div>
                            ))
                        )}
                    </div>
                </section>

            </div>

            <Footer />
        </main>
    );
}
