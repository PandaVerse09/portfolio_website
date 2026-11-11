import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import NetworkMeshBackground from "@/components/NetworkMeshBackground";
import PipelineSimulator from "@/components/PipelineSimulator";
import InfrastructureDashboard from "@/components/InfrastructureDashboard";
import { Cpu, RefreshCw } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"pipeline" | "monitor">("pipeline");

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground font-sans relative">
      {/* Network Mesh Background */}
      <NetworkMeshBackground />

      {/* Main Page Elements */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <Skills />
          <Certifications />
          <Achievements />
          <Projects />

          {/* Interactive DevOps Control Center */}
          <section id="control-center" className="py-24 relative border-t border-border/50 bg-card/20 backdrop-blur-sm">
            <div className="container mx-auto px-6 max-w-5xl relative">
              {/* Server Rack Ears (Mount Brackets) */}
              <div className="absolute -left-5 top-8 bottom-8 w-5 bg-card/60 border-y border-l border-border rounded-l-md flex flex-col justify-around items-center py-12 opacity-80 pointer-events-none hidden lg:flex shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#182335] border border-border/85 flex items-center justify-center shadow-inner">
                  <div className="w-1 h-1 rounded-full bg-slate-500" />
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#182335] border border-border/85 flex items-center justify-center shadow-inner">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-pulse shadow-[0_0_6px_rgba(88,166,255,0.8)]" />
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#182335] border border-border/85 flex items-center justify-center shadow-inner">
                  <div className="w-1 h-1 rounded-full bg-slate-500" />
                </div>
              </div>
              <div className="absolute -right-5 top-8 bottom-8 w-5 bg-card/60 border-y border-r border-border rounded-r-md flex flex-col justify-around items-center py-12 opacity-80 pointer-events-none hidden lg:flex shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#182335] border border-border/85 flex items-center justify-center shadow-inner">
                  <div className="w-1 h-1 rounded-full bg-slate-500" />
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#182335] border border-border/85 flex items-center justify-center shadow-inner">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]/50 animate-pulse shadow-[0_0_6px_rgba(56,189,248,0.8)]" />
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#182335] border border-border/85 flex items-center justify-center shadow-inner">
                  <div className="w-1 h-1 rounded-full bg-slate-500" />
                </div>
              </div>

              <div className="md:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-12 text-center"
                >
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono text-foreground flex items-center justify-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#38bdf8] animate-pulse shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                    <span className="text-muted-foreground mr-1 text-2xl md:text-3xl font-light">kubectl</span>control-center
                  </h2>
                  <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
                    Interactive dashboards simulating active development pipelines and live cloud resource clusters.
                  </p>

                {/* Tab buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                  <button
                    onClick={() => setActiveTab("pipeline")}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-xs md:text-sm font-semibold transition-all border cursor-pointer ${
                      activeTab === "pipeline"
                        ? "bg-primary/10 border-primary text-primary shadow-[0_0_15px_rgba(88,166,255,0.15)]"
                        : "border-border/60 text-muted-foreground hover:text-foreground hover:border-border"
                    }`}
                  >
                    <RefreshCw className={`w-4 h-4 ${activeTab === "pipeline" ? "animate-spin" : ""}`} />
                    Pipeline Simulator
                  </button>
                  <button
                    onClick={() => setActiveTab("monitor")}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-xs md:text-sm font-semibold transition-all border cursor-pointer ${
                      activeTab === "monitor"
                        ? "bg-accent/10 border-accent text-accent shadow-[0_0_15px_rgba(138,180,248,0.15)]"
                        : "border-border/60 text-muted-foreground hover:text-foreground hover:border-border"
                    }`}
                  >
                    <Cpu className="w-4 h-4" />
                    Infrastructure Monitor
                  </button>
                </div>
              </motion.div>

              {/* Console Dashboard Area */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {activeTab === "pipeline" ? <PipelineSimulator /> : <InfrastructureDashboard />}
              </motion.div>
              </div>
            </div>
          </section>

          <Contact />
        </main>
        <footer className="py-8 text-center border-t border-border/50 bg-background/80 backdrop-blur-md">
          <p className="text-muted-foreground font-mono text-sm">
            &copy; {new Date().getFullYear()} Utkarsh Aryan Mishra. All systems
            operational.
          </p>
        </footer>
      </div>
    </div>
  );
}
