import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Database, 
  Terminal, 
  TrendingUp, 
  Upload, 
  Cpu,
  Mail
} from 'lucide-react';
import { PERSONAL_INFO, CORE_METRICS } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

interface HeroSectionProps {
  onOpenPipelineLab?: () => void;
  photoSrc?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  onOpenPipelineLab, 
  photoSrc = '/neha-sain.png' 
}) => {
  const [imgSrc, setImgSrc] = useState<string>(photoSrc);

  // Sync with prop if it changes
  React.useEffect(() => {
    setImgSrc(photoSrc);
  }, [photoSrc]);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Main Greeting & Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <h2 className="text-sm sm:text-base font-mono uppercase tracking-widest text-cyan-400 font-semibold">
                Python FullStack Developer
              </h2>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
                Neha <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-blue-400">Sain</span>
              </h1>
            </motion.div>

            {/* Summary description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal"
            >
              Transforming complex multi-project data streams into automated ETL pipelines, scalable relational databases, and drill-down Power BI scorecards. Experienced in RBAC security, AWS cloud infrastructure, and translating high-stakes business requirements into production-grade systems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-3.5"
            >
              <a
                href="#projects"
                id="hero-explore-projects-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                id="hero-contact-btn"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 hover:border-slate-600 transition-all duration-200 shadow-sm"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Get In Touch</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Professional Profile Photo Card with Cursor Hover Tilt */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-sm sm:max-w-md relative"
            >
              {/* Subtle ambient backglow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/30 via-cyan-400/20 to-blue-600/30 rounded-3xl blur-xl -z-10" />

              <TiltCard maxTilt={8} scale={1.02} className="w-full">
                <div className="relative rounded-3xl p-4 sm:p-5 bg-slate-900/80 border border-white/15 backdrop-blur-xl shadow-2xl">
                  
                  {/* Photo Container */}
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-950 border border-white/10 shadow-inner group">
                    <img
                      src={imgSrc}
                      alt="Neha Sain – Python FullStack Developer"
                      onError={() => {
                        if (imgSrc !== '/neha-sain.svg') {
                          setImgSrc('/neha-sain.svg');
                        }
                      }}
                      className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="eager"
                    />
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </div>

        </div>

        {/* Impact Metric Strip - Clean Executive Data Readout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 rounded-2xl bg-slate-900/70 border border-white/10 backdrop-blur-md overflow-hidden"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {CORE_METRICS.map((metric, idx) => (
              <div
                key={metric.label}
                id={`hero-metric-card-${idx}`}
                className="p-5 sm:p-6 flex flex-col justify-center text-left"
              >
                <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-200 tracking-tight font-mono">
                  {metric.value}
                </span>
                <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-200">
                  {metric.label}
                </p>
                <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                  {metric.sublabel}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
