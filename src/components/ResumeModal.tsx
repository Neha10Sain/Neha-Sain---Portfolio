import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  ExternalLink, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github 
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, SKILL_CATEGORIES, EDUCATION } from '../data/portfolioData';
import { downloadResumePDF } from '../utils/resumePdf';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  if (!isOpen) return null;

  const handleDownloadPDF = () => {
    try {
      setDownloading(true);
      downloadResumePDF();
      setTimeout(() => setDownloading(false), 1500);
    } catch (err) {
      console.error('PDF download error:', err);
      setDownloading(false);
      window.print();
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `NEHA SAIN
Python FullStack Developer
${PERSONAL_INFO.location} | ${PERSONAL_INFO.phone} | ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedin} | GitHub: ${PERSONAL_INFO.github}

PROFESSIONAL SUMMARY:
${PERSONAL_INFO.summary}

PROFESSIONAL EXPERIENCE:
Python Developer (Full Stack) — Teleindia Telecom Services | Aug 2024 – Present
Deployed on client account: Nokia Networks | Gurgaon, India
• Build end-to-end ETL pipelines with Python (Pandas, NumPy), integrating with PostgreSQL for downstream analytics and reporting.
• Developed a PMO KPI Application (Python, Flask, PostgreSQL) that transforms multi-project cost data into drill-down dashboards, activity logs, and automated email alerts.
• Design internal automation and data-visualization tools using Python, Power BI, and Power Automate, replacing manual Excel-based workflows.
• Automate report generation and multi-level approval workflows in Python, reducing manual turnaround time by 80%.
• Manage source control and release workflows for production services using Git and GitHub.
• Serve as primary technical point of contact for Nokia's teams across regions including Sri Lanka and Bangladesh.

FREELANCE & KEY PROJECTS:
• Finance Cost Tracking & Project Health Analysis Application (Sep 2025 – Present): Built full-stack app (React, Node.js, PostgreSQL) with RBAC approvals and automated Power BI cost updates, cutting manual Excel work by 80%.
• Inventory Deployment Tracking Application (Mar 2025 – Jul 2025): Full-stack tracking app for telecom inventory using MySQL for transactional data and MongoDB for documents.
• NI Care E-Learning Platform (Nov 2024 – Feb 2025): Scalable e-learning platform with AWS deployment, content mapping, and 120-day password security policy.

EDUCATION:
B.Tech in Computer Science — Laxmi Devi Institute of Engineering and Technology, Alwar, Rajasthan
Jul 2020 – Jun 2024 | GPA: 7.5/10`;

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#0f172a] border border-white/20 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
      >
        {/* Header Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/90">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-400" />
            <h3 className="text-base font-bold text-white">
              Neha Sain — Curriculum Vitae
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              id="resume-copy-text-btn"
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-colors border border-white/10"
              title="Copy plain text resume"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              type="button"
              id="resume-download-btn"
              onClick={handleDownloadPDF}
              className="p-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-all duration-200 shadow-md flex items-center justify-center hover:shadow-indigo-500/30"
              title="Download Resume (PDF)"
              aria-label="Download Resume (PDF)"
            >
              {downloading ? (
                <Check className="w-4 h-4 text-emerald-300 animate-bounce" />
              ) : (
                <Download className="w-4 h-4" />
              )}
            </button>

            <button
              type="button"
              id="resume-modal-close-btn"
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Area */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-[#0b0f19] text-slate-200 print:bg-white print:text-black font-sans leading-relaxed">
          
          {/* Header */}
          <div className="text-center pb-6 border-b border-white/15 print:border-black/20">
            <h1 className="text-3xl font-extrabold tracking-tight text-white print:text-black">
              NEHA SAIN
            </h1>
            <p className="text-xs font-mono text-slate-300 print:text-gray-700 mt-2 flex flex-wrap justify-center gap-x-3 gap-y-1">
              <span>{PERSONAL_INFO.location}</span>
              <span>•</span>
              <span>{PERSONAL_INFO.phone}</span>
              <span>•</span>
              <span>{PERSONAL_INFO.email}</span>
            </p>
            <p className="text-xs font-mono text-cyan-400 print:text-blue-700 mt-1 flex flex-wrap justify-center gap-x-4">
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                linkedin.com/in/neha-sain-888672211
              </a>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:underline">
                github.com/Neha10Sain
              </a>
            </p>
          </div>

          {/* Professional Summary */}
          <div className="py-6 border-b border-white/10 print:border-black/10">
            <h2 className="text-xs font-bold font-mono tracking-wider text-indigo-400 print:text-black uppercase mb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-gray-800 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="py-6 border-b border-white/10 print:border-black/10 space-y-2">
            <h2 className="text-xs font-bold font-mono tracking-wider text-indigo-400 print:text-black uppercase mb-2">
              TECHNICAL SKILLS
            </h2>
            <div className="text-xs space-y-1.5 text-slate-300 print:text-gray-800">
              <p>
                <strong className="text-white print:text-black">Programming Languages:</strong> Python, JavaScript, SQL
              </p>
              <p>
                <strong className="text-white print:text-black">Data Engineering & ETL:</strong> ETL Pipeline Development, Data Integration & Transformation (Pandas, NumPy), Workflow Automation
              </p>
              <p>
                <strong className="text-white print:text-black">Databases:</strong> PostgreSQL, MySQL, MongoDB (NoSQL)
              </p>
              <p>
                <strong className="text-white print:text-black">BI & Reporting:</strong> Power BI, KPI Dashboards & Scorecards, Power Automate
              </p>
              <p>
                <strong className="text-white print:text-black">Backend & APIs:</strong> Flask, Django, REST API Design & Development
              </p>
              <p>
                <strong className="text-white print:text-black">Full Stack:</strong> React.js, Node.js
              </p>
              <p>
                <strong className="text-white print:text-black">Cloud & Version Control:</strong> AWS, Git, GitHub
              </p>
              <p>
                <strong className="text-white print:text-black">Security & Compliance:</strong> RBAC, JWT, Data Segregation & Access Policies, SMTP Integration
              </p>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="py-6 border-b border-white/10 print:border-black/10">
            <h2 className="text-xs font-bold font-mono tracking-wider text-indigo-400 print:text-black uppercase mb-4">
              PROFESSIONAL EXPERIENCE
            </h2>

            <div className="space-y-4">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
                  <h3 className="text-sm font-bold text-white print:text-black">
                    Python Developer (Full Stack) — Teleindia Telecom Services
                  </h3>
                  <span className="font-mono text-slate-400 print:text-gray-600">
                    Aug 2024 – Present
                  </span>
                </div>
                <p className="text-xs font-mono text-cyan-400 print:text-gray-700 italic mt-0.5">
                  Deployed on client account: Nokia Networks | Gurgaon, India
                </p>

                <ul className="mt-3 space-y-1.5 text-xs text-slate-300 print:text-gray-800 list-disc list-outside ml-4">
                  <li>
                    Build end-to-end ETL pipelines with Python (Pandas, NumPy), integrating with PostgreSQL for downstream analytics and reporting.
                  </li>
                  <li>
                    Developed a PMO KPI Application (Python, Flask, PostgreSQL) that transforms multi-project cost data into drill-down dashboards, activity logs, and automated email alerts — reviewed in Nokia's monthly account reviews.
                  </li>
                  <li>
                    Design internal automation and data-visualization tools using Python, Power BI, and Power Automate, replacing manual Excel-based workflows.
                  </li>
                  <li>
                    Automate report generation and multi-level approval workflows in Python, reducing manual turnaround time and data-entry errors.
                  </li>
                  <li>
                    Manage source control and release workflows for production services using Git and GitHub.
                  </li>
                  <li>
                    Serve as primary technical point of contact for Nokia's teams across regions including Sri Lanka and Bangladesh, translating ambiguous business needs into working, data-driven technical solutions.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div className="py-6 border-b border-white/10 print:border-black/10">
            <h2 className="text-xs font-bold font-mono tracking-wider text-indigo-400 print:text-black uppercase mb-4">
              KEY PROJECTS & CLIENT DELIVERIES
            </h2>

            <div className="space-y-4">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
                  <h3 className="text-xs sm:text-sm font-bold text-white print:text-black">
                    Finance Cost Tracking & Project Health Analysis Application
                  </h3>
                  <span className="font-mono text-slate-400 print:text-gray-600">
                    Sep 2025 – Present
                  </span>
                </div>
                <ul className="mt-2 space-y-1 text-xs text-slate-300 print:text-gray-800 list-disc list-outside ml-4">
                  <li>
                    Built a full-stack application (React, Node.js, PostgreSQL) enabling RBAC-controlled, multi-step approval workflows for financial data review.
                  </li>
                  <li>
                    Built save/review/submit functionality via interactive data tables; automated Power BI cost updates, cutting manual Excel work by 80%.
                  </li>
                  <li>
                    Integrated scheduled backups/sync and SMTP notifications for workflow emails.
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
                  <h3 className="text-xs sm:text-sm font-bold text-white print:text-black">
                    Inventory Deployment Tracking Application
                  </h3>
                  <span className="font-mono text-slate-400 print:text-gray-600">
                    Mar 2025 – Jul 2025
                  </span>
                </div>
                <ul className="mt-2 space-y-1 text-xs text-slate-300 print:text-gray-800 list-disc list-outside ml-4">
                  <li>
                    Built and deployed a full-stack application to track material movement, site readiness, and inventory flow.
                  </li>
                  <li>
                    Built a dashboard for plan-vs-actual tracking and milestone filtering; used MySQL for transactional data and MongoDB for document storage.
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
                  <h3 className="text-xs sm:text-sm font-bold text-white print:text-black">
                    NI Care E-Learning Platform
                  </h3>
                  <span className="font-mono text-slate-400 print:text-gray-600">
                    Nov 2024 – Feb 2025
                  </span>
                </div>
                <p className="text-[11px] font-mono text-indigo-400 print:text-blue-700">nicarelearning.com</p>
                <ul className="mt-1 space-y-1 text-xs text-slate-300 print:text-gray-800 list-disc list-outside ml-4">
                  <li>
                    Built and maintained a scalable e-learning platform for enterprise customers, reducing dependency on on-site vendor services.
                  </li>
                  <li>
                    Implemented customer-specific content mapping and a 120-day password-expiration security policy; used AWS for deployment and content delivery.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="pt-6">
            <h2 className="text-xs font-bold font-mono tracking-wider text-indigo-400 print:text-black uppercase mb-3">
              EDUCATION
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
              <div>
                <h3 className="font-bold text-white print:text-black">
                  B.Tech in Computer Science
                </h3>
                <p className="text-slate-300 print:text-gray-700">
                  Laxmi Devi Institute of Engineering and Technology, Alwar, Rajasthan
                </p>
                <p className="text-[11px] text-cyan-400 print:text-indigo-800 mt-0.5">
                  • Part member and coordinator of "Blind Coding" in all technical tasks in college
                </p>
              </div>
              <div className="text-left sm:text-right font-mono text-slate-400 print:text-gray-600 mt-1 sm:mt-0">
                <p>Jul 2020 – Jun 2024</p>
                <p className="text-emerald-400 print:text-green-800 font-semibold">GPA: 7.5 / 10</p>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};
