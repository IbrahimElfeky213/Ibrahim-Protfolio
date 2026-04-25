import { useEffect, useRef, useState, useCallback } from 'react'

/**
 * useScrollReveal — native IntersectionObserver scroll hook (no external libs)
 *
 * @param {object}  options
 * @param {number}  options.threshold   - 0–1, how much of element must be visible (default 0.15)
 * @param {string}  options.rootMargin  - CSS margin to shrink/grow viewport detection box
 * @param {boolean} options.once        - fire only on first reveal, never re-hide (default true)
 * @param {number}  options.delay       - ms before the visible state is set (for stagger)
 *
 * @returns {[React.RefObject, boolean, function]} [ref, isVisible, reset]
 *
 * Usage:
 *   const [ref, isVisible] = useScrollReveal()
 *   const [ref, isVisible] = useScrollReveal({ delay: 150, threshold: 0.2 })
 */
export default function useScrollReveal({
  threshold = 0.15,
  rootMargin = '0px 0px -60px 0px',
  once = true,
  delay = 0,
} = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const timerRef = useRef(null)

  // Exposed reset so callers can re-hide the element if once=false
  const reset = useCallback(() => setIsVisible(false), [])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Skip animation for users who prefer reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Clear any pending timer from a rapid scroll-out/in
          clearTimeout(timerRef.current)

          if (delay > 0) {
            timerRef.current = setTimeout(() => setIsVisible(true), delay)
          } else {
            setIsVisible(true)
          }

          if (once) observer.unobserve(element)
        } else if (!once) {
          clearTimeout(timerRef.current)
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      clearTimeout(timerRef.current)
      observer.disconnect()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threshold, rootMargin, once, delay])

  return [ref, isVisible, reset]
}

/**
 * getRevealStyle — returns the inline style object to apply to the revealed element.
 *
 * @param {boolean} isVisible
 * @param {object}  options
 * @param {number}  options.distance  - translateY distance in px (default 20)
 * @param {number}  options.duration  - transition duration in ms (default 650)
 * @param {number}  options.delay     - CSS transition-delay in ms (default 0)
 * @param {string}  options.easing    - CSS timing function (default smooth deceleration)
 * @param {'up'|'down'|'left'|'right'} options.direction - slide direction (default 'up')
 */
export function getRevealStyle(isVisible, {
  distance = 20,
  duration = 650,
  delay = 0,
  easing = 'cubic-bezier(0.22, 1, 0.36, 1)',
  direction = 'up',
} = {}) {
  const axis = direction === 'left' || direction === 'right' ? 'X' : 'Y'
  const sign = direction === 'down' || direction === 'right' ? -1 : 1
  const hidden = `translate${axis}(${sign * distance}px)`

  return {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'none' : hidden,
    transition: `opacity ${duration}ms ${easing} ${delay}ms, transform ${duration}ms ${easing} ${delay}ms`,
    willChange: 'opacity, transform',
  }
}
