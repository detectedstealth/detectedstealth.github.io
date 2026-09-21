'use client';

import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Play, 
  RotateCcw, 
  Sparkles, 
  Sliders, 
  Eye, 
  Terminal, 
  Copy, 
  Check, 
  Boxes,
  Zap,
  ShieldCheck,
  RefreshCw
} from 'lucide-react';

export const SimLabWidget: React.FC = () => {
  // Simulator state
  const [lightingLux, setLightingLux] = useState<number>(3200);
  const [sensorNoise, setSensorNoise] = useState<number>(12);
  const [domainVariance, setDomainVariance] = useState<number>(45);
  const [physicsFriction, setPhysicsFriction] = useState<number>(0.75);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simStep, setSimStep] = useState<number>(1042);
  const [confidenceScore, setConfidenceScore] = useState<number>(98.4);
  const [activeTab, setActiveTab] = useState<'viewport' | 'code' | 'logs'>('viewport');
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  // Simulated live bounding box coordinates
  const [targetPos, setTargetPos] = useState({ x: 180, y: 130, w: 90, h: 80, rot: 5 });

  const [logs, setLogs] = useState<string[]>([
    '[INIT] Omniverse USD Stage loaded: omni.isaac.sim.stage_v4.usd',
    '[USD] Loaded CAD assembly: /World/RoboticsRig/ArticulatedArm_v2',
    '[PHYSICS] PhysX 5.3 engine initialized at dt=0.0083s (120Hz)',
    '[RANDOMIZE] Applied domain perturbation seed #948271',
    '[SYNTHETIC] Sensor stream active: RGB-D 1920x1080 + 3D Bounding Boxes',
  ]);

  const runSimStep = () => {
    setIsSimulating(true);
    setSimStep((prev) => prev + 1);

    // Perturb target position slightly to emulate physics step
    setTargetPos({
      x: 160 + Math.floor(Math.random() * 50),
      y: 110 + Math.floor(Math.random() * 40),
      w: 80 + Math.floor(Math.random() * 25),
      h: 70 + Math.floor(Math.random() * 25),
      rot: Math.floor(Math.random() * 20) - 10,
    });

    const newScore = +(96 + Math.random() * 3.8).toFixed(1);
    setConfidenceScore(newScore);

    const timestamp = new Date().toISOString().split('T')[1].slice(0, 8);
    const newLog = `[STEP ${simStep + 1}] [${timestamp}] Ingested frame: ${newScore}% confidence | Lux: ${lightingLux} | Noise: ${sensorNoise}%`;
    setLogs((prev) => [newLog, ...prev.slice(0, 15)]);

    setTimeout(() => {
      setIsSimulating(false);
    }, 400);
  };

  const resetParams = () => {
    setLightingLux(3200);
    setSensorNoise(12);
    setDomainVariance(45);
    setPhysicsFriction(0.75);
    setTargetPos({ x: 180, y: 130, w: 90, h: 80, rot: 5 });
    setConfidenceScore(98.4);
  };

  // Dynamic OpenUSD / Isaac Sim Python Code
  const generatedCode = `# NVIDIA Isaac Sim 4.x - Synthetic Domain Randomizer
# Architected by Bruce Wade (Warply Designed Inc.)

from omni.isaac.core import World
from omni.isaac.core.prims import RigidPrim
import omni.replicator.core as rep
from pxr import Usd, UsdGeom, UsdPhysics

def setup_deterministic_scenario():
    world = World(stage_units_in_meters=1.0, physics_dt=0.00833)
    stage = world.stage

    # 1. USD CAD Assembly Ingestion
    robot_prim = stage.GetPrimAtPath("/World/ArticulatedArm")
    physics_api = UsdPhysics.RigidBodyAPI.Apply(robot_prim)
    physics_api.CreateKinematicEnabledAttr(False)

    # 2. Dynamic Domain Randomization Parameters
    with rep.new_layer():
        light = rep.create.light(
            light_type="dome",
            intensity=${lightingLux}.0,
            temperature=6500.0
        )
        
        # Sensor Camera with Deterministic Noise
        camera = rep.create.camera(
            position=(2.5, 2.5, 1.8),
            look_at="/World/ArticulatedArm"
        )
        render_product = rep.create.render_product(camera, resolution=(1920, 1080))

        # Replicator Annotations (3D BBox + Semantic Segmentation)
        writer = rep.WriterRegistry.get("BasicWriter")
        writer.initialize(
            output_dir="./synthetic_dataset_qa",
            rgb=True,
            bounding_box_3d=True,
            distance_to_camera=True
        )
        writer.attach([render_product])

    print("Pipeline Step Ready: Physics Friction=${physicsFriction}, Noise=${sensorNoise}%")

if __name__ == "__main__":
    setup_deterministic_scenario()
`;

  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="sim-lab" className="py-24 relative bg-[#070a10] border-t border-white/5 hud-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="space-y-3 mb-12">
          <div className="cyber-badge !border-cyan-500/40 !bg-cyan-500/10 !text-cyan-300">
            <Sparkles className="w-3 h-3" />
            <span>02 // INTERACTIVE SIMULATION LAB</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Physical AI Synthetic Data Sandbox
              </h2>
              <p className="text-slate-400 font-mono text-xs sm:text-sm mt-1">
                Interact with the real-time simulation parameters below to inspect how deterministic domain randomization transforms USD scene graphs.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={runSimStep}
                disabled={isSimulating}
                className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs font-mono transition-all shadow-[0_0_20px_rgba(0,245,160,0.3)] disabled:opacity-50"
              >
                <Play className={`w-3.5 h-3.5 fill-current ${isSimulating ? 'animate-spin' : ''}`} />
                <span>{isSimulating ? 'SIMULATING...' : 'EXECUTE STEP'}</span>
              </button>
              <button
                onClick={resetParams}
                className="p-2.5 bg-slate-900 border border-slate-700 text-slate-300 hover:text-white rounded-xl text-xs font-mono transition-all"
                title="Reset Parameters"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Interactive Lab Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Parameter Controls (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono text-slate-300 font-semibold flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-cyan-400" />
                  DOMAIN RANDOMIZERS
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  STEP #{simStep}
                </span>
              </div>

              {/* Slider 1: Lighting Lux */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Dome Lighting:</span>
                  <span className="text-cyan-300 font-semibold">{lightingLux} Lux</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="100"
                  value={lightingLux}
                  onChange={(e) => setLightingLux(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                />
              </div>

              {/* Slider 2: Sensor Noise */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Sensor Noise (Gaussian):</span>
                  <span className="text-purple-300 font-semibold">{sensorNoise}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="40"
                  step="1"
                  value={sensorNoise}
                  onChange={(e) => setSensorNoise(Number(e.target.value))}
                  className="w-full accent-purple-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                />
              </div>

              {/* Slider 3: Domain Variance */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Domain Variance Spread:</span>
                  <span className="text-emerald-300 font-semibold">±{domainVariance}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="90"
                  step="5"
                  value={domainVariance}
                  onChange={(e) => setDomainVariance(Number(e.target.value))}
                  className="w-full accent-emerald-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                />
              </div>

              {/* Slider 4: Physics Friction */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">PhysX Material Friction:</span>
                  <span className="text-amber-300 font-semibold">{physicsFriction} µ</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="1.5"
                  step="0.05"
                  value={physicsFriction}
                  onChange={(e) => setPhysicsFriction(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                />
              </div>

              {/* Live Output Metrics */}
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs font-mono">
                <div className="text-slate-400 text-[11px] mb-1">INSPECTION TELEMETRY</div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Detection Confidence:</span>
                  <span className="text-emerald-400 font-bold">{confidenceScore}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">CAD Schema Validity:</span>
                  <span className="text-cyan-400 font-bold">100% USDOmni</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">PhysX Clock:</span>
                  <span className="text-purple-300">120 Hz Fixed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Viewport / Code / Log Stream (8 cols) */}
          <div className="lg:col-span-8">
            <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden shadow-2xl flex flex-col h-[520px]">
              {/* Tabs Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab('viewport')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      activeTab === 'viewport'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>SYNTHETIC VIEWPORT</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('code')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      activeTab === 'code'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Boxes className="w-3.5 h-3.5" />
                    <span>GENERATED USD CODE</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('logs')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      activeTab === 'logs'
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>RUNTIME STREAM</span>
                  </button>
                </div>

                {activeTab === 'code' && (
                  <button
                    onClick={copyCodeToClipboard}
                    className="flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-900 border border-slate-700"
                  >
                    {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedCode ? 'COPIED' : 'COPY'}</span>
                  </button>
                )}
              </div>

              {/* Tab 1: Synthetic Viewport Canvas */}
              {activeTab === 'viewport' && (
                <div className="relative flex-1 bg-[#040609] overflow-hidden flex items-center justify-center p-6">
                  {/* Grid background representing 3D spatial ground plane */}
                  <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

                  {/* Dynamic Lighting Overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                    style={{
                      backgroundColor: `rgba(255, 255, 255, ${(lightingLux - 500) / 45000})`,
                    }}
                  />

                  {/* Noise grain overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-30"
                    style={{
                      filter: `contrast(${100 + sensorNoise * 3}%) brightness(${100 - sensorNoise}%)`,
                    }}
                  />

                  {/* SVG Rendering of Simulated Robotics Target & Bounding Box */}
                  <svg
                    className="w-full h-full max-w-lg max-h-80"
                    viewBox="0 0 400 300"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Horizon Grid Plane */}
                    <line x1="20" y1="220" x2="380" y2="220" stroke="#1e293b" strokeWidth="2" />
                    <line x1="200" y1="220" x2="20" y2="290" stroke="#1e293b" strokeWidth="1" />
                    <line x1="200" y1="220" x2="380" y2="290" stroke="#1e293b" strokeWidth="1" />

                    {/* Simulated Robotic Articulated Arm */}
                    <g transform="translate(70, 160)">
                      {/* Base */}
                      <rect x="0" y="50" width="60" height="20" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="2" />
                      {/* Joint 1 */}
                      <circle cx="30" cy="45" r="14" fill="#0f172a" stroke="#00f5a0" strokeWidth="2" />
                      {/* Arm 1 */}
                      <line x1="30" y1="45" x2="70" y2="10" stroke="#00d2ff" strokeWidth="6" strokeLinecap="round" />
                      {/* Joint 2 */}
                      <circle cx="70" cy="10" r="10" fill="#0f172a" stroke="#a855f7" strokeWidth="2" />
                      {/* Arm 2 */}
                      <line x1="70" y1="10" x2="110" y2="25" stroke="#00d2ff" strokeWidth="4" strokeLinecap="round" />
                      {/* End Effector */}
                      <circle cx="110" cy="25" r="6" fill="#00f5a0" />
                      {/* Laser Sensor Ray */}
                      <line x1="110" y1="25" x2={targetPos.x + 20} y2={targetPos.y + 20} stroke="#00f5a0" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
                    </g>

                    {/* Simulated Object under Domain Randomization with 3D Bounding Box */}
                    <g transform={`translate(${targetPos.x}, ${targetPos.y}) rotate(${targetPos.rot})`}>
                      {/* Target 3D Solid Geometry */}
                      <rect
                        x="0"
                        y="0"
                        width={targetPos.w}
                        height={targetPos.h}
                        rx="6"
                        fill="#0e1726"
                        stroke="#00d2ff"
                        strokeWidth="2"
                        className="transition-all duration-300"
                      />
                      <line x1="0" y1="0" x2={targetPos.w} y2={targetPos.h} stroke="#00d2ff" strokeWidth="0.5" strokeOpacity="0.4" />
                      <line x1={targetPos.w} y1="0" x2="0" y2={targetPos.h} stroke="#00d2ff" strokeWidth="0.5" strokeOpacity="0.4" />

                      {/* 3D Wireframe Depth Box */}
                      <rect
                        x="-10"
                        y="-10"
                        width={targetPos.w + 20}
                        height={targetPos.h + 20}
                        fill="none"
                        stroke="#00f5a0"
                        strokeWidth="1.5"
                        strokeDasharray="3 3"
                      />

                      {/* Telemetry Tag */}
                      <rect x="-10" y="-30" width="110" height="18" rx="3" fill="#00f5a0" />
                      <text x="-6" y="-17" fill="#06080d" fontSize="9" fontFamily="monospace" fontWeight="bold">
                        TARGET: {confidenceScore}%
                      </text>
                    </g>
                  </svg>

                  {/* Corner HUD Telemetry Overlay */}
                  <div className="absolute top-4 left-4 p-2.5 bg-black/70 border border-slate-800 rounded-lg text-[10px] font-mono space-y-1 text-slate-300 backdrop-blur-md">
                    <div>CAM: SENSOR_RGBD_01</div>
                    <div>RES: 1920x1080 @ 120 FPS</div>
                    <div className="text-emerald-400">PHYSX: SOLVED DETERMINISTIC</div>
                  </div>

                  <div className="absolute bottom-4 right-4 p-2 bg-black/70 border border-slate-800 rounded-lg text-[10px] font-mono text-cyan-400">
                    OPENUSD PRIM: /World/ArticulatedArm
                  </div>
                </div>
              )}

              {/* Tab 2: Code Viewer */}
              {activeTab === 'code' && (
                <div className="flex-1 bg-[#05070c] p-4 overflow-auto font-mono text-xs text-slate-300">
                  <pre className="text-emerald-400/90 leading-relaxed whitespace-pre-wrap">
                    {generatedCode}
                  </pre>
                </div>
              )}

              {/* Tab 3: Runtime Log Stream */}
              {activeTab === 'logs' && (
                <div className="flex-1 bg-[#05070c] p-4 overflow-auto font-mono text-xs text-slate-300 space-y-2">
                  <div className="text-slate-500 pb-2 border-b border-slate-800 flex justify-between">
                    <span>-- ISAAC SIM TELEMETRY DAEMON --</span>
                    <span className="text-emerald-400">LIVE</span>
                  </div>
                  {logs.map((log, idx) => (
                    <div
                      key={idx}
                      className={
                        idx === 0
                          ? 'text-emerald-300 font-semibold animate-pulse'
                          : log.includes('STEP')
                          ? 'text-cyan-300'
                          : 'text-slate-400'
                      }
                    >
                      {log}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
