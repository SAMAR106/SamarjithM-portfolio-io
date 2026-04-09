import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <footer className="relative text-center py-10 border-t border-border/20">
        <p className="text-muted-foreground text-xs font-body tracking-wider">
          © 2026 — Designed & Built with <span className="gradient-text font-semibold">purpose</span>
        </p>
      </footer>
    </div>
  );
};

export default Index;
