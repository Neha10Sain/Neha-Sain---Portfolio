import React from 'react';
import { Activity, ShieldCheck, Zap, Database, CheckCircle2, Server } from 'lucide-react';

export const DataStreamTicker: React.FC = () => {
  const telemetryItems = [
    { icon: Activity, label: 'SYSTEM STATUS', value: '99.98% PIPELINE UPTIME', color: 'text-emerald-400' },
    { icon: Database, label: 'POSTGRESQL WAREHOUSE', value: '128,450 RECS PROCESSED', color: 'text-cyan-400' },
    { icon: Server, label: 'NOKIA ACCOUNT ETL', value: 'AUTOMATED PMO SCORECARDS', color: 'text-indigo-400' },
    { icon: Zap, label: 'POWER BI SYNC', value: 'REAL-TIME KPI METRICS', color: 'text-amber-400' },
    { icon: ShieldCheck, label: 'SECURITY LIFECYCLE', value: '120-DAY ROTATION & RBAC', color: 'text-purple-400' },
    { icon: CheckCircle2, label: 'AWS EC2 + S3 CLOUD', value: 'HIGH-AVAILABILITY CLUSTER', color: 'text-emerald-400' },
  ];

  return (
    <div className="w-full bg-[#080c15] border-y border-white/[0.08] py-2.5 overflow-hidden select-none relative z-20">
      <div className="flex w-max animate-ticker items-center gap-12 whitespace-nowrap">
        {/* Render twice for seamless looping */}
        {[...telemetryItems, ...telemetryItems, ...telemetryItems].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-2.5 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <Icon className={`w-3.5 h-3.5 ${item.color}`} />
              <span className="text-slate-400 font-semibold tracking-wider text-[11px]">{item.label}:</span>
              <span className="text-slate-200 font-bold tracking-tight text-[11px]">{item.value}</span>
              <span className="text-slate-700 font-bold ml-4">/</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
