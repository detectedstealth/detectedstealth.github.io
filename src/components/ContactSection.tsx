'use client';

import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Linkedin, 
  Globe, 
  Send, 
  Check, 
  Copy, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { PROFILE_DATA } from '@/data/profileData';

export const ContactSection: React.FC = () => {
  const [subject, setSubject] = useState('Simulation & Physical AI Advisory');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [dispatched, setDispatched] = useState(false);
  const [vancouverTime, setVancouverTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Vancouver',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(now);
      setVancouverTime(timeStr);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleDispatch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Dynamically load confetti on client trigger only
    try {
      const confettiModule = await import('canvas-confetti');
      const confetti = confettiModule.default || confettiModule;
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#00f5a0', '#00d2ff', '#a855f7'],
      });
    } catch {
      // Graceful fallback if client canvas unavailable
    }

    const mailtoUrl = `mailto:${PROFILE_DATA.email}?subject=${encodeURIComponent(
      `[Inquiry] ${subject} - from ${senderName || 'Colleague'}`
    )}&body=${encodeURIComponent(
      `Hi Bruce,\n\n${message}\n\nFrom: ${senderName} (${senderEmail})`
    )}`;

    window.open(mailtoUrl, '_blank');
    setDispatched(true);
    setTimeout(() => setDispatched(false), 4000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#05070c] hud-grid border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="cyber-badge !border-emerald-500/40 !bg-emerald-500/10 !text-emerald-300">
            <Mail className="w-3 h-3" />
            <span>06 // DIRECT ENGAGEMENT HUB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Initiate Systems Discussion
          </h2>
          <p className="text-slate-400 font-mono text-xs sm:text-sm max-w-2xl">
            Open for technical advisory, robotics synthetic data pipelines, Unreal Engine C++ architecture, and high-impact systems engineering engagements.
          </p>
        </div>

        {/* Contact Grid: Direct Channels + Interactive Dispatcher */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Channels & Telemetry (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Status & Timezone Card */}
            <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    STATUS: AVAILABLE
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-300">
                  <Clock className="w-3.5 h-3.5" />
                  <span>YVR {vancouverTime}</span>
                </div>
              </div>

              <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>Vancouver, British Columbia, Canada (PST / UTC-7)</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Available for selective technical advisory, pipeline consulting, simulation architecture reviews, and high-leverage technical leadership.
              </p>
            </div>

            {/* Direct Channel Links */}
            <div className="space-y-3 font-mono text-xs">
              {/* Email */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between group hover:border-emerald-500/40 transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-[10px]">DIRECT EMAIL</div>
                    <a
                      href={`mailto:${PROFILE_DATA.email}`}
                      className="text-white font-semibold hover:text-emerald-300 transition-colors"
                    >
                      {PROFILE_DATA.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href={PROFILE_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between group hover:border-cyan-500/40 transition-all block"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-[10px]">LINKEDIN PROFILE</div>
                    <div className="text-white font-semibold group-hover:text-cyan-300 transition-colors">
                      linkedin.com/in/brucelwade
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </a>

              {/* Warply Designed */}
              <a
                href={PROFILE_DATA.warplyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between group hover:border-purple-500/40 transition-all block"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-[10px]">STUDIO PORTAL</div>
                    <div className="text-white font-semibold group-hover:text-purple-300 transition-colors">
                      warplydesigned.com
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Dispatcher Form (7 cols) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleDispatch}
              className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-5"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono text-white font-semibold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  MESSAGE DISPATCH PROTOCOL
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  ENCRYPTED TRANSMISSION
                </span>
              </div>

              {/* Topic Select */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400">
                  Engagement Subject:
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs font-mono text-slate-200 focus:border-emerald-500 focus:outline-none"
                >
                  <option value="Simulation & Physical AI Advisory">Simulation & Physical AI Advisory</option>
                  <option value="Isaac Sim & OpenUSD Pipeline Ingestion">Isaac Sim & OpenUSD Pipeline Ingestion</option>
                  <option value="Dual-Window Unreal Engine C++ Systems">Dual-Window Unreal Engine C++ Systems</option>
                  <option value="Enterprise Architecture & Scaling">Enterprise Architecture & Scaling</option>
                  <option value="Technical Review & Book Publishing">Technical Review & Book Publishing</option>
                  <option value="General Systems Collaboration">General Systems Collaboration</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">Your Name:</label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Elena Rostova"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs font-mono text-slate-200 focus:border-emerald-500 focus:outline-none placeholder:text-slate-600"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">Your Email:</label>
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="e.g. elena@robotics-corp.com"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs font-mono text-slate-200 focus:border-emerald-500 focus:outline-none placeholder:text-slate-600"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400">Brief Overview / Scope:</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your simulation requirements, architecture challenge, or collaboration proposal..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 text-xs font-mono text-slate-200 focus:border-emerald-500 focus:outline-none placeholder:text-slate-600 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs font-mono flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,245,160,0.3)] transition-all hover:scale-[1.01]"
              >
                <Send className="w-4 h-4" />
                <span>{dispatched ? 'TRANSMISSION DISPATCHED!' : 'DISPATCH TRANSMISSION'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
