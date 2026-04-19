"use client";
import { motion } from "framer-motion";

const categories = [
  {
    label: "Engineering",
    skills: [
      "TypeScript",
      "JavaScript",
      "React Native",
      "Next.js",
      "Expo",
      "REST APIs",
      "Tailwind CSS",
      "Git",
    ],
  },
  {
    label: "Design & Tools",
    skills: [
      "Figma",
      "Adobe Photoshop",
      "Adobe Lightroom",
      "Microsoft Office",
    ],
  },
  {
    label: "Environments",
    skills: ["Linux (Fedora, Manjaro, Ubuntu)", "Android (ADB / Fastboot)", "VS Code", "Node.js"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 py-24 px-8 max-w-7xl mx-auto border-t border-[#1e1e1e]"
    >
      <div className="flex items-end justify-between mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-[#3a3a3a] uppercase tracking-widest"
        >
          02 — Technical Arsenal
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-display font-semibold text-sm text-[#a09a92] uppercase tracking-wider mb-6">
              {cat.label}
            </h3>
            <ul className="flex flex-col gap-3">
              {cat.skills.map((skill, si) => (
                <li
                  key={skill}
                  className="flex items-center gap-3 group"
                >
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: ci * 0.1 + si * 0.04,
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <span className="w-1 h-1 rounded-full bg-[#3a3a3a] group-hover:bg-[#c8f000] transition-colors flex-shrink-0" />
                    <span className="font-sans text-[#f0ebe3] text-sm group-hover:text-[#c8f000] transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}