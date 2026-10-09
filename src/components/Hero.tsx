'use client';

import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Layers, 
  Terminal, 
  ArrowRight, 
  Download, 
  Sparkles, 
  Activity, 
  Boxes, 
  Binary,
  CheckCircle2,
  Share2,
  ExternalLink,
  Server,
  Smartphone,
  GitBranch,
  BookOpen
} from 'lucide-react';
import { PROFILE_DATA } from '@/data/profileData';

interface HeroProps {
  onOpenSimLab: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSimLab, onOpenTerminal }) => {
  const [fps, setFps] = useState<number>(120);
  const [activeTelemetryTab, setActiveTelemetryTab] = useState<'python' | 'mobile' | 'cicd' | 'systems'>('python');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Subtle organic FPS fluctuation between 118 and 124
      setFps(Math.floor(118 + Math.random() * 7));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const handleCopyContact = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden hud-grid">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="cyber-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span>PYTHON & DISTRIBUTED SYSTEMS</span>
          </div>
          <div className="cyber-badge !border-cyan-500/30 !bg-cyan-500/10 !text-cyan-300">
            <Smartphone className="w-3 h-3" />
            <span>NATIVE MOBILE (IOS / SWIFT)</span>
          </div>
          <div className="cyber-badge !border-purple-500/30 !bg-purple-500/10 !text-purple-300">
            <GitBranch className="w-3 h-3" />
            <span>CI/CD & AUTOMATION</span>
          </div>
          <div className="cyber-badge !border-amber-500/30 !bg-amber-500/10 !text-amber-300">
            <BookOpen className="w-3 h-3" />
            <span>12X PUBLISHED TECH BOOKS</span>
          </div>
        </div>

        {/* Grid Layout: Main Headline + Live Diagnostic HUD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (7 cols): Typography & Pitch */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Architecting{' '}
              <span className="text-gradient-cyan-mint">
                Scalable Python Backends
              </span>,{' '}
              Native Mobile Systems & Automation.
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
              Over 15+ years engineering high-concurrency <strong className="text-emerald-300 font-semibold">Python distributed microservices</strong> (85% ORM query reduction), mission-critical <strong className="text-cyan-300 font-semibold">native Apple iOS/Android platforms</strong>, and robust <strong className="text-purple-300 font-semibold">CI/CD & Observability pipelines</strong>.
            </p>

            {/* Quick Pitch Callout */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 via-cyan-400 to-purple-500" />
              <div className="flex items-start gap-3">
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 shrink-0 mt-0.5">
                  <Activity className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-sm text-slate-300 leading-normal">
                  <span className="text-white font-semibold">Principal Systems Consultant at Warply Designed Inc.</span> (14+ yrs).
                  Author of <em>OS X App Development with CloudKit</em> & technical reviewer for 11 Swift engineering volumes at Apress. Contributed on Salesforce Field Service mobile tooling & C++ simulation engines.
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#journey"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(0,245,160,0.4)] transition-all hover:scale-[1.02]"
              >
                <span>Explore Career Journey</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenSimLab}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-100 border border-slate-700 hover:border-cyan-400/60 font-mono text-xs font-semibold tracking-wide transition-all shadow-lg hover:shadow-[0_0_20px_rgba(0,210,255,0.2)]"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Launch Systems Lab</span>
              </button>

              <button
                onClick={onOpenTerminal}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-black/60 hover:bg-black/90 text-slate-300 border border-white/10 hover:border-purple-400/50 font-mono text-xs transition-all"
                title="Open Interactive Terminal"
              >
                <Terminal className="w-4 h-4 text-purple-400" />
                <span>Run CLI</span>
              </button>
            </div>

            {/* Direct Contact Quick Pill */}
            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-slate-400">
              <span>Direct Link:</span>
              <button
                onClick={handleCopyContact}
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-emerald-300 transition-colors underline underline-offset-4 decoration-slate-700"
              >
                <span>{PROFILE_DATA.email}</span>
                {copied ? (
                  <span className="text-emerald-400 font-bold text-[11px]">[COPIED]</span>
                ) : (
                  <span className="text-[10px] text-slate-500">[Click to copy]</span>
                )}
              </button>
            </div>
          </div>

          {/* Right Column (5 cols): Interactive Telemetry & Diagnostic HUD */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl p-6 relative overflow-hidden border border-slate-800/80 shadow-2xl">
              {/* HUD Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 glowing-dot" />
                  <span className="font-semibold text-white">SYSTEM TELEMETRY HUD</span>
                </div>
                <div className="font-mono text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                  {fps} FPS // SYNCHRONIZED
                </div>
              </div>

              {/* Telemetry Switcher Tabs */}
              <div className="grid grid-cols-4 gap-1 bg-black/40 p-1 rounded-lg mt-4 text-[10px] font-mono">
                <button
                  onClick={() => setActiveTelemetryTab('python')}
                  className={`py-1.5 rounded text-center transition-all ${
                    activeTelemetryTab === 'python'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Python
                </button>
                <button
                  onClick={() => setActiveTelemetryTab('mobile')}
                  className={`py-1.5 rounded text-center transition-all ${
                    activeTelemetryTab === 'mobile'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Mobile
                </button>
                <button
                  onClick={() => setActiveTelemetryTab('cicd')}
                  className={`py-1.5 rounded text-center transition-all ${
                    activeTelemetryTab === 'cicd'
                      ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  CI/CD
                </button>
                <button
                  onClick={() => setActiveTelemetryTab('systems')}
                  className={`py-1.5 rounded text-center transition-all ${
                    activeTelemetryTab === 'systems'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Systems
                </button>
              </div>

              {/* Dynamic HUD Content */}
              <div className="mt-4 space-y-3 font-mono text-xs">
                {activeTelemetryTab === 'python' && (
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between p-2.5 bg-slate-900/60 rounded-lg border border-slate-800">
                      <span className="text-slate-400">Core Frameworks:</span>
                      <span className="text-emerald-300 font-semibold">FastAPI, Django, Celery</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-slate-900/60 rounded-lg border border-slate-800">
                      <span className="text-slate-400">Query Optimization:</span>
                      <span className="text-emerald-400 font-bold">85% Relational Query Reduction</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-slate-900/60 rounded-lg border border-slate-800">
                      <span className="text-slate-400">Queue Architecture:</span>
                      <span className="text-cyan-300 font-semibold">RabbitMQ & Redis Worker Pools</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-slate-900/60 rounded-lg border border-slate-800">
                      <span className="text-slate-400">Web Automation:</span>
                      <span className="text-purple-300 font-semibold">Scrapy Headless Ingestion</span>
                    </div>
                  </div>
                )}

                {activeTelemetryTab === 'mobile' && (
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between p-2.5 bg-slate-900/60 rounded-lg border border-slate-800">
                      <span className="text-slate-400">Native Platforms:</span>
                      <span className="text-cyan-300 font-semibold">Swift, SwiftUI, Objective-C, Kotlin</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-slate-900/60 rounded-lg border border-slate-800">
                      <span className="text-slate-400">Enterprise Mobile:</span>
                      <span className="text-emerald-300 font-semibold">Salesforce Field Service iOS</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-slate-900/60 rounded-lg border border-slate-800">
                      <span className="text-slate-400">Apress Author:</span>
                      <span className="text-amber-300 font-semibold">12 Published Swift Books</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-slate-900/60 rounded-lg border border-slate-800">
                      <span className="text-slate-400">Deployment Pipeline:</span>
                      <span className="text-purple-300 font-semibold">Fastlane Multi-Track Signing</span>
                    </div>
                  </div>
                )}

                {activeTelemetryTab === 'cicd' && (
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between p-2.5 bg-slate-900/60 rounded-lg border border-slate-800">
                      <span className="text-slate-400">CI/CD Runners:</span>
                      <span className="text-purple-300 font-semibold">GitHub Actions & Jenkins</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-slate-900/60 rounded-lg border border-slate-800">
                      <span className="text-slate-400">Observability:</span>
                      <span className="text-emerald-300 font-semibold">OpenTelemetry, Loki, Tempo, Grafana</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-slate-900/60 rounded-lg border border-slate-800">
                      <span className="text-slate-400">Containerization:</span>
                      <span className="text-cyan-300 font-semibold">Docker & Kubernetes (K8s)</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-slate-900/60 rounded-lg border border-slate-800">
                      <span className="text-slate-400">Agentic Tooling:</span>
                      <span className="text-amber-300 font-semibold">LLM Tool Calling & Auto-Evaluators</span>
                    </div>
                  </div>
                )}

                {activeTelemetryTab === 'systems' && (
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between p-2.5 bg-slate-900/60 rounded-lg border border-slate-800">
                      <span className="text-slate-400">Engine Stack:</span>
                      <span className="text-cyan-300 font-semibold">Unreal Engine 5.x C++</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-slate-900/60 rounded-lg border border-slate-800">
                      <span className="text-slate-400">Display Architecture:</span>
                      <span className="text-emerald-300 font-semibold">Dual Synchronized Viewports</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-slate-900/60 rounded-lg border border-slate-800">
                      <span className="text-slate-400">Simulation & CAD:</span>
                      <span className="text-purple-300 font-semibold">NVIDIA Isaac Sim & OpenUSD</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-slate-900/60 rounded-lg border border-slate-800">
                      <span className="text-slate-400">Platforms:</span>
                      <span className="text-amber-300 font-semibold">Proprietary Console SDKs + Win32</span>
                    </div>
                  </div>
                )}
              </div>

              {/* HUD Footer Status */}
              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>ARCHITECTURE PASS: 100%</span>
                </div>
                <a
                  href="#portfolio"
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                >
                  <span>Blueprints</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Stats Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-white/10 items-stretch">
          {PROFILE_DATA.stats.map((st, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-slate-900/40 border border-white/5 hover:border-emerald-500/30 transition-all group flex flex-col justify-between min-h-[96px]"
            >
              <div className="flex items-center min-h-[2.25rem]">
                <div
                  className={`font-extrabold text-white font-mono group-hover:text-emerald-400 transition-colors whitespace-nowrap ${
                    st.value.length > 5
                      ? 'text-xs sm:text-xs md:text-[11px] lg:text-xs xl:text-sm tracking-tight text-emerald-300'
                      : 'text-2xl sm:text-3xl'
                  }`}
                >
                  {st.value}
                </div>
              </div>
              <div className="text-xs text-slate-400 font-mono mt-2">
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
