import useScrollReveal, { getRevealStyle } from '../hooks/useScrollReveal'

/**
 * HeroText — hero section text block with staggered scroll-reveal.
 * Each child line (label → headline → body → actions) enters sequentially.
 *
 * Props:
 *  label       — small caps label (e.g. "Senior Product Designer")
 *  headline    — large h1 text; supports JSX for gradient spans
 *  body        — paragraph text (string or JSX)
 *  actions     — CTA buttons / links (JSX)
 *  badge       — availability badge below actions (JSX or string)
 *  baseDelay   — starting delay for the sequence (default 0ms)
 *  className   — extra classes on wrapper
 *
 * Usage:
 *   <HeroText
 *     label="Senior Product Designer"
 *     headline={<>Designing products <span className="gradient-text">people love</span> to use.</>}
 *     body="I'm Ibrahim Elfeky — ..."
 *     actions={<><Link className="btn-primary">View My Work</Link></>}
 *     badge={<span>Available for new opportunities</span>}
 *   />
 */
export default function HeroText({
  label,
  headline,
  body,
  actions,
  badge,
  baseDelay = 0,
  className = '',
}) {
  const step = 100 // ms between each stagger step

  const [labelRef,    labelVisible]    = useScrollReveal({ delay: baseDelay })
  const [headingRef,  headingVisible]  = useScrollReveal({ delay: baseDelay + step })
  const [bodyRef,     bodyVisible]     = useScrollReveal({ delay: baseDelay + step * 2 })
  const [actionsRef,  actionsVisible]  = useScrollReveal({ delay: baseDelay + step * 3 })
  const [badgeRef,    badgeVisible]    = useScrollReveal({ delay: baseDelay + step * 4 })

  return (
    <div className={className}>
      {/* Label */}
      {label && (
        <div
          ref={labelRef}
          className="section-label"
          style={getRevealStyle(labelVisible, { distance: 12, duration: 450 })}
        >
          {label}
        </div>
      )}

      {/* Headline */}
      {headline && (
        <h1
          ref={headingRef}
          className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-6"
          style={getRevealStyle(headingVisible, { distance: 24, duration: 700 })}
        >
          {headline}
        </h1>
      )}

      {/* Body */}
      {body && (
        <p
          ref={bodyRef}
          className="text-muted text-lg md:text-xl leading-relaxed max-w-xl mb-10"
          style={getRevealStyle(bodyVisible, { distance: 18, duration: 650 })}
        >
          {body}
        </p>
      )}

      {/* CTA Actions */}
      {actions && (
        <div
          ref={actionsRef}
          className="flex flex-wrap gap-4"
          style={getRevealStyle(actionsVisible, { distance: 16, duration: 600 })}
        >
          {actions}
        </div>
      )}

      {/* Availability badge */}
      {badge && (
        <div
          ref={badgeRef}
          className="mt-8"
          style={getRevealStyle(badgeVisible, { distance: 12, duration: 500 })}
        >
          {badge}
        </div>
      )}
    </div>
  )
}
