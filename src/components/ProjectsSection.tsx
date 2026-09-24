import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  Database, 
  ShieldCheck, 
  CheckCircle2, 
  X, 
  Sparkles,
  Server,
  Layout,
  FileSpreadsheet,
  Cpu
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { TiltCard } from './TiltCard';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Enterprise Website', 'Enterprise Systems', 'Data Engineering & ETL', 'Full Stack', 'Cloud & Web'];

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key Projects
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              id={`projects-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <TiltCard key={project.id} maxTilt={6} scale={1.01}>
              <div className="h-full rounded-3xl bg-slate-900/80 border border-white/10 p-7 sm:p-8 backdrop-blur-xl hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl">
                
                <div>
                  {/* Category & Period */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {project.period}
                    </span>
                  </div>

                  {/* Optional Project Screenshot / Preview */}
                  {project.image && (
                    <div className="mb-5 rounded-2xl overflow-hidden border border-white/15 bg-slate-950 shadow-md">
                      <a
                        href={project.link || '#'}
                        target={project.link ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="block relative group/img overflow-hidden"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-44 object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                        />
                        {project.link && (
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-mono font-semibold">
                            <span>Visit Live Website</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </div>
                        )}
                      </a>
                    </div>
                  )}

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mt-1 mb-4">
                    {project.subtitle}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Bullet Points */}
                  <div className="space-y-2.5 mb-6">
                    {project.bulletPoints.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics Badges */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-white/5 mb-6">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="p-2 rounded-lg bg-white/[0.02] border border-white/5 text-center">
                        <p className="text-xs sm:text-sm font-mono font-bold text-white">
                          {m.value}
                        </p>
                        <p className="text-[10px] text-slate-400 mt-0.5 truncate">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <button
                      type="button"
                      id={`project-deepdive-${project.id}`}
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>Architecture Deep Dive</span>
                    </button>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <span>Live Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </TiltCard>
          ))}
        </div>

      </div>

      {/* Architecture Deep Dive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-[#0f172a] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="pr-8">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-2">
                  {selectedProject.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400 mt-1">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* Project Image Preview in Modal */}
              {selectedProject.image && (
                <div className="mt-6 rounded-2xl overflow-hidden border border-white/15 bg-white shadow-md">
                  <a
                    href={selectedProject.link || '#'}
                    target={selectedProject.link ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="block relative group/modalimg"
                  >
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full max-h-96 object-contain bg-white"
                    />
                    {selectedProject.link && (
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/modalimg:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-mono font-semibold">
                        <span>Open Live Production Website</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </a>
                </div>
              )}

              <div className="mt-6 space-y-4 text-sm text-slate-300 leading-relaxed">
                <p>{selectedProject.description}</p>
              </div>

              {/* Architectural Layers Breakdown */}
              {selectedProject.architecture && (
                <div className="mt-6 pt-6 border-t border-white/10 space-y-3.5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                    System Architecture Layers
                  </h4>

                  {selectedProject.architecture.frontend && (
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                      <Layout className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-white">Frontend Presentation</p>
                        <p className="text-xs text-slate-300 mt-0.5">{selectedProject.architecture.frontend}</p>
                      </div>
                    </div>
                  )}

                  {selectedProject.architecture.backend && (
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                      <Server className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-white">Backend & APIs</p>
                        <p className="text-xs text-slate-300 mt-0.5">{selectedProject.architecture.backend}</p>
                      </div>
                    </div>
                  )}

                  {selectedProject.architecture.database && (
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                      <Database className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-white">Storage & Database</p>
                        <p className="text-xs text-slate-300 mt-0.5">{selectedProject.architecture.database}</p>
                      </div>
                    </div>
                  )}

                  {selectedProject.architecture.security && (
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                      <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-white">Security & Access Policies</p>
                        <p className="text-xs text-slate-300 mt-0.5">{selectedProject.architecture.security}</p>
                      </div>
                    </div>
                  )}

                  {selectedProject.architecture.reporting && (
                    <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                      <FileSpreadsheet className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-white">BI Reporting & Alerts</p>
                        <p className="text-xs text-slate-300 mt-0.5">{selectedProject.architecture.reporting}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="mt-8 flex items-center justify-between">
                {selectedProject.link ? (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 rounded-xl transition-colors"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : <div />}
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl shadow-lg transition-colors"
                >
                  Close Deep Dive
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
