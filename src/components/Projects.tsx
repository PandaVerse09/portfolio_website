import { motion } from "framer-motion";
import { Github, ExternalLink, Server, Boxes, Rocket } from "lucide-react";

const PROJECTS = [
  {
    title: "Kubernetes Platform Engineering & GitOps Lab",
    description:
      "Architected modular Terraform IaC provisioning a multi-AZ AWS VPC (4 subnets, 2 AZs) and EKS v1.30 cluster with Argo CD + Helm v3 GitOps delivery — achieving commit-to-production rollouts in under 3 minutes. Engineered multi-stage Docker builds gated by Aqua Trivy CVE scanning (cutting image size 79%, 1.1GB → 227MB), configured HPA (2→5 replicas) and Pod Disruption Budgets for sub-2s chaos failover, and instrumented RED-method observability via Prometheus ServiceMonitors and Grafana dashboards.",
    tech: ["Kubernetes", "Helm", "Argo CD", "Terraform", "AWS EKS", "Docker", "Prometheus", "Grafana", "Trivy"],
    icon: <Boxes className="w-6 h-6" />,
    github: "https://github.com/PandaVerse09/kubernetes-platform-gitops",
  },
  {
    title: "DeployForge — Cloud-Native Internal Developer Platform",
    description:
      "Built an event-driven Internal Developer Platform decoupling deployment requests from background execution via BullMQ and Redis, supporting concurrent builds with isolated filesystem sandboxing. Developed a 10-state finite state machine orchestrating Git checkout, multi-stage Docker builds, Trivy CVE/secret DevSecOps gating, and AWS SDK v3 (ECR/ECS/ALB) Blue/Green promotion via ALB listener re-weighting with SHA-256 digest auditing and real-time build log streaming.",
    tech: ["TypeScript", "Node.js", "BullMQ", "Redis", "PostgreSQL", "Prisma", "Docker", "Trivy", "AWS SDK", "React"],
    icon: <Rocket className="w-6 h-6" />,
    github: "https://github.com/PandaVerse09/DeployForge",
  },
  {
    title: "Daily Revenue Monitoring Portal (DRMP)",
    description:
      "Built 25+ REST API endpoints with Express.js and MongoDB/Mongoose across 4 collections (Users, Payment Submissions, Consolidated Reports, Audit Logs) for UPPCL daily revenue aggregation across Bank Wire, Payment Gateway, and Billing System streams; implemented JWT auth, bcrypt, RBAC, async audit logging, and PDFKit/ExcelJS exports. Tested with Jest, Supertest, and Postman, and deployed on AWS EC2 via Terraform, Docker (non-root, multi-stage), Nginx, Certbot SSL, and GitHub Actions CI/CD.",
    tech: ["Node.js", "Express.js", "MongoDB", "Docker", "Terraform", "Nginx", "AWS EC2", "Jest", "GitHub Actions"],
    icon: <Server className="w-6 h-6" />,
    github: "https://github.com/PandaVerse09/daily-revenue-monitoring-portal",
    live: "https://utkarsh-drmp.duckdns.org/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-card/15 relative border-y border-border/50 backdrop-blur-sm"
    >
      <div className="container mx-auto px-6 max-w-6xl relative">
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
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono flex items-center justify-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(88,166,255,0.8)] shrink-0" />
              <span className="text-muted-foreground mr-1 text-2xl font-light">&gt;_</span>deployed_projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Flagship systems showcasing backend architecture, Kubernetes GitOps,
              cloud infrastructure, and CI/CD automation.
            </p>
          </motion.div>
 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card/45 border border-border/60 rounded-xl p-6 flex flex-col h-full hover:border-primary/50 hover:shadow-[0_0_30px_rgba(88,166,255,0.15)] transition-all duration-300 relative group overflow-hidden backdrop-blur-sm"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
 
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-secondary rounded-lg text-primary">
                  {project.icon}
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub Repository`}
                    className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-secondary rounded-md"
                  >
                    <Github size={20} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} Live Deployment`}
                      className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-md"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm flex-grow mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
