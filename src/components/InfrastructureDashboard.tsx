import { useState, useEffect } from "react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, BarChart, Bar } from "recharts";
import { Server, HardDrive, Cpu, Radio, Network } from "lucide-react";

interface MetricData {
  time: string;
  cpu: number;
  memory: number;
  network: number;
}

const generateInitialData = (count = 10): MetricData[] => {
  const data: MetricData[] = [];
  const baseTime = new Date();
  for (let i = count; i > 0; i--) {
    const time = new Date(baseTime.getTime() - i * 3000);
    data.push({
      time: time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
      cpu: Math.floor(Math.random() * 20) + 15,
      memory: Math.floor(Math.random() * 5) + 60,
      network: Math.floor(Math.random() * 150) + 300,
    });
  }
  return data;
};

export default function InfrastructureDashboard() {
  const [env, setEnv] = useState<"prod" | "staging">("prod");
  const [metrics, setMetrics] = useState<MetricData[]>([]);
  const [latency, setLatency] = useState(42);

  // Initialize and run metrics polling ticker
  useEffect(() => {
    setMetrics(generateInitialData(12));

    const interval = setInterval(() => {
      setMetrics((prev) => {
        const nextData = [...prev.slice(1)];
        const lastTime = new Date();
        
        // Vary metrics based on environment selection
        let cpuVal = 0;
        let memVal = 0;
        let netVal = 0;

        if (env === "prod") {
          cpuVal = Math.floor(Math.random() * 15) + 20; // 20-35%
          memVal = Math.floor(Math.random() * 2) + 55; // 55-57%
          netVal = Math.floor(Math.random() * 80) + 410; // 410-490 KB/s
          setLatency(Math.floor(Math.random() * 8) + 38); // 38-46ms
        } else {
          cpuVal = Math.floor(Math.random() * 35) + 35; // 35-70% (staging is less optimized)
          memVal = Math.floor(Math.random() * 10) + 70; // 70-80%
          netVal = Math.floor(Math.random() * 250) + 100; // 100-350 KB/s
          setLatency(Math.floor(Math.random() * 25) + 65); // 65-90ms
        }

        nextData.push({
          time: lastTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
          cpu: cpuVal,
          memory: memVal,
          network: netVal,
        });

        return nextData;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [env]);

  const latestMetric = metrics[metrics.length - 1] || { cpu: 0, memory: 0, network: 0 };

  return (
    <div className="w-full bg-card/40 border border-border rounded-xl p-6 md:p-8 backdrop-blur-md relative overflow-hidden shadow-xl">
      <div className="absolute top-0 left-0 w-80 h-80 bg-accent/5 rounded-full filter blur-[80px] pointer-events-none" />

      {/* Header controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-border/40 pb-6">
        <div>
          <h3 className="text-xl md:text-2xl font-bold font-mono text-foreground flex items-center gap-2">
            <Radio className="w-5 h-5 text-accent animate-pulse" />
            Live Infrastructure Monitor
          </h3>
          <p className="text-muted-foreground text-sm mt-1">
            Real-time server resource diagnostics mapping live telemetry endpoints.
          </p>
        </div>

        {/* Env Selector tabs */}
        <div className="bg-secondary/40 border border-border/60 p-1.5 rounded-lg flex items-center gap-1 font-mono text-xs self-start md:self-center">
          <button
            onClick={() => setEnv("prod")}
            className={`px-4 py-2 rounded-md font-semibold transition-all ${
              env === "prod"
                ? "bg-primary text-primary-foreground shadow"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            aws-prod-cluster
          </button>
          <button
            onClick={() => setEnv("staging")}
            className={`px-4 py-2 rounded-md font-semibold transition-all ${
              env === "staging"
                ? "bg-accent text-accent-foreground shadow"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            docker-staging-local
          </button>
        </div>
      </div>

      {/* Grid of status cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-background/50 border border-border/60 rounded-xl p-4 flex items-center gap-4">
          <div className="p-3 bg-secondary rounded-lg text-primary">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] text-muted-foreground font-mono block uppercase">CPU Load</span>
            <span className="text-lg md:text-xl font-bold font-mono text-foreground">{latestMetric.cpu}%</span>
          </div>
        </div>

        <div className="bg-background/50 border border-border/60 rounded-xl p-4 flex items-center gap-4">
          <div className="p-3 bg-secondary rounded-lg text-accent">
            <HardDrive className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] text-muted-foreground font-mono block uppercase">Memory RSS</span>
            <span className="text-lg md:text-xl font-bold font-mono text-foreground">{latestMetric.memory}%</span>
          </div>
        </div>

        <div className="bg-background/50 border border-border/60 rounded-xl p-4 flex items-center gap-4">
          <div className="p-3 bg-secondary rounded-lg text-emerald-500">
            <Network className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] text-muted-foreground font-mono block uppercase">Net Flow</span>
            <span className="text-lg md:text-xl font-bold font-mono text-foreground">{latestMetric.network} KB/s</span>
          </div>
        </div>

        <div className="bg-background/50 border border-border/60 rounded-xl p-4 flex items-center gap-4">
          <div className="p-3 bg-secondary rounded-lg text-amber-500">
            <Server className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <span className="text-[10px] text-muted-foreground font-mono block uppercase">Ping latency</span>
            <span className="text-lg md:text-xl font-bold font-mono text-foreground">{latency}ms</span>
          </div>
        </div>
      </div>

      {/* charts layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Resource Telemetry */}
        <div className="bg-background/40 border border-border/50 rounded-xl p-4 md:p-6 flex flex-col h-72">
          <h4 className="font-mono text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            System Resource Utilization (%)
          </h4>
          <div className="flex-grow w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={metrics} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="cpuGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="memGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" tick={{ fill: "#64748b", fontSize: 10 }} stroke="#334155" />
                <YAxis domain={[0, 100]} tick={{ fill: "#64748b", fontSize: 10 }} stroke="#334155" />
                <Tooltip
                  contentStyle={{ backgroundColor: "rgba(7, 12, 25, 0.95)", border: "1px solid rgba(88, 166, 255, 0.3)", borderRadius: "8px" }}
                  labelClassName="font-mono text-xs text-muted-foreground"
                />
                <Area
                  type="monotone"
                  dataKey="cpu"
                  stroke="hsl(var(--primary))"
                  fillOpacity={1}
                  fill="url(#cpuGlow)"
                  name="CPU Load"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="memory"
                  stroke="hsl(var(--accent))"
                  fillOpacity={1}
                  fill="url(#memGlow)"
                  name="Memory"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Network Packets */}
        <div className="bg-background/40 border border-border/50 rounded-xl p-4 md:p-6 flex flex-col h-72">
          <h4 className="font-mono text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Network Bandwidth Throughput (KB/s)
          </h4>
          <div className="flex-grow w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={metrics} margin={{ top: 5, right: 5, left: -15, bottom: 0 }}>
                <XAxis dataKey="time" tick={{ fill: "#64748b", fontSize: 10 }} stroke="#334155" />
                <YAxis tick={{ fill: "#64748b", fontSize: 10 }} stroke="#334155" />
                <Tooltip
                  contentStyle={{ backgroundColor: "rgba(7, 12, 25, 0.95)", border: "1px solid rgba(88, 166, 255, 0.3)", borderRadius: "8px" }}
                  labelClassName="font-mono text-xs text-muted-foreground"
                />
                <Bar
                  dataKey="network"
                  fill="rgba(16, 185, 129, 0.75)"
                  radius={[4, 4, 0, 0]}
                  name="Bandwidth"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
