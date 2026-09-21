'use client';

import React, { useState } from 'react';
import { 
  Cpu, 
  Layers, 
  GitBranch, 
  Server, 
  ChevronRight, 
  ShieldAlert, 
  TerminalSquare, 
  Boxes, 
  ArrowRight,
  Code2
} from 'lucide-react';
import { PROFILE_DATA } from '@/data/profileData';

export const About: React.FC = () => {
  const [activePillarIndex, setActivePillarIndex] = useState(0);

  const iconMap = {
    Cpu: Cpu,
    Layers: Layers,
    GitBranch: GitBranch,
    Server: Server,
  };

  return (
    <section id="about" className="py-24 relative hud-grid border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-16">
          <div className="cyber-badge">
            <TerminalSquare className="w-3 h-3" />
            <span>01 // ARCHITECTURAL PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Systems Architecture & Physical AI Philosophy
          </h2>
          <p className="text-slate-400 font-mono text-xs sm:text-sm max-w-3xl">
            Deterministic foundations, low-level rendering mechanics, and scalable pipelines designed to eliminate friction in robotics simulation and enterprise systems.
          </p>
        </div>

        {/* Bio Breakdown Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          {/* Left: Deep Story & Perspective */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-5 border border-slate-800">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                The Core Thesis: Engineering Determinism
              </h3>
              
              {PROFILE_DATA.bio.map((paragraph, idx) => (
                <p key={idx} className="text-slate-300 leading-relaxed text-sm sm:text-base font-light">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-4 text-xs font-mono">
                <div className="px-3 py-1.5 bg-slate-900 rounded-lg border border-slate-700 text-emerald-400">
                  LOCATION: Vancouver, BC, Canada
                </div>
                <div className="px-3 py-1.5 bg-slate-900 rounded-lg border border-slate-700 text-cyan-400">
                  STUDIO: Warply Designed Inc.
                </div>
              </div>
            </div>
          </div>

          {/* Right: Pipeline Topology Flow */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-panel rounded-2xl p-6 border border-slate-800">
              <div className="text-xs font-mono text-slate-400 mb-4 flex items-center justify-between">
                <span>SIMULATION PIPELINE TOPOLOGY</span>
                <span className="text-emerald-400">DETERMINISTIC</span>
              </div>

              {/* Step Flow */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between group hover:border-emerald-500/40 transition-all">
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-[10px]">
                      01
                    </div>
                    <span className="text-slate-200">CAD & Hierarchy Ingestion</span>
                  </div>
                  <span className="text-slate-500 text-[10px]">NVIDIA Kit / Python</span>
                </div>

                <div className="flex justify-center text-slate-600">
                  ↓
                </div>

                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between group hover:border-cyan-500/40 transition-all">
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold text-[10px]">
                      02
                    </div>
                    <span className="text-slate-200">OpenUSD & glTF Conformance</span>
                  </div>
                  <span className="text-cyan-400 text-[10px]">Physics Schema</span>
                </div>

                <div className="flex justify-center text-slate-600">
                  ↓
                </div>

                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between group hover:border-purple-500/40 transition-all">
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold text-[10px]">
                      03
                    </div>
                    <span className="text-slate-200">Isaac Sim Domain Randomization</span>
                  </div>
                  <span className="text-purple-400 text-[10px]">Lighting/Sensor Noise</span>
                </div>

                <div className="flex justify-center text-slate-600">
                  ↓
                </div>

                <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between group hover:border-amber-500/40 transition-all">
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-[10px]">
                      04
                    </div>
                    <span className="text-slate-200">Dual-Window / Console Validation</span>
                  </div>
                  <span className="text-amber-400 text-[10px]">C++ / 6DoF Telemetry</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The 4 Architectural Pillars */}
        <div id="pillars" className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Four Core Technical Pillars
            </h3>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              SELECT PILLAR TO INSPECT
            </span>
          </div>

          {/* Pillar Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROFILE_DATA.pillars.map((pillar, idx) => {
              const IconComp = iconMap[pillar.icon as keyof typeof iconMap] || Cpu;
              const isSelected = activePillarIndex === idx;

              return (
                <div
                  key={idx}
                  onClick={() => setActivePillarIndex(idx)}
                  className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                    isSelected
                      ? 'bg-slate-900 border-2 shadow-2xl scale-[1.02]'
                      : 'bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80'
                  }`}
                  style={{
                    borderColor: isSelected ? pillar.accentColor : undefined,
                    boxShadow: isSelected ? `0 0 30px ${pillar.accentColor}25` : undefined,
                  }}
                >
                  <div>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: `${pillar.accentColor}15`,
                        color: pillar.accentColor,
                        border: `1px solid ${pillar.accentColor}40`,
                      }}
                    >
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h4 className="text-lg font-bold text-white mb-1">
                      {pillar.title}
                    </h4>
                    <div
                      className="text-xs font-mono font-medium mb-3"
                      style={{ color: pillar.accentColor }}
                    >
                      {pillar.subtitle}
                    </div>

                    <p className="text-slate-400 text-xs leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>STATUS: ACTIVE</span>
                    <ChevronRight
                      className="w-4 h-4 transition-transform"
                      style={{ color: isSelected ? pillar.accentColor : undefined }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
