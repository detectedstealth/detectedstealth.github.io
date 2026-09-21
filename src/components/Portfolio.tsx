'use client';

import React, { useState } from 'react';
import { 
  FolderGit2, 
  ArrowUpRight, 
  Cpu, 
  ExternalLink, 
  Code2, 
  Boxes, 
  Layers, 
  BookOpen, 
  Sparkles,
  Rocket
} from 'lucide-react';
import { PROFILE_DATA, ProjectItem } from '@/data/profileData';
import { ProjectModal } from '@/components/ProjectModal';

export const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Portfolios' },
    { id: 'Simulation & C++', label: 'Simulation & C++' },
    { id: 'Robotics & Physical AI', label: 'Robotics & AI' },
    { id: 'Publications & Architecture', label: 'Published Books' },
    { id: 'Enterprise Cloud & ML', label: 'Enterprise & ML' },
  ];

  const filteredProjects = PROFILE_DATA.projects.filter((proj) => {
    if (activeCategory === 'all') return true;
    return proj.category === activeCategory;
  });

  return (
    <section id="portfolio" className="py-24 relative bg-[#06080d] hud-grid border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="cyber-badge !border-emerald-500/40 !bg-emerald-500/10 !text-emerald-300">
            <FolderGit2 className="w-3 h-3" />
            <span>04 // PORTFOLIO & ARCHITECTURES</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Featured Systems & Platform Blueprints
              </h2>
              <p className="text-slate-400 font-mono text-xs sm:text-sm mt-1">
                Deep-dive into production simulation engines, published engineering books, and custom pipeline tooling.
              </p>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeCategory === cat.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(0,210,255,0.3)]'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between group border border-slate-800/80"
            >
              <div>
                {/* Header Tag + Status */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    {project.status}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4">
                  {project.description}
                </p>

                {/* Quick Metric Ribbon */}
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 mb-4 space-y-1 text-[11px] font-mono">
                  {project.metrics.slice(0, 2).map((m, mIdx) => (
                    <div key={mIdx} className="flex justify-between">
                      <span className="text-slate-500">{m.label}:</span>
                      <span className="text-emerald-300 font-semibold">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.slice(0, 4).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-500">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Modal Trigger */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-emerald-500/20 text-slate-200 hover:text-emerald-300 border border-slate-700 hover:border-emerald-500/40 text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <span>Inspect Blueprint</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Future Ventures & Labs Spotlight */}
        <div className="mt-16 pt-12 border-t border-slate-800">
          <div className="flex items-center gap-2 mb-6">
            <Rocket className="w-4 h-4 text-purple-400" />
            <h3 className="text-xl font-bold text-white tracking-tight">
              Ventures, Studio & Lab Incubators
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Warply Designed Card */}
            <div className="glass-panel rounded-2xl p-6 border border-purple-500/20 relative overflow-hidden group">
              <div className="flex items-start justify-between">
                <div>
                  <span className="cyber-badge !border-purple-500/30 !bg-purple-500/10 !text-purple-300 text-[10px] mb-2">
                    FOUNDED 2012
                  </span>
                  <h4 className="text-xl font-bold text-white mt-1">
                    Warply Designed Inc.
                  </h4>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Consulting agency delivering custom pipeline automation, Unreal Engine virtual production tooling, C++ simulation architectures, and high-performance server microservices.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
                  <Layers className="w-6 h-6" />
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">
                  warplydesigned.com
                </span>
                <a
                  href="https://warplydesigned.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-300 hover:text-purple-200"
                >
                  <span>Visit Domain</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Blueprint Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
