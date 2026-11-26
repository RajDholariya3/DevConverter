import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import {
  ArrowRight,
  Cpu,
  Globe2,
  Layers,
  ShieldCheck,
  Sparkles,
  Terminal,
  Activity,
  CheckCircle2,
} from 'lucide-react'
import NeuralCanvas from './NeuralCanvas'
import { HERO_METRICS } from '../data/nexoraData'
import { AnimatedCounter, MagneticButton, MaskedTextReveal } from './MotionPrimitives'

const CONSOLE_MODES = [
  {
    id: 'mesh',
    label: 'Cloud Mesh',
    icon: Globe2,
    cluster: 'nexora-prod-global-01',
    status: 'All 14 Regions Healthy',
    latency: '38ms P95',
    throughput: '1.42M req/s',
    bars: [64, 78, 71, 88, 92, 84, 96, 89, 94, 99, 91, 97],
    logs: [
      { tag: 'K8S', msg: 'Auto-scaled eu-central-1 worker pool (+12 pods)', time: '00.4s' },
      { tag: 'EDGE', msg: 'BGP Anycast route converged across 38 POPs', time: '01.1s' },
      { tag: 'SLA', msg: 'Zero-downtime canary v4.18 promoted to 100%', time: '02.3s' },
    ],
  },
  {
    id: 'ai',
    label: 'AI Pipeline',
    icon: Cpu,
    cluster: 'nexora-llm-orchestrator',
    status: 'Guardrails Active • 99.4% Precision',
    latency: '140ms TTFT',
    throughput: '42k tokens/s',
    bars: [58, 69, 82, 76, 91, 95, 89, 97, 93, 98, 96, 100],
    logs: [
      { tag: 'RAG', msg: 'Hybrid vector + graph retrieval indexed 4.2M docs', time: '00.2s' },
      { tag: 'AGENT', msg: 'Tool-calling workflow verified against SOC2 policy', time: '00.9s' },
      { tag: 'EVAL', msg: 'Automated hallucination gate passed (0.4% score)', time: '01.8s' },
    ],
  },
  {
    id: 'sec',
    label: 'Zero-Trust',
    icon: ShieldCheck,
    cluster: 'nexora-sec-enclave',
    status: 'mTLS Enforced • SOC2 Type II',
    latency: '1.8ms Auth',
    throughput: '0 Threats Open',
    bars: [92, 95, 94, 97, 96, 99, 98, 100, 97, 99, 100, 100],
    logs: [
      { tag: 'IAM', msg: 'Short-lived SPIFFE workloads rotated in 45ms', time: '00.3s' },
      { tag: 'SBOM', msg: 'Signed container digest verified via Cosign', time: '01.0s' },
      { tag: 'WAF', msg: 'Anomalous burst mitigated automatically at edge', time: '01.7s' },
    ],
  },
]

