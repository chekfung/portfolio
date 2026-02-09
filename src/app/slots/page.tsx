import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SlotMachine from "@/components/SlotMachine";

export default function SlotsPage() {
    return (
        <main className="min-h-screen relative flex flex-col font-serif">
            {/* Background Sage Green */}
            <div className="fixed inset-0 bg-[#8ca883] -z-20"></div>

            <Navigation variant="solid" />

            <div className="flex-grow flex flex-col py-24 px-4 animate-fade-in-up">
                <div className="container mx-auto max-w-4xl text-center mb-8">
                    <h1 className="text-4xl md:text-6xl font-black text-stone-900 drop-shadow-sm tracking-tighter">
                        Easter Egg :O
                    </h1>
                </div>

                <SlotMachine />
            </div>

            <Footer />
        </main>
    );
}
