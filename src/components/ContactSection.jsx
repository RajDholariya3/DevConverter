import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Mail, MapPin, PhoneCall, Send, Sparkles } from 'lucide-react'
import { MagneticButton, SectionHeader } from './MotionPrimitives'
import { SCOPE_OPTIONS } from '../data/nexoraData'

const TIMELINE_OPTIONS = ['Immediate (< 2 weeks)', '1–2 Months', 'Q1 / Strategic Roadmap']

export default function ContactSection({
  selectedScopes,
  onToggleScope,
  brief,
  onBriefChange,
  submitted,
  onSubmittedChange,
}) {
  const [timeline, setTimeline] = useState(TIMELINE_OPTIONS[0])
  const [form, setForm] = useState({ name: '', email: '', company: '' })
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.email.includes('@')) {
      setError('Please enter your name and a valid work email address.')
      return
    }
    setError('')
    onSubmittedChange(true)
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-500/12 blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Initiate Partnership"
              title="Ready to Engineer What’s Next?"
              subtitle="Share your technical goals or architectural bottlenecks. A Principal Architect from Nexora Technologies will respond with a tailored blueprint within 24 business hours."
            />

            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/12 text-cyan-300">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-mono text-xs uppercase text-slate-400">
                    Solutions Architecture Desk
                  </div>
                  <div className="mt-0.5 font-medium text-white">
                    architects@nexoratech.io
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-400/12 text-indigo-300">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-mono text-xs uppercase text-slate-400">
                    Enterprise Hotline
                  </div>
                  <div className="mt-0.5 font-medium text-white">+1 (415) 890-4420</div>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/12 text-emerald-300">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-mono text-xs uppercase text-slate-400">
                    Global Delivery Hubs
                  </div>
                  <div className="mt-0.5 font-medium text-white">
                    San Francisco • London • Bengaluru
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Project Brief Builder */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/12 bg-[#0b1120]/90 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                      className="flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/15 text-emerald-300"
                    >
                      <CheckCircle2 className="h-8 w-8" />
                    </motion.div>
                    <h3 className="mt-6 font-display text-2xl font-bold text-white">
                      Architecture Brief Received
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-300">
                      Thank you, <span className="font-semibold text-white">{form.name}</span>.
                      Your inquiry covering{' '}
                      <span className="text-cyan-300">
                        {selectedScopes.join(', ') || 'IT Engineering'}
                      </span>{' '}
                      has been routed to our Principal Architecture team. We will reply to{' '}
                      <span className="font-mono text-white">{form.email}</span> within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        onSubmittedChange(false)
                        setForm({ name: '', email: '', company: '' })
                        onBriefChange('')
                      }}
                      className="mt-7 rounded-xl border border-white/12 bg-white/[0.05] px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10 cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-cyan-400" />
                        <span className="font-display text-lg font-bold text-white">
                          Project Scope Configurator
                        </span>
                      </div>
                      <span className="font-mono text-[11px] text-slate-400">
                        NDA Protected
                      </span>
                    </div>

                    {/* Multi-select Capabilities */}
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-slate-400">
                        Select Engineering Disciplines
                      </label>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {SCOPE_OPTIONS.map((scope) => {
                          const active = selectedScopes.includes(scope)
                          return (
                            <button
                              key={scope}
                              type="button"
                              onClick={() => onToggleScope(scope)}
                              className={`rounded-xl border px-3.5 py-2 text-xs font-medium transition-all cursor-pointer ${
                                active
                                  ? 'border-cyan-400/50 bg-cyan-400/15 text-cyan-200 shadow-[0_0_16px_rgba(34,211,238,0.16)]'
                                  : 'border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/20'
                              }`}
                            >
                              {scope}
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* Timeline */}
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-wider text-slate-400">
                        Target Kickoff Window
                      </label>
                      <div className="mt-2.5 grid gap-2 sm:grid-cols-3">
                        {TIMELINE_OPTIONS.map((opt) => {
                          const active = timeline === opt
                          return (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setTimeline(opt)}
                              className={`rounded-xl border px-3 py-2.5 text-xs font-medium transition-all cursor-pointer ${
                                active
                                  ? 'border-indigo-400/50 bg-indigo-500/15 text-white'
                                  : 'border-white/10 bg-white/[0.03] text-slate-400 hover:text-slate-200'
                              }`}
                            >
                              {opt}
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* Input Fields */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-medium text-slate-300">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Alex Rivera"
                          className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400/60"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="alex@enterprise.com"
                          className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400/60"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Acme Global Systems"
                        className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400/60"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300">
                        Technical Brief &amp; Objectives
                      </label>
                      <textarea
                        rows={4}
                        value={brief}
                        onChange={(e) => onBriefChange(e.target.value)}
                        placeholder="Tell us about your platform goals, current stack, or target scale..."
                        className="mt-1.5 w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400/60"
                      />
                    </div>

                    {error && (
                      <div className="rounded-xl border border-rose-400/30 bg-rose-500/10 px-4 py-2.5 text-xs text-rose-300">
                        {error}
                      </div>
                    )}

                    <MagneticButton
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 px-6 py-4 text-sm font-semibold text-slate-950 shadow-[0_0_28px_rgba(34,211,238,0.35)] transition hover:shadow-[0_0_40px_rgba(34,211,238,0.55)] cursor-pointer"
                    >
                      <Send className="h-4 w-4" />
                      <span>Send Architecture Brief</span>
                    </MagneticButton>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
