import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0c0c] text-[#f0ebe3]">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}