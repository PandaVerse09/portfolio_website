import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground font-sans">
      <Navbar />
      <main>
        <Hero />

        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer className="py-8 text-center border-t border-border/50 bg-background">
        <p className="text-muted-foreground font-mono text-sm">
          &copy; {new Date().getFullYear()} Utkarsh Aryan Mishra. All systems
          operational.
        </p>
      </footer>
    </div>
  );
}
