import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  Database, 
  Workflow, 
  BarChart, 
  Server, 
  Cloud, 
  ShieldCheck, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.categoryName)];

  const filteredCategories =
    activeCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.categoryName === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills
          </h2>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              id={`skills-tab-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((categoryGroup) => (
            <TiltCard key={categoryGroup.categoryName} maxTilt={5} scale={1.01}>
              <div className="h-full rounded-2xl bg-slate-900/70 border border-white/10 p-6 backdrop-blur-md hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between">
                <div>
                  {/* Category Title */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-base font-bold text-white tracking-wide">
                      {categoryGroup.categoryName}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    {categoryGroup.description}
                  </p>

                  {/* Skills in this category */}
                  <div className="space-y-4">
                    {categoryGroup.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-1.5">
                            {skill.isKeySkill && (
                              <Sparkles className="w-3 h-3 text-amber-400" />
                            )}
                            <span className="font-semibold text-slate-200">
                              {skill.name}
                            </span>
                          </div>
                          <span className="font-mono text-cyan-400 text-[11px]">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress bar */}
                        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-blue-500 rounded-full"
                          />
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 pt-1">
                          {skill.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-slate-400 border border-white/5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>Production Verified</span>
                  <span>Enterprise Grade</span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Highlighted Tool Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-slate-900/60 to-cyan-950/30 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
              <Workflow className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Interactive ETL Pipeline Laboratory
              </h4>
              <p className="text-xs text-slate-300">
                Experience real-time data ingestion, transformation, relational loading, and Power BI visualization simulated in browser.
              </p>
            </div>
          </div>
          <a
            href="#pipeline-lab"
            id="skills-goto-pipeline-lab"
            className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs tracking-wide transition-all shadow-md shadow-cyan-500/20 whitespace-nowrap"
          >
            Launch Pipeline Simulator
          </a>
        </div>

      </div>
    </section>
  );
};
