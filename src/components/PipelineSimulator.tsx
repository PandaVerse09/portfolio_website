import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch, ShieldCheck, Box, CloudLightning, RefreshCw, Activity, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PipelineStep {
  name: string;
  icon: React.ReactNode;
  description: string;
  logs: string[];
}

const STEPS: PipelineStep[] = [
  {
    name: "Git Webhook",
    icon: <GitBranch className="w-5 h-5" />,
    description: "Receive push webhook from GitHub main branch",
    logs: [
      "[git] Fetching head commit refs/heads/main...",
      "[git] HEAD is now at 8b27c9f [feat: add dynamic monitoring dashboard]",
      "[git] Webhook verification success (signature valid)",
      "[git] Triggering build environment...",
    ],
  },
  {
    name: "Code Lint & Test",
    icon: <ShieldCheck className="w-5 h-5" />,
    description: "Run ESLint analysis & Jest automation tests",
    logs: [
      "[test] Running ESLint validation check...",
      "[test] 0 syntax errors or warnings detected.",
      "[test] PASS  src/components/TerminalConsole.test.tsx (4.2s)",
      "[test] PASS  src/components/Projects.test.tsx (3.1s)",
      "[test] Test Suites: 2 passed, 2 total | Tests: 18 passed, 18 total",
    ],
  },
  {
    name: "Docker Build",
    icon: <Box className="w-5 h-5" />,
    description: "Compile production assets & assemble container layer image",
    logs: [
      "[docker] Sending build context to Docker daemon  2.45MB",
      "[docker] Step 1/5 : FROM node:18-alpine AS builder",
      "[docker] Step 2/5 : WORKDIR /app && COPY package*.json ./",
      "[docker] Step 3/5 : RUN npm ci && COPY . . && npm run build",
      "[docker] Step 4/5 : FROM nginx:alpine && COPY --from=builder /app/dist",
      "[docker] Assembling layers -> ID: sha256:d8c0b5f1a92e",
      "[docker] Pushing to AWS ECR: 100% | Uploaded layers successfully.",
    ],
  },
  {
    name: "Terraform State",
    icon: <CloudLightning className="w-5 h-5" />,
    description: "Initialize backend provider state and verify dependencies",
    logs: [
      "[terraform] Initializing target cloud provider backend...",
      "[terraform] Refreshing existing state for aws_instance.web...",
      "[terraform] Plan: 0 to add, 1 to modify, 0 to destroy.",
      "[terraform] Updating target routing group for ingress traffic...",
      "[terraform] Infrastructure resources verified and synchronized.",
    ],
  },
  {
    name: "Rolling Deploy",
    icon: <RefreshCw className="w-5 h-5" />,
    description: "Zero-downtime container spin-up and Nginx reload",
    logs: [
      "[deploy] Initiating rolling deployment sequence on AWS cluster...",
      "[deploy] Launching target container ID: uam-web-api-v2",
      "[deploy] Port binding successful: 0.0.0.0:80 -> container:80",
      "[deploy] Verification signal sent, reloading local Nginx router...",
      "[deploy] Old container uam-web-api-v1 gracefully terminated.",
    ],
  },
  {
    name: "Health Ping",
    icon: <Activity className="w-5 h-5" />,
    description: "Validate public response status of routing gateways",
    logs: [
      "[monitor] Sending SSL health check request to utkarsh-drmp.org...",
      "[monitor] Response: HTTP/2 200 OK | SSL: Let's Encrypt (valid)",
      "[monitor] Response Time: 34ms | Load Balancer Status: Healthy",
      "[monitor] All systems fully operational. Webhook pipeline completed.",
    ],
  },
];

