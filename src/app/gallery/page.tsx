import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Camera } from "lucide-react";
import { getGalleryImages } from "@/lib/gallery";

export default function Gallery() {
    const images = getGalleryImages();

    return (
        <main className="min-h-screen relative flex flex-col">
            <Navigation variant="solid" />

            <div className="container mx-auto px-6 max-w-6xl py-32 animate-fade-in-up">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-serif font-bold text-stone-100 mb-6 flex items-center justify-center gap-4">
                        <Camera size={48} className="text-stone-200" />
                        Gallery
                    </h1>
                    <p className="text-stone-200 max-w-2xl mx-auto text-lg font-medium">
                        Images of travel, my cat, and other random things I find interesting.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {images.map((img, index) => (
                        <div key={index} className="group relative break-inside-avoid">
                            <div className="relative overflow-hidden rounded-xl shadow-lg border-2 border-white/50 aspect-[4/3] bg-stone-900 group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-500">
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-all duration-300"></div>
                            </div>
                            <p className="mt-3 text-center font-serif text-lg font-bold text-stone-200 group-hover:text-purple-300 transition-colors">
                                {img.label}
                            </p>
                        </div>
                    ))}

                    {/* Show placeholder if no images exist */}
                    {images.length === 0 && (
                        <div className="col-span-full text-center py-20 bg-white/5 rounded-xl border-2 border-dashed border-white/20">
                            <Camera size={48} className="mx-auto text-stone-400 mb-4 opacity-50" />
                            <p className="text-stone-200 font-bold text-xl">No images found in /public/gallery</p>
                            <p className="text-stone-400 mt-2">Add JPG/PNG files to the gallery folder to see them here.</p>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </main>
    );
}
