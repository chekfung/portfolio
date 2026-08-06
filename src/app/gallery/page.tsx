import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Camera } from "lucide-react";
import { getGalleryImages } from "@/lib/gallery";

export default function Gallery() {
    const images = getGalleryImages();

    return (
        <main className="min-h-screen relative flex flex-col font-sans bg-[#FAF9F6] text-stone-900">
            <Navigation variant="solid" />

            <div className="flex-grow max-w-5xl mx-auto w-full px-6 pt-32 pb-24">
                <div className="border-b border-stone-300 pb-8 mb-12 text-center md:text-left">
                    <h1 className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 mb-3 flex items-center justify-center md:justify-start gap-3">
                        <Camera size={36} className="text-stone-700" />
                        Gallery
                    </h1>
                    <p className="text-stone-600 text-base max-w-xl">
                        A small collection of photos from travel, research trips, my cat, and everyday life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((img, index) => (
                        <div key={index} className="group flex flex-col bg-white border border-stone-200/90 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all">
                            <div className="relative overflow-hidden aspect-[4/3] bg-stone-100">
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-103"
                                />
                            </div>
                            <div className="p-4 border-t border-stone-100">
                                <p className="font-serif text-sm font-bold text-stone-800 text-center">
                                    {img.label}
                                </p>
                            </div>
                        </div>
                    ))}

                    {images.length === 0 && (
                        <div className="col-span-full text-center py-16 bg-white rounded-xl border border-stone-200">
                            <Camera size={40} className="mx-auto text-stone-400 mb-3 opacity-60" />
                            <p className="text-stone-800 font-semibold text-base">No images found in gallery.</p>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </main>
    );
}
