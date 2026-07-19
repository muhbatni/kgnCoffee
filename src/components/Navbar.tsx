"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FDFBF7]/95 backdrop-blur-md shadow-sm border-b border-[#E6D5C3]/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/img/logo.png?v=1"
                  alt="KGN Coffee Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-[#60241E] transition-colors duration-300">
                KGN <span className="text-[#E6D5C3] font-medium">COFFEE</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#60241E] hover:text-[#60241E]/70 font-semibold text-sm tracking-wide transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#60241E] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#menu"
              className="bg-[#60241E] hover:bg-[#60241E]/90 text-[#FDFBF7] hover:text-white font-bold text-sm px-6 py-2.5 rounded-full transition-all duration-300 ease-in-out transform hover:scale-[1.03] shadow-md hover:shadow-lg hover:shadow-[#60241E]/20"
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-[#60241E] hover:text-[#60241E]/80 focus:outline-none transition-colors duration-300"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#FDFBF7] border-b border-[#E6D5C3]/40 shadow-xl transition-all duration-300 ease-in-out origin-top ${
          isOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-95 invisible"
        }`}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 text-base font-semibold text-[#60241E] hover:bg-[#E6D5C3]/20 rounded-xl transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-[#E6D5C3]/30 px-3">
            <a
              href="#menu"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-[#60241E] text-[#FDFBF7] hover:text-white font-bold py-3 rounded-full transition-colors duration-300"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
