// src/app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Hobbies from "@/components/Hobbies";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-cyan-100 selection:text-cyan-900">
      <Navbar /> {/* <-- Floating Navbar injected here */}
      <Hero />
      <Skills />
      <Projects />
      <Hobbies />
    </main>
  );
}