import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

function parseValue(str) {
  // Extract number and suffix like "6+", "15M+", "60+"
  const match = str.match(/^(\d+(?:\.\d+)?)(.*)$/)
  if (!match) return { num: 0, suffix: str }
  return { num: parseFloat(match[1]), suffix: match[2] }
}

export default function StatCounter({ value, label, delay = 0 }) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true })
  const [count, setCount] = useState(0)
  const { num, suffix } = parseValue(value)

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const start = Date.now() + delay * 1000
    let raf

    const step = () => {
      const now = Date.now()
      if (now < start) { raf = requestAnimationFrame(step); return }
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(ease * num))
      if (progress < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, num, delay])

  const displayNum = num >= 1000 ? (count / 1000).toFixed(count >= 1000 ? 0 : 1) : count

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 tabular-nums">
        {num >= 1000 ? `${displayNum}${suffix.replace('000', '')}` : `${count}${suffix}`}
      </div>
      <div className="text-muted text-sm font-medium">{label}</div>
    </div>
  )
}
