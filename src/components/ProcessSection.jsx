import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, FileCode2, GitBranch } from 'lucide-react'
import { PROCESS_STAGES } from '../data/nexoraData'
import { SectionHeader } from './MotionPrimitives'

export default function ProcessSection() {
  const [activeIdx, setActiveIdx] = useState(0)
  const current = PROCESS_STAGES[activeIdx]

  return (
    <section
      id="architecture"
      className="relative border-y border-white/[0.06] bg-[#070b14] py-24 sm:py-32"
    >
      <div className="bg-dot-matrix pointer-events-none absolute inset-0 opacity-35" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Engineering Methodology"
          title="Predictable Delivery. Zero Guesswork."
          subtitle="Our 5-stage architectural pipeline combines rapid iteration with enterprise-grade governance, automated verification, and continuous observability."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left Stage Selector List */}
          <div className="space-y-3 lg:col-span-6">
            {PROCESS_STAGES.map((stage, idx) => {
              const isSelected = idx === activeIdx
              return (
                <button
                  key={stage.step}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  className={`group relative w-full rounded-2xl border p-5 text-left transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'border-cyan-400/45 bg-[#0e1629] shadow-[0_12px_40px_rgba(0,0,0,0.45)]'
                      : 'border-white/[0.07] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="process-active-accent"
                      className="absolute left-0 top-4 bottom-4 w-1 rounded-r-full bg-gradient-to-b from-cyan-400 to-indigo-500"
                    />
                  )}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-mono text-sm font-bold ${
                          isSelected ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-300'
                        }`}
                      >
                        {stage.step}
                      </span>
                      <h3 className="font-display text-lg font-semibold text-white">
                        {stage.title}
                      </h3>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-slate-300">
                      {stage.duration}
                    </span>
                  </div>
                  <p className="mt-2 pl-9 text-sm leading-relaxed text-slate-400">
                    {stage.summary}
                  </p>
                </button>
              )
            })}
          </div>

          {/* Right Live Stage Inspector Panel */}
          <div className="lg:sticky lg:top-28 lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-[#0b1120]/95 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-cyan-500/15 blur-[80px]"
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.step}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-5">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/12 font-mono text-sm font-bold text-cyan-300">
                        {current.step}
                      </span>
                      <div>
                        <div className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                          Stage Deliverable Blueprint
                        </div>
                        <div className="font-display text-xl font-bold text-white">
                          {current.title}
                        </div>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 font-mono text-[11px] text-emerald-300">
                      <GitBranch className="h-3.5 w-3.5" />
                      {current.status}
                    </span>
                  </div>

                  <p className="mt-5 text-base leading-relaxed text-slate-300">
                    {current.summary}
                  </p>

                  <div className="mt-6 space-y-3">
                    <div className="font-mono text-xs uppercase tracking-wider text-slate-400">
                      Included Artifacts &amp; Sign-Off Gates
                    </div>
                    {current.deliverables.map((deliv, i) => (
                      <motion.div
                        key={deliv}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.08 + i * 0.06 }}
                        className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3 text-sm text-slate-200"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-400" />
                        <span>{deliv}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mock Artifact Output Footer */}
                  <div className="mt-6 flex items-center justify-between rounded-xl border border-cyan-400/20 bg-black/45 px-4 py-3 font-mono text-xs">
                    <div className="flex items-center gap-2 text-cyan-300">
                      <FileCode2 className="h-4 w-4" />
                      <span>{current.artifact}</span>
                    </div>
                    <span className="text-slate-400">{current.duration}</span>
                  </div>

                  {/* Progress Step Dots */}
                  <div className="mt-6 flex items-center gap-2">
                    {PROCESS_STAGES.map((s, dIdx) => (
                      <button
                        key={s.step}
                        type="button"
                        aria-label={`Jump to stage ${s.step}`}
                        onClick={() => setActiveIdx(dIdx)}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                          dIdx === activeIdx
                            ? 'w-10 bg-cyan-400'
                            : dIdx < activeIdx
                            ? 'w-4 bg-indigo-400/70'
                            : 'w-4 bg-white/15 hover:bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
