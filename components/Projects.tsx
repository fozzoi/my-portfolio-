// src/components/Projects.tsx
"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Wallzone",
    description: "A high-performance wallpaper application utilizing the Unsplash API with responsive masonry grids, custom pagination, and seamless UI.",
    tech: ["React Native", "TypeScript", "Tailwind"],
    link: "#"
  },
  {
    title: "The Watcher",
    description: "Robust media streaming app integrating a custom React Native WebView player with injected ad-blocking scripts for uninterrupted viewing.",
    tech: ["Expo", "WebView", "JavaScript"],
    link: "#"
  }
];

export default function Projects() {
  const ease = [0.16, 1, 0.3, 1];

  return (
    <section id="projects" className="py-20 px-6 max-w-4xl mx-auto border-t border-neutral-200">
      <motion.h2 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="text-sm font-mono text-neutral-400 uppercase tracking-widest mb-12"
      >
        Selected Work
      </motion.h2>

      <div className="flex flex-col gap-12">
        {projects.map((project, index) => (
          <motion.a 
            href={project.link}
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease }}
            className="group block p-6 -mx-6 rounded-2xl hover:bg-neutral-50 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <h3 className="text-2xl font-medium text-neutral-900 group-hover:text-cyan-600 transition-colors flex items-center gap-2">
                {project.title}
                <ArrowUpRight size={20} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
              </h3>
              <div className="flex gap-2 flex-wrap">
                {project.tech.map(t => (
                  <span key={t} className="text-xs px-2 py-1 bg-white border border-neutral-200 rounded text-neutral-500 shadow-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-neutral-500 leading-relaxed max-w-2xl">
              {project.description}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}