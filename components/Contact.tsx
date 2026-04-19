// src/components/Contact.tsx
import { Mail, GitBranch, Users } from "lucide-react";

export default function Contact() {
  return (
    <footer id="contact" className="pt-20 border-t border-slate-900 text-center">
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <p className="text-slate-400 mb-8">Let's talk about mobile dev, Linux, or GCam tuning.</p>
      <div className="flex justify-center gap-6 mb-12">
        <a href="#" className="p-4 rounded-full bg-slate-900 border border-slate-800 hover:border-cyan-500 transition-all">
          <Mail size={24} />
        </a>
        <a href="#" className="p-4 rounded-full bg-slate-900 border border-slate-800 hover:border-cyan-500 transition-all">
          <GitBranch size={24} />
        </a>
        <a href="#" className="p-4 rounded-full bg-slate-900 border border-slate-800 hover:border-cyan-500 transition-all">
          <Users size={24} />
        </a>
      </div>
      <p className="text-slate-600 text-sm">© 2024 Built with Next.js & Tailwind</p>
    </footer>
  );
}