export default function PipelineSimulator() {
  const [pipelineState, setPipelineState] = useState<"idle" | "running" | "success" | "error">("idle");
  const [currentStepIdx, setCurrentStepIdx] = useState(-1);
  const [accumulatedLogs, setAccumulatedLogs] = useState<string[]>([]);

  const startPipeline = async () => {
    setPipelineState("running");
    setCurrentStepIdx(0);
    setAccumulatedLogs([]);

    for (let i = 0; i < STEPS.length; i++) {
      setCurrentStepIdx(i);
      const step = STEPS[i];
      
      // Print logs one by one
      for (const log of step.logs) {
        setAccumulatedLogs((prev) => [...prev, log]);
        await new Promise((resolve) => setTimeout(resolve, 350));
      }
      
      // Pause slightly between steps
      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    setPipelineState("success");
  };

  return (
    <div className="w-full bg-card/40 border border-border rounded-xl p-6 md:p-8 backdrop-blur-md relative overflow-hidden shadow-xl">
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full filter blur-[80px] pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-border/40 pb-6">
        <div>
          <h3 className="text-xl md:text-2xl font-bold font-mono text-foreground flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            Interactive CI/CD Pipeline
          </h3>
          <p className="text-muted-foreground text-sm mt-1">
            Simulate a full release deployment flow. Press launch to run the automated task sequence.
          </p>
        </div>
        <Button
          onClick={startPipeline}
          disabled={pipelineState === "running"}
          className="bg-primary hover:bg-primary/95 text-primary-foreground font-mono uppercase tracking-wider px-6 flex items-center gap-2 py-5 shrink-0 self-start md:self-center"
        >
          {pipelineState === "running" ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" /> Running...
            </>
          ) : (
            <>
              <Play className="w-4 h-4" /> Trigger Pipeline
            </>
          )}
        </Button>
      </div>

      {/* Grid flowchart */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 relative mb-8">
        {STEPS.map((step, idx) => {
          const isPending = idx > currentStepIdx && pipelineState === "running";
          const isActive = idx === currentStepIdx && pipelineState === "running";
          const isCompleted = idx < currentStepIdx || (pipelineState === "success");
          
          let cardBorder = "border-border/60";
          let iconBg = "bg-secondary";
          let iconColor = "text-muted-foreground";
          
          if (isActive) {
            cardBorder = "border-primary shadow-[0_0_15px_rgba(88,166,255,0.2)]";
            iconBg = "bg-primary/20 animate-pulse";
            iconColor = "text-primary";
          } else if (isCompleted) {
            cardBorder = "border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.1)]";
            iconBg = "bg-emerald-500/10";
            iconColor = "text-emerald-500";
          }

          return (
            <motion.div
              key={idx}
              className={`border p-4 rounded-xl flex flex-col items-center text-center transition-all bg-background/50 backdrop-blur-sm ${cardBorder}`}
              animate={isActive ? { scale: 1.05 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`p-3 rounded-xl mb-3 shrink-0 ${iconBg} ${iconColor}`}>
                {step.icon}
              </div>
              <span className="font-mono text-xs font-bold text-foreground truncate w-full">
                {step.name}
              </span>
              <span className="text-[10px] text-muted-foreground mt-1 leading-tight line-clamp-2">
                {step.description}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Log Console Output */}
      <div className="bg-black/90 border border-border/80 rounded-xl p-4 md:p-6 font-mono text-xs md:text-sm h-64 overflow-y-auto shadow-inner flex flex-col relative select-text">
        <div className="flex items-center justify-between border-b border-border/30 pb-3 mb-3 text-muted-foreground uppercase text-[10px] tracking-wider shrink-0">
          <span>Terminal console output logs</span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500" /> Pipeline: {pipelineState}
          </span>
        </div>
        <div className="flex-grow space-y-1.5 scrollbar-thin overflow-y-auto">
          <AnimatePresence>
            {accumulatedLogs.length === 0 && (
              <div className="text-muted-foreground italic h-full flex items-center justify-center">
                System idle. Awaiting pipeline execution trigger...
              </div>
            )}
            {accumulatedLogs.map((log, lIdx) => {
              const isSuccess = log.includes("success") || log.includes("PASS") || log.includes("Healthy") || log.includes("completed");
              const isWarning = log.includes("modify") || log.includes("Tip");
              let color = "text-foreground/80";
              if (isSuccess) color = "text-emerald-400 font-semibold";
              else if (isWarning) color = "text-amber-400";
              else if (log.includes("[git]")) color = "text-accent";
              
              return (
                <motion.div
                  key={lIdx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`leading-relaxed whitespace-pre-wrap ${color}`}
                >
                  {log}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
