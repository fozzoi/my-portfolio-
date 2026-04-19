"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 transition-all duration-500 ${
        scrolled
          ? "bg-[#0c0c0c]/90 backdrop-blur-md border-b border-[#1e1e1e]"
          : "bg-transparent"
      }`}
    >
      <a
        href="#"
        className="font-display font-bold text-lg text-[#f0ebe3] tracking-tight hover:text-[#c8f000] transition-colors"
      >
        fozzoi
      </a>

      <div className="hidden md:flex items-center gap-8 text-sm font-sans text-[#a09a92]">
        <a href="#skills" className="hover:text-[#f0ebe3] transition-colors">
          Skills
        </a>
        <a href="#projects" className="hover:text-[#f0ebe3] transition-colors">
          Work
        </a>
        <a href="#about" className="hover:text-[#f0ebe3] transition-colors">
          About
        </a>
      </div>

      <a
        href="#contact"
        className="text-sm font-sans px-5 py-2 rounded-full border border-[#3a3a3a] text-[#f0ebe3] hover:border-[#c8f000] hover:text-[#c8f000] transition-all duration-300"
      >
        Contact
      </a>
    </motion.nav>
  );
}