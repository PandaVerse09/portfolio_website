import { motion } from "framer-motion";
import { FaAws } from "react-icons/fa";
import { Award, CheckCircle2, ExternalLink, ShieldCheck, Cpu, Lock, Cloud, DollarSign } from "lucide-react";

export default function Certifications() {
  const domains = [
    { title: "Cloud Concepts", desc: "AWS Architecture & Cloud Value Proposition", icon: Cloud },
    { title: "Security & Compliance", desc: "Shared Responsibility & Security Controls", icon: Lock },
    { title: "Cloud Technology", desc: "Core Services, Infrastructure & Deployments", icon: Cpu },
    { title: "Billing & Pricing", desc: "AWS Cost Management, Models & Support", icon: DollarSign },
  ];

  return (
    <section id="certifications" className="py-24 relative border-t border-border/50">
      <div className="container mx-auto px-6 max-w-5xl relative">
        {/* Server Rack Ears (Mount Brackets) */}
        <div className="absolute -left-5 top-8 bottom-8 w-5 bg-card/60 border-y border-l border-border rounded-l-md flex flex-col justify-around items-center py-12 opacity-80 pointer-events-none hidden lg:flex shadow-[0_0_15px_rgba(0,0,0,0.5)]">
          <div className="w-2.5 h-2.5 rounded-full bg-[#182335] border border-border/85 flex items-center justify-center shadow-inner">
            <div className="w-1 h-1 rounded-full bg-slate-500" />
          </div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#182335] border border-border/85 flex items-center justify-center shadow-inner">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF9900]/80 animate-pulse shadow-[0_0_8px_rgba(255,153,0,0.8)]" />
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
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF9900]/80 animate-pulse shadow-[0_0_8px_rgba(255,153,0,0.8)]" />
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
            className="mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono text-foreground flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF9900] animate-pulse shadow-[0_0_8px_rgba(255,153,0,0.8)]" />
              <span className="text-muted-foreground mr-1 text-2xl md:text-3xl font-light">cat</span>certs.json
            </h2>
            <div className="h-1 w-20 bg-[#FF9900]/60 rounded-full" />
          </motion.div>

          {/* Certificate Main Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card/40 border border-[#FF9900]/30 hover:border-[#FF9900]/60 rounded-2xl p-8 backdrop-blur-md relative overflow-hidden shadow-[0_0_30px_rgba(255,153,0,0.08)] group transition-all duration-300"
          >
            {/* Top gradient glow line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF9900] via-amber-400 to-[#FF9900]" />

            {/* Background AWS Watermark Icon */}
            <div className="absolute -right-6 -bottom-6 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity duration-500">
              <FaAws className="text-[220px] text-[#FF9900]" />
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="flex items-start md:items-center gap-5">
                {/* AWS Badge Icon */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-[#232F3E] to-[#131921] border border-[#FF9900]/40 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(255,153,0,0.25)] group-hover:scale-105 transition-transform duration-300">
                  <FaAws className="text-4xl md:text-5xl text-[#FF9900]" />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      <CheckCircle2 className="w-3 h-3" /> VERIFIED & ACTIVE
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-[#FF9900]/10 text-[#FF9900] border border-[#FF9900]/30">
                      <Award className="w-3 h-3" /> Official AWS Certification
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold font-mono text-foreground tracking-tight group-hover:text-[#FF9900] transition-colors">
                    AWS Certified Cloud Practitioner
                  </h3>
                  <p className="text-muted-foreground font-mono text-xs md:text-sm mt-1">
                    Exam Code: <span className="text-foreground font-bold">CLF-C02</span> &bull; Issued by <span className="text-[#FF9900] font-semibold">Amazon Web Services</span>
                  </p>
                  
                  {/* Dates */}
                  <div className="mt-3 flex items-center font-mono text-xs text-muted-foreground">
                    <div>
                      Active Period: <span className="text-foreground font-medium">Jul 30, 2026 – Jul 30, 2029</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status / Link button */}
              <div className="shrink-0 flex items-center gap-3">
                <a
                  href="https://www.credly.com/go/hn1ghTtFHUqaaGKJvdOFGw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-semibold bg-[#FF9900]/10 hover:bg-[#FF9900]/20 text-[#FF9900] border border-[#FF9900]/40 hover:border-[#FF9900] transition-all duration-200 shadow-md group/btn"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verify on Credly</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-75 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Description & Competencies Grid */}
            <div className="mt-8 pt-6 border-t border-border/40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
              {domains.map((domain, i) => {
                const Icon = domain.icon;
                return (
                  <div
                    key={i}
                    className="bg-background/60 border border-border/50 rounded-xl p-4 hover:border-[#FF9900]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5 text-[#FF9900]">
                      <Icon className="w-4 h-4" />
                      <span className="font-mono text-xs font-bold text-foreground">{domain.title}</span>
                    </div>
                    <p className="text-[11px] font-mono text-muted-foreground leading-relaxed">
                      {domain.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
