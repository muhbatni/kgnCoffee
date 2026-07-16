"use client";

import { Coffee, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#60241E] text-[#FDFBF7] pt-20 pb-8 border-t border-[#E6D5C3]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#E6D5C3]/10">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-6 text-center md:text-left">
            <a href="#home" className="inline-flex items-center gap-2 group">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E6D5C3] text-[#60241E] group-hover:scale-105 transition-transform duration-300">
                <Coffee className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                KGN <span className="text-[#E6D5C3] font-medium">COFFEE</span>
              </span>
            </a>
            
            <p className="text-sm text-[#FDFBF7]/75 max-w-sm mx-auto md:mx-0 leading-relaxed font-medium">
              We roast carefully, brew mindfully, and serve with joy. Join us in our physical space or follow our creative journey online.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FDFBF7]/10 hover:bg-[#E6D5C3] hover:text-[#60241E] text-[#FDFBF7] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FDFBF7]/10 hover:bg-[#E6D5C3] hover:text-[#60241E] text-[#FDFBF7] transition-all duration-300"
                aria-label="TikTok"
              >
                {/* Custom TikTok SVG path since TikTok icon is not standard in Lucide */}
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.97 1.22 2.37 2.06 3.96 2.4-.01 1.34 0 2.68-.01 4.02-1.58-.06-3.13-.59-4.41-1.57-.27-.2-.53-.42-.77-.66v6.05c.08 2.64-1.12 5.2-3.23 6.77-2.12 1.58-5.06 1.94-7.51.92C3.62 21.1 1.76 18.23 1.83 15.1c-.04-2.85 1.53-5.59 4.02-6.99 2.05-1.16 4.61-1.33 6.81-.46.01 1.4-.01 2.8.01 4.2-1.39-.71-3.08-.66-4.41.13-1.31.78-2.09 2.27-2.02 3.79.03 1.51.87 2.91 2.2 3.6 1.32.7 3.02.6 4.24-.26 1-.72 1.52-1.92 1.48-3.16V0h.36z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Operational Hours (3 cols) */}
          <div className="md:col-span-3 text-center md:text-left space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-[#E6D5C3]">
              Hours
            </h4>
            <ul className="space-y-3 text-sm text-[#FDFBF7]/80 font-medium">
              <li>
                <span className="block text-xs text-[#E6D5C3]">Monday — Friday</span>
                <span className="text-sm mt-0.5">7:00 AM — 9:00 PM</span>
              </li>
              <li>
                <span className="block text-xs text-[#E6D5C3]">Saturday — Sunday</span>
                <span className="text-sm mt-0.5">8:00 AM — 10:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Contact & Location (4 cols) */}
          <div className="md:col-span-4 text-center md:text-left space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-[#E6D5C3]">
              Get in Touch
            </h4>
            <ul className="space-y-4 text-sm text-[#FDFBF7]/80 font-medium">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="w-5 h-5 text-[#E6D5C3] flex-shrink-0" />
                <span>123 Brew Avenue, Creative District, NY 10001</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="w-5 h-5 text-[#E6D5C3] flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="w-5 h-5 text-[#E6D5C3] flex-shrink-0" />
                <a href="mailto:hello@kgncoffee.com" className="hover:text-white transition-colors duration-300">
                  hello@kgncoffee.com
                </a>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FDFBF7]/60 font-medium gap-4">
          <p>© {currentYear} KGN Coffee. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
