"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";

// TODO: Change this to include other backgorund images I want

const images = [
    "/portfolio/img/lighthouse.jpg",
    // Add more background images here as you add them to public/img
    // "/img/mountain.jpg", 
];

export default function BackgroundCarousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            {images.map((src, index) => (
                <div
                    key={src}
                    className={clsx(
                        "absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out transform scale-105",
                        index === currentImageIndex ? "opacity-100" : "opacity-0"
                    )}
                    style={{ backgroundImage: `url('${src}')` }}
                />
            ))}
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-slate-900/90 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-black/20"></div>
        </div>
    );
}
