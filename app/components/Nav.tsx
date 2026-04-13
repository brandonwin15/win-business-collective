"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/[0.06] bg-[#0a0a0a]/80 backdrop-blur-md"
          : "border-[#1e1e1e] bg-[#0a0a0a]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo — brand mark */}
        <a
          href="#"
          className="text-white font-bold text-[13px] uppercase tracking-[0.13em] hover:opacity-90 transition-opacity"
        >
          Win Business{" "}
          <span className="text-[#c9a96e]">Collective</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#who-we-help"
            className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            Who We Help
          </a>
          <a
            href="#services"
            className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            What We Do
          </a>
          <a
            href="#pricing"
            className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            Pricing
          </a>
          <a
            href="#about"
            className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            About
          </a>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#inquiry"
            className="btn-gold bg-[#c9a96e] text-[#0a0a0a] text-sm font-semibold px-5 py-2.5 hover:bg-[#b8945a]"
          >
            Work With Us
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <line x1="2" y1="2" x2="20" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="20" y1="2" x2="2" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <line x1="2" y1="5" x2="20" y2="5" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="2" y1="11" x2="20" y2="11" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="2" y1="17" x2="20" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-t border-[#1e1e1e] px-6 py-6 flex flex-col gap-5">
          <a
            href="#who-we-help"
            className="text-sm text-gray-300 hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Who We Help
          </a>
          <a
            href="#services"
            className="text-sm text-gray-300 hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            What We Do
          </a>
          <a
            href="#pricing"
            className="text-sm text-gray-300 hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#about"
            className="text-sm text-gray-300 hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#inquiry"
            className="btn-gold bg-[#c9a96e] text-[#0a0a0a] text-sm font-semibold px-5 py-2.5 text-center hover:bg-[#b8945a]"
            onClick={() => setMenuOpen(false)}
          >
            Work With Us
          </a>
        </div>
      )}
    </header>
  );
}
