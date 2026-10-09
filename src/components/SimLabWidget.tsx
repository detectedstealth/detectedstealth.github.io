'use client';

import React, { useState } from 'react';
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
  Server,
  Smartphone,
  GitBranch,
  Activity,
  Layers,
  ArrowRight,
  Database,
  Radio
} from 'lucide-react';

type LabMode = 'python' | 'mobile' | 'automation' | 'simulation';
type ActiveSubTab = 'viewport' | 'code' | 'logs';

export const SimLabWidget: React.FC = () => {
  const [activeMode, setActiveMode] = useState<LabMode>('python');
  const [activeSubTab, setActiveSubTab] = useState<ActiveSubTab>('viewport');
  const [isExecuting, setIsExecuting] = useState<boolean>(false);
  const [executionStep, setExecutionStep] = useState<number>(1042);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  // --- MODE 1: Python & Distributed Task Queue State ---
  const [workerCount, setWorkerCount] = useState<number>(8);
  const [ingestionRate, setIngestionRate] = useState<number>(4500);
  const [queryBatching, setQueryBatching] = useState<number>(85); // 85% ORM reduction
  const [connectionPool, setConnectionPool] = useState<number>(25);

  // --- MODE 2: Mobile CI/CD & Fastlane State ---
  const [buildRunners, setBuildRunners] = useState<number>(4);
  const [testCoverage, setTestCoverage] = useState<number>(94);
  const [signingOptimization, setSigningOptimization] = useState<number>(3);

  // --- MODE 3: Scraper & Automation State ---
  const [scraperConcurrency, setScraperConcurrency] = useState<number>(16);
  const [batchIngestionSize, setBatchIngestionSize] = useState<number>(1200);
  const [proxyPoolSize, setProxyPoolSize] = useState<number>(50);

  // --- MODE 4: Simulation & Isaac Sim State ---
  const [lightingLux, setLightingLux] = useState<number>(3200);
  const [sensorNoise, setSensorNoise] = useState<number>(12);
  const [domainVariance, setDomainVariance] = useState<number>(45);
  const [physicsFriction, setPhysicsFriction] = useState<number>(0.75);
  const [targetPos, setTargetPos] = useState({ x: 180, y: 130, w: 90, h: 80, rot: 5 });
  const [confidenceScore, setConfidenceScore] = useState<number>(98.4);

  // Live log streams per mode
  const [pythonLogs, setPythonLogs] = useState<string[]>([
    '[INIT] FastAPI worker gateway listening on :8000',
    '[CELERY] Connected to RabbitMQ cluster amqp://guest:****@rabbitmq:5672/vhost',
    '[REDIS] Connection pool initialized: 25 connections active',
    '[ORM] Applied 85% query batching optimization layer (latency: 14.2ms)',
    '[OTEL] OpenTelemetry exporter configured -> Tempo (traces) & Prometheus (metrics)',
  ]);

  const [mobileLogs, setMobileLogs] = useState<string[]>([
    '[CI] GitHub Actions workflow triggered: .github/workflows/mobile-release.yml',
    '[RUNNER] Spawned 4 macOS virtual nodes for parallel XCTest execution',
    '[FASTLANE] match: Installed provisioning profile & App Store distribution certificates',
    '[BUILD] xcodebuild: Archived FieldServiceMobile.xcarchive (0 warnings)',
    '[DEPLOY] TestFlight build #418 uploaded & Play Store track published',
  ]);

  const [autoLogs, setAutoLogs] = useState<string[]>([
    '[INIT] Scrapy distributed crawler engine initialized',
    '[PROXY] Proxy rotation gateway active: 50 residential IPs healthy',
    '[PIPELINE] Batch ingestion processor started: 1200 items/chunk',
    '[DEDUP] Hash-based deduplication active: 99.8% precision',
    '[METRICS] Extraction latency: 42ms/doc | Telemetry streamed to Grafana',
  ]);

  const [simLogs, setSimLogs] = useState<string[]>([
    '[INIT] Omniverse USD Stage loaded: omni.isaac.sim.stage_v4.usd',
    '[USD] Loaded CAD assembly: /World/RoboticsRig/ArticulatedArm_v2',
    '[PHYSICS] PhysX 5.3 engine initialized at dt=0.0083s (120Hz)',
    '[RANDOMIZE] Applied domain perturbation seed #948271',
    '[SYNTHETIC] Sensor stream active: RGB-D 1920x1080 + 3D Bounding Boxes',
  ]);

  const handleExecute = () => {
    setIsExecuting(true);
    setExecutionStep((prev) => prev + 1);
    const timestamp = new Date().toISOString().split('T')[1].slice(0, 8);

    if (activeMode === 'python') {
      const calcLatency = +(120 * (1 - queryBatching / 100) + 4).toFixed(1);
      const newLog = `[STEP ${executionStep + 1}] [${timestamp}] Celery worker pool processed ${ingestionRate} req/s | Query latency: ${calcLatency}ms | Workers: ${workerCount}`;
      setPythonLogs((prev) => [newLog, ...prev.slice(0, 15)]);
    } else if (activeMode === 'mobile') {
      const newLog = `[STEP ${executionStep + 1}] [${timestamp}] Matrix test pass: ${testCoverage}% | Fastlane signing in ${buildRunners} parallel threads | TestFlight artifact ready`;
      setMobileLogs((prev) => [newLog, ...prev.slice(0, 15)]);
    } else if (activeMode === 'automation') {
      const newLog = `[STEP ${executionStep + 1}] [${timestamp}] Ingested ${batchIngestionSize} items across ${scraperConcurrency} scrapers | Proxy pool rotated 100% clean`;
      setAutoLogs((prev) => [newLog, ...prev.slice(0, 15)]);
    } else {
      setTargetPos({
        x: 160 + Math.floor(Math.random() * 50),
        y: 110 + Math.floor(Math.random() * 40),
        w: 80 + Math.floor(Math.random() * 25),
        h: 70 + Math.floor(Math.random() * 25),
        rot: Math.floor(Math.random() * 20) - 10,
      });
      const newScore = +(96 + Math.random() * 3.8).toFixed(1);
      setConfidenceScore(newScore);
      const newLog = `[STEP ${executionStep + 1}] [${timestamp}] Ingested frame: ${newScore}% confidence | Lux: ${lightingLux} | Noise: ${sensorNoise}%`;
      setSimLogs((prev) => [newLog, ...prev.slice(0, 15)]);
    }

    setTimeout(() => {
      setIsExecuting(false);
    }, 400);
  };

  const handleReset = () => {
    if (activeMode === 'python') {
      setWorkerCount(8);
      setIngestionRate(4500);
      setQueryBatching(85);
      setConnectionPool(25);
    } else if (activeMode === 'mobile') {
      setBuildRunners(4);
      setTestCoverage(94);
      setSigningOptimization(3);
    } else if (activeMode === 'automation') {
      setScraperConcurrency(16);
      setBatchIngestionSize(1200);
      setProxyPoolSize(50);
    } else {
      setLightingLux(3200);
      setSensorNoise(12);
      setDomainVariance(45);
      setPhysicsFriction(0.75);
      setConfidenceScore(98.4);
      setTargetPos({ x: 180, y: 130, w: 90, h: 80, rot: 5 });
    }
  };

  // Dynamic code generators per mode
  const getGeneratedCode = () => {
    if (activeMode === 'python') {
      const calcLatency = (120 * (1 - queryBatching / 100) + 4).toFixed(1);
      return `# High-Throughput Python & Celery Pipeline
# Architecture by Bruce Wade (Warply Designed Inc.)

from fastapi import FastAPI, BackgroundTasks, Depends
from celery import Celery
import redis.asyncio as aioredis
from opentelemetry import trace, metrics
import asyncio

app = FastAPI(title="Recruitology Distributed Query Engine")
tracer = trace.get_tracer(__name__)
meter = metrics.get_meter(__name__)

celery_app = Celery(
    "query_tasks",
    broker="amqp://guest:guest@rabbitmq:5672//",
    backend="redis://redis:6379/0"
)
celery_app.conf.update(
    worker_concurrency=${workerCount},
    task_acks_late=True,
    task_compression='gzip'
)

# 85% Relational Query Optimization Cache Layer
@celery_app.task(bind=True, max_retries=3)
def process_candidate_matching_batch(self, batch_ids: list[int]):
    with tracer.start_as_current_span("process_batch") as span:
        span.set_attribute("batch.size", len(batch_ids))
        span.set_attribute("query_optimization.reduction_ratio", "${queryBatching}%")
        
        # Simulated batched ORM query with ${calcLatency}ms latency
        results = [f"candidate_{cid}_scored" for cid in batch_ids]
        return {"processed": len(results), "latency_ms": ${calcLatency}}

@app.post("/api/v1/jobs/ingest")
async def ingest_job_stream(batch_size: int = ${ingestionRate}):
    task = process_candidate_matching_batch.delay(list(range(batch_size)))
    return {"status": "queued", "task_id": str(task.id), "concurrency": ${workerCount}}
`;
    }

    if (activeMode === 'mobile') {
      return `# GitHub Actions & Fastlane Release Pipeline
# Mobile Architecture by Bruce Wade

name: Native Mobile Enterprise CI/CD

on:
  push:
    tags:
      - 'v*'

jobs:
  test_and_build:
    name: Parallel Test & Build Matrix
    runs-on: macos-14
    strategy:
      matrix:
        runner_shard: [1, 2, 3, ${buildRunners}]
        platform: [ios, android]
    steps:
      - uses: actions/checkout@v4
      - name: Setup Fastlane & Bundler
        run: bundle install

      - name: Execute XCTest Matrix (${testCoverage}% Target)
        run: |
          bundle exec fastlane run_unit_tests \\
            shard:\${{ matrix.runner_shard }} \\
            min_coverage:${testCoverage}

      - name: Fastlane Match Code Signing & TestFlight Distribution
        env:
          APP_STORE_CONNECT_API_KEY: \${{ secrets.ASC_KEY }}
        run: |
          bundle exec fastlane release_enterprise_beta \\
            parallel_threads:${signingOptimization} \\
            destination:"TestFlight"
`;
    }

    if (activeMode === 'automation') {
      return `# High-Concurrency Web Scraping & Ingestion Engine
# Automated Tooling by Bruce Wade (Warply Designed Inc.)

import asyncio
import scrapy
from scrapy.crawler import CrawlerProcess
from aiohttp import ClientSession

class ScaledIngestionSpider(scrapy.Spider):
    name = "enterprise_data_spider"
    custom_settings = {
        'CONCURRENT_REQUESTS': ${scraperConcurrency},
        'AUTOTHROTTLE_ENABLED': True,
        'DOWNLOAD_DELAY': 0.05,
        'RETRY_TIMES': 5,
        'ROTATING_PROXY_POOL_SIZE': ${proxyPoolSize}
    }

    async def parse(self, response):
        items = []
        for card in response.css('.catalog-item')[:${batchIngestionSize}]:
            payload = {
                'id': card.attrib.get('data-id'),
                'title': card.css('.title::text').get(),
                'metadata': card.css('.meta::text').getall()
            }
            items.append(payload)
        
        # Async stream to PostgreSQL / OpenTelemetry metrics
        await self.dispatch_to_pipeline(items)

    async def dispatch_to_pipeline(self, batch):
        print(f"[INGESTION] Pushed {len(batch)} records to schema validator")
`;
    }

    return `# NVIDIA Isaac Sim 4.x - Synthetic Domain Randomizer
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
  };

  const copyCodeToClipboard = () => {
    navigator.clipboard.writeText(getGeneratedCode());
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const activeLogs = 
    activeMode === 'python' ? pythonLogs :
    activeMode === 'mobile' ? mobileLogs :
    activeMode === 'automation' ? autoLogs : simLogs;

  return (
    <section id="sim-lab" className="py-24 relative bg-[#070a10] border-t border-white/5 hud-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="cyber-badge !border-cyan-500/40 !bg-cyan-500/10 !text-cyan-300">
            <Sparkles className="w-3 h-3" />
            <span>02 // INTERACTIVE SYSTEMS LAB</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Engineering Systems & Automation Workbench
              </h2>
              <p className="text-slate-400 font-mono text-xs sm:text-sm mt-1">
                Test real-time architectural simulations across Python distributed queues, Mobile CI/CD pipelines, Scrapers, and Isaac Sim.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleExecute}
                disabled={isExecuting}
                className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs font-mono transition-all shadow-[0_0_20px_rgba(0,245,160,0.3)] disabled:opacity-50"
              >
                <Play className={`w-3.5 h-3.5 fill-current ${isExecuting ? 'animate-spin' : ''}`} />
                <span>{isExecuting ? 'RUNNING SIM...' : 'EXECUTE STEP'}</span>
              </button>
              <button
                onClick={handleReset}
                className="p-2.5 bg-slate-900 border border-slate-700 text-slate-300 hover:text-white rounded-xl text-xs font-mono transition-all"
                title="Reset Parameters"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Workbench Mode Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {[
            {
              id: 'python' as LabMode,
              label: 'Python Task Queue',
              sub: 'Celery & 85% Query Opt',
              icon: Server,
              accent: 'border-emerald-500 text-emerald-300 bg-emerald-500/10'
            },
            {
              id: 'mobile' as LabMode,
              label: 'Mobile CI/CD Pipeline',
              sub: 'Fastlane & GitHub Actions',
              icon: Smartphone,
              accent: 'border-cyan-500 text-cyan-300 bg-cyan-500/10'
            },
            {
              id: 'automation' as LabMode,
              label: 'Headless Automation',
              sub: 'Scrapy Bots & Pipelines',
              icon: GitBranch,
              accent: 'border-purple-500 text-purple-300 bg-purple-500/10'
            },
            {
              id: 'simulation' as LabMode,
              label: 'Isaac Sim & USD',
              sub: 'Domain Randomization',
              icon: Cpu,
              accent: 'border-amber-500 text-amber-300 bg-amber-500/10'
            },
          ].map((mode) => {
            const isSelected = activeMode === mode.id;
            const Icon = mode.icon;
            return (
              <button
                key={mode.id}
                onClick={() => setActiveMode(mode.id)}
                className={`p-4 rounded-xl border text-left transition-all duration-200 flex items-start gap-3 ${
                  isSelected
                    ? `${mode.accent} shadow-lg font-semibold`
                    : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <div className={`p-2 rounded-lg ${isSelected ? 'bg-slate-950/60' : 'bg-slate-800/40'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-mono text-xs font-bold text-white">{mode.label}</div>
                  <div className="font-mono text-[11px] text-slate-400 mt-0.5">{mode.sub}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Lab Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Parameter Controls (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono text-slate-300 font-semibold flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-cyan-400" />
                  {activeMode === 'python' && 'TASK QUEUE PARAMETERS'}
                  {activeMode === 'mobile' && 'CI/CD RUNNER CONFIG'}
                  {activeMode === 'automation' && 'SCRAPER CONCURRENCY'}
                  {activeMode === 'simulation' && 'DOMAIN RANDOMIZERS'}
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  STEP #{executionStep}
                </span>
              </div>

              {/* MODE 1 SLIDERS: Python */}
              {activeMode === 'python' && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-400">Celery Worker Concurrency:</span>
                      <span className="text-emerald-300 font-semibold">{workerCount} Workers</span>
                    </div>
                    <input
                      type="range"
                      min="2"
                      max="32"
                      step="2"
                      value={workerCount}
                      onChange={(e) => setWorkerCount(Number(e.target.value))}
                      className="w-full accent-emerald-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-400">Ingestion Ingress Rate:</span>
                      <span className="text-cyan-300 font-semibold">{ingestionRate} req/s</span>
                    </div>
                    <input
                      type="range"
                      min="500"
                      max="20000"
                      step="500"
                      value={ingestionRate}
                      onChange={(e) => setIngestionRate(Number(e.target.value))}
                      className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-400">ORM Query Optimization:</span>
                      <span className="text-purple-300 font-semibold">{queryBatching}% Reduction</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="95"
                      step="5"
                      value={queryBatching}
                      onChange={(e) => setQueryBatching(Number(e.target.value))}
                      className="w-full accent-purple-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-400">Redis Connection Pool:</span>
                      <span className="text-amber-300 font-semibold">{connectionPool} Conns</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="100"
                      step="5"
                      value={connectionPool}
                      onChange={(e) => setConnectionPool(Number(e.target.value))}
                      className="w-full accent-amber-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                    />
                  </div>
                </div>
              )}

              {/* MODE 2 SLIDERS: Mobile CI/CD */}
              {activeMode === 'mobile' && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-400">Parallel Build Runners:</span>
                      <span className="text-cyan-300 font-semibold">{buildRunners} macOS Nodes</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="8"
                      step="1"
                      value={buildRunners}
                      onChange={(e) => setBuildRunners(Number(e.target.value))}
                      className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-400">XCTest Suite Coverage:</span>
                      <span className="text-emerald-300 font-semibold">{testCoverage}% Verified</span>
                    </div>
                    <input
                      type="range"
                      min="60"
                      max="100"
                      step="1"
                      value={testCoverage}
                      onChange={(e) => setTestCoverage(Number(e.target.value))}
                      className="w-full accent-emerald-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-400">Fastlane Signing Threads:</span>
                      <span className="text-purple-300 font-semibold">{signingOptimization}x Parallel</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      step="1"
                      value={signingOptimization}
                      onChange={(e) => setSigningOptimization(Number(e.target.value))}
                      className="w-full accent-purple-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                    />
                  </div>
                </div>
              )}

              {/* MODE 3 SLIDERS: Automation & Scraper */}
              {activeMode === 'automation' && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-400">Scrapy Concurrency Workers:</span>
                      <span className="text-purple-300 font-semibold">{scraperConcurrency} Async Workers</span>
                    </div>
                    <input
                      type="range"
                      min="4"
                      max="64"
                      step="4"
                      value={scraperConcurrency}
                      onChange={(e) => setScraperConcurrency(Number(e.target.value))}
                      className="w-full accent-purple-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-400">Batch Ingestion Size:</span>
                      <span className="text-cyan-300 font-semibold">{batchIngestionSize} Items/Batch</span>
                    </div>
                    <input
                      type="range"
                      min="200"
                      max="5000"
                      step="200"
                      value={batchIngestionSize}
                      onChange={(e) => setBatchIngestionSize(Number(e.target.value))}
                      className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-400">Proxy Rotation Pool:</span>
                      <span className="text-emerald-300 font-semibold">{proxyPoolSize} Residential IPs</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="150"
                      step="10"
                      value={proxyPoolSize}
                      onChange={(e) => setProxyPoolSize(Number(e.target.value))}
                      className="w-full accent-emerald-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                    />
                  </div>
                </div>
              )}

              {/* MODE 4 SLIDERS: Isaac Sim */}
              {activeMode === 'simulation' && (
                <div className="space-y-4">
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
                </div>
              )}

              {/* Dynamic Telemetry Metrics Footer */}
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs font-mono">
                <div className="text-slate-400 text-[11px] mb-1">LIVE RUNTIME TELEMETRY</div>
                {activeMode === 'python' && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Query Latency:</span>
                      <span className="text-emerald-400 font-bold">
                        {(120 * (1 - queryBatching / 100) + 4).toFixed(1)} ms (85% reduction)
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Queue Throughput:</span>
                      <span className="text-cyan-400 font-bold">{workerCount * 850} msgs/sec</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">OpenTelemetry Traces:</span>
                      <span className="text-purple-300">Tempo / Prometheus OK</span>
                    </div>
                  </>
                )}
                {activeMode === 'mobile' && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Pipeline Duration:</span>
                      <span className="text-emerald-400 font-bold">
                        {(18 / buildRunners).toFixed(1)} mins (Parallelized)
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">XCTest Health:</span>
                      <span className="text-cyan-400 font-bold">{testCoverage}% Pass Rate</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Signing Validation:</span>
                      <span className="text-purple-300">Fastlane Match OK</span>
                    </div>
                  </>
                )}
                {activeMode === 'automation' && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Ingestion Speed:</span>
                      <span className="text-emerald-400 font-bold">
                        {scraperConcurrency * 140} items/sec
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Deduplication Accuracy:</span>
                      <span className="text-cyan-400 font-bold">99.8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Proxy Gateway:</span>
                      <span className="text-purple-300">{proxyPoolSize} IPs Active</span>
                    </div>
                  </>
                )}
                {activeMode === 'simulation' && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Detection Confidence:</span>
                      <span className="text-emerald-400 font-bold">{confidenceScore}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">USD Schema Validity:</span>
                      <span className="text-cyan-400 font-bold">100% USDOmni</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">PhysX Clock:</span>
                      <span className="text-purple-300">120 Hz Fixed</span>
                    </div>
                  </>
                )}
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
                    onClick={() => setActiveSubTab('viewport')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      activeSubTab === 'viewport'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>SYSTEM TOPOLOGY</span>
                  </button>

                  <button
                    onClick={() => setActiveSubTab('code')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      activeSubTab === 'code'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Boxes className="w-3.5 h-3.5" />
                    <span>GENERATED SCRIPT</span>
                  </button>

                  <button
                    onClick={() => setActiveSubTab('logs')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      activeSubTab === 'logs'
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>RUNTIME STREAM</span>
                  </button>
                </div>

                {activeSubTab === 'code' && (
                  <button
                    onClick={copyCodeToClipboard}
                    className="flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-900 border border-slate-700"
                  >
                    {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedCode ? 'COPIED' : 'COPY CODE'}</span>
                  </button>
                )}
              </div>

              {/* Tab 1: System Topology / Canvas */}
              {activeSubTab === 'viewport' && (
                <div className="relative flex-1 bg-[#040609] overflow-hidden flex items-center justify-center p-6">
                  <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

                  {/* Mode 1: Python Queue Topology */}
                  {activeMode === 'python' && (
                    <svg className="w-full h-full max-w-xl max-h-80" viewBox="0 0 500 280" fill="none">
                      {/* Node 1: Ingress API */}
                      <g transform="translate(30, 100)">
                        <rect width="100" height="60" rx="8" fill="#0f172a" stroke="#00f5a0" strokeWidth="2" />
                        <text x="50" y="28" fill="#00f5a0" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">FastAPI Ingress</text>
                        <text x="50" y="44" fill="#94a3b8" fontSize="9" fontFamily="monospace" textAnchor="middle">{ingestionRate} req/s</text>
                      </g>

                      {/* Line to Queue */}
                      <line x1="130" y1="130" x2="190" y2="130" stroke="#00f5a0" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />

                      {/* Node 2: RabbitMQ & Redis Queue */}
                      <g transform="translate(190, 85)">
                        <rect width="110" height="90" rx="8" fill="#0f172a" stroke="#00d2ff" strokeWidth="2" />
                        <text x="55" y="30" fill="#00d2ff" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">RabbitMQ / Redis</text>
                        <text x="55" y="50" fill="#cbd5e1" fontSize="9" fontFamily="monospace" textAnchor="middle">Task Queue Broker</text>
                        <text x="55" y="70" fill="#00f5a0" fontSize="9" fontFamily="monospace" textAnchor="middle">85% Query Opt</text>
                      </g>

                      {/* Line to Worker Pool */}
                      <line x1="300" y1="130" x2="360" y2="130" stroke="#00d2ff" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />

                      {/* Node 3: Celery Workers */}
                      <g transform="translate(360, 60)">
                        <rect width="110" height="140" rx="8" fill="#0f172a" stroke="#a855f7" strokeWidth="2" />
                        <text x="55" y="28" fill="#a855f7" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Celery Pool</text>
                        <text x="55" y="48" fill="#cbd5e1" fontSize="9" fontFamily="monospace" textAnchor="middle">{workerCount} Active Workers</text>
                        <line x1="15" y1="65" x2="95" y2="65" stroke="#334155" />
                        <text x="55" y="85" fill="#f59e0b" fontSize="9" fontFamily="monospace" textAnchor="middle">PostgreSQL Pool: {connectionPool}</text>
                        <text x="55" y="105" fill="#00f5a0" fontSize="9" fontFamily="monospace" textAnchor="middle">OTel Tracing Active</text>
                        <text x="55" y="125" fill="#94a3b8" fontSize="8" fontFamily="monospace" textAnchor="middle">Loki / Tempo / Prom</text>
                      </g>
                    </svg>
                  )}

                  {/* Mode 2: Mobile CI/CD Topology */}
                  {activeMode === 'mobile' && (
                    <svg className="w-full h-full max-w-xl max-h-80" viewBox="0 0 500 280" fill="none">
                      {/* Step 1: Git Push */}
                      <g transform="translate(20, 100)">
                        <rect width="90" height="60" rx="8" fill="#0f172a" stroke="#00d2ff" strokeWidth="2" />
                        <text x="45" y="28" fill="#00d2ff" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Git Push</text>
                        <text x="45" y="44" fill="#94a3b8" fontSize="9" fontFamily="monospace" textAnchor="middle">Tag Trigger</text>
                      </g>
                      <line x1="110" y1="130" x2="160" y2="130" stroke="#00d2ff" strokeWidth="2" />

                      {/* Step 2: GitHub Actions Matrix */}
                      <g transform="translate(160, 75)">
                        <rect width="120" height="110" rx="8" fill="#0f172a" stroke="#a855f7" strokeWidth="2" />
                        <text x="60" y="28" fill="#a855f7" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">GH Actions</text>
                        <text x="60" y="48" fill="#cbd5e1" fontSize="9" fontFamily="monospace" textAnchor="middle">{buildRunners} Parallel Nodes</text>
                        <text x="60" y="68" fill="#00f5a0" fontSize="9" fontFamily="monospace" textAnchor="middle">XCTest: {testCoverage}%</text>
                        <text x="60" y="88" fill="#f59e0b" fontSize="8" fontFamily="monospace" textAnchor="middle">Fastlane Match Sign</text>
                      </g>
                      <line x1="280" y1="130" x2="340" y2="130" stroke="#a855f7" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />

                      {/* Step 3: Distribution Targets */}
                      <g transform="translate(340, 50)">
                        <rect width="130" height="70" rx="8" fill="#0f172a" stroke="#00f5a0" strokeWidth="2" />
                        <text x="65" y="28" fill="#00f5a0" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Apple TestFlight</text>
                        <text x="65" y="48" fill="#94a3b8" fontSize="9" fontFamily="monospace" textAnchor="middle">iOS .ipa Signed</text>
                      </g>
                      <g transform="translate(340, 140)">
                        <rect width="130" height="70" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
                        <text x="65" y="28" fill="#f59e0b" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Google Play</text>
                        <text x="65" y="48" fill="#94a3b8" fontSize="9" fontFamily="monospace" textAnchor="middle">Android .aab Track</text>
                      </g>
                    </svg>
                  )}

                  {/* Mode 3: Automation & Scraper Topology */}
                  {activeMode === 'automation' && (
                    <svg className="w-full h-full max-w-xl max-h-80" viewBox="0 0 500 280" fill="none">
                      {/* Targets */}
                      <g transform="translate(20, 70)">
                        <rect width="100" height="120" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
                        <text x="50" y="30" fill="#f59e0b" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Data Sources</text>
                        <text x="50" y="55" fill="#cbd5e1" fontSize="9" fontFamily="monospace" textAnchor="middle">Web Targets</text>
                        <text x="50" y="75" fill="#cbd5e1" fontSize="9" fontFamily="monospace" textAnchor="middle">CAD Repositories</text>
                        <text x="50" y="95" fill="#94a3b8" fontSize="8" fontFamily="monospace" textAnchor="middle">{batchIngestionSize} Batch Size</text>
                      </g>
                      <line x1="120" y1="130" x2="180" y2="130" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />

                      {/* Scrapy Async Cluster */}
                      <g transform="translate(180, 75)">
                        <rect width="130" height="110" rx="8" fill="#0f172a" stroke="#a855f7" strokeWidth="2" />
                        <text x="65" y="28" fill="#a855f7" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Scrapy Workers</text>
                        <text x="65" y="48" fill="#00d2ff" fontSize="9" fontFamily="monospace" textAnchor="middle">{scraperConcurrency} Async Workers</text>
                        <text x="65" y="68" fill="#00f5a0" fontSize="9" fontFamily="monospace" textAnchor="middle">{proxyPoolSize} Rotating IPs</text>
                        <text x="65" y="88" fill="#94a3b8" fontSize="8" fontFamily="monospace" textAnchor="middle">Deduplication 99.8%</text>
                      </g>
                      <line x1="310" y1="130" x2="370" y2="130" stroke="#a855f7" strokeWidth="2" />

                      {/* Data Lake / Metrics */}
                      <g transform="translate(370, 75)">
                        <rect width="110" height="110" rx="8" fill="#0f172a" stroke="#00f5a0" strokeWidth="2" />
                        <text x="55" y="28" fill="#00f5a0" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">Ingestion Sink</text>
                        <text x="55" y="48" fill="#cbd5e1" fontSize="9" fontFamily="monospace" textAnchor="middle">PostgreSQL / USD</text>
                        <text x="55" y="68" fill="#00d2ff" fontSize="9" fontFamily="monospace" textAnchor="middle">Grafana Telemetry</text>
                        <text x="55" y="88" fill="#f59e0b" fontSize="8" fontFamily="monospace" textAnchor="middle">LLM Agent Parsers</text>
                      </g>
                    </svg>
                  )}

                  {/* Mode 4: Simulation & Isaac Sim SVG */}
                  {activeMode === 'simulation' && (
                    <>
                      <div
                        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                        style={{
                          backgroundColor: `rgba(255, 255, 255, ${(lightingLux - 500) / 45000})`,
                        }}
                      />
                      <div
                        className="absolute inset-0 pointer-events-none opacity-30"
                        style={{
                          filter: `contrast(${100 + sensorNoise * 3}%) brightness(${100 - sensorNoise}%)`,
                        }}
                      />
                      <svg className="w-full h-full max-w-lg max-h-80" viewBox="0 0 400 300" fill="none">
                        <line x1="20" y1="220" x2="380" y2="220" stroke="#1e293b" strokeWidth="2" />
                        <line x1="200" y1="220" x2="20" y2="290" stroke="#1e293b" strokeWidth="1" />
                        <line x1="200" y1="220" x2="380" y2="290" stroke="#1e293b" strokeWidth="1" />
                        <g transform="translate(70, 160)">
                          <rect x="0" y="50" width="60" height="20" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="2" />
                          <circle cx="30" cy="45" r="14" fill="#0f172a" stroke="#00f5a0" strokeWidth="2" />
                          <line x1="30" y1="45" x2="70" y2="10" stroke="#00d2ff" strokeWidth="6" strokeLinecap="round" />
                          <circle cx="70" cy="10" r="10" fill="#0f172a" stroke="#a855f7" strokeWidth="2" />
                          <line x1="70" y1="10" x2="110" y2="25" stroke="#00d2ff" strokeWidth="4" strokeLinecap="round" />
                          <circle cx="110" cy="25" r="6" fill="#00f5a0" />
                          <line x1="110" y1="25" x2={targetPos.x + 20} y2={targetPos.y + 20} stroke="#00f5a0" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
                        </g>
                        <g transform={`translate(${targetPos.x}, ${targetPos.y}) rotate(${targetPos.rot})`}>
                          <rect x="0" y="0" width={targetPos.w} height={targetPos.h} rx="6" fill="#0e1726" stroke="#00d2ff" strokeWidth="2" />
                          <rect x="-10" y="-10" width={targetPos.w + 20} height={targetPos.h + 20} fill="none" stroke="#00f5a0" strokeWidth="1.5" strokeDasharray="3 3" />
                          <rect x="-10" y="-30" width="110" height="18" rx="3" fill="#00f5a0" />
                          <text x="-6" y="-17" fill="#06080d" fontSize="9" fontFamily="monospace" fontWeight="bold">TARGET: {confidenceScore}%</text>
                        </g>
                      </svg>
                    </>
                  )}

                  {/* Corner Status HUD */}
                  <div className="absolute top-4 left-4 p-2.5 bg-black/70 border border-slate-800 rounded-lg text-[10px] font-mono space-y-1 text-slate-300 backdrop-blur-md">
                    <div>MODE: {activeMode.toUpperCase()} // SYNCHRONIZED</div>
                    <div>STATE: DETERMINISTIC SIMULATION</div>
                    <div className="text-emerald-400">TELEMETRY: ONLINE</div>
                  </div>
                </div>
              )}

              {/* Tab 2: Code Viewer */}
              {activeSubTab === 'code' && (
                <div className="flex-1 bg-[#05070c] p-4 overflow-auto font-mono text-xs text-slate-300">
                  <pre className="text-emerald-400/90 leading-relaxed whitespace-pre-wrap">
                    {getGeneratedCode()}
                  </pre>
                </div>
              )}

              {/* Tab 3: Runtime Log Stream */}
              {activeSubTab === 'logs' && (
                <div className="flex-1 bg-[#05070c] p-4 overflow-auto font-mono text-xs text-slate-300 space-y-2">
                  <div className="text-slate-500 pb-2 border-b border-slate-800 flex justify-between">
                    <span>{activeMode.toUpperCase()} // SYSTEM EVENT LOG</span>
                    <span className="text-emerald-400">STREAMING ACTIVE</span>
                  </div>
                  {activeLogs.map((log, idx) => (
                    <div key={idx} className="leading-relaxed font-mono flex items-start gap-2">
                      <span className="text-slate-600 select-none">&gt;</span>
                      <span className={idx === 0 ? 'text-emerald-300 font-semibold' : 'text-slate-400'}>
                        {log}
                      </span>
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
