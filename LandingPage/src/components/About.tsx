"use client";

import Image from "next/image";
import { Coffee, Compass, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#FDFBF7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Asymmetric Image Section (occupies 5 cols on lg) */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Background Decorative Frame */}
            <div className="absolute -inset-4 border-2 border-[#E6D5C3]/60 rounded-[2.5rem] -rotate-3 scale-95 pointer-events-none" />

            {/* Main Image Container */}
            <div className="relative w-full max-w-[420px] aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl bg-[#E6D5C3]/20">
              <Image
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800"
                alt="KGN Coffee Cozy Minimalist Cafe Vibe"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-w-768px) 100vw, 420px"
              />
            </div>
            
            {/* Small floating detail badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-[#60241E] text-[#FDFBF7] px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3">
              <div className="bg-[#E6D5C3]/25 p-2.5 rounded-lg text-[#E6D5C3]">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#E6D5C3] font-semibold">Est. Since</span>
                <span className="text-sm font-bold">July 2026</span>
              </div>
            </div>
          </div>

          {/* Text & Details Section (occupies 7 cols on lg) */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#E6D5C3] block">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#60241E] leading-tight tracking-tight">
                Where Specialty Coffee <br /> Meets Creative Minds
              </h2>
              <div className="w-16 h-1 bg-[#60241E] rounded-full mx-auto lg:mx-0" />
            </div>

            <p className="text-sm sm:text-base text-[#60241E]/80 leading-relaxed font-medium">
              KGN Coffee started with a simple belief: coffee is more than just a morning stimulant. It is a ritual, a source of inspiration, and a catalyst for creative breakthroughs. 
            </p>
            
            <p className="text-sm sm:text-base text-[#60241E]/80 leading-relaxed font-medium">
              We designed our space specifically for local artists, freelancers, writers, and students. Featuring high ceilings, soft acoustic ambient sounds, and an abundancy of plants, KGN is a peaceful sanctuary to focus on your craft or engage in warm conversations with like-minded individuals.
            </p>

            {/* Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-[#E6D5C3]/30 text-[#60241E] p-2.5 rounded-xl">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#60241E]">Inspiring Vibe</h4>
                  <p className="text-xs text-[#60241E]/60 mt-0.5 leading-relaxed font-medium">
                    Aesthetic lighting and clean workspaces designed for maximum productivity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-[#E6D5C3]/30 text-[#60241E] p-2.5 rounded-xl">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#60241E]">Community Heart</h4>
                  <p className="text-xs text-[#60241E]/60 mt-0.5 leading-relaxed font-medium">
                    Regular community pop-ups, mini workshops, and collaboration panels.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
