import useScrollReveal, { getRevealStyle } from '../hooks/useScrollReveal'

/**
 * ScrollReveal — generic wrapper that fades + slides any children into view.
 *
 * Props:
 *  as         — HTML tag to render (default 'div')
 *  delay      — stagger offset in ms
 *  duration   — transition duration in ms (default 650)
 *  distance   — slide distance in px (default 20)
 *  direction  — 'up' | 'down' | 'left' | 'right' (default 'up')
 *  threshold  — 0–1 IntersectionObserver threshold (default 0.15)
 *  rootMargin — IntersectionObserver root margin
 *  once       — only animate once (default true)
 *  className  — extra Tailwind classes
 *
 * Usage:
 *   <ScrollReveal delay={100}>
 *     <p>Hello</p>
 *   </ScrollReveal>
 *
 *   <ScrollReveal as="section" direction="left" delay={200}>
 *     ...
 *   </ScrollReveal>
 */
export default function ScrollReveal({
  children,
  as: Tag = 'div',
  delay = 0,
  duration = 650,
  distance = 20,
  direction = 'up',
  threshold = 0.15,
  rootMargin = '0px 0px -60px 0px',
  once = true,
  className = '',
  style: extraStyle = {},
}) {
  const [ref, isVisible] = useScrollReveal({ threshold, rootMargin, once, delay })

  const revealStyle = getRevealStyle(isVisible, { distance, duration, delay: 0, direction })
  // Note: delay is handled by the hook (JS setTimeout) for precise stagger,
  // not via CSS transition-delay, so we set delay:0 in getRevealStyle.

  return (
    <Tag
      ref={ref}
      className={className}
      style={{ ...revealStyle, ...extraStyle }}
    >
      {children}
    </Tag>
  )
}
