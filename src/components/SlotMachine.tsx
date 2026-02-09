"use client";

import { useState, useEffect, useCallback } from "react";
import confetti from "canvas-confetti";
import { Coins, Trophy, RotateCcw, Info } from "lucide-react";
import clsx from "clsx";

const SYMBOLS = ["7️⃣", "💎", "🔔", "🍊", "🍋", "🍒"];
const WEIGHTS = [5, 10, 15, 20, 25, 25]; // Weights summing to 100
const PAYTABLE = {
    "7️⃣7️⃣7️⃣": 500,
    "💎💎💎": 250,
    "🔔🔔🔔": 100,
    "🍊🍊🍊": 50,
    "🍋🍋🍋": 20,
    "🍒🍒🍒": 10,
    "🍒🍒": 5, // Any two cherries
};

export default function SlotMachine() {
    const [reels, setReels] = useState(["7️⃣", "7️⃣", "7️⃣"]);
    const [isSpinning, setIsSpinning] = useState(false);
    const [balance, setBalance] = useState(100);
    const [lastWin, setLastWin] = useState(0);
    const [message, setMessage] = useState("Spin to win!");

    const getRandomSymbol = useCallback(() => {
        const totalWeight = WEIGHTS.reduce((a, b) => a + b, 0);
        let random = Math.random() * totalWeight;
        for (let i = 0; i < SYMBOLS.length; i++) {
            if (random < WEIGHTS[i]) return SYMBOLS[i];
            random -= WEIGHTS[i];
        }
        return SYMBOLS[SYMBOLS.length - 1];
    }, []);

    const spin = useCallback(() => {
        if (isSpinning || balance < 10) return;

        setIsSpinning(true);
        setBalance((prev) => prev - 10);
        setLastWin(0);
        setMessage("Spinning...");

        // Simulate reel spin animation
        let spinCount = 0;
        const interval = setInterval(() => {
            setReels([
                getRandomSymbol(),
                getRandomSymbol(),
                getRandomSymbol(),
            ]);
            spinCount++;

            if (spinCount > 15) {
                clearInterval(interval);
                finalizeSpin();
            }
        }, 100);
    }, [isSpinning, balance, getRandomSymbol]);

    const finalizeSpin = () => {
        const finalReels = [
            getRandomSymbol(),
            getRandomSymbol(),
            getRandomSymbol(),
        ];
        setReels(finalReels);
        setIsSpinning(false);

        const result = finalReels.join("");
        let winAmount = 0;

        // Check for 3 of a kind
        if (PAYTABLE[result as keyof typeof PAYTABLE]) {
            winAmount = PAYTABLE[result as keyof typeof PAYTABLE];
        }
        // Check for 2 cherries
        else if (finalReels[0] === "🍒" && finalReels[1] === "🍒") {
            winAmount = 5;
        }
        // Small break-even win for any 2 matching symbols (except cherries which are handled)
        else if (finalReels[0] === finalReels[1] || finalReels[1] === finalReels[2]) {
            winAmount = 2; // consolation prize
        }

        if (winAmount > 0) {
            setBalance((prev) => prev + winAmount);
            setLastWin(winAmount);

            if (winAmount >= 50) {
                setMessage(`JACKPOT! +${winAmount}`);
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ["#8ca883", "#FFFFFF", "#1c1917"]
                });
            } else {
                setMessage(`Nice! +${winAmount}`);
                confetti({
                    particleCount: 50,
                    spread: 40,
                    origin: { y: 0.7 }
                });
            }
        } else {
            setMessage("Try again!");
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
            {/* Simple Balance Display */}
            <div className="flex items-center gap-6 mb-8">
                <div className="bg-stone-900 border border-stone-800 px-6 py-3 rounded-xl shadow-xl flex items-center gap-3">
                    <Coins className="text-yellow-500" size={20} />
                    <span className="text-stone-400 text-xs font-bold uppercase tracking-widest">Balance:</span>
                    <span className="text-2xl font-bold text-white tracking-tighter">{balance}</span>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-xl shadow-lg flex items-center gap-3">
                    <Trophy className="text-stone-200" size={20} />
                    <span className="text-stone-200 text-xs font-bold uppercase tracking-widest">Last Win:</span>
                    <span className="text-2xl font-bold text-stone-100 tracking-tighter">{lastWin}</span>
                </div>
            </div>

            {/* The Machine - Scaled Down */}
            <div className="relative p-1 bg-stone-900 rounded-[2rem] shadow-2xl border-4 border-stone-800 w-full max-w-md mb-8">
                <div className="bg-stone-950 rounded-[1.8rem] p-6 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

                    {/* Reels Grid */}
                    <div className="grid grid-cols-3 gap-3 mb-8">
                        {reels.map((symbol, i) => (
                            <div
                                key={i}
                                className={clsx(
                                    "aspect-square bg-gradient-to-b from-stone-900 to-stone-950 rounded-2xl border border-stone-800 shadow-inner flex items-center justify-center text-4xl md:text-5xl transition-all duration-75",
                                    isSpinning && "blur-[1px] scale-95"
                                )}
                            >
                                {symbol}
                            </div>
                        ))}
                    </div>

                    {/* Spin Button */}
                    <div className="flex justify-center">
                        <button
                            onClick={spin}
                            disabled={isSpinning || balance < 10}
                            className={clsx(
                                "group relative px-10 py-4 rounded-xl font-black text-lg uppercase tracking-widest transition-all duration-300",
                                isSpinning || balance < 10
                                    ? "bg-stone-800 text-stone-600 cursor-not-allowed"
                                    : "bg-stone-100 text-stone-900 hover:scale-105 active:scale-95 shadow-lg border border-white/20"
                            )}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                {isSpinning ? "???" : "Spin"}
                                {!isSpinning && (balance >= 10) && <RotateCcw size={18} />}
                            </span>
                        </button>
                    </div>

                    {/* Status Message */}
                    <p className={clsx(
                        "text-center mt-6 font-bold tracking-widest uppercase text-xs h-4",
                        lastWin > 0 ? "text-yellow-400" : "text-stone-500"
                    )}>
                        {message}
                    </p>
                </div>
            </div>

            {/* Simplified Earnings Table */}
            <div className="w-full max-w-sm bg-stone-900/40 backdrop-blur-sm border border-white/5 p-6 rounded-2xl">
                <h3 className="text-xs font-bold text-stone-400 uppercase tracking-[0.2em] mb-4 text-center">Paytable</h3>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                    {Object.entries(PAYTABLE).map(([combo, payout]) => (
                        <div key={combo} className="flex justify-between items-center text-sm border-b border-white/5 pb-1">
                            <span className="tracking-widest">{combo}</span>
                            <span className="font-bold text-stone-200">x{payout}</span>
                        </div>
                    ))}
                    {/* Consolation prize entry */}
                    <div className="flex justify-between items-center text-xs border-b border-white/5 pb-1 italic text-stone-400">
                        <span className="tracking-tight italic">Any 2 Same</span>
                        <span className="font-bold">x2</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
