// src/components/Hero.tsx
"use client";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";

export default function Hero() {
  const ease = [0.16, 1, 0.3, 1];

  return (
    <section className="pt-48 pb-32 px-6 max-w-5xl mx-auto flex flex-col justify-center min-h-[80vh]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
        className="mb-8 relative"
      >
        <Quote className="text-pink-200 absolute -top-8 -left-10 w-16 h-16 -z-10 rotate-180" />
        <p className="text-2xl md:text-4xl font-display font-bold text-neutral-800 leading-tight">
          "Good software is a seamless bridge between complex logic and human intuition."
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease }}
      >
        {/* BIG, BOLD, DISPLAY FONT WITH VIBRANT GRADIENT */}
        <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-8 text-neutral-900 leading-[1.1]">
          Hi, I'm <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">
            [Your Name]
          </span>. <br />
          App & Web Developer.
        </h1>
      </motion.div>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease }}
        className="text-lg md:text-2xl text-neutral-500 max-w-3xl leading-relaxed mb-12 font-medium"
      >
        I am a Computer Engineering Diploma graduate specializing in high-performance mobile and web applications. While my core focus is writing robust code, I leverage a strong background in design tools to deliver polished, pixel-perfect experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease }}
      >
        <a 
          href="#projects" 
          className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white font-display font-bold text-lg rounded-full hover:scale-105 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 shadow-xl shadow-purple-500/20"
        >
          Explore Projects <ArrowRight size={20} />
        </a>
      </motion.div>
    </section>
  );
}