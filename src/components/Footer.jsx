import { ArrowUpRight } from 'lucide-react'
import { NAV_LINKS } from '../data/nexoraData'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="border-t border-white/[0.08] bg-[#04060c] py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10">
                <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
                  <path
                    d="M7 24V8L16 17L25 8V24"
                    stroke="url(#footerLogoGrad)"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient id="footerLogoGrad" x1="6" y1="6" x2="26" y2="26" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#22D3EE" />
                      <stop offset="1" stopColor="#6366F1" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <div className="font-display text-lg font-bold tracking-tight text-white">
                  NEXORA TECHNOLOGIES
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-400">
                  Engineering Intelligent Systems
                </div>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Enterprise software development, cloud-native infrastructure, and applied AI
              systems engineered for global scale and uncompromising reliability.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-xs uppercase tracking-wider text-slate-500">
              Navigation
            </div>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-slate-300 transition hover:text-cyan-300 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="font-mono text-xs uppercase tracking-wider text-slate-500">
              Operational Status
            </div>
            <div className="mt-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm font-medium text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  All Delivery Clusters Operational
                </span>
                <ArrowUpRight className="h-4 w-4 text-slate-500" />
              </div>
              <p className="mt-2 font-mono text-xs text-slate-400">
                ISO 27001 • SOC2 Type II • 99.99% SLA
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs text-slate-500 sm:flex-row">
          <p>© {CURRENT_YEAR} Nexora Technologies. All rights reserved.</p>
          <p className="font-mono">Crafted with precision engineering.</p>
        </div>
      </div>
    </footer>
  )
}
