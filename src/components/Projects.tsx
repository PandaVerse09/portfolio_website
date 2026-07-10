import { motion } from "framer-motion";
import { Github, ExternalLink, Server, Cloud, Terminal, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const PROJECTS = [
  {
    title: "Daily Revenue Monitoring Portal (DRMP)",
    description:
      "Built 25+ REST API endpoints with Express.js and MongoDB/Mongoose for daily revenue reporting across Bank Wire, Payment Gateway, and Billing System streams; implemented JWT auth, bcrypt hashing, and RBAC. Engineered a client-side API adapter routing standard HTTP methods (GET, PUT, DELETE) through POST payloads to bypass firewall restrictions. Provisioned AWS EC2 infrastructure with Terraform, containerized the app with Docker (multi-stage, non-root builds), and configured Nginx with Certbot-managed SSL/TLS. Automated builds, pushes, and zero-downtime EC2 redeployment with a GitHub Actions CI/CD pipeline.",
    tech: ["Node.js", "Express.js", "MongoDB", "Docker", "Terraform", "Nginx", "AWS", "GitHub Actions"],
    icon: <Server className="w-6 h-6" />,
    github: "https://github.com/PandaVerse09/daily-revenue-monitoring-portal",
    live: "https://utkarsh-drmp.duckdns.org/",
  },
  {
    title: "Portfolio Website with Automated CI/CD Deployment",
    description:
      "Deployed a personal portfolio website on AWS S3 + CloudFront CDN with a zero-touch CI/CD pipeline via GitHub Actions on every push to main. Configured HTTPS/TLS, IAM permissions, and automated caching for production-grade architecture. Automated build-and-deploy workflow invalidates the CloudFront cache on each release for instant content updates.",
    tech: ["AWS S3", "CloudFront", "GitHub Actions", "React", "TypeScript", "Vite"],
    icon: <Cloud className="w-6 h-6" />,
    github: "https://github.com/PandaVerse09/portfolio_infrastructure",
    live: "https://d3qvrbjs8hjfhe.cloudfront.net/",
  },
  {
    title: "Dockerized To-Do Application",
    description:
      "Containerized a Flask web application with Docker and configured Nginx as a reverse proxy to simulate real-world deployment topology across environments. Implemented task CRUD routes, persistent storage, and a Docker Compose setup to spin up the app and reverse proxy together with a single command.",
    tech: ["Flask", "Docker", "Nginx", "Docker Compose"],
    icon: <Code className="w-6 h-6" />,
    github: "https://github.com/PandaVerse09/todo-flask-app",
    live: "https://utkarshapp.publicvm.com",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-card/30 relative border-y border-border/50"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="text-primary mr-2">#</span>deployed_projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hands-on projects showcasing cloud infrastructure, CI/CD automation,
            and scalable deployment practices.
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
              className="bg-background border border-border rounded-xl p-6 flex flex-col h-full hover:border-primary/40 hover:shadow-[0_0_30px_rgba(88,166,255,0.1)] transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
 
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-secondary rounded-lg text-primary">
                  {project.icon}
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-secondary rounded-md"
                  >
                    <Github size={20} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
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
    </section>
  );
}
