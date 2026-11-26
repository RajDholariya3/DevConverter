import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { ENGAGEMENT_MODELS, TESTIMONIALS } from '../data/nexoraData'
import { SectionHeader, SpotlightCard } from './MotionPrimitives'

export default function EngagementAndTestimonials({ onSelectModel }) {
  const [testimonialIdx, setTestimonialIdx] = useState(0)

  const nextTestimonial = () =>
    setTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length)
  const prevTestimonial = () =>
    setTestimonialIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)

  const activeTestimonial = TESTIMONIALS[testimonialIdx]

  return (
    <section
      id="engagement"
      className="relative border-t border-white/[0.06] bg-[#070b14] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Flexible Collaboration"
          title="Engagement Models Built Around Velocity"
          subtitle="Whether you need an embedded product pod tomorrow or a fixed-scope enterprise transformation, our teams integrate seamlessly."
          align="center"
        />

        {/* Engagement Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {ENGAGEMENT_MODELS.map((model, idx) => {
            const featured = idx === 0
            return (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
              >
                <SpotlightCard
                  className={`flex h-full flex-col justify-between p-7 ${
                    featured
                      ? 'border-cyan-400/35 bg-gradient-to-b from-[#0f192e] to-[#0a101e] shadow-[0_18px_60px_rgba(34,211,238,0.1)]'
                      : ''
                  }`}
                >
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-wider ${
                            featured
                              ? 'border border-cyan-400/35 bg-cyan-400/15 text-cyan-300'
                              : 'border border-white/10 bg-white/[0.05] text-slate-300'
                          }`}
                        >
                          {model.badge}
                        </span>
                        <span className="font-mono text-[11px] text-slate-400">
                          {model.timeline}
                        </span>
                      </div>

                      <h3 className="mt-5 font-display text-2xl font-bold text-white">
                        {model.name}
                      </h3>
                      <p className="mt-2 text-sm text-slate-400">{model.tagline}</p>

                      <div className="mt-5 rounded-xl border border-white/[0.07] bg-black/30 px-3.5 py-2.5">
                        <div className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                          Best Suited For
                        </div>
                        <div className="mt-0.5 text-xs font-medium text-cyan-200">
                          {model.idealFor}
                        </div>
                      </div>

                      <div className="mt-6 space-y-2.5">
                        <div className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                          Team &amp; Scope
                        </div>
                        {model.composition.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-slate-200"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 space-y-2 border-t border-white/[0.07] pt-5">
                        {model.highlights.map((hl) => (
                          <div key={hl} className="text-xs text-slate-400">
                            • {hl}
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectModel?.(model.name)}
                      className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all cursor-pointer ${
                        featured
                          ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 shadow-lg hover:brightness-110'
                          : 'border border-white/12 bg-white/[0.04] text-white hover:border-cyan-400/40 hover:bg-white/[0.08]'
                      }`}
                    >
                      <span>Select {model.name}</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </SpotlightCard>
              </motion.div>
            )
          })}
        </div>

        {/* Client Testimonials Interactive Deck */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mt-20 relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1120]/90 p-7 sm:p-11"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-indigo-500/15 blur-[90px]"
          />

          <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-300">
                  <Quote className="h-5 w-5" />
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">
                  Executive Endorsements
                </span>
              </div>

              <div className="mt-6 min-h-[130px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={testimonialIdx}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="font-display text-xl leading-relaxed font-medium text-white sm:text-2xl">
                      “{activeTestimonial.quote}”
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <div>
                        <div className="font-semibold text-white">
                          {activeTestimonial.author}
                        </div>
                        <div className="text-sm text-slate-400">
                          {activeTestimonial.role}
                        </div>
                      </div>
                      <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 font-mono text-xs text-emerald-300">
                        {activeTestimonial.metric}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-3 self-start lg:self-end">
              <button
                type="button"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/12 bg-white/[0.04] text-slate-200 transition hover:border-cyan-400/40 hover:bg-white/[0.08] cursor-pointer"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/12 bg-white/[0.04] text-slate-200 transition hover:border-cyan-400/40 hover:bg-white/[0.08] cursor-pointer"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
