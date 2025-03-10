"use client"; // This is required for client-side interactivity

import { useEffect, useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Navbar2 from "@/components/Navbar2";
import bg1 from "../../public/bg1.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Startexs",
//   description: "Created by Startexs Team",
// };

export default function RootLayout({ children }) {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:text-white`}
      >
        {/* Background Container */}

        <div
          className="fixed pointer-events-none hidden md:block w-40 h-40 rounded-full bg-blue-400 opacity-60 blur-2xl transition-transform duration-75 z-20"
          style={{
            transform: `translate(${cursorPos.x - 80}px, ${cursorPos.y - 80}px)`,
          }}
        ></div>
        
        <div className="hidden dark:block fixed inset-0 -z-10">
          <div
            className="h-[100vh] bg-cover bg-repeat-y "
            style={{ backgroundImage: `url(${bg1.src})` }}
          ></div>
        </div>
        <div className="relative z-10">
          <Navbar2 />
          <main className="min-h-screen">{children}</main>
          {/* <hr className="bg-slate-900"/> */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
