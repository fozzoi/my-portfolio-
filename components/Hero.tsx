// src/components/Hero.tsx
"use client";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";

export default function Hero() {
  const ease = [0.16, 1, 0.3, 1];

  return (
    <section className="pt-40 pb-32 px-6 max-w-4xl mx-auto flex flex-col justify-center min-h-[80vh]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
        className="mb-8 relative"
      >
        <Quote className="text-neutral-200 absolute -top-6 -left-8 w-12 h-12 -z-10 rotate-180" />
        <p className="text-2xl md:text-3xl font-medium text-neutral-800 leading-snug">
          "Good software is a seamless bridge between complex logic and human intuition."
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease }}
      >
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 text-neutral-900">
          Hi, I'm <span className="text-gray-600">[Anoop]</span>. <br />
          App & Web Developer.
        </h1>
      </motion.div>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease }}
        className="text-lg md:text-xl text-neutral-500 max-w-2xl leading-relaxed mb-10"
      >
        I am a Computer Engineering Diploma graduate specializing in high-performance mobile and web applications. While my core focus is writing robust code, I leverage a strong background in design tools to deliver polished, pixel-perfect user experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease }}
      >
        <a 
          href="#projects" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white font-medium rounded-full hover:bg-neutral-800 transition-colors shadow-lg shadow-neutral-200"
        >
          Explore Projects <ArrowRight size={16} />
        </a>
      </motion.div>
    </section>
  );
}