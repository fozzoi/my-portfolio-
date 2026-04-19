// src/components/Navbar.tsx
"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      // 'fixed', 'left-1/2', and '-translate-x-1/2' center the floating pill
      className="fixed top-6 left-1/2 z-50 flex items-center gap-6 px-6 py-3 rounded-full bg-white/0 backdrop-blur-md border border-neutral-200 shadow-sm"
    >
      <a href="#" className="text-neutral-900 font-bold tracking-tight mr-2 md:mr-8">
        DEV
      </a>
      
      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-500">
        <a href="#skills" className="hover:text-cyan-600 transition-colors">Skills</a>
        <a href="#projects" className="hover:text-cyan-600 transition-colors">Work</a>
        <a href="#hobbies" className="hover:text-cyan-600 transition-colors">Interests</a>
      </div>

      <a 
        href="#contact" 
        className="text-sm font-medium px-4 py-2 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors ml-2 md:ml-4"
      >
        Contact
      </a>
    </motion.nav>
  );
}