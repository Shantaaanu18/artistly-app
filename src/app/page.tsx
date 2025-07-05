"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaMicrophoneAlt, FaMusic, FaUserTie, FaHeadphones } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import artists from "@/app/data/artists.json";

const categories = [
  { name: "Singers", icon: <FaMicrophoneAlt size={40} className="text-pink-500" /> },
  { name: "DJs", icon: <FaHeadphones size={40} className="text-yellow-500" /> },
  { name: "Dancers", icon: <FaMusic size={40} className="text-green-500" /> },
  { name: "Speakers", icon: <FaUserTie size={40} className="text-blue-500" /> },
];

export default function HomePage() {
  
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const heroRef = useRef<HTMLDivElement | null>(null);
  
  const headline = "Discover and book the perfect celebrity for your event";
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    setTyped("");
    const interval = setInterval(() => {
      if (i < headline.length) {
        setTyped(headline.substring(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setParallax({ x: (x - 50) / 10, y: (y - 50) / 10 });
      setSpotlight({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Add this for static random brands
  const [brandPartners] = useState(() => [
    { src: '/brands/google.png', alt: 'Google' },
    { src: '/brands/spotify.png', alt: 'Spotify' },
    { src: '/brands/microsoft.png', alt: 'Microsoft' }
  ]);

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 via-yellow-50 to-blue-100">
      
      <nav className="w-full bg-white/60 backdrop-blur-lg shadow-lg fixed top-0 left-0 z-50 flex items-center justify-between px-8 py-4 border-b border-white/30">
        <div className="flex items-center gap-3">
          {/* <span className="text-3xl select-none">🎤</span> */}
          <span className="text-2xl font-extrabold bg-gradient-to-r from-pink-600 via-orange-400 to-yellow-400 text-transparent bg-clip-text select-none tracking-tight">Aartistly.com</span>
        </div>
        <ul className="flex items-center gap-8 text-lg font-semibold text-gray-700">
          {[
            { label: 'Home', href: '/' },
            { label: 'Celebrities', href: '/artists' },
            { label: 'Services', href: '#services' },
            { label: 'Gallery', href: '#gallery' },
            { label: 'Hire A Celebrity', href: '/onboarding' },
          ].map(link => (
            <li key={link.label} className="relative group">
              <Link href={link.href} className="transition-colors duration-200">
                {link.label}
                <span className="block h-0.5 bg-gradient-to-r from-pink-500 to-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full" />
              </Link>
            </li>
          ))}
          <li className="relative group">
            <span className="cursor-pointer">Category</span>
            <ul className="absolute left-0 mt-2 bg-white/90 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity min-w-[160px] backdrop-blur-md border border-pink-100">
              <li><Link href="/category/singers" className="block px-4 py-2 hover:bg-pink-100">Singers</Link></li>
              <li><Link href="/category/djs" className="block px-4 py-2 hover:bg-pink-100">DJs</Link></li>
              <li><Link href="/category/dancers" className="block px-4 py-2 hover:bg-pink-100">Dancers</Link></li>
              <li><Link href="/category/speakers" className="block px-4 py-2 hover:bg-pink-100">Speakers</Link></li>
            </ul>
          </li>
        </ul>
      </nav>

      
      <section
        ref={heroRef}
        className="relative w-full flex-1 flex items-center justify-center min-h-[80vh] pt-24 pb-8 overflow-hidden select-none bg-gradient-to-br from-pink-100 via-yellow-50 to-blue-100"
        style={{ cursor: "pointer" }}
      >
        <Image
          src="/Colourful Stage Performance in Red Dress.png"
          alt="Colorful stage performance with artist in red dress"
          fill
          className="object-cover object-center md:object-[center_40%] z-0 transition-transform duration-300"
          style={{ transform: `scale(1.04) translate(${parallax.x * 2}px, ${parallax.y * 2}px)` }}
          priority
        />
        {/* Subtle bottom-up Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-pink-900/20 to-transparent" />
        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center text-center w-full px-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white drop-shadow-[0_4px_32px_rgba(255,0,128,0.3)]">
            Discover and book the <span className="underline decoration-pink-400 decoration-4">perfect celebrity</span> <br />
            for your event
          </h1>
          <p className="text-lg sm:text-2xl text-white/90 font-medium mb-8 drop-shadow">
            India's #1 platform to connect with top artists, speakers, and performers for unforgettable experiences.
          </p>
          <a
            href="/artists"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 text-white font-bold text-xl shadow-lg hover:scale-105 transition-transform"
          >
            Explore Celebrities
          </a>
        </div>
      </section>

      {/* Categories and rest of the content */}
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

          {/* Categories */}
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

      {/* How It Works Section */}
      <section className="w-full bg-gradient-to-r from-yellow-50 via-pink-50 to-blue-50 py-16 mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 text-transparent bg-clip-text">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-pink-100 rounded-full p-5 mb-4"><span className="text-3xl">🔍</span></div>
              <h3 className="font-bold text-lg mb-2">Search</h3>
              <p className="text-gray-600 text-center">Browse top celebrities and artists for your event.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-yellow-100 rounded-full p-5 mb-4"><span className="text-3xl">💬</span></div>
              <h3 className="font-bold text-lg mb-2">Connect</h3>
              <p className="text-gray-600 text-center">Chat and discuss your requirements directly.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 rounded-full p-5 mb-4"><span className="text-3xl">📅</span></div>
              <h3 className="font-bold text-lg mb-2">Book</h3>
              <p className="text-gray-600 text-center">Securely book your favorite celebrity for your date.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 rounded-full p-5 mb-4"><span className="text-3xl">🎉</span></div>
              <h3 className="font-bold text-lg mb-2">Enjoy</h3>
              <p className="text-gray-600 text-center">Experience an unforgettable event with top talent!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Celebrities Carousel */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 text-transparent bg-clip-text drop-shadow-lg">Featured Celebrities</h2>
          <div className="overflow-x-auto flex gap-8 pb-4">
            {artists.slice(0, 8).map((artist) => (
              <div
                key={artist.id}
                className="min-w-[260px] bg-gradient-to-br from-pink-50 via-yellow-50 to-blue-50 rounded-2xl shadow-lg p-6 flex flex-col items-center border border-pink-100 hover:shadow-2xl hover:scale-105 transition-transform duration-300 relative group"
              >
                <img
                  src={artist.photo}
                  alt={artist.name}
                  className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-pink-300 group-hover:border-yellow-400 transition"
                />
                <span className="absolute top-4 right-4 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">{artist.category}</span>
                <h3 className="font-bold text-lg mb-1 text-center group-hover:text-pink-600 transition-colors">{artist.name}</h3>
                <p className="text-gray-500 text-sm text-center mb-2 line-clamp-3">{artist.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 bg-gradient-to-r from-blue-50 via-pink-50 to-yellow-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 text-transparent bg-clip-text">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1,2,3].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
                <img src={`https://randomuser.me/api/portraits/women/${i+20}.jpg`} alt="User" className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-yellow-400" />
                <p className="text-gray-700 text-center mb-2">"This platform made booking a celebrity for our event so easy and fun! Highly recommended."</p>
                <span className="font-bold text-pink-600">User {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 text-transparent bg-clip-text">Why Choose Artistly?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-3">✅</span>
              <h3 className="font-bold mb-2">Verified Artists</h3>
              <p className="text-gray-600 text-center">All celebrities are verified for quality and reliability.</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-3">🔒</span>
              <h3 className="font-bold mb-2">Secure Booking</h3>
              <p className="text-gray-600 text-center">Your payments and bookings are safe and protected.</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-3">💡</span>
              <h3 className="font-bold mb-2">Personalized Support</h3>
              <p className="text-gray-600 text-center">Our team helps you at every step of your booking journey.</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl mb-3">🌟</span>
              <h3 className="font-bold mb-2">Unforgettable Events</h3>
              <p className="text-gray-600 text-center">We help you create magical, memorable experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 bg-gradient-to-r from-yellow-50 via-pink-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 text-transparent bg-clip-text">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <details className="bg-white rounded-xl shadow p-4">
              <summary className="font-semibold cursor-pointer">How do I book a celebrity?</summary>
              <p className="mt-2 text-gray-600">Simply search, connect, and book directly through our platform. Our team is here to help if you need assistance!</p>
            </details>
            <details className="bg-white rounded-xl shadow p-4">
              <summary className="font-semibold cursor-pointer">Is my payment secure?</summary>
              <p className="mt-2 text-gray-600">Yes, all payments are processed securely and your information is protected.</p>
            </details>
            <details className="bg-white rounded-xl shadow p-4">
              <summary className="font-semibold cursor-pointer">Can I get a custom quote?</summary>
              <p className="mt-2 text-gray-600">Absolutely! Contact us with your requirements and we'll provide a personalized quote.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="w-full py-16 bg-gradient-to-r from-pink-500 via-yellow-400 to-orange-400 flex items-center justify-center">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">Ready to make your event unforgettable?</h2>
          <p className="text-xl text-white mb-8">Book your favorite celebrity now and create memories that last a lifetime!</p>
          <a href="/artists" className="inline-block bg-white text-pink-600 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-pink-100 transition">Book Now</a>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="w-full py-16 bg-white flex items-center justify-center">
        <div className="max-w-xl w-full px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 text-transparent bg-clip-text">Stay in the Loop</h2>
          <p className="text-gray-600 mb-6">Subscribe to our newsletter for the latest updates and exclusive offers.</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400" />
            <button type="submit" className="bg-pink-500 text-white font-bold px-8 py-3 rounded-lg hover:bg-pink-600 transition">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full mt-auto py-8 text-center text-gray-400 text-base">
        &copy; {new Date().getFullYear()} Artistly.com &mdash; Connecting Events & Artists
      </footer>
    </main>
  );
}
