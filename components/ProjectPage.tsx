"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowUpRight, X } from "lucide-react";
import type { Project } from "@/lib/projects";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function ProjectPage({ project }: { project: Project }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#0c0c0c] text-[#f0ebe3]">
      {/* ── Top nav ─────────────────────────────────────────── */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-[#1e1e1e]">
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-2 text-sm font-sans text-[#a09a92] hover:text-[#f0ebe3] transition-colors"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to work
        </Link>
        <span className="font-display font-bold text-[#f0ebe3]">fozzoi</span>
      </nav>

      <div className="max-w-7xl mx-auto px-8">
        {/* ── Hero header ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="pt-16 pb-12 border-b border-[#1e1e1e]"
        >
          <p className="font-mono text-xs text-[#3a3a3a] uppercase tracking-widest mb-6">
            {project.index} — {project.status} · {project.year}
          </p>

          <h1 className="font-display font-extrabold text-[clamp(3rem,8vw,7rem)] leading-[0.92] tracking-tight text-[#f0ebe3] mb-6">
            {project.title}
          </h1>

          <p className="font-sans text-xl text-[#a09a92] max-w-2xl leading-relaxed mb-10">
            {project.tagline}
          </p>

          {/* Meta row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Role", value: project.role },
              { label: "Year", value: project.year },
              { label: "Status", value: project.status },
              { label: "Stack", value: project.tech.slice(0, 2).join(", ") + "…" },
            ].map((m) => (
              <div key={m.label} className="flex flex-col gap-1">
                <span className="font-mono text-xs text-[#3a3a3a] uppercase tracking-widest">
                  {m.label}
                </span>
                <span className="font-sans text-sm text-[#a09a92]">
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Phone screenshot gallery ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="py-16 border-b border-[#1e1e1e]"
        >
          <p className="font-mono text-xs text-[#3a3a3a] uppercase tracking-widest mb-10">
            Screenshots
          </p>

          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {project.images.map((src, i) => (
              <motion.button
                key={src}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5, ease }}
                onClick={() => setLightboxIndex(i)}
                className="group relative flex-shrink-0 snap-start focus:outline-none"
                aria-label={`View screenshot ${i + 1}`}
              >
                {/* Phone frame */}
                <div className="relative w-[200px] rounded-[2rem] border-[3px] border-[#2a2a2a] bg-[#111111] overflow-hidden group-hover:border-[#c8f000] transition-colors duration-300">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-[#0c0c0c] rounded-b-2xl z-10" />
                  <Image
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    width={400}
                    height={860}
                    className="w-full h-auto block"
                    style={{ aspectRatio: "9/19.5" }}
                    objectFit="cover"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#c8f000]/0 group-hover:bg-[#c8f000]/5 transition-colors duration-300 flex items-center justify-center">
                    <ArrowUpRight
                      size={24}
                      className="text-[#c8f000] opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
                <p className="font-mono text-xs text-[#3a3a3a] text-center mt-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
              </motion.button>
            ))}
          </div>
          <p className="font-mono text-xs text-[#3a3a3a] mt-4">
            ← scroll to see all · click to expand
          </p>
        </motion.div>

        {/* ── About the project ───────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-16 py-16 border-b border-[#1e1e1e]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="font-mono text-xs text-[#3a3a3a] uppercase tracking-widest mb-6">
              About
            </p>
            <p className="font-sans text-[#a09a92] leading-relaxed text-base">
              {project.longDescription}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
          >
            <p className="font-mono text-xs text-[#3a3a3a] uppercase tracking-widest mb-6">
              Key features
            </p>
            <ul className="flex flex-col gap-4">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <span className="font-mono text-xs text-[#c8f000] mt-0.5 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-sans text-sm text-[#f0ebe3] leading-relaxed">
                    {h}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ── Tech stack ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="py-16 border-b border-[#1e1e1e]"
        >
          <p className="font-mono text-xs text-[#3a3a3a] uppercase tracking-widest mb-8">
            Tech stack
          </p>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-sm px-4 py-2 rounded-full border border-[#2a2a2a] text-[#a09a92] hover:border-[#c8f000] hover:text-[#c8f000] transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Footer CTA ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <p className="font-display font-bold text-2xl text-[#f0ebe3] mb-2">
              Interested in working together?
            </p>
            <p className="font-sans text-sm text-[#a09a92]">
              I'm available for freelance and remote projects.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#c8f000] text-[#0c0c0c] font-display font-bold text-sm rounded-full hover:bg-[#d4ff00] transition-colors"
          >
            Get in touch <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>

      {/* ── Lightbox ────────────────────────────────────────── */}
      {lightboxIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-[#0c0c0c]/95 flex items-center justify-center p-8"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-full border border-[#3a3a3a] flex items-center justify-center text-[#a09a92] hover:text-[#f0ebe3] hover:border-[#f0ebe3] transition-colors"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close"
          >
            <X size={18} />
          </button>

          {/* Prev */}
          {lightboxIndex > 0 && (
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[#3a3a3a] flex items-center justify-center text-[#a09a92] hover:text-[#f0ebe3] hover:border-[#f0ebe3] transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(lightboxIndex - 1);
              }}
              aria-label="Previous"
            >
              <ArrowLeft size={18} />
            </button>
          )}

          <motion.div
            key={lightboxIndex}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] w-auto"
          >
            {/* Phone frame in lightbox */}
            <div className="relative rounded-[2.5rem] border-[4px] border-[#2a2a2a] bg-[#111111] overflow-hidden max-h-[80vh]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#0c0c0c] rounded-b-2xl z-10" />
              <Image
                src={project.images[lightboxIndex]}
                alt={`${project.title} screenshot ${lightboxIndex + 1}`}
                width={400}
                height={860}
                className="max-h-[76vh] w-auto block"
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="font-mono text-xs text-[#3a3a3a] text-center mt-4">
              {lightboxIndex + 1} / {project.images.length}
            </p>
          </motion.div>

          {/* Next */}
          {lightboxIndex < project.images.length - 1 && (
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[#3a3a3a] flex items-center justify-center text-[#a09a92] hover:text-[#f0ebe3] hover:border-[#f0ebe3] transition-colors rotate-180"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(lightboxIndex + 1);
              }}
              aria-label="Next"
            >
              <ArrowLeft size={18} />
            </button>
          )}
        </motion.div>
      )}
    </main>
  );
}
