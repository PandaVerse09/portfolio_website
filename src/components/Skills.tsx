import { motion } from "framer-motion";
import {
  SiDocker,
  SiGithubactions,
  SiNginx,
  SiPython,
  SiHtml5,
  SiCss,
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
} from "react-icons/si";
import { FaJava, FaJs, FaAws } from "react-icons/fa";
import {
  Cloud,
  Lock,
  Cookie,
  Fingerprint,
  Shield,
  FileCheck,
  UploadCloud,
  FileText,
  FileDown,
  FileSpreadsheet,
  Image,
  FlaskConical,
} from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Languages & Frontend",
    skills: [
      { name: "JavaScript", icon: FaJs },
      { name: "Python", icon: SiPython },
      { name: "Java", icon: FaJava },
      { name: "C", icon: SiC },
      { name: "React 18", icon: SiReact },
      { name: "Vite", icon: SiVite },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: Cloud },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    title: "Authentication & Security",
    skills: [
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "bcrypt", icon: Lock },
      { name: "HTTP-only Cookies", icon: Cookie },
      { name: "Session Management", icon: Fingerprint },
      { name: "RBAC", icon: Shield },
    ],
  },
  {
    title: "Backend Libraries",
    skills: [
      { name: "express-validator", icon: FileCheck },
      { name: "Multer", icon: UploadCloud },
      { name: "csv-parser", icon: FileText },
      { name: "PDFKit", icon: FileDown },
      { name: "ExcelJS", icon: FileSpreadsheet },
      { name: "ImageKit", icon: Image },
      { name: "Jest", icon: SiJest },
      { name: "Supertest", icon: FlaskConical },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "AWS", icon: FaAws },
      { name: "Docker", icon: SiDocker },
      { name: "Terraform", icon: SiTerraform },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Nginx", icon: SiNginx },
      { name: "Certbot", icon: SiLetsencrypt },
      { name: "Linux", icon: SiLinux },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Postman", icon: SiPostman },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
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
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="text-primary mr-2">~</span>cat tools.txt
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
                      className="flex items-center gap-3 bg-background border border-border p-3 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-colors group"
                    >
                      <Icon className="text-muted-foreground group-hover:text-primary transition-colors text-xl" />
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
