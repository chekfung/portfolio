"use client";

import { useState, useCallback } from "react";
import confetti from "canvas-confetti";
import { Coins, Trophy, RotateCcw } from "lucide-react";
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
    const [message, setMessage] = useState("Press spin to play");

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
        }, 80);
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

        if (PAYTABLE[result as keyof typeof PAYTABLE]) {
            winAmount = PAYTABLE[result as keyof typeof PAYTABLE];
        } else if (finalReels[0] === "🍒" && finalReels[1] === "🍒") {
            winAmount = 5;
        } else if (finalReels[0] === finalReels[1] || finalReels[1] === finalReels[2]) {
            winAmount = 2;
        }

        if (winAmount > 0) {
            setBalance((prev) => prev + winAmount);
            setLastWin(winAmount);

            if (winAmount >= 50) {
                setMessage(`Jackpot! +${winAmount} tokens`);
                confetti({
                    particleCount: 120,
                    spread: 60,
                    origin: { y: 0.6 },
                    colors: ["#1c1917", "#525252", "#a8a29e"]
                });
            } else {
                setMessage(`Win! +${winAmount} tokens`);
                confetti({
                    particleCount: 40,
                    spread: 35,
                    origin: { y: 0.7 }
                });
            }
        } else {
            setMessage("Try again!");
        }
    };

    return (
        <div className="w-full max-w-md mx-auto flex flex-col items-center font-sans">
            {/* Balance & Stats Header */}
            <div className="flex items-center gap-4 mb-6 w-full justify-between">
                <div className="bg-white border border-stone-200 px-4 py-2 rounded-lg flex items-center gap-2 text-stone-800 shadow-2xs">
                    <Coins className="text-stone-700" size={16} />
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">Balance:</span>
                    <span className="text-base font-bold font-mono text-stone-900">{balance}</span>
                </div>

                <div className="bg-white border border-stone-200 px-4 py-2 rounded-lg flex items-center gap-2 text-stone-800 shadow-2xs">
                    <Trophy className="text-stone-700" size={16} />
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">Last Win:</span>
                    <span className="text-base font-bold font-mono text-stone-900">+{lastWin}</span>
                </div>
            </div>

            {/* Main Machine Container */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm w-full mb-6 text-center">
                {/* Reels Grid */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                    {reels.map((symbol, i) => (
                        <div
                            key={i}
                            className={clsx(
                                "aspect-square bg-stone-50 rounded-xl border border-stone-200 flex items-center justify-center text-4xl select-none transition-transform duration-75",
                                isSpinning && "scale-95 opacity-80"
                            )}
                        >
                            {symbol}
                        </div>
                    ))}
                </div>

                {/* Spin Button */}
                <button
                    onClick={spin}
                    disabled={isSpinning || balance < 10}
                    className={clsx(
                        "w-full py-3 px-6 rounded-xl font-semibold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xs",
                        isSpinning || balance < 10
                            ? "bg-stone-200 text-stone-400 cursor-not-allowed"
                            : "bg-stone-900 text-white hover:bg-stone-800 active:scale-98"
                    )}
                >
                    <RotateCcw size={15} className={clsx(isSpinning && "animate-spin")} />
                    {isSpinning ? "Spinning..." : "Spin (10 Tokens)"}
                </button>

                {/* Message */}
                <p className="text-xs font-semibold uppercase tracking-wider mt-4 h-4 text-stone-500">
                    {message}
                </p>
            </div>

            {/* Paytable */}
            <div className="w-full bg-white border border-stone-200/90 p-5 rounded-xl text-stone-700 text-xs">
                <h3 className="font-semibold text-stone-900 uppercase tracking-wider text-center mb-3 text-[11px]">
                    Paytable Summary
                </h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 font-mono">
                    {Object.entries(PAYTABLE).map(([combo, payout]) => (
                        <div key={combo} className="flex justify-between items-center border-b border-stone-100 pb-1">
                            <span>{combo}</span>
                            <span className="font-semibold text-stone-900">x{payout}</span>
                        </div>
                    ))}
                    <div className="flex justify-between items-center border-b border-stone-100 pb-1 text-stone-500">
                        <span>Any 2 Same</span>
                        <span className="font-semibold text-stone-900">x2</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
