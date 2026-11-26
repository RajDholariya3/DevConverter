import { TECH_STACK_ROW_1, TECH_STACK_ROW_2 } from '../data/nexoraData'

function MarqueeTrack({ items, reverse = false }) {
  const duplicated = [...items, ...items]
  return (
    <div className="flex w-max">
      <div
        className={`flex gap-4 pr-4 ${
          reverse ? 'animate-marquee-right' : 'animate-marquee-left'
        }`}
      >
        {duplicated.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-[#0b1120]/80 px-5 py-3 backdrop-blur-md transition-colors hover:border-cyan-400/35"
          >
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400" />
            <span className="font-display text-sm font-semibold text-white">{item.name}</span>
            <span className="rounded-md bg-white/[0.05] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-slate-400">
              {item.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function TechMarquee() {
  return (
    <section className="relative border-y border-white/[0.06] bg-[#070b15]/80 py-10 overflow-hidden">
      <div className="mx-auto mb-6 max-w-7xl px-4 text-center sm:px-6">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-slate-400">
          Battle-Tested Engineering Stack Powering Nexora Deployments
        </p>
      </div>

      {/* Edge gradient masks */}
      <div className="marquee-container relative space-y-4 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#05070e] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#05070e] to-transparent" />
        <MarqueeTrack items={TECH_STACK_ROW_1} />
        <MarqueeTrack items={TECH_STACK_ROW_2} reverse />
      </div>
    </section>
  )
}
