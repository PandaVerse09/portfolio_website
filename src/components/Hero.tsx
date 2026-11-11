import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, ArrowRight, ExternalLink, Award } from "lucide-react";
import { FaAws } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import TerminalConsole from "@/components/TerminalConsole";

const ROLES = ["Software Engineer", "Cloud & DevOps Engineer", "Backend Developer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const role = ROLES[roleIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayedText === role) {
      // Pause at the end of typing
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === "") {
      // Move to next word
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
      setTypingSpeed(100);
    } else {
      // Typing or deleting
      timer = setTimeout(() => {
        setDisplayedText((prev) => 
          isDeleting 
            ? prev.substring(0, prev.length - 1) 
            : role.substring(0, prev.length + 1)
        );
        setTypingSpeed(isDeleting ? 50 : 100);
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, typingSpeed]);

  const scrollToExperience = () => {
    document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleViewResume = () => {
    window.open("/resume.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay" />

        {/* Animated grid lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "4rem 4rem",
            maskImage:
              "radial-gradient(circle at center, black, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black, transparent 80%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          {/* Left Column: Intro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          >
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center justify-center p-2.5 bg-secondary/50 rounded-xl border border-border/50 shadow-xl backdrop-blur-sm">
                <Terminal className="w-4 h-4 text-primary mr-2 animate-pulse" />
                <span className="font-mono text-xs tracking-wider text-muted-foreground">
                  system.status == "operational"
                </span>
              </div>

              <a
                href="#certifications"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#certifications")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 p-2 px-3 bg-[#FF9900]/10 hover:bg-[#FF9900]/20 rounded-xl border border-[#FF9900]/40 shadow-xl backdrop-blur-sm group transition-all"
              >
                <FaAws className="w-4 h-4 text-[#FF9900]" />
                <span className="font-mono text-xs font-semibold text-[#FF9900] group-hover:underline flex items-center gap-1">
                  <Award className="w-3 h-3" /> AWS Certified CLF-C02
                </span>
              </a>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground leading-tight lg:whitespace-nowrap">
                Utkarsh Aryan Mishra
              </h1>
              <div className="h-10 flex items-center">
                <span className="text-xl md:text-2xl font-mono text-accent font-semibold">
                  {displayedText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-2.5 h-6 bg-accent ml-1 align-middle"
                  />
                </span>
              </div>
            </div>

            <p className="max-w-xl text-base md:text-lg text-muted-foreground font-light leading-relaxed">
              Final-year B.Tech IT student targeting Software Engineer and Cloud roles.
              Built a 25+ endpoint Node.js/Express/MongoDB backend for UPPCL on AWS,
              a Kubernetes GitOps lab, and DeployForge—an event-driven deployment platform
              in TypeScript.
            </p>

            <div className="flex flex-wrap gap-3 pt-4 w-full">
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono uppercase tracking-wider text-xs px-6 py-5 group relative overflow-hidden shrink-0 cursor-pointer"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative flex items-center gap-2">
                  Inspect Deployments{" "}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </Button>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0"
              >
                <Button
                  size="lg"
                  variant="default"
                  className="relative overflow-hidden px-6 py-5 font-mono uppercase tracking-wider text-xs group shrink-0 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <span className="relative flex items-center gap-2">
                    View Resume
                    <ExternalLink
                      size={16}
                      className="ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </span>
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 w-full flex items-center justify-center"
          >
            <TerminalConsole />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
