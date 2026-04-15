import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [follower, setFollower] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove)

    let followerRaf
    let currentFollower = { x: -100, y: -100 }
    let targetFollower = { x: -100, y: -100 }

    const animateFollower = () => {
      currentFollower.x += (targetFollower.x - currentFollower.x) * 0.12
      currentFollower.y += (targetFollower.y - currentFollower.y) * 0.12
      setFollower({ x: currentFollower.x, y: currentFollower.y })
      followerRaf = requestAnimationFrame(animateFollower)
    }

    const onMoveFollower = (e) => {
      targetFollower = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMoveFollower)
    followerRaf = requestAnimationFrame(animateFollower)

    const onDown = () => setIsClicking(true)
    const onUp = () => setIsClicking(false)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    const addHover = () => {
      document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovering(true))
        el.addEventListener('mouseleave', () => setIsHovering(false))
      })
    }
    addHover()
    const observer = new MutationObserver(addHover)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousemove', onMoveFollower)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      cancelAnimationFrame(followerRaf)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: pos.x - 4,
          y: pos.y - 4,
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: '#E8784A',
          transform: `translate(${pos.x - 4}px, ${pos.y - 4}px) scale(${isClicking ? 0.5 : 1})`,
          transition: 'transform 0.1s ease',
        }}
      />
      {/* Ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          transform: `translate(${follower.x - 20}px, ${follower.y - 20}px)`,
          width: isHovering ? 48 : 40,
          height: isHovering ? 48 : 40,
          marginLeft: isHovering ? -4 : 0,
          marginTop: isHovering ? -4 : 0,
          borderRadius: '50%',
          border: `1.5px solid ${isHovering ? '#E8784A' : 'rgba(255,255,255,0.3)'}`,
          transition: 'width 0.25s ease, height 0.25s ease, border-color 0.25s ease, margin 0.25s ease',
          backgroundColor: isHovering ? 'rgba(232,120,74,0.06)' : 'transparent',
        }}
      />
    </>
  )
}
