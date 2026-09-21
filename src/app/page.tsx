'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { SimLabWidget } from '@/components/SimLabWidget';
import { CareerJourney } from '@/components/CareerJourney';
import { Portfolio } from '@/components/Portfolio';
import { SkillsCertifications } from '@/components/SkillsCertifications';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { InteractiveTerminal } from '@/components/InteractiveTerminal';

export default function Home() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Keyboard shortcut listener: press ` (backtick) or ~ to toggle terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === '`' ||
        e.key === '~' ||
        (e.ctrlKey && e.key === 'k')
      ) {
        // Prevent typing backtick into input if terminal is closed
        if (
          document.activeElement?.tagName !== 'INPUT' &&
          document.activeElement?.tagName !== 'TEXTAREA'
        ) {
          e.preventDefault();
          setIsTerminalOpen((prev) => !prev);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenSimLab = () => {
    const el = document.getElementById('sim-lab');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#06080d] text-slate-100 selection:bg-emerald-500/30 selection:text-white relative">
      {/* Top Fixed Header */}
      <Navbar
        isTerminalOpen={isTerminalOpen}
        onToggleTerminal={() => setIsTerminalOpen((prev) => !prev)}
      />

      {/* Hero Section */}
      <Hero
        onOpenSimLab={handleOpenSimLab}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* About & Systems Architecture Philosophy */}
      <About />

      {/* Interactive Physical AI & Isaac Sim Lab */}
      <SimLabWidget />

      {/* Career Milestones Chronology */}
      <CareerJourney />

      {/* Portfolio & Architecture Blueprints */}
      <Portfolio />

      {/* Capabilities & Formal Accreditations */}
      <SkillsCertifications />

      {/* Direct Engagement Hub */}
      <ContactSection />

      {/* Bottom Footer */}
      <Footer />

      {/* Interactive CLI Console Drawer */}
      <InteractiveTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </main>
  );
}
