'use client';

import React from 'react';
import { X, CheckCircle2, Cpu, ExternalLink, Activity, Layers, Boxes } from 'lucide-react';
import { ProjectItem } from '@/data/profileData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Click outside backdrop to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#090d15] border border-slate-700 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 z-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="cyber-badge text-[11px]">{project.category}</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                STATUS: {project.status.toUpperCase()}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h3>
            <p className="text-sm font-mono text-emerald-400 mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Core Architecture Description */}
        <div className="space-y-3">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
            System Overview & Architecture
          </div>
          <p className="text-sm text-slate-300 leading-relaxed font-light">
            {project.description}
          </p>
        </div>

        {/* Architecture Specs & Trade-offs */}
        <div className="space-y-3">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
            Architectural Highlights & Engineering Solutions
          </div>
          <div className="grid grid-cols-1 gap-2.5">
            {project.architectureDetails.map((detail, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-3"
              >
                <div className="w-5 h-5 rounded-md bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs">
                  {idx + 1}
                </div>
                <div className="text-xs text-slate-300 leading-relaxed">
                  {detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Telemetry Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          {project.metrics.map((metric, mIdx) => (
            <div
              key={mIdx}
              className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between"
            >
              <div className="text-[11px] font-mono text-slate-400">
                {metric.label}
              </div>
              <div className="text-sm font-bold text-cyan-300 font-mono mt-1">
                {metric.value}
              </div>
            </div>
          ))}
        </div>

        {/* Tags & Actions */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs font-mono transition-all"
          >
            Close Blueprint
          </button>
        </div>
      </div>
    </div>
  );
};
