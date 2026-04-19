"use client";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

// Inside export default function Hero()
const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between px-8 pt-32 pb-16 max-w-7xl mx-auto">
      {/* Status badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="flex items-center gap-2 mb-12"
      >
        <span className="w-2 h-2 rounded-full bg-[#c8f000] animate-pulse" />
        <span className="font-mono text-xs text-[#a09a92] tracking-widest uppercase">
          Available for projects
        </span>
      </motion.div>

      {/* Main heading */}
      <div className="flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
        >
          <h1 className="font-display font-extrabold text-[clamp(3.5rem,10vw,9rem)] leading-[0.92] tracking-tight text-[#f0ebe3] mb-8">
            App &amp; Web<br />
            <span className="text-[#c8f000]">Developer</span>
            <span className="text-[#3a3a3a]">.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
          className="font-sans text-lg text-[#a09a92] max-w-xl leading-relaxed mb-12"
        >
          Computer Engineering Diploma graduate specializing in{" "}
          <span className="text-[#f0ebe3]">React Native</span> and{" "}
          <span className="text-[#f0ebe3]">Next.js</span>. I bridge complex
          logic with clean, pixel-perfect interfaces — on every platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#c8f000] text-[#0c0c0c] font-display font-bold text-sm rounded-full hover:bg-[#d4ff00] transition-all duration-200"
          >
            View Work
            <ArrowDownRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#3a3a3a] text-[#f0ebe3] font-sans text-sm rounded-full hover:border-[#a09a92] transition-colors"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      {/* Bottom stat row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6, ease }}
        className="flex flex-wrap gap-x-12 gap-y-4 pt-16 border-t border-[#1e1e1e] mt-12"
      >
        {[
          { label: "Projects shipped", value: "5+" },
          { label: "Tech stack", value: "TypeScript · React Native · Next.js" },
          { label: "Based in", value: "Kerala, India" },
          { label: "Open to", value: "Remote / Freelance" },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1">
            <span className="font-mono text-xs text-[#3a3a3a] uppercase tracking-widest">
              {stat.label}
            </span>
            <span className="font-sans text-sm text-[#a09a92]">
              {stat.value}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}