export default function HeroSection({ onExploreWork, onStartProject }) {
  const [activeTab, setActiveTab] = useState(0)
  const tiltX = useMotionValue(0)
  const tiltY = useMotionValue(0)
  const smoothTiltX = useSpring(tiltX, { stiffness: 160, damping: 20 })
  const smoothTiltY = useSpring(tiltY, { stiffness: 160, damping: 20 })
  const rotateX = useTransform(smoothTiltY, [-0.5, 0.5], [7, -7])
  const rotateY = useTransform(smoothTiltX, [-0.5, 0.5], [-8, 8])

  // Auto-cycle live telemetry tabs softly unless hovered
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % CONSOLE_MODES.length)
    }, 5200)
    return () => clearInterval(timer)
  }, [paused])

  const handleCardMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    tiltX.set((e.clientX - rect.left) / rect.width - 0.5)
    tiltY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleCardLeave = () => {
    tiltX.set(0)
    tiltY.set(0)
    setPaused(false)
  }

  const currentConsole = CONSOLE_MODES[activeTab]
  const ActiveIcon = currentConsole.icon

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      {/* Background Architectural Grid + Ambient Orbs + Neural Canvas */}
      <div className="bg-grid-architectural pointer-events-none absolute inset-0 opacity-70" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 right-0 h-[460px] w-[460px] rounded-full bg-indigo-600/18 blur-[140px]"
      />
      <NeuralCanvas />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Narrative & CTA */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-cyan-400/25 bg-[#0a1224]/80 px-4 py-1.5 text-xs font-mono text-cyan-300 backdrop-blur-md"
            >
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span>NEXT-GEN IT ENGINEERING &amp; SOFTWARE ARCHITECTURE</span>
            </motion.div>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl xl:text-[4.25rem]">
              <MaskedTextReveal text="Engineering" delay={0.08} />{' '}
              <span className="text-gradient-nexora">
                <MaskedTextReveal text="Intelligent Systems" delay={0.18} />
              </span>{' '}
              <MaskedTextReveal text="Built for Scale." delay={0.34} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.48 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300/90 sm:text-lg"
            >
              <strong className="font-semibold text-white">Nexora Technologies</strong> partners with
              ambitious enterprises and high-growth innovators to architect resilient cloud platforms,
              autonomous AI workflows, and ultra-fast digital products—shipped with zero compromise.
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.58 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <MagneticButton
                onClick={onStartProject}
                className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 px-7 py-4 text-base font-semibold text-slate-950 shadow-[0_0_32px_rgba(34,211,238,0.38)] transition-all hover:shadow-[0_0_46px_rgba(34,211,238,0.62)] cursor-pointer"
              >
                <span>Architect Your Project</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </MagneticButton>

              <button
                type="button"
                onClick={onExploreWork}
                className="inline-flex items-center gap-2.5 rounded-2xl border border-white/12 bg-white/[0.04] px-6 py-4 text-base font-medium text-slate-200 backdrop-blur-md transition-all hover:border-cyan-400/40 hover:bg-white/[0.08] hover:text-white cursor-pointer"
              >
                <Layers className="h-4 w-4 text-cyan-400" />
                <span>Explore Case Studies</span>
              </button>
            </motion.div>

            {/* Micro-badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.72 }}
              className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-slate-400"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                ISO 27001 &amp; SOC2 Ready
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />
                Cloud-Native &amp; AI First
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-indigo-400" />
                24/7 SRE Telemetry
              </span>
            </motion.div>
          </div>

          {/* Right Column: Interactive 3D Tilting Telemetry & Architecture Console */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ perspective: 1200 }}
            className="lg:col-span-5"
          >
            <motion.div
              onMouseMove={handleCardMove}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={handleCardLeave}
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              className="relative rounded-3xl border border-white/12 bg-[#0a101f]/90 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.65)] backdrop-blur-2xl sm:p-6"
            >
              {/* Glowing Border Highlight */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-cyan-400/25 via-transparent to-indigo-500/25 opacity-80"
              />

              <div className="relative z-10">
                {/* Console Window Top Bar */}
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                    <span className="ml-2 font-mono text-[11px] text-slate-400">
                      nexora-core.telemetry
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-0.5 font-mono text-[10px] text-emerald-300">
                    <Activity className="h-3 w-3 animate-pulse" />
                    LIVE
                  </div>
                </div>

                {/* Mode Switcher Tabs */}
                <div className="mt-4 grid grid-cols-3 gap-1.5 rounded-xl border border-white/[0.07] bg-black/30 p-1">
                  {CONSOLE_MODES.map((mode, idx) => {
                    const Icon = mode.icon
                    const isActive = idx === activeTab
                    return (
                      <button
                        key={mode.id}
                        type="button"
                        onClick={() => setActiveTab(idx)}
                        className={`relative flex items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-medium transition-colors cursor-pointer ${
                          isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="console-tab-bg"
                            transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                            className="absolute inset-0 rounded-lg border border-cyan-400/30 bg-cyan-400/12"
                          />
                        )}
                        <Icon className="relative z-10 h-3.5 w-3.5 text-cyan-400" />
                        <span className="relative z-10">{mode.label}</span>
                      </button>
                    )
                  })}
                </div>

                {/* Animated Console Body */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentConsole.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="mt-5"
                  >
                    <div className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/15 text-cyan-300">
                          <ActiveIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-mono text-xs text-white">
                            {currentConsole.cluster}
                          </div>
                          <div className="text-[11px] text-emerald-300">
                            {currentConsole.status}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Dual KPI Readouts */}
                    <div className="mt-3 grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
                        <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                          Latency
                        </div>
                        <div className="mt-1 font-display text-lg font-bold text-cyan-300">
                          {currentConsole.latency}
                        </div>
                      </div>
                      <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
                        <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                          Capacity
                        </div>
                        <div className="mt-1 font-display text-lg font-bold text-indigo-300">
                          {currentConsole.throughput}
                        </div>
                      </div>
                    </div>

                    {/* Animated Telemetry Bars */}
                    <div className="mt-4 rounded-xl border border-white/[0.06] bg-black/35 p-3.5">
                      <div className="mb-2 flex items-center justify-between font-mono text-[10px] text-slate-400">
                        <span>REAL-TIME CLUSTER LOAD</span>
                        <span className="text-cyan-300">OPTIMAL</span>
                      </div>
                      <div className="flex h-14 items-end gap-1.5">
                        {currentConsole.bars.map((val, bIdx) => (
                          <motion.div
                            key={`${currentConsole.id}-bar-${bIdx}`}
                            initial={{ height: 0 }}
                            animate={{ height: `${val}%` }}
                            transition={{
                              duration: 0.5,
                              delay: bIdx * 0.03,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="flex-1 rounded-t-sm bg-gradient-to-t from-indigo-500/70 via-cyan-400/85 to-emerald-300"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Stream Logs */}
                    <div className="mt-4 space-y-2 rounded-xl border border-white/[0.06] bg-black/45 p-3 font-mono text-[11px]">
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <Terminal className="h-3 w-3" />
                        <span>deployment-stream</span>
                      </div>
                      {currentConsole.logs.map((log, lIdx) => (
                        <motion.div
                          key={`${currentConsole.id}-log-${lIdx}`}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + lIdx * 0.08 }}
                          className="flex items-start justify-between gap-2 text-slate-300"
                        >
                          <div className="flex items-start gap-2">
                            <span className="rounded bg-cyan-400/15 px-1.5 py-0.5 text-[9px] font-semibold text-cyan-300">
                              {log.tag}
                            </span>
                            <span className="leading-snug">{log.msg}</span>
                          </div>
                          <span className="shrink-0 text-[10px] text-slate-500">{log.time}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Hero Bottom Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-16 grid grid-cols-2 gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-xl sm:mt-20 md:grid-cols-4 md:gap-8"
        >
          {HERO_METRICS.map((metric, idx) => (
            <div
              key={metric.label}
              className={`${
                idx !== HERO_METRICS.length - 1 ? 'md:border-r md:border-white/[0.08] md:pr-6' : ''
              }`}
            >
              <div className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                <AnimatedCounter
                  value={metric.value}
                  decimals={metric.decimals || 0}
                  suffix={metric.suffix}
                />
              </div>
              <div className="mt-1 text-xs font-medium text-slate-400 sm:text-sm">
                {metric.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
