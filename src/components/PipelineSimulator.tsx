import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Play, 
  RotateCcw, 
  Database, 
  Workflow, 
  BarChart3, 
  FileCode, 
  CheckCircle2, 
  AlertTriangle, 
  Cpu, 
  Mail, 
  Sparkles
} from 'lucide-react';
import { PipelineStep } from '../types';

export const PipelineSimulator: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedStepId, setSelectedStepId] = useState<number>(1);
  const [recordsCount, setRecordsCount] = useState(128450);
  const [elapsedTime, setElapsedTime] = useState(240);

  const initialSteps: PipelineStep[] = [
    {
      id: 1,
      name: 'Extract: Ingest Raw Streams',
      category: 'Extract',
      status: 'idle',
      latencyMs: 65,
      recordsProcessed: 128450,
      details:
        'Pulls heterogeneous PMO cost spreadsheets, site deployment logs, and inventory movement data from Nokia regional endpoints (India, Sri Lanka, Bangladesh).',
    },
    {
      id: 2,
      name: 'Transform: Pandas & NumPy Vectorization',
      category: 'Transform',
      status: 'idle',
      latencyMs: 110,
      recordsProcessed: 128450,
      details:
        'Executes automated schema validation, missing value imputation, cost variance calculation, and data deduplication using optimized vectorized operations in Python.',
    },
    {
      id: 3,
      name: 'Load: PostgreSQL Analytical Warehouse',
      category: 'Load',
      status: 'idle',
      latencyMs: 45,
      recordsProcessed: 128450,
      details:
        'Inserts sanitized relational records into PostgreSQL with transactional safety, indexed query views, and automated partition maintenance.',
    },
    {
      id: 4,
      name: 'Downstream: Power BI & SMTP Alerting',
      category: 'Visualize',
      status: 'idle',
      latencyMs: 20,
      recordsProcessed: 128450,
      details:
        'Updates live drill-down scorecards for monthly executive account reviews. Automatically dispatches threshold-breach email alerts to project directors.',
    },
  ];

  const [steps, setSteps] = useState<PipelineStep[]>(initialSteps);

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCurrentStepIndex(0);

    // Reset steps
    setSteps(initialSteps.map((s) => ({ ...s, status: 'idle' })));

    let current = 0;
    const interval = setInterval(() => {
      setSteps((prev) =>
        prev.map((s, idx) => {
          if (idx < current) return { ...s, status: 'completed' };
          if (idx === current) return { ...s, status: 'running' };
          return { ...s, status: 'idle' };
        })
      );
      setSelectedStepId(current + 1);

      current++;
      if (current > 4) {
        clearInterval(interval);
        setSteps((prev) => prev.map((s) => ({ ...s, status: 'completed' })));
        setIsRunning(false);
      }
    }, 900);
  };

  const resetSimulation = () => {
    setIsRunning(false);
    setSteps(initialSteps);
    setSelectedStepId(1);
  };

  const activeStep = steps.find((s) => s.id === selectedStepId) || steps[0];

  return (
    <section id="pipeline-lab" className="py-24 relative overflow-hidden bg-[#090d16]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Live ETL Pipeline Simulator
          </h2>
        </div>

        {/* Interactive Simulator Shell */}
        <div className="rounded-3xl bg-slate-900/90 border border-indigo-500/30 p-6 sm:p-9 backdrop-blur-2xl shadow-2xl shadow-black/80">
          
          {/* Controls & Metrics Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <button
                type="button"
                id="pipeline-run-btn"
                onClick={runSimulation}
                disabled={isRunning}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs transition-all shadow-md ${
                  isRunning
                    ? 'bg-slate-800 text-slate-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold shadow-cyan-500/20 scale-100 hover:scale-105'
                }`}
              >
                <Play className="w-4 h-4 fill-current" />
                <span>{isRunning ? 'Processing Pipeline...' : 'Run Pipeline Simulation'}</span>
              </button>

              <button
                type="button"
                id="pipeline-reset-btn"
                onClick={resetSimulation}
                disabled={isRunning}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                title="Reset simulation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Live Metrics */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              <div className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10">
                <span className="text-slate-400">Total Volume: </span>
                <span className="text-cyan-400 font-bold">{recordsCount.toLocaleString()} Rows</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10">
                <span className="text-slate-400">End-to-End Latency: </span>
                <span className="text-emerald-400 font-bold">{elapsedTime} ms</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10">
                <span className="text-slate-400">Manual Time Saved: </span>
                <span className="text-indigo-300 font-bold">80%</span>
              </div>
            </div>
          </div>

          {/* Pipeline Visual Stages Flow */}
          <div className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {steps.map((step, idx) => {
              const isSelected = selectedStepId === step.id;
              const isStepRunning = step.status === 'running';
              const isStepCompleted = step.status === 'completed';

              return (
                <div
                  key={step.id}
                  onClick={() => setSelectedStepId(step.id)}
                  className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 relative ${
                    isSelected
                      ? 'bg-indigo-950/40 border-cyan-400 shadow-lg shadow-cyan-500/10 scale-[1.02]'
                      : 'bg-slate-950/60 border-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Status Indicator */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300">
                      STAGE 0{step.id}
                    </span>

                    {isStepRunning && (
                      <span className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 animate-pulse">
                        <span className="w-2 h-2 rounded-full bg-cyan-400" />
                        Active
                      </span>
                    )}

                    {isStepCompleted && (
                      <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Success
                      </span>
                    )}

                    {step.status === 'idle' && (
                      <span className="text-[11px] font-mono text-slate-500">Ready</span>
                    )}
                  </div>

                  <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                    {step.name}
                  </h4>

                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-3 border-t border-white/5">
                    <span>{step.category}</span>
                    <span className="text-cyan-400">{step.latencyMs}ms</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Stage Deep Inspection Panel */}
          <div className="rounded-2xl bg-slate-950/80 border border-white/10 p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <FileCode className="w-5 h-5 text-indigo-400" />
                <h4 className="text-base font-bold text-white">
                  Stage Inspection: {activeStep.name}
                </h4>
              </div>
              <span className="text-xs font-mono text-cyan-400">
                Processed {activeStep.recordsProcessed.toLocaleString()} records in {activeStep.latencyMs} ms
              </span>
            </div>

            <p className="mt-4 text-sm text-slate-300 leading-relaxed">
              {activeStep.details}
            </p>

            {/* Architecture Code Snippet Simulation */}
            <div className="mt-4 p-4 rounded-xl bg-[#070a12] border border-white/5 font-mono text-xs text-slate-300 overflow-x-auto">
              {activeStep.id === 1 && (
                <pre className="text-indigo-300">
{`# Multi-Source Ingestion Engine (Python)
def extract_pmo_streams():
    nokia_sources = ["IN_Gurgaon_HQ", "LK_Colombo_Regional", "BD_Dhaka_Regional"]
    payloads = [fetch_telecom_site_logs(src) for src in nokia_sources]
    return pd.concat([pd.DataFrame(p) for p in payloads])`}
                </pre>
              )}
              {activeStep.id === 2 && (
                <pre className="text-cyan-300">
{`# Pandas & NumPy High-Performance Transformation
def transform_variance(df):
    df["variance_pct"] = (df["actual_cost"] - df["budgeted_cost"]) / df["budgeted_cost"]
    df["risk_flag"] = np.where(df["variance_pct"] > 0.15, "CRITICAL", "NORMAL")
    return df.dropna(subset=["site_id", "project_code"])`}
                </pre>
              )}
              {activeStep.id === 3 && (
                <pre className="text-emerald-300">
{`-- PostgreSQL Warehouse Upsert with Indexed Schema
INSERT INTO nokia_pmo_kpi_facts (project_id, site_id, cost_variance, sync_time)
VALUES ($1, $2, $3, NOW())
ON CONFLICT (project_id, site_id) DO UPDATE 
SET cost_variance = EXCLUDED.cost_variance, sync_time = NOW();`}
                </pre>
              )}
              {activeStep.id === 4 && (
                <pre className="text-purple-300">
{`# Automated Power BI Sync & SMTP Trigger
if critical_overruns:
    smtp_mailer.send_alert(
        recipients=["pmo.lead@nokia.com"],
        subject="[ALERT] PMO Cost Variance Threshold Exceeded",
        body="Drill-down dashboard updated in Power BI."
    )`}
                </pre>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
