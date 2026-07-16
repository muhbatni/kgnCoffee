"use client";

import Image from "next/image";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-[#FDFBF7] via-[#FDFBF7] to-[#E6D5C3]/10"
    >
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#E6D5C3]/30 rounded-full blur-3xl -z-10 animate-pulse pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#60241E]/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#E6D5C3]/30 border border-[#E6D5C3] px-4 py-1.5 rounded-full text-[#60241E] text-xs font-semibold tracking-wider uppercase animate-fade-in">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Trendy Coffee Hub for Creatives</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#60241E] leading-[1.1] tracking-tight">
              Your Daily Brew, <br />
              <span className="text-[#E6D5C3] bg-gradient-to-r from-[#60241E] to-[#E6D5C3] bg-clip-text text-transparent">
                Perfected.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#60241E]/80 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Experience the perfect blend of ethically sourced, micro-roasted coffee beans and artisanal pastries. KGN Coffee is a minimalist space designed for young minds to connect, create, and recharge.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#menu"
                className="group inline-flex items-center gap-2 bg-[#60241E] hover:bg-[#60241E]/95 text-[#FDFBF7] hover:text-white font-bold px-8 py-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-[1.03] shadow-lg shadow-[#60241E]/20 w-full sm:w-auto justify-center"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#60241E] hover:bg-[#60241E]/5 text-[#60241E] font-bold px-8 py-4 rounded-full transition-all duration-300 ease-in-out w-full sm:w-auto"
              >
                <MapPin className="w-4 h-4" />
                <span>Find Us</span>
              </a>
            </div>

            {/* Micro details / Social trust */}
            <div className="pt-4 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0 border-t border-[#E6D5C3]/40">
              <div>
                <span className="block text-2xl font-extrabold text-[#60241E]">4.9★</span>
                <span className="text-xs font-semibold text-[#60241E]/60 uppercase tracking-wider">Rating</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-[#60241E]">100%</span>
                <span className="text-xs font-semibold text-[#60241E]/60 uppercase tracking-wider">Arabica</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-[#60241E]">15+</span>
                <span className="text-xs font-semibold text-[#60241E]/60 uppercase tracking-wider">Brews</span>
              </div>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="flex justify-center items-center relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#E6D5C3]/40 to-[#60241E]/10 rounded-full blur-2xl -z-10 scale-90" />

            {/* Signature Beverage Card Wrapper */}
            <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-[#E6D5C3]/20 animate-float bg-white/50 backdrop-blur-sm">
              <Image
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800"
                alt="KGN Signature Beverage - Iced Espresso Tonic"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-110"
                sizes="(max-w-768px) 100vw, 400px"
              />
              
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#FDFBF7]/90 backdrop-blur-md p-5 rounded-2xl border border-[#E6D5C3]/40 shadow-xl">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#E6D5C3]">Signature Drink</span>
                    <h3 className="text-lg font-bold text-[#60241E] mt-0.5">Orange Espresso Tonic</h3>
                  </div>
                  <span className="text-xl font-extrabold text-[#60241E] bg-[#E6D5C3]/40 px-3.5 py-1.5 rounded-xl">
                    $6.50
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
