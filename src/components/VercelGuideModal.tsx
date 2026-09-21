import React from 'react';
import { motion } from 'motion/react';
import { X, CheckCircle2, Terminal, ArrowRight, Github, ExternalLink } from 'lucide-react';

interface VercelGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VercelGuideModal: React.FC<VercelGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-2xl bg-[#0f172a] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 rounded-xl bg-white text-black">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 1155 1000">
              <path d="m577.3 0 577.4 1000H0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white">
            Hosting this Portfolio on Vercel
          </h3>
        </div>

        <p className="text-xs text-slate-300 mb-6 leading-relaxed">
          This portfolio is pre-configured with <code className="text-cyan-400 font-mono">vercel.json</code>, optimized assets, and responsive Tailwind CSS. You can deploy it in less than 60 seconds using either method below:
        </p>

        <div className="space-y-6">
          {/* Method 1: GitHub (Recommended) */}
          <div className="p-5 rounded-2xl bg-slate-950/80 border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <Github className="w-4 h-4 text-indigo-400" />
              <span>Method 1: One-Click GitHub Import (Recommended)</span>
            </div>

            <ol className="space-y-2 text-xs text-slate-300 list-decimal list-inside leading-relaxed">
              <li>
                Push this project to your GitHub account (e.g. <span className="font-mono text-cyan-400">github.com/Neha10Sain/portfolio-v2</span>).
              </li>
              <li>
                Navigate to <a href="https://vercel.com/new" target="_blank" rel="noreferrer" className="text-cyan-400 underline">vercel.com/new</a> and connect your GitHub account.
              </li>
              <li>
                Select this repository. Vercel automatically detects the Vite + Tailwind framework.
              </li>
              <li>
                Click <strong className="text-white">Deploy</strong>. Your 3D animated portfolio will be live on <span className="font-mono text-emerald-400">https://your-portfolio.vercel.app</span>!
              </li>
            </ol>
          </div>

          {/* Method 2: Vercel CLI */}
          <div className="p-5 rounded-2xl bg-slate-950/80 border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Method 2: Deploy via Vercel Terminal CLI</span>
            </div>

            <p className="text-xs text-slate-300">
              Run these commands in your project root:
            </p>

            <div className="p-3 rounded-xl bg-[#070a12] border border-white/5 font-mono text-xs text-cyan-300">
              <code>
                npm i -g vercel<br />
                vercel
              </code>
            </div>
          </div>

          {/* Next.js & Optimization Note */}
          <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-xs text-slate-300 leading-relaxed">
            <p className="font-semibold text-white mb-1">Architecture & Next.js Compatibility:</p>
            <p>
              The code uses pure React 19, TypeScript, and Tailwind CSS. All components are fully portable and can also be dropped directly into Next.js App Router (<code className="text-indigo-300 font-mono">/app/page.tsx</code>) with zero refactoring.
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-semibold bg-white hover:bg-slate-200 text-slate-950 rounded-xl transition-colors font-bold"
          >
            Got it, thanks!
          </button>
        </div>
      </motion.div>
    </div>
  );
};
