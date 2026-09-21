'use client';

import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Cpu, 
  Layers, 
  Server, 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  ExternalLink,
  Sparkles,
  Terminal
} from 'lucide-react';
import { PROFILE_DATA, CareerItem } from '@/data/profileData';

export const CareerJourney: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    warply: true,
    'theory-studios': true,
    apress: true,
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const allExpanded = PROFILE_DATA.experience.reduce((acc, item) => {
      acc[item.id] = true;
      return acc;
    }, {} as Record<string, boolean>);
    setExpandedIds(allExpanded);
  };

  const collapseAll = () => {
    setExpandedIds({});
  };

  const filteredExperience = PROFILE_DATA.experience.filter((item) => {
    if (selectedFilter === 'all') return true;
    return item.category === selectedFilter;
  });

  const categoryIcons = {
    simulation: Cpu,
    engine: Layers,
    enterprise: Server,
    author: BookOpen,
  };

  return (
    <section id="journey" className="py-24 relative hud-grid border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="cyber-badge !border-purple-500/40 !bg-purple-500/10 !text-purple-300">
            <Briefcase className="w-3 h-3" />
            <span>03 // CAREER CHRONOLOGY</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Engineering Journey & Milestones
              </h2>
              <p className="text-slate-400 font-mono text-xs sm:text-sm mt-1">
                From low-level graphics shaders and C++ engines to enterprise architecture, 12 published technical books, and Physical AI pipelines.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-3 text-xs font-mono">
              <button
                onClick={expandAll}
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white transition-all"
              >
                Expand All
              </button>
              <button
                onClick={collapseAll}
                className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white transition-all"
              >
                Collapse
              </button>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {[
            { id: 'all', label: 'All Milestones', count: PROFILE_DATA.experience.length },
            { id: 'simulation', label: 'Simulation & Physical AI', count: PROFILE_DATA.experience.filter(e => e.category === 'simulation').length },
            { id: 'engine', label: 'Engine & Graphics C++', count: PROFILE_DATA.experience.filter(e => e.category === 'engine').length },
            { id: 'enterprise', label: 'Enterprise Cloud & Scale', count: PROFILE_DATA.experience.filter(e => e.category === 'enterprise').length },
            { id: 'author', label: 'Publications & Authorship', count: PROFILE_DATA.experience.filter(e => e.category === 'author').length },
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 ${
                selectedFilter === filter.id
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(0,245,160,0.3)]'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              <span>{filter.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                selectedFilter === filter.id ? 'bg-black/20 text-slate-950' : 'bg-slate-800 text-slate-400'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Timeline Stream */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-10">
          {filteredExperience.map((item, index) => {
            const Icon = categoryIcons[item.category] || Briefcase;
            const isExpanded = !!expandedIds[item.id];

            return (
              <div key={item.id} className="relative group">
                {/* Glowing Node Indicator on Left Line */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#06080d] border-2 border-emerald-500/60 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400 group-hover:shadow-[0_0_15px_rgba(0,245,160,0.5)] transition-all z-10">
                  <Icon className="w-3.5 h-3.5" />
                </div>

                {/* Main Card */}
                <div
                  className={`glass-panel rounded-2xl border transition-all duration-300 ${
                    isExpanded
                      ? 'border-slate-700 bg-slate-900/90 shadow-2xl'
                      : 'border-slate-800/80 bg-slate-900/50 hover:border-slate-700'
                  }`}
                >
                  {/* Card Header (clickable to collapse/expand) */}
                  <div
                    onClick={() => toggleExpand(item.id)}
                    className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
                  >
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                          {item.role}
                        </h3>
                        {item.impactMetric && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                            {item.impactMetric}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                        <span className="text-cyan-400 font-semibold">{item.company}</span>
                        <span className="flex items-center gap-1 text-slate-400">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>
                        <span className="flex items-center gap-1 text-slate-400">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-end md:self-auto">
                      <div className="text-xs font-mono text-slate-500 group-hover:text-slate-300 hidden sm:block">
                        {isExpanded ? 'Hide Details' : 'View Details'}
                      </div>
                      <div className="p-1.5 rounded-lg bg-slate-800 text-slate-400 group-hover:text-white">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2 border-t border-slate-800/80 space-y-5 animate-in fade-in duration-200">
                      <p className="text-sm text-slate-300 leading-relaxed font-light">
                        {item.description}
                      </p>

                      {/* Technical Highlights */}
                      <div className="space-y-2">
                        <div className="text-xs font-mono text-slate-400 font-semibold tracking-wider">
                          KEY DELIVERABLES & ARCHITECTURAL IMPACT:
                        </div>
                        <ul className="space-y-2 text-xs text-slate-300">
                          {item.highlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2.5 leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack Badges */}
                      <div className="pt-2 flex flex-wrap items-center gap-1.5">
                        <span className="text-[11px] font-mono text-slate-500 mr-1">STACK:</span>
                        {item.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-950 text-slate-300 border border-slate-800 hover:border-slate-600 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
