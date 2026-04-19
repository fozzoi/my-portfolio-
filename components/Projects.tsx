"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-8 max-w-7xl mx-auto border-t border-[#1e1e1e]"
    >
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs text-[#3a3a3a] uppercase tracking-widest mb-16"
      >
        03 — Selected Work
      </motion.p>

      <div className="flex flex-col divide-y divide-[#1e1e1e]">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="group grid md:grid-cols-[80px_1fr_180px_auto] gap-6 py-10 items-center"
            >
              <span className="font-mono text-[#3a3a3a] text-sm">
                {project.index}
              </span>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-display font-bold text-2xl text-[#f0ebe3] group-hover:text-[#c8f000] transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full border border-[#1e1e1e] text-[#3a3a3a]">
                    {project.status}
                  </span>
                </div>
                <p className="font-sans text-sm text-[#a09a92] leading-relaxed max-w-xl mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-[#111111] border border-[#1e1e1e] text-[#a09a92]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cover image preview */}
              <div className="hidden md:block relative w-[100px] h-[200px] mx-auto rounded-2xl border-2 border-[#1e1e1e] group-hover:border-[#c8f000] overflow-hidden transition-colors duration-300 flex-shrink-0">
                <Image
                  src={project.coverImage}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover object-top"
                />
              </div>

              <ArrowUpRight
                size={20}
                className="opacity-0 group-hover:opacity-100 text-[#c8f000] transition-all -translate-x-2 group-hover:translate-x-0 flex-shrink-0"
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
