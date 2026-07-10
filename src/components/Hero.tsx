import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ROLES = ["Backend Developer", "DevOps Engineer", "Cloud Architect"];

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

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
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

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center space-y-8"
        >
          <div className="inline-flex items-center justify-center p-3 bg-secondary/50 rounded-2xl border border-border/50 shadow-2xl mb-4 backdrop-blur-sm">
            <Terminal className="w-6 h-6 text-primary mr-3" />
            <span className="font-mono text-sm tracking-wider text-muted-foreground">
              system.status == "operational"
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground">
              Utkarsh Aryan Mishra
            </h1>
            <div className="h-12 flex items-center justify-center">
              <span className="text-2xl md:text-3xl font-mono text-accent">
                {displayedText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-3 h-8 bg-accent ml-1 align-middle"
                />
              </span>
            </div>
          </div>

          <p className="max-w-2xl text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            Backend & DevOps Engineer focused on building secure, scalable APIs and
            deploying production-grade systems. Experienced in Node.js, AWS, Docker,
            and automating CI/CD pipelines.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-8 w-full sm:w-auto">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono uppercase tracking-widest px-8 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative flex items-center gap-2">
                View My Work{" "}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </Button>
            <Button
              size="lg"
              variant="default"
              className="relative overflow-hidden px-8 font-mono uppercase tracking-widest group"
              onClick={() => {
                window.open("/Utkarsh_Aryan_Mishra_Resume.pdf", "_blank");
              }}
            >
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />

              {/* Content */}
              <span className="relative flex items-center gap-2">
                View Resume
              </span>
            </Button>
            <Button
              size="lg"
              className="relative overflow-hidden px-8 font-mono uppercase tracking-widest group"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />

              <a
                href="/Utkarsh_Aryan_Mishra_Resume.pdf"
                download
                className="relative flex items-center"
              >
                <Download
                  size={18}
                  className="mr-2 group-hover:-translate-y-1 transition-transform"
                />
                Download Resume
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
