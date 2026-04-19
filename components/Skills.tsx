// src/components/Skills.tsx
"use client";
import { motion } from "framer-motion";

const devSkills = [
  "TypeScript", "JavaScript", "React Native", "Next.js", 
  "Tailwind CSS", "Expo", "REST APIs", "Git"
];

const designTools = [
  "Figma", "Photoshop", "Lightroom", "Microsoft Word", "Microsoft Excel"
];

export default function Skills() {
  const ease = [0.16, 1, 0.3, 1];

  return (
    <section id="skills" className="py-20 px-6 max-w-4xl mx-auto border-t border-neutral-200">
      <motion.h2 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="text-sm font-mono text-neutral-400 uppercase tracking-widest mb-12"
      >
        Technical Arsenal
      </motion.h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Core Dev Skills */}
        <div>
          <h3 className="text-lg font-medium text-neutral-900 mb-6">Engineering Core</h3>
          <div className="flex flex-wrap gap-2">
            {devSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4, ease }}
                className="px-4 py-2 rounded-lg bg-white border border-neutral-200 text-neutral-600 text-sm hover:border-cyan-500 hover:text-cyan-700 hover:shadow-sm transition-all"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Design & Utility */}
        <div>
          <h3 className="text-lg font-medium text-neutral-900 mb-6">Design & Utility</h3>
          <div className="flex flex-wrap gap-2">
            {designTools.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4, ease }}
                className="px-4 py-2 rounded-lg bg-neutral-50 border border-neutral-200 text-neutral-500 text-sm hover:border-neutral-300 hover:text-neutral-800 transition-all"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}