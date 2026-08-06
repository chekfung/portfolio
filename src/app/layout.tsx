import type { Metadata } from "next";
import { Libre_Baskerville, Inter } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Jason Ho — PhD Candidate @ UT Austin",
  description: "Personal website & research portfolio of Jason Ho. PhD candidate in ECE at UT Austin specializing in ML accelerators, analog surrogate modeling, and neuromorphic architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${libreBaskerville.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-[#FAF9F6] text-stone-900 selection:bg-stone-800 selection:text-white">
        {children}
      </body>
    </html>
  );
}
