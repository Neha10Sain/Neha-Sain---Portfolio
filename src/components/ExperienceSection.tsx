import React from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  ExternalLink, 
  Cpu, 
  Sparkles,
  TrendingUp,
  ShieldAlert
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#090d16]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            PROFESSIONAL EXPERIENCE
          </h2>
        </div>

        {/* Experience Timeline / Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {EXPERIENCES.map((exp) => (
            <TiltCard key={exp.id} maxTilt={4} scale={1.01}>
              <div className="rounded-3xl bg-slate-900/80 border border-indigo-500/20 p-6 sm:p-9 backdrop-blur-xl relative overflow-hidden shadow-2xl">
                
                {/* Decorative background glow */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        Current Role
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        Enterprise Deployed
                      </span>
                    </div>

                    <h3 className="text-2xl font-extrabold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    
                    <p className="text-base font-semibold text-slate-200 mt-1">
                      {exp.company}
                    </p>

                    {exp.clientAccount && (
                      <p className="text-xs font-mono text-cyan-400 mt-1 flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5" />
                        {exp.clientAccount}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:items-end gap-1.5 text-xs text-slate-400 font-mono">
                    <span className="inline-flex items-center gap-1.5 bg-white/[0.04] px-3 py-1.5 rounded-lg border border-white/5">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Key Metrics Banner */}
                <div className="py-6 grid grid-cols-3 gap-3 border-b border-white/10">
                  {exp.metrics.map((m) => (
                    <div key={m.label} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-center">
                      <p className="text-xl sm:text-2xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300">
                        {m.value}
                      </p>
                      <p className="text-[10px] sm:text-xs text-slate-400 font-medium mt-0.5">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Detailed bullet points */}
                <div className="py-6 space-y-3.5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                    Key Responsibilities & Deliverables
                  </h4>
                  {exp.description.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                      <div className="w-5 h-5 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <p>{bullet}</p>
                    </div>
                  ))}
                </div>

                {/* Technologies used */}
                <div className="pt-4 border-t border-white/10">
                  <p className="text-[11px] font-mono text-slate-400 mb-2.5">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-indigo-950/40 text-indigo-300 border border-indigo-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
};
