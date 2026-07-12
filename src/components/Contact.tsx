import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Github, Linkedin, TerminalSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleRequest = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.message) {
        setMessage(customEvent.detail.message);
        const nameInput = document.querySelector('input[placeholder="John Doe"]') as HTMLInputElement;
        if (nameInput) {
          nameInput.focus();
        }
      }
    };
    window.addEventListener("request-resume", handleRequest);
    return () => window.removeEventListener("request-resume", handleRequest);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_6zbe6ag",
        "template_ngb8jnb",
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        "RV2NQytZ5QKKBQSld",
      )
      .then(() => {
        setIsSubmitting(false);

        // reset form fields
        setName("");
        setEmail("");
        setMessage("");

        toast({
          title: "Message sent!",
          description: "Your message has been successfully delivered.",
        });
      })
      .catch((error) => {
        console.error(error);
        setIsSubmitting(false);

        toast({
          title: "Error",
          description: "Failed to send message.",
          variant: "destructive",
        });
      });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-card/20 relative border-t border-border/50"
    >
      <div className="container mx-auto px-6 max-w-5xl relative">
        {/* Server Rack Ears (Mount Brackets) */}
        <div className="absolute -left-5 top-8 bottom-8 w-5 bg-card/60 border-y border-l border-border rounded-l-md flex flex-col justify-around items-center py-12 opacity-80 pointer-events-none hidden lg:flex shadow-[0_0_15px_rgba(0,0,0,0.5)]">
          <div className="w-2.5 h-2.5 rounded-full bg-[#182335] border border-border/85 flex items-center justify-center shadow-inner">
            <div className="w-1 h-1 rounded-full bg-slate-500" />
          </div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#182335] border border-border/85 flex items-center justify-center shadow-inner">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 animate-pulse shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
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
            <div className="w-1.5 h-1.5 rounded-full bg-accent/50 animate-pulse shadow-[0_0_6px_rgba(138,180,248,0.8)]" />
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
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-mono text-foreground flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                <span className="text-muted-foreground mr-1 text-2xl md:text-3xl font-light">ssh</span>connect
              </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Interested in collaborating, discussing DevOps projects, or
              opportunities? Feel free to reach out — I’m actively seeking
              opportunities to learn, build, and contribute in DevOps and cloud
              technologies.
            </p>

            <div className="space-y-6 mb-12">
              <a
                href="mailto:utkarsharyan090205@gmail.com"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-3 bg-secondary rounded-lg border border-border group-hover:border-primary/30 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-mono">utkarsharyan090205@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/utkarsh090205/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-3 bg-secondary rounded-lg border border-border group-hover:border-primary/30 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="font-mono">linkedin.com/in/utkarsh090205</span>
              </a>
              <a
                href="https://github.com/PandaVerse09"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-3 bg-secondary rounded-lg border border-border group-hover:border-primary/30 transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <span className="font-mono">github.com/PandaVerse09</span>
              </a>
            </div>
          </div>

          <div className="bg-background border border-border p-8 rounded-xl shadow-2xl relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-accent/50 rounded-t-xl" />
            <div className="flex items-center gap-2 mb-6 text-muted-foreground pb-4 border-b border-border/50">
              <TerminalSquare className="w-5 h-5 text-primary" />
              <span className="font-mono text-sm">/usr/bin/env message</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-mono text-muted-foreground">
                  Name
                </label>
                <Input
                  required
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-secondary/50 border-border/50 focus:border-primary font-mono text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-muted-foreground">
                  Email
                </label>
                <Input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@company.com"
                  className="bg-secondary/50 border-border/50 focus:border-primary font-mono text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-muted-foreground">
                  Message
                </label>
                <Textarea
                  required
                  placeholder="Write your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-secondary/50 border-border/50 focus:border-primary min-h-[150px] font-mono text-sm resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-mono uppercase tracking-wider h-12 mt-4"
              >
                {isSubmitting ? (
                  "Transmitting..."
                ) : (
                  <span className="flex items-center gap-2">
                    Send Packet <Send className="w-4 h-4" />
                  </span>
                )}
              </Button>
            </form>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
