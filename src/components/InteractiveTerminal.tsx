'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles } from 'lucide-react';
import { PROFILE_DATA } from '@/data/profileData';
import { MatrixRain } from '@/components/MatrixRain';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [outputs, setOutputs] = useState<CommandOutput[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <div className="text-emerald-400 font-bold">
            BRUCE WADE // SYSTEMS ENGINEER & SIMULATION ARCHITECT (v2.4)
          </div>
          <div className="text-xs text-slate-400">
            Type <span className="text-cyan-300 font-semibold">help</span> to inspect available commands. Press <kbd className="px-1 bg-slate-800 rounded text-[10px]">ESC</kbd> or click X to close.
          </div>
        </div>
      ),
    },
  ]);
  const [isExpanded, setIsExpanded] = useState(false);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [outputs]);

  if (!isOpen) return null;

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    setHistory((prev) => [...prev, rawCmd]);
    setHistoryIndex(-1);

    let res: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        res = (
          <div className="space-y-1 text-xs">
            <div className="text-cyan-400 font-semibold">Available Commands:</div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-slate-300">
              <div><span className="text-emerald-300">about</span> - Systems architecture & bio</div>
              <div><span className="text-emerald-300">skills</span> - Breakdown of core competencies</div>
              <div><span className="text-emerald-300">journey</span> - Career chronology & milestones</div>
              <div><span className="text-emerald-300">projects</span> - Shipped systems & blueprints</div>
              <div><span className="text-emerald-300">books</span> - 12 published Apress Swift books</div>
              <div><span className="text-emerald-300">sim</span> - Execute Isaac Sim step</div>
              <div><span className="text-emerald-300">contact</span> - Direct links & email</div>
              <div><span className="text-emerald-300">clear</span> - Clear terminal buffer</div>
              <div><span className="text-emerald-300">matrix</span> - Digital rain easter egg</div>
            </div>
          </div>
        );
        break;

      case 'about':
      case 'bio':
        res = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <div className="text-emerald-400 font-semibold">{PROFILE_DATA.headline}</div>
            <p>{PROFILE_DATA.bio[0]}</p>
            <p className="text-cyan-300">{PROFILE_DATA.bio[1]}</p>
          </div>
        );
        break;

      case 'skills':
        res = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <div className="text-cyan-300 font-semibold">Core Capabilities:</div>
            <div>• <strong className="text-emerald-300">Physical AI & Sim:</strong> NVIDIA Isaac Sim, OpenUSD, glTF, Replicator, CAD Ingestion</div>
            <div>• <strong className="text-emerald-300">Engine Internals:</strong> Unreal Engine C++, Dual-Window Rendering, Shaders, Console SDKs</div>
            <div>• <strong className="text-emerald-300">Languages:</strong> Modern C++, Python (Async, FastAPI, Scrapy), Swift, C#</div>
            <div>• <strong className="text-emerald-300">Scale:</strong> Django, PostgreSQL, Celery, RabbitMQ, Docker, CI/CD</div>
          </div>
        );
        break;

      case 'journey':
      case 'experience':
        res = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <div className="text-purple-300 font-semibold">Career Timeline:</div>
            {PROFILE_DATA.experience.slice(0, 6).map((item) => (
              <div key={item.id} className="flex justify-between border-b border-slate-800/60 pb-1">
                <span>{item.role} @ <strong className="text-white">{item.company}</strong></span>
                <span className="text-slate-500">{item.period}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
      case 'portfolio':
        res = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <div className="text-emerald-400 font-semibold">Architectural Blueprints:</div>
            {PROFILE_DATA.projects.map((p) => (
              <div key={p.id}>
                • <strong className="text-white">{p.title}</strong>: <span className="text-slate-400">{p.tagline}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'books':
        res = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <div className="text-amber-400 font-semibold">Published Engineering Volumes (Apress / Springer):</div>
            <div>• <strong className="text-white">OS X App Development with CloudKit and Swift</strong> (Author)</div>
            <div>• <strong className="text-white">Swift 5 For Absolute Beginners</strong> (Technical Reviewer)</div>
            <div>• <strong className="text-white">Beginning iPhone Development with Swift 4</strong> (Technical Reviewer)</div>
            <div className="text-slate-400">+ 9 additional Swift and iOS system volumes</div>
          </div>
        );
        break;

      case 'sim':
        res = (
          <div className="space-y-1 text-xs font-mono text-emerald-400">
            <div>[SIM_EXEC] Ingesting OpenUSD stage /World/ArticulatedArm...</div>
            <div>[PHYSX] Solved 120Hz rigid body step. Collision score: 98.7%</div>
            <div>[TELEMETRY] Sensor RGBD frame successfully annotated with 3D Bounding Boxes.</div>
          </div>
        );
        break;

      case 'contact':
        res = (
          <div className="space-y-1 text-xs text-slate-300">
            <div>Email: <a href={`mailto:${PROFILE_DATA.email}`} className="text-emerald-400 underline">{PROFILE_DATA.email}</a></div>
            <div>LinkedIn: <a href={PROFILE_DATA.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{PROFILE_DATA.linkedin}</a></div>
            <div>Studio: <a href={PROFILE_DATA.warplyUrl} target="_blank" rel="noreferrer" className="text-purple-400 underline">{PROFILE_DATA.warplyUrl}</a></div>
          </div>
        );
        break;

      case 'clear':
        setOutputs([]);
        setInputVal('');
        return;

      case 'matrix':
      case 'rain':
        res = (
          <div className="space-y-2 my-1">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-semibold">[NEURAL PROTOCOL ENGAGED] Digital rain stream initiated:</span>
            </div>
            <MatrixRain height={220} interactive={true} />
            <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between px-1">
              <span>Wake up, systems architect... Isaac Sim stage is rendering in real-time.</span>
              <span className="text-emerald-400 font-bold">STATUS: LIVE STREAMING</span>
            </div>
          </div>
        );
        break;

      case 'sudo':
        res = (
          <div className="text-xs font-mono text-amber-400">
            [ACCESS GRANTED] You are operating with root telemetry permissions on node: BRUCE_WADE_SYSTEMS.
          </div>
        );
        break;

      default:
        res = (
          <div className="text-xs text-rose-400 font-mono">
            Command not recognized: &quot;{rawCmd}&quot;. Type <span className="text-cyan-300 font-semibold underline">help</span> for available commands.
          </div>
        );
        break;
    }

    setOutputs((prev) => [...prev, { command: rawCmd, output: res }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const nextIdx = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInputVal(history[nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx >= history.length) {
          setHistoryIndex(-1);
          setInputVal('');
        } else {
          setHistoryIndex(nextIdx);
          setInputVal(history[nextIdx]);
        }
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6 max-w-5xl mx-auto pointer-events-none">
      <div
        className={`pointer-events-auto glass-panel rounded-2xl border border-emerald-500/40 shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col transition-all duration-300 ${
          isExpanded ? 'h-[80vh]' : 'h-[360px]'
        }`}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950 border-b border-slate-800 select-none">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
            <TerminalIcon className="w-4 h-4 text-emerald-400" />
            <span className="font-semibold text-white">BW_CLI // v2.4 (INTERACTIVE CONSOLE)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 rounded text-slate-400 hover:text-white"
              title="Toggle size"
            >
              {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-rose-400"
              title="Close terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Output Area */}
        <div className="flex-1 bg-[#05080e]/95 p-4 overflow-y-auto font-mono text-xs space-y-4">
          {outputs.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-emerald-400 font-bold">bruce@systems:~$</span>
                <span className="text-white">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Command Input Prompt */}
        <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2 font-mono text-xs">
          <span className="text-emerald-400 font-bold">bruce@systems:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help' or command..."
            className="flex-1 bg-transparent border-none outline-none text-emerald-300 placeholder:text-slate-600 font-mono"
            autoFocus
          />
          <button
            onClick={() => handleCommand(inputVal)}
            className="p-1.5 bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-black rounded transition-all"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
