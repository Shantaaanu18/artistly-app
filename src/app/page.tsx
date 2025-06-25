"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaMicrophoneAlt, FaMusic, FaUserTie, FaHeadphones } from "react-icons/fa";

const categories = [
  { name: "Singers", icon: <FaMicrophoneAlt size={40} className="text-pink-500" /> },
  { name: "DJs", icon: <FaHeadphones size={40} className="text-yellow-500" /> },
  { name: "Dancers", icon: <FaMusic size={40} className="text-green-500" /> },
  { name: "Speakers", icon: <FaUserTie size={40} className="text-blue-500" /> },
];

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-white to-blue-50">
      
      <Image
        src="/logo-a-star.png"
        alt="Artistly Logo"
        width={64}
        height={64}
        className="fixed top-6 left-8 rounded-2xl shadow-xl bg-white p-2 z-50 border border-gray-200"
      />

      
      <div className="w-full flex flex-col items-center justify-center pt-10 pb-4 animate-fade-in-down gap-2">
        <h1 className="text-6xl sm:text-7xl font-extrabold tracking-normal bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-400 text-transparent bg-clip-text drop-shadow-lg select-none pr-4">
          artis<span className="mr-1">t</span><span className="mr-2">ly</span><span className="font-black mr-2">.com</span>
        </h1>
      </div>

      
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <div className="w-full max-w-7xl px-4 flex flex-col items-center">
          <header className="w-full py-10 flex flex-col items-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 text-transparent bg-clip-text animate-fade-in-up text-center">
              Instantly book <span className="font-black">top artists</span> for your event
            </h2>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in-up delay-100 text-center max-w-3xl">
              Discover, connect, and create unforgettable moments with the best talent in the industry.
              <br />
              <span className="font-semibold text-pink-500">Your event, your vibe, your artists.</span>
            </p>
            <Link href="/artists">
              <Button className="px-8 py-4 text-xl rounded-full shadow-lg bg-gradient-to-r from-pink-500 to-yellow-400 hover:from-yellow-400 hover:to-pink-500 transition-all duration-300 animate-bounce">
                Explore Artists
              </Button>
            </Link>
          </header>

          
          <section className="w-full max-w-6xl mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {categories.map((cat, i) => (
              <Link
                key={cat.name}
                href={`/category/${cat.name.toLowerCase()}`}
                className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-8 hover:scale-110 hover:shadow-2xl transition-transform duration-300 cursor-pointer group animate-fade-in-up"
                style={{ animationDelay: `${i * 100 + 300}ms` } as React.CSSProperties}
              >
                <span className="transition-transform duration-300 group-hover:scale-125">{cat.icon}</span>
                <p className="mt-6 text-2xl font-semibold text-gray-700 group-hover:text-pink-500 transition-colors duration-300">{cat.name}</p>
              </Link>
            ))}
          </section>
        </div>
      </div>

      
      <footer className="w-full mt-auto py-8 text-center text-gray-400 text-base">
        &copy; {new Date().getFullYear()} Artistly.com &mdash; Connecting Events & Artists
      </footer>
    </main>
  );
}
