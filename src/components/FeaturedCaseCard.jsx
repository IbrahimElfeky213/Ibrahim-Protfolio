import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function FeaturedCaseCard({ project, index = 0 }) {
  const { slug, title, subtitle, tags, coverImage, color, accentColor, highlights } = project
  const isReversed = index % 2 === 1

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
    >
      <Link to={`/projects/${slug}`} className="block group">
        <div
          className="grid lg:grid-cols-2 rounded-3xl overflow-hidden border border-white/[0.07] hover:border-white/[0.18] transition-all duration-500"
          style={{ background: '#141414', minHeight: '420px' }}
        >
          {/* ── Text Content ── */}
          <div
            className={`flex flex-col justify-center px-10 py-12 md:px-14 md:py-14 ${
              isReversed ? 'lg:order-2' : 'lg:order-1'
            }`}
          >
            {/* Project name label */}
            <p className="text-sm font-semibold mb-5 tracking-wide" style={{ color: '#5B9BFF' }}>
              {title}
            </p>

            {/* Tagline / Subtitle */}
            <h3 className="text-white font-bold leading-tight mb-7" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.6rem)' }}>
              {subtitle}
            </h3>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2 mb-7">
              {tags.map((tag, i) => (
                <span key={tag} className="flex items-center gap-1.5">
                  <span className="px-3 py-1 rounded-full border border-white/[0.18] text-white/60 text-xs font-medium hover:border-white/30 hover:text-white/80 transition-colors duration-200">
                    {tag}
                  </span>
                  {i < tags.length - 1 && (
                    <span className="text-white/25 text-xs select-none">·</span>
                  )}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/[0.07] mb-7" />

            {/* Stats */}
            {highlights?.length > 0 && (
              <div className="flex gap-8 mb-9">
                {highlights.map((h) => (
                  <div key={h.label}>
                    <p className="text-white font-extrabold text-3xl leading-none">{h.value}</p>
                    <p className="text-white/40 text-xs mt-1.5 font-medium">{h.label}</p>
                  </div>
                ))}
              </div>
            )}

            {/* CTA Button */}
            <div>
              <span
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold transition-all duration-300 group-hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #E8784A, #d4622e)',
                  boxShadow: '0 0 0 rgba(232,120,74,0)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 8px 30px rgba(232,120,74,0.45)')}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 0 0 rgba(232,120,74,0)')}
              >
                View Case Study
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>

          {/* ── Image / Placeholder ── */}
          <div
            className={`relative overflow-hidden min-h-[280px] lg:min-h-0 ${
              isReversed ? 'lg:order-1' : 'lg:order-2'
            }`}
          >
            {coverImage ? (
              <img
                src={coverImage}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            ) : (
              <div
                className="w-full h-full flex flex-col items-center justify-center gap-4 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                style={{
                  background: `linear-gradient(135deg, ${color} 0%, ${accentColor} 100%)`,
                }}
              >
                {/* Initials monogram */}
                <span
                  className="text-[7rem] font-extrabold leading-none tracking-tighter select-none"
                  style={{ color: accentColor, opacity: 0.2 }}
                >
                  {title.split(' ').map((w) => w[0]).join('')}
                </span>
                {/* "Images coming soon" badge */}
                <span className="px-4 py-1.5 rounded-full border border-white/20 text-white/40 text-xs font-medium backdrop-blur-sm">
                  Images coming soon
                </span>
              </div>
            )}

            {/* Subtle dark overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
