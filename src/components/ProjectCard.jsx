import { Link } from 'react-router-dom'
import useScrollReveal, { getRevealStyle } from '../hooks/useScrollReveal'

/**
 * ProjectCard — used in the Work page grid.
 * Entrance animation powered by the native useScrollReveal hook.
 * index prop controls the stagger delay between sibling cards.
 */
export default function ProjectCard({ project, index = 0 }) {
  const { slug, title, subtitle, tags, coverImage, color, accentColor, role, platform } = project

  // Each card staggers by 80ms based on its grid position
  const [ref, isVisible] = useScrollReveal({
    delay: index * 80,
    threshold: 0.08,
    rootMargin: '0px 0px -50px 0px',
  })

  return (
    <div
      ref={ref}
      style={getRevealStyle(isVisible, { distance: 30, duration: 600 })}
    >
      <Link to={`/projects/${slug}`} className="block group">
        <div className="card overflow-hidden">
          {/* Image / Cover */}
          <div
            className="relative w-full overflow-hidden"
            style={{ background: color || '#111', aspectRatio: '16/9' }}
          >
            {coverImage ? (
              <img
                src={coverImage}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${color} 0%, ${accentColor} 100%)` }}
              >
                <span
                  className="text-5xl font-extrabold opacity-20 tracking-tighter"
                  style={{ color: accentColor }}
                >
                  {title.split(' ').map((w) => w[0]).join('')}
                </span>
              </div>
            )}

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

            {/* Arrow icon */}
            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Info */}
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.slice(0, 3).map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <h3 className="text-white font-bold text-xl mb-1 group-hover:text-accent transition-colors">
              {title}
            </h3>
            <p className="text-muted text-sm mb-4 leading-relaxed">{subtitle}</p>
            <div className="flex items-center justify-between text-xs text-dim border-t border-white/[0.06] pt-4">
              <span>{role}</span>
              <span>{platform}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
