import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight,
  Blocks,
  BrainCircuit,
  CloudCog,
  DatabaseZap,
  ShieldAlert,
  Smartphone,
  CheckCircle2,
  X,
} from 'lucide-react'
import { SERVICES } from '../data/nexoraData'
import { SectionHeader, SpotlightCard } from './MotionPrimitives'

const ICON_MAP = {
  'enterprise-software': Blocks,
  'ai-engineering': BrainCircuit,
  'cloud-devops': CloudCog,
  'web-mobile': Smartphone,
  cybersecurity: ShieldAlert,
  'data-engineering': DatabaseZap,
}

const ACCENT_STYLES = {
  cyan: {
    badge: 'border-cyan-400/25 bg-cyan-400/10 text-cyan-300',
    icon: 'bg-cyan-400/15 text-cyan-300 border-cyan-400/25',
    spotlight: 'rgba(34, 211, 238, 0.16)',
  },
  indigo: {
    badge: 'border-indigo-400/25 bg-indigo-400/10 text-indigo-300',
    icon: 'bg-indigo-400/15 text-indigo-300 border-indigo-400/25',
    spotlight: 'rgba(99, 102, 241, 0.18)',
  },
  emerald: {
    badge: 'border-emerald-400/25 bg-emerald-400/10 text-emerald-300',
    icon: 'bg-emerald-400/15 text-emerald-300 border-emerald-400/25',
    spotlight: 'rgba(52, 211, 153, 0.16)',
  },
  sky: {
    badge: 'border-sky-400/25 bg-sky-400/10 text-sky-300',
    icon: 'bg-sky-400/15 text-sky-300 border-sky-400/25',
    spotlight: 'rgba(56, 189, 248, 0.16)',
  },
  violet: {
    badge: 'border-violet-400/25 bg-violet-400/10 text-violet-300',
    icon: 'bg-violet-400/15 text-violet-300 border-violet-400/25',
    spotlight: 'rgba(139, 92, 246, 0.16)',
  },
  teal: {
    badge: 'border-teal-400/25 bg-teal-400/10 text-teal-300',
    icon: 'bg-teal-400/15 text-teal-300 border-teal-400/25',
    spotlight: 'rgba(45, 212, 191, 0.16)',
  },
}

function MiniCardVisual({ type }) {
  if (type === 'architecture') {
    return (
      <div className="mt-5 grid grid-cols-3 gap-2 rounded-xl border border-white/[0.06] bg-black/35 p-3 font-mono text-[10px]">
        {['API Gateway', 'Event Bus', 'Core Ledger'].map((node, i) => (
          <motion.div
            key={node}
            animate={{ opacity: [0.65, 1, 0.65] }}
            transition={{ duration: 2.8, delay: i * 0.45, repeat: Infinity }}
            className="flex flex-col items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.05] px-2 py-2 text-center text-cyan-200"
          >
            <span className="mb-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
            {node}
          </motion.div>
        ))}
      </div>
    )
  }

  if (type === 'pipeline') {
    return (
      <div className="mt-5 flex items-center gap-2 rounded-xl border border-white/[0.06] bg-black/35 px-3 py-2.5 font-mono text-[10px] text-teal-300">
        <span className="rounded bg-teal-400/15 px-2 py-1">Kafka Stream</span>
        <motion.div
          animate={{ x: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="h-[1px] flex-1 bg-gradient-to-r from-teal-400 to-cyan-400"
        />
        <span className="rounded bg-cyan-400/15 px-2 py-1 text-cyan-200">dbt Lakehouse</span>
        <motion.div
          animate={{ x: [0, 6, 0] }}
          transition={{ duration: 1.6, delay: 0.4, repeat: Infinity }}
          className="h-[1px] flex-1 bg-gradient-to-r from-cyan-400 to-indigo-400"
        />
        <span className="rounded bg-indigo-400/15 px-2 py-1 text-indigo-200">Real-Time BI</span>
      </div>
    )
  }

  if (type === 'interface') {
    return (
      <div className="mt-5 flex items-center justify-between gap-3 rounded-xl border border-white/[0.06] bg-black/35 px-3.5 py-2.5">
        <div className="flex items-center gap-2 font-mono text-[11px] text-sky-200">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span>Design Tokens Synced</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="rounded-md bg-emerald-400/15 px-2 py-0.5 font-mono text-[10px] text-emerald-300">
            LCP 0.6s
          </span>
          <span className="rounded-md bg-sky-400/15 px-2 py-0.5 font-mono text-[10px] text-sky-300">
            WCAG AA
          </span>
        </div>
      </div>
    )
  }

  return null
}

export default function ServicesSection({ onSelectService }) {
  const [activeModal, setActiveModal] = useState(null)

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="IT Capabilities"
            title="Full-Spectrum Engineering for Modern Enterprises"
            subtitle="From foundational cloud topology to applied AI agents and pixel-perfect product surfaces—every layer is engineered under one roof."
          />
          <p className="font-mono text-xs text-slate-400 md:text-right">
            Click any capability card to inspect deliverables &amp; SLAs
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {SERVICES.map((service, idx) => {
            const Icon = ICON_MAP[service.id] || Blocks
            const style = ACCENT_STYLES[service.accent]

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: idx * 0.06 }}
                className={service.span}
              >
                <SpotlightCard
                  spotlightColor={style.spotlight}
                  onClick={() => setActiveModal(service)}
                  className="h-full cursor-pointer p-6 sm:p-7"
                >
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-11 w-11 items-center justify-center rounded-xl border ${style.icon}`}
                          >
                            <Icon className="h-5 w-5" />
                          </div>
                          <span
                            className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-wider ${style.badge}`}
                          >
                            {service.badge}
                          </span>
                        </div>

                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/15 group-hover:text-cyan-300">
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </div>

                      <h3 className="mt-5 font-display text-xl font-bold text-white sm:text-2xl">
                        {service.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-slate-400 sm:text-base">
                        {service.shortDesc}
                      </p>

                      <MiniCardVisual type={service.visualType} />
                    </div>

                    {/* Metrics Footer */}
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.07] pt-4">
                      <div className="flex gap-6">
                        {service.metrics.map((m) => (
                          <div key={m.label}>
                            <div className="font-display text-base font-bold text-white">
                              {m.value}
                            </div>
                            <div className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                      <span className="font-mono text-xs text-cyan-400 opacity-80 transition-opacity group-hover:opacity-100">
                        Inspect Blueprint →
                      </span>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Capability Deep-Dive Modal */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModal(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-3xl border border-white/15 bg-[#0b1120] p-6 shadow-2xl sm:p-8"
            >
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                aria-label="Close details"
                className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-slate-300 hover:bg-white/10 hover:text-white cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>

              <span className="inline-block rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 font-mono text-xs text-cyan-300">
                {activeModal.badge}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
                {activeModal.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                {activeModal.fullDesc}
              </p>

              <div className="mt-6">
                <div className="font-mono text-xs uppercase tracking-wider text-slate-400">
                  Core Engineering Deliverables
                </div>
                <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {activeModal.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.03] p-3 text-sm text-slate-200"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
                <div className="flex gap-6">
                  {activeModal.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-display text-lg font-bold text-cyan-300">
                        {m.value}
                      </div>
                      <div className="font-mono text-[10px] uppercase text-slate-400">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const chosen = activeModal.title
                    setActiveModal(null)
                    onSelectService?.(chosen)
                  }}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg hover:brightness-110 cursor-pointer"
                >
                  <span>Scope This Capability</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
