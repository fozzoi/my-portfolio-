"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, GitFork, ExternalLink, Mail } from "lucide-react";

const socials = [
  { label: "GitHub", icon: GitFork, href: "https://github.com/fozzoi" },
  { label: "LinkedIn", icon: ExternalLink, href: "#" },
  { label: "Email", icon: Mail, href: "mailto:hello@fozzoi.dev" },
];

export default function Contact() {
  return (
    <footer
      id="contact"
      className="border-t border-[#1e1e1e] py-24 px-8 max-w-7xl mx-auto"
    >
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs text-[#3a3a3a] uppercase tracking-widest mb-16"
      >
        05 — Get in Touch
      </motion.p>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight text-[#f0ebe3] mb-8">
            Have a project<br />
            in mind?<br />
            <span className="text-[#c8f000]">Let's talk.</span>
          </h2>

          <a
            href="mailto:hello@fozzoi.dev"
            className="group inline-flex items-center gap-2 font-sans text-lg text-[#a09a92] hover:text-[#c8f000] transition-colors"
          >
            hello@fozzoi.dev
            <ArrowUpRight
              size={18}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-3"
        >
          {socials.map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-sm font-sans text-[#a09a92] hover:text-[#f0ebe3] transition-colors"
            >
              <span className="w-8 h-8 rounded-full border border-[#1e1e1e] group-hover:border-[#c8f000] flex items-center justify-center transition-colors">
                <Icon size={14} />
              </span>
              {label}
            </a>
          ))}
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-24 pt-8 border-t border-[#1e1e1e]">
        <span className="font-mono text-xs text-[#3a3a3a]">
          © {new Date().getFullYear()} fozzoi — All rights reserved
        </span>
        <span className="font-mono text-xs text-[#3a3a3a]">
          Built with Next.js · Tailwind CSS · Framer Motion
        </span>
      </div>
    </footer>
  );
}