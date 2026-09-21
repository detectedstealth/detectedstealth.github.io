'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Play, Pause, RotateCcw, Zap, Sparkles, Sliders } from 'lucide-react';

interface MatrixRainProps {
  height?: number;
  interactive?: boolean;
}

export const MatrixRain: React.FC<MatrixRainProps> = ({
  height = 220,
  interactive = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRunning, setIsRunning] = useState(true);
  const [speed, setSpeed] = useState<'normal' | 'fast'>('normal');
  const [density, setDensity] = useState<'normal' | 'dense'>('dense');
  const [fps, setFps] = useState(60);

  const speedRef = useRef(speed);
  const densityRef = useRef(density);
  const isRunningRef = useRef(isRunning);

  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  useEffect(() => {
    densityRef.current = density;
  }, [density]);

  useEffect(() => {
    isRunningRef.current = isRunning;
  }, [isRunning]);

  const initAndRunCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let lastTime = performance.now();
    let frameCount = 0;
    let lastFpsUpdate = performance.now();

    const dpr = window.devicePixelRatio || 1;
    const width = container.clientWidth || 600;
    const h = height;

    canvas.width = width * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${h}px`;
    ctx.scale(dpr, dpr);

    // Matrix characters pool: Katakana + Hex + Binary + Physical AI tokens
    const characters =
      '010101010123456789ABCDEF' +
      'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン' +
      'USD:ISAAC:SIM:PHYSX:ROBOT:C++:WARPLY:AI:λ:Ω:0x7F:8086:GLTF:CUDA';

    const charArray = characters.split('');
    const fontSize = densityRef.current === 'dense' ? 11 : 14;
    const columns = Math.ceil(width / fontSize);

    // Track vertical drop positions and individual column speeds
    let drops: number[] = [];
    let dropSpeeds: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -30);
      dropSpeeds[i] = 0.6 + Math.random() * 0.8;
    }

    // Initial background fill
    ctx.fillStyle = '#03070d';
    ctx.fillRect(0, 0, width, h);

    const render = (time: number) => {
      if (!isRunningRef.current) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      // FPS tracking
      frameCount++;
      if (time - lastFpsUpdate >= 1000) {
        setFps(Math.round((frameCount * 1000) / (time - lastFpsUpdate)));
        frameCount = 0;
        lastFpsUpdate = time;
      }

      // Fade canvas with semi-transparent overlay to create trailing effect
      const fadeAlpha = speedRef.current === 'fast' ? 0.22 : 0.12;
      ctx.fillStyle = `rgba(3, 7, 13, ${fadeAlpha})`;
      ctx.fillRect(0, 0, width, h);

      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      const speedMultiplier = speedRef.current === 'fast' ? 1.8 : 1.0;

      for (let i = 0; i < columns; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Leading character glow
        if (Math.random() > 0.88) {
          ctx.fillStyle = '#ffffff';
          ctx.shadowColor = '#00f5a0';
          ctx.shadowBlur = 8;
        } else if (Math.random() > 0.5) {
          ctx.fillStyle = '#00f5a0';
          ctx.shadowColor = '#00d2ff';
          ctx.shadowBlur = 4;
        } else {
          ctx.fillStyle = '#059669';
          ctx.shadowBlur = 0;
        }

        ctx.fillText(char, x, y);
        ctx.shadowBlur = 0; // Reset shadow for performance

        // Reset drop when exceeding boundary with random variation
        if (y > h && Math.random() > 0.96) {
          drops[i] = 0;
          dropSpeeds[i] = 0.6 + Math.random() * 0.8;
        }

        drops[i] += dropSpeeds[i] * speedMultiplier;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [height]);

  useEffect(() => {
    const cleanup = initAndRunCanvas();
    const handleResize = () => {
      initAndRunCanvas();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (cleanup) cleanup();
    };
  }, [initAndRunCanvas, density, speed]);

  const handleReset = () => {
    initAndRunCanvas();
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-xl overflow-hidden border border-emerald-500/50 bg-[#03070d] shadow-[0_0_30px_rgba(0,245,160,0.25)] my-2"
    >
      {/* HUD Telemetry Top Bar */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-slate-950/90 border-b border-emerald-500/30 text-[11px] font-mono select-none">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-bold text-emerald-400">
            MATRIX DIGITAL RAIN // NEURAL PROTOCOL STREAM
          </span>
        </div>

        <div className="flex items-center gap-3 text-slate-400">
          <span className="text-cyan-300">
            FPS: <strong className="text-white">{fps}</strong>
          </span>
          <span className="text-slate-500 hidden sm:inline">
            SEED: <strong className="text-emerald-300">#0xBW984</strong>
          </span>
        </div>
      </div>

      {/* Main Canvas Area */}
      <div className="relative">
        <canvas ref={canvasRef} className="block w-full" />

        {/* Cyberpunk Scanline Effect Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.4)_50%)] bg-[length:100%_4px] opacity-40" />

        {/* Ambient Vignette */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]" />
      </div>

      {/* Interactive Controls Bar */}
      {interactive && (
        <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 bg-slate-950/95 border-t border-slate-800 text-xs font-mono">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsRunning((prev) => !prev)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded border transition-all ${
                isRunning
                  ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/20'
                  : 'bg-amber-500/10 text-amber-300 border-amber-500/40 hover:bg-amber-500/20'
              }`}
            >
              {isRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              <span>{isRunning ? 'PAUSE' : 'RESUME'}</span>
            </button>

            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-all"
              title="Reset stream seed"
            >
              <RotateCcw className="w-3 h-3" />
              <span>RESET</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            {/* Speed Toggle */}
            <button
              onClick={() => setSpeed((prev) => (prev === 'normal' ? 'fast' : 'normal'))}
              className={`flex items-center gap-1 px-2.5 py-1 rounded border transition-all ${
                speed === 'fast'
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 font-bold'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <Zap className="w-3 h-3" />
              <span>{speed === 'fast' ? 'WARP SPEED' : '1X SPEED'}</span>
            </button>

            {/* Density Toggle */}
            <button
              onClick={() => setDensity((prev) => (prev === 'dense' ? 'normal' : 'dense'))}
              className={`flex items-center gap-1 px-2.5 py-1 rounded border transition-all ${
                density === 'dense'
                  ? 'bg-purple-500/20 text-purple-300 border-purple-400 font-bold'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sliders className="w-3 h-3" />
              <span>{density === 'dense' ? 'DENSE STREAM' : 'NORMAL'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
