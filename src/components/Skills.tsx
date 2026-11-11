import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiDocker,
  SiGithubactions,
  SiNginx,
  SiPython,
  SiGit,
  SiLinux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiReact,
  SiPostman,
  SiTailwindcss,
  SiC,
  SiVite,
  SiMysql,
  SiTerraform,
  SiLetsencrypt,
  SiJest,
  SiJsonwebtokens,
  SiGithub,
  SiTypescript,
  SiPostgresql,
  SiRedis,
  SiPrisma,
  SiKubernetes,
  SiHelm,
  SiArgo,
  SiPrometheus,
  SiGrafana,
  SiTrivy,
  SiClaude,
  SiOpenai,
} from "react-icons/si";
import { FaJava, FaJs, FaAws } from "react-icons/fa";
import {
  Cloud,
  Layers,
  Binary,
  Boxes,
  Network,
  Database,
  Cpu,
  Globe,
  Server,
  HardDrive,
  KeyRound,
  RefreshCw,
  FileCode2,
  Activity,
  Shield,
  CheckCircle2,
  FlaskConical,
  Sparkles,
  Terminal,
  Bot,
  Wand2,
  Workflow,
  type LucideIcon,
} from "lucide-react";

interface SkillItem {
  name: string;
  icon: IconType | LucideIcon;
  badge?: string;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming & Frontend",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: FaJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Java", icon: FaJava },
      { name: "C", icon: SiC },
      { name: "React", icon: SiReact },
      { name: "Vite", icon: SiVite },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: Cloud },
      { name: "Microservices", icon: Layers },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "Redis", icon: SiRedis },
      { name: "Prisma", icon: SiPrisma },
      { name: "BullMQ", icon: Workflow },
    ],
  },
  {
    title: "Core CS Fundamentals",
    skills: [
      { name: "DSA", icon: Binary },
      { name: "OOP", icon: Boxes },
      { name: "System Design", icon: Network },
      { name: "DBMS", icon: Database },
      { name: "OS", icon: Cpu },
      { name: "Networks", icon: Globe },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    skills: [
      { name: "AWS", icon: FaAws, badge: "CLF-C02" },
      { name: "EC2", icon: Server },
      { name: "EKS", icon: SiKubernetes },
      { name: "S3", icon: HardDrive },
      { name: "CloudFront", icon: Globe },
      { name: "IAM", icon: KeyRound },
      { name: "Terraform", icon: SiTerraform },
      { name: "Linux", icon: SiLinux },
    ],
  },
  {
    title: "Containers & Orchestration",
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Helm", icon: SiHelm },
      { name: "NGINX Ingress", icon: SiNginx },
      { name: "Certbot SSL", icon: SiLetsencrypt },
    ],
  },
  {
    title: "DevOps & GitOps",
    skills: [
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Argo CD", icon: SiArgo },
      { name: "CI/CD", icon: RefreshCw },
      { name: "IaC", icon: FileCode2 },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
    ],
  },
  {
    title: "Observability & Security",
    skills: [
      { name: "Prometheus", icon: SiPrometheus },
      { name: "Grafana", icon: SiGrafana },
      { name: "Trivy", icon: SiTrivy },
      { name: "K8s HPA", icon: Activity },
      { name: "NetworkPolicies", icon: Shield },
      { name: "JWT & RBAC", icon: SiJsonwebtokens },
    ],
  },
  {
    title: "Testing & Tools",
    skills: [
      { name: "Unit Testing", icon: CheckCircle2 },
      { name: "Jest", icon: SiJest },
      { name: "Supertest", icon: FlaskConical },
      { name: "Postman", icon: SiPostman },
    ],
  },
  {
    title: "AI & Developer Tooling",
    skills: [
      { name: "Antigravity", icon: Sparkles },
      { name: "Claude", icon: SiClaude },
      { name: "ChatGPT", icon: SiOpenai },
      { name: "OpenAI Codex", icon: Terminal },
      { name: "AI-Assisted Dev", icon: Bot },
      { name: "Prompt Eng.", icon: Wand2 },
    ],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id="skills" className="py-24 relative">
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
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(138,180,248,0.8)]" />
              <span className="text-muted-foreground mr-1 text-2xl font-light">~</span>cat tools.txt
            </h2>
            <div className="h-1 w-20 bg-primary/50 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-card/50 border border-border rounded-xl p-8 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <span className="font-mono text-8xl font-black">{idx + 1}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-6 text-foreground font-mono">{category.title}</h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {category.skills.map((skill, sIdx) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div 
                      key={sIdx}
                      variants={itemVariants}
                      className="flex items-center justify-between bg-background border border-border p-3 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-colors group"
                    >
                      <div className="flex items-center gap-2.5 overflow-hidden">
                        <Icon className="text-muted-foreground group-hover:text-primary transition-colors text-xl shrink-0" />
                        <span className="text-sm font-medium text-foreground truncate">{skill.name}</span>
                      </div>
                      {skill.badge && (
                        <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#FF9900]/10 text-[#FF9900] border border-[#FF9900]/30 shrink-0">
                          {skill.badge}
                        </span>
                      )}
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
