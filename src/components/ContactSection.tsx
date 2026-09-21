import React, { useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  Copy, 
  Check, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#090d16]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something High-Impact
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Open to full-time engineering opportunities, data infrastructure contracts, and technical collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Cards */}
          <div className="lg:col-span-5 space-y-6">
            <TiltCard maxTilt={5} scale={1.01}>
              <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-7 backdrop-blur-xl shadow-xl space-y-6">
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Contact Information
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Feel free to reach out directly via email, phone, or LinkedIn. I typically respond within 24 hours.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Email */}
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-mono text-slate-400 uppercase">Email</p>
                        <a
                          href={`mailto:${PERSONAL_INFO.email}`}
                          className="text-xs sm:text-sm font-semibold text-white hover:text-indigo-300 transition-colors"
                        >
                          {PERSONAL_INFO.email}
                        </a>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                      className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                      title="Copy email"
                    >
                      {copiedField === 'email' ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Phone */}
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-mono text-slate-400 uppercase">Phone & WhatsApp</p>
                        <a
                          href={`tel:${PERSONAL_INFO.phone}`}
                          className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-300 transition-colors"
                        >
                          {PERSONAL_INFO.phone}
                        </a>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                      className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                      title="Copy phone"
                    >
                      {copiedField === 'phone' ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Location */}
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-slate-400 uppercase">Location</p>
                      <p className="text-xs sm:text-sm font-semibold text-white">
                        {PERSONAL_INFO.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social & Resume Action Buttons */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600/20 text-blue-300 border border-blue-500/30 hover:bg-blue-600/30 text-xs font-semibold transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn Profile</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 text-slate-200 border border-white/10 hover:bg-white/10 text-xs font-semibold transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Profile</span>
                  </a>
                </div>

              </div>
            </TiltCard>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <TiltCard maxTilt={4} scale={1.01}>
              <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-7 sm:p-9 backdrop-blur-xl shadow-xl">
                
                <h3 className="text-xl font-bold text-white mb-2">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                  Have an open role or a technical project you want to discuss? Leave your details below:
                </p>

                {isSuccess ? (
                  <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-2 animate-in fade-in">
                    <Sparkles className="w-8 h-8 text-emerald-400 mx-auto" />
                    <h4 className="text-base font-bold text-white">Message Sent Successfully!</h4>
                    <p className="text-xs text-slate-300">
                      Thank you for getting in touch. Neha Sain will review your message and reply promptly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-xs text-white placeholder:text-slate-600 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. rahul@company.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-xs text-white placeholder:text-slate-600 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Subject / Opportunity Title *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Python Developer Role / Nokia PMO Synergy"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-xs text-white placeholder:text-slate-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Share details about the role, technical expectations, or project requirements..."
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-xs text-white placeholder:text-slate-600 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 transition-all active:scale-[0.99]"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Sending Message...' : 'Send Message to Neha'}</span>
                    </button>
                  </form>
                )}

              </div>
            </TiltCard>
          </div>

        </div>

      </div>
    </section>
  );
};
