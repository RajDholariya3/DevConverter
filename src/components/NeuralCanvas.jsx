import { useEffect, useRef } from 'react'

export default function NeuralCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)
    let rafId

    const mouse = { x: width * 0.65, y: height * 0.45, active: false }
    const nodeCount = Math.min(72, Math.max(32, Math.floor((width * height) / 18000)))
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.42,
      vy: (Math.random() - 0.5) * 0.42,
      r: Math.random() * 1.7 + 1,
      hue: Math.random() > 0.45 ? '34, 211, 238' : '99, 102, 241',
    }))

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }

    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
      mouse.active = true
    }

    const handlePointerLeave = () => {
      mouse.active = false
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    canvas.addEventListener('pointerleave', handlePointerLeave)

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        if (!reducedMotion) {
          n.x += n.vx
          n.y += n.vy

          if (n.x < 0 || n.x > width) n.vx *= -1
          if (n.y < 0 || n.y > height) n.vy *= -1

          if (mouse.active) {
            const dx = mouse.x - n.x
            const dy = mouse.y - n.y
            const dist = Math.hypot(dx, dy)
            if (dist < 170 && dist > 1) {
              n.x += (dx / dist) * 0.38
              n.y += (dy / dist) * 0.38
            }
          }
        }

        // Draw node
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${n.hue}, 0.72)`
        ctx.fill()

        // Connect neighboring nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j]
          const dist = Math.hypot(n.x - m.x, n.y - m.y)
          if (dist < 145) {
            const alpha = (1 - dist / 145) * 0.22
            ctx.beginPath()
            ctx.moveTo(n.x, n.y)
            ctx.lineTo(m.x, m.y)
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }

        // Connect to cursor
        if (mouse.active) {
          const mDist = Math.hypot(mouse.x - n.x, mouse.y - n.y)
          if (mDist < 190) {
            const alpha = (1 - mDist / 190) * 0.38
            ctx.beginPath()
            ctx.moveTo(n.x, n.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      if (!reducedMotion) {
        rafId = requestAnimationFrame(render)
      }
    }

    render()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('pointermove', handlePointerMove)
      canvas.removeEventListener('pointerleave', handlePointerLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-75"
    />
  )
}
