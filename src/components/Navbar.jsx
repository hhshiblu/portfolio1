"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      
      
      
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-2xl font-bold tracking-tight text-slate-900">
          <div className="w-6 h-6 rounded-md bg-linear-to-tr from-indigo-500 to-purple-500 shadow-sm"></div>
          Shiblu
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-medium shadow-[0_4px_14px_0_rgba(99,102,241,0.39)] hover:shadow-[0_6px_20px_rgba(99,102,241,0.23)] transition-all"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-900 z-50 relative focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav (Standard CSS for faster response) */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-b border-slate-100 shadow-lg transition-all duration-300 origin-top overflow-hidden ${
          mobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center py-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-700 hover:text-indigo-600 transition-colors w-full text-center py-2"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 px-8 py-3 rounded-xl bg-indigo-500 text-white font-semibold w-[90%] text-center shadow-md active:scale-95 transition-transform"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </nav>
  );
}
