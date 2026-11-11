import { motion } from "framer-motion";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import {
  Award,
  ExternalLink,
  GraduationCap,
  Trophy,
  Code2,
} from "lucide-react";

const CODING_PROFILES = [
  {
    platform: "LeetCode",
    handle: "pandaverze",
    badge: "100+ Problems Solved",
    description:
      "Consistent Data Structures & Algorithms practice focusing on problem-solving patterns, time-space optimization, and clean implementations.",
    url: "https://leetcode.com/u/pandaverze/",
    icon: SiLeetcode,
    accentClass: "text-amber-400",
    borderClass: "border-amber-500/30 hover:border-amber-400/60",
    badgeClass: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    topLineClass: "from-amber-400/70 to-orange-500/70",
  },
  {
    platform: "Codeforces",
    handle: "Utkarsh_Mishra09",
    badge: "Competitive Programming",
    description:
      "Regular algorithmic problem solving and timed practice sharpening core CS fundamentals, logic, and edge-case reasoning.",
    url: "https://codeforces.com/profile/Utkarsh_Mishra09",
    icon: SiCodeforces,
    accentClass: "text-sky-400",
    borderClass: "border-sky-500/30 hover:border-sky-400/60",
    badgeClass: "bg-sky-500/10 text-sky-400 border-sky-500/30",
    topLineClass: "from-sky-400/70 to-primary/70",
  },
];

const LEADERSHIP_ITEMS = [
  {
    text: "Core Team Member, Google Developer Groups (GDG) — Rajkiya Engineering College, Mirzapur.",
  },
  {
    text: "Problem Solving — Solved 100+ LeetCode problems; also practice on Codeforces.",
  },
  {
    text: "Class Representative — Liaison between faculty and 60+ students; resolved academic and administrative concerns.",
  },
  {
    text: "Student Coordinator, Startup Spotlight (Skillancer Pvt. Ltd.) — Led event logistics and on-ground execution.",
    certificateUrl:
      "https://drive.google.com/file/d/1GCaWU2LBoTIrrxUeTIwxT6LnyiFPcgIm/view?usp=drive_link",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-24 relative border-t border-border/50"
    >
      <div className="container mx-auto px-6 max-w-5xl relative">
        {/* Server Rack Ears (Mount Brackets) */}
        <div className="absolute -left-5 top-8 bottom-8 w-5 bg-card/60 border-y border-l border-border rounded-l-md flex flex-col justify-around items-center py-12 opacity-80 pointer-events-none hidden lg:flex shadow-[0_0_15px_rgba(0,0,0,0.5)]">
          <div className="w-2.5 h-2.5 rounded-full bg-[#182335] border border-border/85 flex items-center justify-center shadow-inner">
            <div className="w-1 h-1 rounded-full bg-slate-500" />
          </div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#182335] border border-border/85 flex items-center justify-center shadow-inner">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/70 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
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
            <div className="w-1.5 h-1.5 rounded-full bg-primary/70 animate-pulse shadow-[0_0_8px_rgba(88,166,255,0.8)]" />
          </div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#182335] border border-border/85 flex items-center justify-center shadow-inner">
            <div className="w-1 h-1 rounded-full bg-slate-500" />
          </div>
        </div>

        <div className="md:px-8 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono text-foreground flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              <span className="text-muted-foreground mr-1 text-2xl md:text-3xl font-light">
                cat
              </span>
              profiles_&_achievements.md
            </h2>
            <div className="h-1 w-20 bg-emerald-500/60 rounded-full" />
          </motion.div>

          {/* Coding Profiles */}
          <div>
            <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-5 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-primary" />
              Coding & Competitive Programming Profiles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CODING_PROFILES.map((profile, idx) => {
                const Icon = profile.icon;
                return (
                  <motion.a
                    key={profile.platform}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`bg-card/45 border rounded-xl p-6 backdrop-blur-sm relative overflow-hidden group transition-all duration-300 flex flex-col justify-between ${profile.borderClass}`}
                  >
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${profile.topLineClass}`}
                    />

                    <div>
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3.5">
                          <div className="p-3 bg-secondary rounded-xl border border-border/70">
                            <Icon className={`w-6 h-6 ${profile.accentClass}`} />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold font-mono text-foreground group-hover:text-primary transition-colors">
                              {profile.platform}
                            </h4>
                            <p className="text-xs font-mono text-muted-foreground">
                              @{profile.handle}
                            </p>
                          </div>
                        </div>

                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold border shrink-0 ${profile.badgeClass}`}
                        >
                          {profile.badge}
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                        {profile.description}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-primary group-hover:underline">
                      <span>Open {profile.platform} Profile</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Education & Leadership */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 bg-card/45 border border-border/60 rounded-xl p-6 backdrop-blur-sm relative overflow-hidden hover:border-primary/40 transition-colors"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-accent/50" />
              <div className="flex items-center gap-2.5 mb-5">
                <div className="p-2.5 bg-secondary rounded-lg text-primary">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-mono text-foreground">
                  Education
                </h3>
              </div>

              <div className="space-y-2">
                <p className="font-mono font-semibold text-foreground text-base">
                  Bachelor of Technology in Information Technology
                </p>
                <p className="text-sm text-primary font-mono">
                  Dr. A.P.J. Abdul Kalam Technical University
                </p>
                <div className="pt-3 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-muted-foreground border-t border-border/40">
                  <span>Sept 2023 – May 2027</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/30 font-semibold">
                    CGPA: 7.66
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Leadership & Achievements Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-7 bg-card/45 border border-border/60 rounded-xl p-6 backdrop-blur-sm relative overflow-hidden hover:border-primary/40 transition-colors"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500/60 to-primary/60" />
              <div className="flex items-center gap-2.5 mb-5">
                <div className="p-2.5 bg-secondary rounded-lg text-emerald-400">
                  <Trophy className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-mono text-foreground flex items-center gap-2">
                  Achievements & Leadership
                </h3>
              </div>

              <ul className="space-y-3">
                {LEADERSHIP_ITEMS.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex flex-wrap items-baseline gap-2 text-sm text-muted-foreground font-mono leading-relaxed"
                  >
                    <span className="text-emerald-400 shrink-0">▸</span>
                    <span className="flex-1 min-w-0">
                      {item.text}
                      {item.certificateUrl && (
                        <a
                          href={item.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 ml-2 text-xs text-primary hover:underline font-semibold"
                        >
                          <Award className="w-3 h-3" />
                          View Certificate
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
