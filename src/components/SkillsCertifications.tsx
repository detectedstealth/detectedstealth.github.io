'use client';

import React, { useState } from 'react';
import { 
  Award, 
  GraduationCap, 
  Cpu, 
  Layers, 
  Terminal, 
  Database, 
  Wrench, 
  CheckCircle2, 
  ShieldCheck,
  Code
} from 'lucide-react';
import { PROFILE_DATA } from '@/data/profileData';

export const SkillsCertifications: React.FC = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState<
    'simulationAndRobotics' | 'engineAndGraphics' | 'languagesAndTools' | 'enterpriseAndCloud'
  >('simulationAndRobotics');

  const categoryTitles = {
    simulationAndRobotics: 'Simulation & Physical AI',
    engineAndGraphics: 'Engine & Real-Time Graphics',
    languagesAndTools: 'Core Languages & Tooling',
    enterpriseAndCloud: 'Enterprise Backend & Cloud',
  };

  const badgeTypeStyles = {
    unreal: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
    systems: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300',
    data: 'border-purple-500/30 bg-purple-500/10 text-purple-300',
    hardware: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
  };

  return (
    <section id="skills" className="py-24 relative hud-grid border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="cyber-badge !border-cyan-500/40 !bg-cyan-500/10 !text-cyan-300">
            <Award className="w-3 h-3" />
            <span>05 // CAPABILITIES & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Mastery, Certifications & Education
          </h2>
          <p className="text-slate-400 font-mono text-xs sm:text-sm max-w-2xl">
            A comprehensive matrix of low-level graphics proficiency, simulation toolchains, formal engineering accreditations, and systems mastery.
          </p>
        </div>

        {/* Top Grid: Skills Matrix + Live Competency Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Category Selector Tabs (4 cols) */}
          <div className="lg:col-span-4 space-y-2">
            {(Object.keys(categoryTitles) as Array<keyof typeof categoryTitles>).map((key) => {
              const isSelected = activeSkillCategory === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveSkillCategory(key)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between font-mono text-xs ${
                    isSelected
                      ? 'bg-slate-900 border-emerald-500 text-emerald-300 shadow-[0_0_20px_rgba(0,245,160,0.2)] font-bold'
                      : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                >
                  <span>{categoryTitles[key]}</span>
                  <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-emerald-400 animate-ping' : 'bg-slate-700'}`} />
                </button>
              );
            })}

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 text-[11px] font-mono text-slate-400 mt-4 space-y-2">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>UNREAL TECH ART CERTIFIED</span>
              </div>
              <p className="text-slate-500 leading-normal">
                Passed the official Unreal Technical Art Exam to unlock Unreal Service Partner accreditation.
              </p>
            </div>
          </div>

          {/* Skill Bars & Meters (8 cols) */}
          <div className="lg:col-span-8">
            <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-slate-300 font-semibold">
                <span>{categoryTitles[activeSkillCategory].toUpperCase()} // TELEMETRY</span>
                <span className="text-emerald-400">BENCHMARKED</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PROFILE_DATA.skills[activeSkillCategory].map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-2 group hover:border-emerald-500/40 transition-all"
                  >
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-200 group-hover:text-emerald-300 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                    </div>

                    <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 via-cyan-400 to-purple-500 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Education Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certifications Card */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2 text-white font-bold text-lg">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>Verified Certifications</span>
              </div>
              <span className="text-xs font-mono text-slate-500">
                {PROFILE_DATA.certifications.length} TOTAL
              </span>
            </div>

            <div className="space-y-3">
              {PROFILE_DATA.certifications.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start justify-between gap-3 group hover:border-slate-700 transition-all"
                >
                  <div className="space-y-1">
                    <div className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-emerald-300 transition-colors">
                      {cert.name}
                    </div>
                    <div className="text-[11px] font-mono text-slate-400">
                      Issuer: {cert.issuer}
                    </div>
                  </div>

                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono shrink-0 border ${
                      badgeTypeStyles[cert.badgeType] || badgeTypeStyles.systems
                    }`}
                  >
                    {cert.badgeType.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Education Card */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2 text-white font-bold text-lg">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                <span>Formal Education & Programs</span>
              </div>
              <span className="text-xs font-mono text-slate-500">
                FOUNDATIONS
              </span>
            </div>

            <div className="space-y-4">
              {PROFILE_DATA.education.map((edu, eIdx) => (
                <div
                  key={eIdx}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5 group hover:border-cyan-500/40 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {edu.degree}
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                      {edu.year}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-slate-400">
                    {edu.school}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed font-light pt-1">
                    {edu.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
