// src/components/Hobbies.tsx
"use client";
import { motion } from "framer-motion";

const hobbies = [
  {
    title: "Linux Environment",
    description: "Deep interest in OS architecture. Actively managing and developing on Fedora, Manjaro, and Ubuntu setups."
  },
  {
    title: "Android Internals",
    description: "Exploring system-level modifications, advanced rooting (Magisk, KernelSU), and firmware flashing."
  },
  {
    title: "Computational Photography",
    description: "Tuning GCam (LMC 8.4) parameters and analyzing temporal binning to push mobile camera hardware."
  }
];

export default function Hobbies() {
  const ease = [0.16, 1, 0.3, 1];

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto border-t border-neutral-200">
      <motion.h2 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="text-sm font-mono text-neutral-400 uppercase tracking-widest mb-12"
      >
        Beyond the Code
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6, ease }}
            className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-neutral-900 font-medium mb-3">{hobby.title}</h3>
            <p className="text-sm text-neutral-500 leading-relaxed">{hobby.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}