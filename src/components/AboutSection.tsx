import React from 'react';
import { motion } from 'motion/react';
import { 
  Workflow, 
  ShieldCheck, 
  Database, 
  Globe2, 
  CheckCircle, 
  Cpu, 
  BarChart3, 
  FileSpreadsheet,
  ArrowRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

import { TiltCard } from './TiltCard';

interface AboutSectionProps {
  onOpenPhotoModal?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenPhotoModal }) => {
  const pillars = [
    {
      icon: <Workflow className="w-6 h-6 text-indigo-400" />,
      title: 'End-to-End ETL & Data Pipelines',
      description:
        'Architecting automated ingestion, transformation, and validation pipelines using Python (Pandas, NumPy) and PostgreSQL. Replacing manual work with resilient scheduled batch workflows.',
      tag: '80% Time Reduction',
    },
    {
      icon: <Database className="w-6 h-6 text-cyan-400" />,
      title: 'Relational & NoSQL Data Architecture',
      description:
        'Extensive experience designing normalized schemas in PostgreSQL & MySQL for transactional reliability, paired with MongoDB for high-velocity document storage and inventory logs.',
      tag: 'PostgreSQL • MySQL • MongoDB',
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-emerald-400" />,
      title: 'Enterprise BI & KPI Dashboards',
      description:
        'Building drill-down PMO scorecards and cost variance analytics in Power BI and Flask reviewed during live monthly leadership business reviews at Nokia Networks.',
      tag: 'Nokia PMO Core',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-400" />,
      title: 'Security, RBAC & Cloud Deployment',
      description:
        'Implementing strict multi-tenant Role-Based Access Control, JWT authentication, data segregation policies, automated SMTP alerts, and production AWS cloud hosting.',
      tag: 'Enterprise Compliance',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#090d16]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            PROFESSIONAL BACKGROUND
          </h2>
        </div>

        {/* Narrative & Enterprise Highlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Biography Card */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-900/60 border border-white/10 p-7 sm:p-9 backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-300">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>
                      <span
                        onClick={onOpenPhotoModal}
                        className="cursor-pointer select-none hover:text-indigo-400 active:scale-95 transition-colors inline-block"
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && onOpenPhotoModal?.()}
                        aria-label="Profile photo options"
                      >
                        N
                      </span>
                      eha Sain
                    </span>
                    <span className="text-slate-600 font-normal text-sm">|</span>
                    <span className="text-sm font-semibold text-indigo-300">Python FullStack Developer</span>
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am <strong className="text-white font-semibold">
                    <span
                      onClick={onOpenPhotoModal}
                      className="cursor-pointer select-none hover:text-indigo-400 active:scale-95 transition-colors inline-block"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && onOpenPhotoModal?.()}
                      aria-label="Profile photo options"
                    >
                      N
                    </span>
                    eha Sain
                  </strong>, a results-driven <strong className="text-white font-semibold">Python FullStack Developer</strong> with 2+ years of enterprise experience and a track record of delivering end-to-end web applications for <strong className="text-white font-semibold">10+ freelance clients</strong> as well as mission-critical data infrastructure deployed at <strong className="text-white font-semibold">Nokia Networks</strong> in Gurgaon, India.
                </p>
                <p>
                  At Nokia, I serve as the primary technical point of contact across international cross-functional teams including <strong className="text-white font-semibold">Sri Lanka and Bangladesh</strong>. I specialize in translating ambiguous telecom and finance requirements into automated, high-throughput technical solutions.
                </p>
                <p>
                  By transitioning departments away from error-prone, manual Excel spreadsheets to centralized <strong className="text-white font-semibold">Python (Pandas, NumPy) ETL pipelines</strong> and drill-down <strong className="text-white font-semibold">Power BI scorecards</strong>, I have enabled teams to cut manual data-entry turnaround time by 80% while ensuring strict RBAC access control.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <CheckCircle className="w-4 h-4" />
                <span>Ready for challenging Full Stack & Data roles</span>
              </div>
              <a
                href="#experience"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <span>View Full Experience Timeline</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Regional Impact & Nokia Highlights */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Regional Card */}
            <div className="rounded-3xl bg-gradient-to-br from-indigo-950/40 via-slate-900/60 to-slate-900/80 border border-indigo-500/20 p-6 backdrop-blur-md">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-300">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Cross-Border Operations</h4>
                    <p className="text-[11px] font-mono text-slate-400">International Stakeholder Delivery</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Global PMO
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Direct technical liaison for Nokia account teams spanning <strong className="text-white">India, Sri Lanka, and Bangladesh</strong>, delivering real-time cost transparency and automated status updates.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-[11px] font-mono">
                  India (HQ Hub)
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-[11px] font-mono">
                  Sri Lanka Regional Team
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-[11px] font-mono">
                  Bangladesh Regional Team
                </span>
              </div>
            </div>

            {/* Excel to Automation Transformation Card */}
            <div className="rounded-3xl bg-gradient-to-br from-emerald-950/30 via-slate-900/60 to-slate-900/80 border border-emerald-500/20 p-6 backdrop-blur-md">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-300">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Workflow Modernization</h4>
                  <p className="text-[11px] font-mono text-emerald-400">Manual Excel ➔ Automated Pipelines</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Replaced legacy, fragile workbooks with automated Python scripts, PostgreSQL analytical tables, and Power Automate notification workflows, reducing human error to near zero.
              </p>
            </div>

          </div>

        </div>

        {/* Four Technical Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p) => (
            <TiltCard key={p.title} maxTilt={8} scale={1.02} className="h-full">
              <div className="h-full p-6 rounded-2xl bg-slate-900/70 border border-white/10 backdrop-blur-md hover:border-indigo-500/40 transition-colors flex flex-col justify-between shadow-lg">
                <div>
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.08] w-fit mb-4">
                    {p.icon}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{p.description}</p>
                </div>
                <div className="mt-5 pt-3 border-t border-white/5">
                  <span className="text-[11px] font-mono font-medium text-cyan-400">
                    {p.tag}
                  </span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
};
