'use client';

import React from 'react';
import { ArrowUp, Cpu, Terminal, Shield, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PROFILE_DATA } from '@/data/profileData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030508] border-t border-white/10 text-slate-400 font-mono text-xs py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <div className="text-white font-bold tracking-wider">
                BRUCE WADE // SYSTEMS ARCHITECTURE
              </div>
              <div className="text-[11px] text-slate-500">
                PHYSICAL AI • ISAAC SIM • UNREAL C++ • OPENUSD
              </div>
            </div>
          </div>

          {/* Quick Anchor Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#pillars" className="hover:text-emerald-400 transition-colors">Pillars</a>
            <a href="#sim-lab" className="hover:text-cyan-400 transition-colors">Sim Lab</a>
            <a href="#journey" className="hover:text-purple-400 transition-colors">Career Journey</a>
            <a href="#portfolio" className="hover:text-emerald-400 transition-colors">Portfolio</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Telemetry Details & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Bruce Wade. Warply Designed Inc. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-ping" />
              <span>STACK: NEXT.JS 14 • TYPESCRIPT • TAILWIND</span>
            </span>
            <span>BUILD: v2.4.8-PROD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
