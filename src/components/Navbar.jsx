import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../data/nexoraData'
import { MagneticButton } from './MotionPrimitives'

export default function Navbar({ onStartProject }) {
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('services')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 28)
      const offsets = NAV_LINKS.map(({ id }) => {
        const el = document.getElementById(id)
        if (!el) return { id, top: Infinity }
        return { id, top: Math.abs(el.getBoundingClientRect().top - 140) }
      })
      offsets.sort((a, b) => a.top - b.top)
      if (offsets[0]) setActiveId(offsets[0].id)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSection = (id) => {
    setMobileOpen(false)
    setActiveId(id)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-40 px-4 pt-4 sm:px-6"
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-6 ${
            scrolled
              ? 'border-white/12 bg-[#070b14]/82 shadow-[0_12px_40px_rgba(0,0,0,0.55)] backdrop-blur-2xl'
              : 'border-white/[0.06] bg-[#070b14]/45 backdrop-blur-md'
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 via-indigo-500/20 to-emerald-500/20 shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-transform duration-300 group-hover:scale-105">
              <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
                <path
                  d="M7 24V8L16 17L25 8V24"
                  stroke="url(#navLogoGrad)"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="7" cy="8" r="2.2" fill="#22D3EE" />
                <circle cx="25" cy="24" r="2.2" fill="#818CF8" />
                <defs>
                  <linearGradient id="navLogoGrad" x1="6" y1="6" x2="26" y2="26" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#22D3EE" />
                    <stop offset="0.55" stopColor="#6366F1" />
                    <stop offset="1" stopColor="#34D399" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-base font-bold tracking-tight text-white sm:text-lg">
                NEXORA
              </span>
              <span className="font-mono text-[10px] tracking-[0.22em] text-cyan-400/90 uppercase">
                Technologies
              </span>
            </div>
          </a>

          {/* Desktop Nav Pills */}
          <nav className="hidden items-center gap-1 rounded-full border border-white/[0.07] bg-white/[0.03] p-1 lg:flex">
            {NAV_LINKS.map((item) => {
              const active = activeId === item.id
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors cursor-pointer ${
                    active ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                      className="absolute inset-0 rounded-full border border-cyan-400/25 bg-white/[0.08] shadow-[0_0_16px_rgba(34,211,238,0.12)]"
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              )
            })}
          </nav>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-1 text-xs font-mono text-emerald-300 xl:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
              Q4 Build Slots Open
            </div>

            <MagneticButton
              onClick={onStartProject}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.35)] transition-shadow hover:shadow-[0_0_32px_rgba(34,211,238,0.55)] cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-200 lg:hidden cursor-pointer"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-22 z-40 rounded-2xl border border-white/12 bg-[#080d1a]/95 p-5 shadow-2xl backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-left text-base font-medium text-slate-200 transition hover:bg-white/[0.06]"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="h-4 w-4 text-cyan-400" />
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false)
                  onStartProject()
                }}
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-4 py-3 font-semibold text-slate-950"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
