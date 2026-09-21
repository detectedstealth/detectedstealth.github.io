'use client';

import React, { useState, useEffect } from 'react';
import { Terminal, Cpu, Menu, X, ArrowUpRight, ShieldCheck, Clock } from 'lucide-react';
import { PROFILE_DATA } from '@/data/profileData';

interface NavbarProps {
  onToggleTerminal: () => void;
  isTerminalOpen: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleTerminal, isTerminalOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [vancouverTime, setVancouverTime] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

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

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Pillars', href: '#pillars' },
    { name: 'Sim Lab', href: '#sim-lab' },
    { name: 'Journey', href: '#journey' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#06080d]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-3 text-white font-mono font-bold tracking-wider shrink-0"
        >
          <div className="w-9 h-9 rounded-lg bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400 group-hover:shadow-[0_0_15px_rgba(0,245,160,0.4)] transition-all shrink-0">
            <Cpu className="w-5 h-5" />
          </div>
          <div className="flex flex-col whitespace-nowrap">
            <span className="text-sm font-semibold tracking-wide text-slate-100 group-hover:text-emerald-300 transition-colors">
              BRUCE WADE
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-normal">
              SYSTEMS // SIMULATION
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-white/10 rounded-full px-3 xl:px-4 py-1.5 backdrop-blur-md shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-2.5 xl:px-3 py-1.5 text-xs font-mono text-slate-300 hover:text-emerald-400 hover:bg-white/5 rounded-full transition-all whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Telemetry & Controls */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          {/* Vancouver Clock */}
          <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 bg-slate-900/80 border border-slate-800 rounded-lg text-xs font-mono text-slate-300 whitespace-nowrap">
            <Clock className="w-3.5 h-3.5 text-cyan-400 animate-pulse shrink-0" />
            <span className="text-slate-400">YVR:</span>
            <span className="text-cyan-300 font-semibold">{vancouverTime || '08:23:00'}</span>
          </div>

          {/* System Status Pill */}
          <div className="flex items-center gap-2 px-3 py-1 bg-emerald-950/40 border border-emerald-500/30 rounded-full text-xs font-mono text-emerald-300 whitespace-nowrap">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>AVAILABLE</span>
          </div>

          {/* Terminal Trigger Button */}
          <button
            onClick={onToggleTerminal}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border font-mono text-xs transition-all whitespace-nowrap shrink-0 ${
              isTerminalOpen
                ? 'bg-emerald-500 text-black border-emerald-400 font-bold shadow-[0_0_15px_rgba(0,245,160,0.5)]'
                : 'bg-slate-900/90 text-slate-200 border-slate-700 hover:border-emerald-500/50 hover:text-emerald-300'
            }`}
            title="Open Developer CLI Console (Press `)"
          >
            <Terminal className="w-3.5 h-3.5 shrink-0" />
            <span>CLI</span>
            <kbd className="hidden md:inline-block px-1 py-0.2 bg-black/40 border border-white/10 rounded text-[9px] text-slate-400 font-mono">
              `
            </kbd>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-2 shrink-0">
          <button
            onClick={onToggleTerminal}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400"
            aria-label="Toggle Terminal"
          >
            <Terminal className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0d14]/95 backdrop-blur-xl border-b border-white/10 px-6 py-5 space-y-3 shadow-2xl">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-slate-400">
            <span>LOCATION: Vancouver, BC</span>
            <span className="text-cyan-400 font-semibold">{vancouverTime}</span>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-mono text-slate-200 hover:text-emerald-400 bg-slate-900/50 rounded-lg border border-white/5 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="mailto:hello@brucewade.dev"
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-lg text-sm transition-all"
            >
              <span>Connect Directly</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
