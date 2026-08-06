import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SlotMachine from "@/components/SlotMachine";

export default function SlotsPage() {
    return (
        <main className="min-h-screen relative flex flex-col font-sans bg-[#FAF9F6] text-stone-900">
            <Navigation variant="solid" />

            <div className="flex-grow flex flex-col items-center justify-center py-32 px-6">
                <div className="max-w-xl mx-auto text-center mb-8">
                    <span className="text-xs font-semibold uppercase tracking-widest text-stone-500 mb-2 block font-sans">
                        Unlisted Easter Egg
                    </span>
                    <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-2">
                        Terminal Slots
                    </h1>
                    <p className="text-stone-600 text-sm">
                        A small interactive side project built into the portfolio. Spin to test your luck!
                    </p>
                </div>

                <SlotMachine />
            </div>

            <Footer />
        </main>
    );
}
