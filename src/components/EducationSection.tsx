import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ACADEMIC FOUNDATION
          </h2>
        </div>

        {/* Education Card */}
        <div className="max-w-3xl mx-auto">
          {EDUCATION.map((edu) => (
            <TiltCard key={edu.degree} maxTilt={5} scale={1.01}>
              <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-7 sm:p-9 backdrop-blur-xl shadow-2xl relative overflow-hidden">
                
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-indigo-500/20 text-indigo-300 shrink-0">
                      <GraduationCap className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                          Bachelor of Technology
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                          Coordinator: "Blind Coding"
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                        {edu.degree}
                      </h3>
                      <p className="text-base text-slate-200 font-medium mt-1">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1.5 text-xs text-slate-400 font-mono">
                    <span className="inline-flex items-center gap-1.5 bg-white/[0.04] px-3 py-1.5 rounded-lg border border-white/5">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      {edu.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {edu.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold mt-1">
                      <Award className="w-3.5 h-3.5" />
                      Cumulative GPA: {edu.gpa}
                    </span>
                  </div>
                </div>

                <div className="pt-6 space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                    Core Coursework & Highlights
                  </h4>
                  {edu.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] text-slate-300">
                    Data Structures & Algorithms
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] text-slate-300">
                    DBMS & Relational Algebra
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] text-slate-300">
                    Operating Systems
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] text-slate-300">
                    Computer Networks
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    Blind Coding Coordinator
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
