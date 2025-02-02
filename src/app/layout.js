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

export const metadata = {
  title: "Startexs",
  description: "Created by Startexs Team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {/* Background Container */}
        <div className="fixed inset-0 -z-10">
          <div
            className="h-[100vh] bg-cover bg-repeat-y "
            style={{ backgroundImage: `url(${bg1.src})` }}
          ></div>
        </div>

        {/* Content */}
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
