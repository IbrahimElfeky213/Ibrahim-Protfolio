import useScrollReveal, { getRevealStyle } from '../hooks/useScrollReveal'

/**
 * SectionTitle — standardised section heading with scroll-reveal.
 * Replaces ad-hoc section-label + h2 patterns across pages.
 *
 * Props:
 *  label      — small caps label above the heading (e.g. "Selected Work")
 *  title      — main h2 text; supports JSX for gradient spans
 *  subtitle   — optional paragraph below the heading
 *  center     — center-align everything (default false)
 *  delay      — entrance animation delay in ms
 *  className  — extra classes on the wrapper
 *
 * Usage:
 *   <SectionTitle label="About Me" title="Designer who thinks in systems." />
 *   <SectionTitle label="Work" title={<>Featured <span className="gradient-text">Projects</span></>} center />
 */
export default function SectionTitle({
  label,
  title,
  subtitle,
  center = false,
  delay = 0,
  className = '',
}) {
  const [labelRef,    labelVisible]    = useScrollReveal({ delay })
  const [headingRef,  headingVisible]  = useScrollReveal({ delay: delay + 80 })
  const [subtitleRef, subtitleVisible] = useScrollReveal({ delay: delay + 160 })

  const align = center ? 'text-center' : ''

  return (
    <div className={`${align} ${className}`}>
      {/* Label */}
      {label && (
        <div
          ref={labelRef}
          className={`section-label ${center ? 'justify-center' : ''}`}
          style={getRevealStyle(labelVisible, { distance: 12, duration: 500 })}
        >
          {label}
        </div>
      )}

      {/* Heading */}
      <h2
        ref={headingRef}
        className="text-4xl md:text-5xl font-extrabold text-white leading-tight"
        style={getRevealStyle(headingVisible, { distance: 20, duration: 650 })}
      >
        {title}
      </h2>

      {/* Optional subtitle */}
      {subtitle && (
        <p
          ref={subtitleRef}
          className="text-muted text-lg leading-relaxed mt-4 max-w-2xl"
          style={getRevealStyle(subtitleVisible, { distance: 15, duration: 600 })}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
