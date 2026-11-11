import { motion } from "framer-motion";
import { Briefcase, CalendarDays, MapPin, Award, ExternalLink } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "UPPCL — Uttar Pradesh Power Corporation Ltd.",
    location: "IT Division, Lucknow",
    duration: "Jun 2026 – Jul 2026",
    certificateUrl:
      "https://drive.google.com/file/d/1WWwIqT_Up3jmhRvMZy3StGa-FmHSYCyY/view?usp=drive_link",
    points: [
      "Built the backend for the Daily Revenue Monitoring Portal (DRMP), aggregating revenue data from 3 payment streams (Bank Wire, Payment Gateway, Billing System) across UPPCL divisions; designed 25+ REST API endpoints with JWT auth, bcrypt, RBAC, and server-side validation.",
      "Designed 4 MongoDB collections (Users, Payment Submissions, Consolidated Reports, Audit Logs) via Mongoose ODM with an asynchronous audit-trail logging service, prior-date continuity checks, and PDFKit/ExcelJS report exports.",
      "Tested 25+ REST endpoints with Jest, Supertest, and Postman. Hosted initially on UPPCL servers, then redeployed on AWS EC2 via Terraform with Docker (non-root, multi-stage), Nginx, Certbot SSL, and GitHub Actions CI/CD.",
    ],
  },

  {
    role: "Software Engineer Intern",
    company: "i2k2 Networks Pvt. Ltd.",
    location: "Noida, Uttar Pradesh",
    duration: "Jan 2026 – Apr 2026",
    certificateUrl:
      "https://drive.google.com/file/d/1h08GbAiS6orugcA5P-46afJxokUjkvsm/view?usp=drive_link",
    points: [
      "Deployed internal applications and built GitHub Actions CI/CD pipelines while working alongside an engineering team.",
      "Used Git/GitHub branching workflows, Docker, and AWS to deliver production SDLC and deployment workflows in industry.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 relative border-t border-border/50"
    >
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
            <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
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
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-12 font-mono text-foreground flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(88,166,255,0.8)]" />
              <span className="text-muted-foreground mr-1 text-2xl md:text-3xl font-light">git log</span>experience
            </h2>

          <div className="relative border-l-2 border-border/50 pl-8 space-y-10 ml-4">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[2.85rem] top-1 w-4 h-4 rounded-full bg-primary border-2 border-background" />

                <div className="bg-card/45 border border-border/60 rounded-xl p-6 shadow-md hover:border-primary/50 hover:shadow-[0_0_20px_rgba(88,166,255,0.1)] transition-all duration-300 relative overflow-hidden backdrop-blur-sm">
                  {/* Top gradient accent — same as Contact card */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-accent/50 rounded-t-xl" />

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-bold font-mono text-foreground">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-mono text-sm mt-1">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1.5 text-muted-foreground font-mono text-xs">
                      <span className="flex items-center gap-1">
                        <CalendarDays className="w-3 h-3" /> {exp.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {exp.location}
                      </span>
                      {exp.certificateUrl && (
                        <a
                          href={exp.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 mt-1 px-3 py-1 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/60 transition-all text-[11px] font-semibold group/cert"
                        >
                          <Award className="w-3 h-3" />
                          <span>View Certificate</span>
                          <ExternalLink className="w-3 h-3 opacity-75 group-hover/cert:translate-x-0.5 group-hover/cert:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li
                        key={j}
                        className="flex gap-2 text-muted-foreground text-sm font-mono leading-relaxed"
                      >
                        <span className="text-primary mt-0.5">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
