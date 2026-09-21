import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Upload, X, RotateCcw, Check, Image as ImageIcon } from 'lucide-react';

interface PhotoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhoto: string;
  onPhotoChange: (newPhotoUrl: string) => void;
  onResetDefault: () => void;
}

export const PhotoUploadModal: React.FC<PhotoUploadModalProps> = ({
  isOpen,
  onClose,
  currentPhoto,
  onPhotoChange,
  onResetDefault,
}) => {
  const [dragOver, setDragOver] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  if (!isOpen) return null;

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        onPhotoChange(dataUrl);
        setSuccessMsg(true);
        setTimeout(() => {
          setSuccessMsg(false);
          onClose();
        }, 1200);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-md bg-[#0f172a] border border-white/20 rounded-3xl p-6 sm:p-7 shadow-2xl"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-2xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">Photo Configuration</h3>
              <p className="text-xs font-mono text-cyan-400">Profile Picture Manager</p>
            </div>
          </div>

          <p className="text-xs text-slate-300 mb-5 leading-relaxed">
            Upload or change your professional headshot anytime. Your uploaded photo will be updated across the portfolio and saved locally.
          </p>

          {/* Current photo preview */}
          <div className="flex items-center gap-4 mb-5 p-3 rounded-2xl bg-slate-900/90 border border-white/10">
            <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-950 border border-white/15 shrink-0">
              <img
                src={currentPhoto}
                alt="Current profile"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-white truncate">Active Headshot</p>
              <p className="text-[11px] font-mono text-slate-400 truncate">PNG, JPG, or WEBP</p>
            </div>
          </div>

          {/* Drag & drop upload area */}
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-2xl p-6 text-center transition-all cursor-pointer ${
              dragOver
                ? 'border-indigo-400 bg-indigo-950/40 scale-[1.01]'
                : 'border-white/20 hover:border-indigo-400/80 bg-slate-900/50 hover:bg-indigo-950/20'
            }`}
          >
            <label htmlFor="secret-photo-input" className="cursor-pointer block">
              <Upload className="w-8 h-8 text-indigo-400 mx-auto mb-2.5 animate-pulse" />
              <p className="text-xs font-semibold text-white">Click to browse or drag & drop</p>
              <p className="text-[11px] text-slate-400 mt-1 font-mono">Select high-res portrait image</p>
              <input
                id="secret-photo-input"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleFile(file);
                }}
                className="hidden"
              />
            </label>
          </div>

          {successMsg && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs flex items-center justify-center gap-2 font-mono"
            >
              <Check className="w-4 h-4" />
              <span>Photo updated successfully!</span>
            </motion.div>
          )}

          {/* Reset / Actions */}
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
            <button
              type="button"
              onClick={() => {
                onResetDefault();
                setSuccessMsg(true);
                setTimeout(() => {
                  setSuccessMsg(false);
                  onClose();
                }, 1000);
              }}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Default</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors"
            >
              Done
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
