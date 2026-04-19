// src/components/About.tsx
import { Monitor, Smartphone, Camera } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <Monitor className="text-cyan-400" />,
      title: "Linux Enthusiast",
      desc: "Distro-hopping with purpose. Experienced in managing Fedora, Manjaro, and Ubuntu environments for development."
    },
    {
      icon: <Smartphone className="text-purple-400" />,
      title: "Android Modder",
      desc: "Deep system-level knowledge. Magisk, KernelSU, and firmware flashing via Fastboot for devices like Redmi Note 7 Pro (violet)."
    },
    {
      icon: <Camera className="text-emerald-400" />,
      title: "Computational Photography",
      desc: "Tuning LMC 8.4 GCam. Analyzing CCM values and temporal binning to push mobile hardware to its limits."
    }
  ];

  return (
    <section id="about" className="scroll-mt-24">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
        Beyond the Code <div className="h-px flex-1 bg-slate-800" />
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <div key={i} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-colors">
            <div className="mb-4">{card.icon}</div>
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}