import { useRef, useEffect, useState } from 'react'
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useScroll,
  useInView,
} from 'framer-motion'

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2.5px] origin-left z-50 bg-gradient-to-r from-cyan-400 via-indigo-500 to-emerald-400 shadow-[0_0_12px_rgba(34,211,238,0.7)]"
    />
  )
}

export function CursorGlow() {
  const mouseX = useMotionValue(-500)
  const mouseY = useMotionValue(-500)
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 25 })
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 25 })

  useEffect(() => {
    const handleMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('pointermove', handleMove, { passive: true })
    return () => window.removeEventListener('pointermove', handleMove)
  }, [mouseX, mouseY])

  const background = useMotionTemplate`radial-gradient(520px circle at ${smoothX}px ${smoothY}px, rgba(34, 211, 238, 0.065), transparent 70%)`

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-10 hidden md:block transition-opacity duration-300"
      style={{ background }}
    />
  )
}

export function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(34, 211, 238, 0.14)',
  onClick,
}) {
  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  function handleMouseLeave() {
    mouseX.set(-200)
    mouseY.set(-200)
  }

  const spotlight = useMotionTemplate`radial-gradient(380px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 80%)`

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b101d]/80 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-400/35 ${className}`}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: spotlight }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  )
}

export function MagneticButton({ children, className = '', onClick, type = 'button', ariaLabel }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 280, damping: 18 })
  const springY = useSpring(y, { stiffness: 280, damping: 18 })

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    x.set(dx * 0.22)
    y.set(dy * 0.22)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.97 }}
      className={className}
    >
      {children}
    </motion.button>
  )
}

export function MaskedTextReveal({ text, className = '', delay = 0 }) {
  const words = text.split(' ')
  return (
    <span className={`inline-flex flex-wrap gap-x-[0.26em] ${className}`}>
      {words.map((word, idx) => (
        <span key={`${word}-${idx}`} className="inline-block overflow-hidden pb-1">
          <motion.span
            className="inline-block"
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              duration: 0.65,
              delay: delay + idx * 0.055,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

export function AnimatedCounter({ value, decimals = 0, suffix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let rafId
    const duration = 1400
    const start = performance.now()

    const tick = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(value * eased)
      if (progress < 1) {
        rafId = requestAnimationFrame(tick)
      } else {
        setDisplay(value)
      }
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [isInView, value])

  return (
    <span ref={ref}>
      {decimals > 0 ? display.toFixed(decimals) : Math.round(display)}
      {suffix}
    </span>
  )
}

export function SectionHeader({ eyebrow, title, subtitle, align = 'left' }) {
  const centered = align === 'center'
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      <div
        className={`inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-3.5 py-1 text-xs font-mono uppercase tracking-[0.18em] text-cyan-300 ${
          centered ? 'mx-auto' : ''
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
        {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
