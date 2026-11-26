import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Sparkles, X, CheckCircle2 } from 'lucide-react'
import { CASE_STUDIES } from '../data/nexoraData'
import { SectionHeader, SpotlightCard } from './MotionPrimitives'

const CATEGORIES = ['All', 'FinTech / Enterprise', 'AI Systems', 'Cloud & DevOps']

export default function CaseStudiesSection({ onRequestSimilar }) {
  const [filter, setFilter] = useState('All')
  const [selectedStudy, setSelectedStudy] = useState(null)

  const filtered =
    filter === 'All'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((item) => item.category === filter)

  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow="Proven Impact"
            title="Flagship Engineering Case Studies"
            subtitle="Explore how Nexora Technologies transforms mission-critical infrastructure, enterprise AI, and high-throughput digital products."
          />

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-1.5 backdrop-blur-md">
            {CATEGORIES.map((cat) => {
              const active = filter === cat
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  className={`relative rounded-xl px-4 py-2 text-xs font-medium transition-colors sm:text-sm cursor-pointer ${
                    active ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="work-filter-pill"
                      transition={{ type: 'spring', stiffness: 360, damping: 28 }}
                      className="absolute inset-0 rounded-xl border border-cyan-400/30 bg-cyan-400/15"
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Case Studies Grid */}
        <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((study) => (
              <motion.div
                layout
                key={study.id}
                initial={{ opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 16 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <SpotlightCard
                  onClick={() => setSelectedStudy(study)}
                  className="h-full cursor-pointer p-6 sm:p-8"
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-50 transition-opacity duration-300 group-hover:opacity-90`}
                  />

                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-1 font-mono text-[11px] text-cyan-300">
                          {study.category}
                        </span>
                        <span className="font-mono text-xs text-slate-400">
                          {study.client} • {study.year}
                        </span>
                      </div>

                      <div className="mt-6 flex items-baseline justify-between gap-4">
                        <div>
                          <div className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            {study.headlineMetric}
                          </div>
                          <div className="font-mono text-xs text-cyan-300/90">
                            {study.metricLabel}
                          </div>
                        </div>
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-slate-300 transition-all group-hover:border-cyan-400/50 group-hover:bg-cyan-400/20 group-hover:text-white">
                          <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </div>

                      <h3 className="mt-5 font-display text-xl font-bold text-white sm:text-2xl">
                        {study.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-slate-300/90 sm:text-base">
                        {study.summary}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-white/[0.08] pt-5">
                      <div className="flex flex-wrap gap-2">
                        {study.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg border border-white/[0.08] bg-black/35 px-2.5 py-1 font-mono text-[11px] text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Deep-Dive Modal */}
      <AnimatePresence>
        {selectedStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStudy(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/15 bg-[#0a101e] p-6 shadow-2xl sm:p-8"
            >
              <button
                type="button"
                onClick={() => setSelectedStudy(null)}
                aria-label="Close case study"
                className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-slate-300 hover:bg-white/10 hover:text-white cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-cyan-300">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{selectedStudy.category}</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400">{selectedStudy.client}</span>
              </div>

              <h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                {selectedStudy.title}
              </h3>

              {/* Key Results Strip */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {selectedStudy.results.map((res) => (
                  <div
                    key={res.label}
                    className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06] p-4"
                  >
                    <div className="font-display text-2xl font-bold text-white">
                      {res.value}
                    </div>
                    <div className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-cyan-300">
                      {res.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                  <div className="font-mono text-xs uppercase tracking-wider text-rose-300">
                    The Challenge
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {selectedStudy.challenge}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                  <div className="font-mono text-xs uppercase tracking-wider text-emerald-300">
                    Nexora Architecture
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {selectedStudy.solution}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <div className="font-mono text-xs uppercase tracking-wider text-slate-400">
                  Production Stack
                </div>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {selectedStudy.stack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-xs text-slate-200"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex justify-end border-t border-white/10 pt-5">
                <button
                  type="button"
                  onClick={() => {
                    const title = selectedStudy.title
                    setSelectedStudy(null)
                    onRequestSimilar?.(title)
                  }}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg hover:brightness-110 cursor-pointer"
                >
                  <span>Build a Similar Solution</span>
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
