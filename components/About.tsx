"use client";
import { motion } from "framer-motion";

const cards = [
  {
    tag: "Linux",
    title: "Linux Enthusiast",
    description:
      "Distro-hopping with purpose. Daily-driving Fedora and Manjaro for development. Comfortable managing system configs, package managers, and custom kernel setups.",
    accent: false,
  },
  {
    tag: "Android",
    title: "Android Modder",
    description:
      "Deep system-level knowledge — Magisk, KernelSU, and firmware flashing via Fastboot. Rooted and modded devices including the Redmi Note 7 Pro (violet) for maximum control.",
    accent: true,
  },
  {
    tag: "Photography",
    title: "Computational Photography",
    description:
      "Tuning LMC 8.4 GCam ports, analyzing CCM color matrices, and pushing temporal binning to its limits on mobile hardware. Getting DSLR-quality results from a phone sensor.",
    accent: false,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-8 max-w-7xl mx-auto border-t border-[#1e1e1e]"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-[#3a3a3a] uppercase tracking-widest"
        >
          04 — Beyond the Code
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-sans text-sm text-[#a09a92] max-w-sm leading-relaxed"
        >
          Outside of building products, I spend time understanding the systems
          that run them — from operating kernels to camera algorithms.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.1,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`group relative rounded-2xl p-8 border transition-all duration-300 cursor-default ${
              card.accent
                ? "bg-[#c8f000] border-[#c8f000]"
                : "bg-[#111111] border-[#1e1e1e] hover:border-[#3a3a3a]"
            }`}
          >
            <span
              className={`font-mono text-xs uppercase tracking-widest mb-6 block ${
                card.accent ? "text-[#0c0c0c]/60" : "text-[#3a3a3a]"
              }`}
            >
              {card.tag}
            </span>
            <h3
              className={`font-display font-bold text-xl mb-4 leading-tight ${
                card.accent ? "text-[#0c0c0c]" : "text-[#f0ebe3]"
              }`}
            >
              {card.title}
            </h3>
            <p
              className={`font-sans text-sm leading-relaxed ${
                card.accent ? "text-[#0c0c0c]/70" : "text-[#a09a92]"
              }`}
            >
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}