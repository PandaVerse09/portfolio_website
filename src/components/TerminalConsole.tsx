import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon, ShieldAlert, Cpu } from "lucide-react";

interface LogLine {
  text: string;
  type: "input" | "output" | "error" | "success" | "warning";
}

export default function TerminalConsole() {
  const [history, setHistory] = useState<LogLine[]>([
    { text: "Welcome to Utkarsh's Terminal Shell v1.0.3", type: "success" },
    { text: "Type 'help' to see available cloud controls.", type: "output" },
    { text: "", type: "output" },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const COMMANDS = ["help", "skills", "certs", "certifications", "projects", "coding", "terraform apply", "docker run drmp", "clear", "system"];

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLines: LogLine[] = [{ text: `guest@uam-cloud:~$ ${cmd}`, type: "input" }];

    if (trimmed === "") {
      setHistory((prev) => [...prev, ...newLines]);
      return;
    }

    setCommandHistory((prev) => [cmd, ...prev]);
    setHistoryIndex(-1);

    switch (trimmed) {
      case "help":
        newLines.push(
          { text: "Available commands:", type: "success" },
          { text: "  skills          - Displays software, cloud & DevOps skills.", type: "output" },
          { text: "  certs           - View verified AWS certification.", type: "output" },
          { text: "  projects        - List flagship engineering projects.", type: "output" },
          { text: "  coding          - View LeetCode & Codeforces profiles.", type: "output" },
          { text: "  terraform apply - Simulate provisioning AWS resource infrastructure.", type: "output" },
          { text: "  docker run drmp - Spin up simulated Daily Revenue Monitoring container logs.", type: "output" },
          { text: "  system          - Outputs system host diagnostics & latency check.", type: "output" },
          { text: "  clear           - Clears terminal output screen.", type: "output" }
        );
        break;
      case "certs":
      case "certifications":
        newLines.push(
          { text: "--- Verified Industry Credentials ---", type: "success" },
          { text: "[AWS Certification]: AWS Certified Cloud Practitioner (CLF-C02)", type: "warning" },
          { text: "  Issuer: Amazon Web Services (AWS)", type: "output" },
          { text: "  Status: Active & Verified (Jul 30, 2026 – Jul 30, 2029)", type: "success" },
          { text: "  Credly Badge: https://www.credly.com/badges/351f5a2e-bb2f-42fc-97bb-3a51f0786e97", type: "output" },
          { text: "  Domains: Cloud Concepts, Security & Compliance, Technology, Billing & Pricing", type: "output" }
        );
        break;
      case "skills":
        newLines.push(
          { text: "--- Technical Stack Output ---", type: "success" },
          { text: "[Backend & DB]: Node.js, Express.js, TypeScript, REST APIs, Microservices, MongoDB, PostgreSQL, MySQL, Redis, Prisma, BullMQ", type: "output" },
          { text: "[Programming & CS]: Python, JavaScript, TypeScript, Java, C, React | DSA, OOP, System Design, DBMS, OS, Networks", type: "output" },
          { text: "[Cloud & K8s]: AWS (EC2, EKS, S3, CloudFront, IAM), Terraform, Docker, Kubernetes, Helm, NGINX Ingress, Argo CD", type: "output" },
          { text: "[Observability & Security]: Prometheus, Grafana, Trivy, K8s HPA, NetworkPolicies, Jest, Supertest, Postman", type: "output" },
          { text: "[AI Tooling]: Antigravity, Claude, ChatGPT, OpenAI Codex, Prompt Engineering", type: "output" }
        );
        break;
      case "projects":
        newLines.push(
          { text: "--- Flagship Projects ---", type: "success" },
          { text: "1. Kubernetes Platform Engineering & GitOps Lab -> AWS VPC/EKS + Argo CD + Helm + Trivy + Prometheus/Grafana [Repo]", type: "output" },
          { text: "2. DeployForge -> Event-Driven IDP (TypeScript, BullMQ, Redis, PostgreSQL, Prisma, Trivy, AWS ECR/ECS/ALB) [Repo]", type: "output" },
          { text: "3. DRMP (Daily Revenue Monitoring Portal) -> Node.js/Express/MongoDB + AWS EC2 + Terraform + Docker [Live]", type: "output" },
          { text: "Tip: Run 'docker run drmp' to spin up the revenue monitoring application service.", type: "warning" }
        );
        break;
      case "coding":
      case "profiles":
        newLines.push(
          { text: "--- Coding & Competitive Programming Profiles ---", type: "success" },
          { text: "[LeetCode]:   https://leetcode.com/u/pandaverze/ (100+ problems solved)", type: "output" },
          { text: "[Codeforces]: https://codeforces.com/profile/Utkarsh_Mishra09", type: "output" }
        );
        break;
      case "terraform apply":
        newLines.push(
          { text: "Initializing provider plugins...", type: "output" },
          { text: "Terraform has been successfully initialized!", type: "success" },
          { text: "aws_vpc.main: Creating...", type: "output" },
          { text: "aws_subnet.public_a: Creating...", type: "output" },
          { text: "aws_security_group.web_sg: Creating...", type: "output" },
          { text: "aws_instance.web_server: Creating...", type: "output" },
          { text: "aws_instance.web_server: Creation complete after 3s [ID: i-0ab462f8373b9e4a]", type: "success" },
          { text: "Apply complete! Resources: 4 added, 0 changed, 0 destroyed.", type: "success" }
        );
        break;
      case "docker run drmp":
        newLines.push(
          { text: "Pulling image 'pandaverse09/drmp:latest' from Docker Hub...", type: "output" },
          { text: "Digest: sha256:7b8593a1be60f381c8502df2ad62788a101b0b57e6205e4c02932c02741d401a", type: "output" },
          { text: "Status: Downloaded newer image for pandaverse09/drmp:latest", type: "success" },
          { text: "[drmp-api] 2026-07-10 16:30:00 - Server starting on port 5000", type: "output" },
          { text: "[drmp-api] 2026-07-10 16:30:01 - Connected successfully to MongoDB", type: "success" },
          { text: "[drmp-api] 2026-07-10 16:30:02 - JWT Authentication Middlewares initialized", type: "output" },
          { text: "[drmp-api] 2026-07-10 16:30:03 - Daily Audit Trail background runner active", type: "success" }
        );
        break;
      case "system":
        newLines.push(
          { text: "--- UAM Cloud Node Host Diagnostics ---", type: "success" },
          { text: `OS: Linux 5.15.0-89-generic #99-Ubuntu SMP x86_64`, type: "output" },
          { text: "Uptime: 24 days, 3 hours, 12 minutes", type: "output" },
          { text: "Docker Daemon Status: running (18 active containers)", type: "success" },
          { text: "Terraform Version: v1.5.7", type: "output" },
          { text: "Cloud Provider Latency (AWS us-east-1): 42ms", type: "success" },
          { text: "Active System Load: 0.28, 0.41, 0.38", type: "output" }
        );
        break;
      case "clear":
        setHistory([
          { text: "Welcome to Utkarsh's Terminal Shell v1.0.3", type: "success" },
          { text: "Type 'help' to see available cloud controls.", type: "output" },
          { text: "", type: "output" },
        ]);
        setInputVal("");
        return;
      default:
        newLines.push({
          text: `Command '${cmd}' not found. Type 'help' for a list of available actions.`,
          type: "error",
        });
    }

    setHistory((prev) => [...prev, ...newLines]);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex < commandHistory.length) {
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const prevIndex = historyIndex - 1;
      if (prevIndex >= 0) {
        setHistoryIndex(prevIndex);
        setInputVal(commandHistory[prevIndex]);
      } else {
        setHistoryIndex(-1);
        setInputVal("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const match = COMMANDS.find((c) => c.startsWith(inputVal.trim().toLowerCase()));
      if (match) {
        setInputVal(match);
      }
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      onClick={focusInput}
      className="w-full max-w-2xl bg-black/85 border border-primary/30 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(88,166,255,0.15)] backdrop-blur-md font-mono text-xs md:text-sm text-foreground flex flex-col h-[320px] transition-all duration-300 hover:border-primary/60 cursor-text"
    >
      {/* Top bar */}
      <div className="bg-secondary/40 border-b border-border/60 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-[10px] tracking-widest text-muted-foreground uppercase font-bold">
            Interactive cloud console
          </span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
        </div>
      </div>

      {/* Output Console area */}
      <div
        ref={containerRef}
        className="flex-grow p-4 overflow-y-auto space-y-2 select-text scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent"
      >
        {history.map((line, idx) => {
          let color = "text-foreground";
          if (line.type === "input") color = "text-accent font-semibold";
          else if (line.type === "success") color = "text-emerald-400";
          else if (line.type === "warning") color = "text-amber-400";
          else if (line.type === "error") color = "text-red-400";
          else if (line.type === "output") color = "text-muted-foreground";

          return (
            <div key={idx} className={`whitespace-pre-wrap leading-relaxed ${color}`}>
              {line.text}
            </div>
          );
        })}
      </div>

      {/* Input row */}
      <div className="p-4 pt-0 border-t border-border/30 bg-black/30 flex items-center gap-2">
        <span className="text-accent font-semibold shrink-0">guest@uam-cloud:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-grow bg-transparent border-none outline-none text-foreground font-mono focus:ring-0 p-0"
          placeholder="type command..."
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
        />
      </div>
    </div>
  );
}
