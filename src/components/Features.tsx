"use client";

import { Bean, Landmark, UserCheck } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Bean,
      title: "Premium Specialty Beans",
      description:
        "100% sustainably sourced Arabica beans, roasted in small batches to capture rich profiles of dark chocolate, berry, and citrus notes.",
    },
    {
      icon: Landmark,
      title: "Cozy Creative Space",
      description:
        "Designed for young creatives. Equipped with high-speed Wi-Fi, warm lighting, ergonomic seating, and a music playlist curated to keep you inspired.",
    },
    {
      icon: UserCheck,
      title: "Expert Craftsmanship",
      description:
        "Our skilled baristas are coffee perfectionists, using precision weighing, temperature control, and latte art mastery to craft every single cup.",
    },
  ];

  return (
    <section className="py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#E6D5C3]">
            Why KGN Coffee?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#60241E] tracking-tight">
            Crafting a Better Coffee Experience
          </h2>
          <div className="w-16 h-1 bg-[#60241E] mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-[#60241E]/70 max-w-xl mx-auto font-medium">
            We pay attention to the micro-details so that every sip and every minute spent at KGN Coffee feels like a premium escape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative bg-[#FDFBF7] p-8 rounded-3xl border border-[#E6D5C3]/40 shadow-sm hover:shadow-xl hover:border-[#60241E]/30 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
              >
                {/* Accent Highlight Bar */}
                <div className="absolute top-0 left-8 right-8 h-[3px] bg-[#60241E] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-b-full" />

                <div className="inline-flex items-center justify-center p-4 bg-[#E6D5C3]/30 text-[#60241E] rounded-2xl mb-6 group-hover:bg-[#60241E] group-hover:text-[#FDFBF7] transition-all duration-300 ease-in-out">
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>

                <h3 className="text-xl font-bold text-[#60241E] mb-3 group-hover:text-[#60241E]/95">
                  {feature.title}
                </h3>
                
                <p className="text-[#60241E]/70 text-sm sm:text-base leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
