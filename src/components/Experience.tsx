import { motion } from "framer-motion";
import { Briefcase, CalendarDays, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Backend & DevOps Intern",
    company: "UPPCL — Uttar Pradesh Power Corporation Ltd.",
    location: "IT Division, Lucknow (On-site)",
    duration: "Jun 2026 – Jul 2026",
    points: [
      "Built the backend for the Daily Revenue Monitoring Portal (DRMP), aggregating daily revenue data (Bank Wire, Payment Gateway, Billing System) across UPPCL divisions; designed 25+ REST API endpoints with JWT auth, bcrypt hashing, RBAC, and server-side validation.",
      "Architected MongoDB schemas via Mongoose ODM with an asynchronous audit-trail logging service, prior-date continuity checks, and PDFKit/ExcelJS report exports.",
      "Deployed the application on AWS EC2 provisioned via Terraform, containerized with Docker (non-root, multi-stage builds), and configured Nginx reverse proxy with Certbot SSL and a GitHub Actions CI/CD pipeline.",
    ],
  },

  {
    role: "Software Engineering Intern",
    company: "i2k2 Networks Pvt. Ltd.",
    location: "Noida, Uttar Pradesh (Remote)",
    duration: "Jan 2026 – Apr 2026",
    points: [
      "Worked in Linux-based environments using Git & GitHub for version control, branching, and collaborative backend code management across real-world SDLC workflows.",
      "Gained hands-on exposure to CI/CD pipelines, Docker containerization, and AWS cloud infrastructure in a professional DevOps setting.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 relative border-t border-border/50"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 font-mono text-foreground">
            <span className="text-primary mr-2">git log</span>experience
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

                <div className="bg-background border border-border rounded-xl p-6 shadow-md hover:border-primary/30 transition-colors relative overflow-hidden">
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
                    <div className="flex flex-col items-start sm:items-end gap-1 text-muted-foreground font-mono text-xs">
                      <span className="flex items-center gap-1">
                        <CalendarDays className="w-3 h-3" /> {exp.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {exp.location}
                      </span>
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
    </section>
  );
}
