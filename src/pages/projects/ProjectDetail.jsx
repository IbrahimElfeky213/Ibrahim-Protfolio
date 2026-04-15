import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../../components/PageTransition'
import AnimatedSection from '../../components/AnimatedSection'
import { getProject, getNextProject } from '../../data/projects'

function GallerySection({ images, captions }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
      {images.map((src, i) => (
        <AnimatedSection key={i} delay={i * 0.08}>
          <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-bg-2">
            <img
              src={src}
              alt={captions?.[i] || `Screenshot ${i + 1}`}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            {captions?.[i] && (
              <p className="px-4 py-3 text-xs text-dim text-center border-t border-white/[0.06]">
                {captions[i]}
              </p>
            )}
          </div>
        </AnimatedSection>
      ))}
    </div>
  )
}

function ScreensSection({ images }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 my-8">
      {images.map((src, i) => (
        <AnimatedSection key={i} delay={i * 0.06}>
          <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-bg-2 w-44 md:w-48">
            <img
              src={src}
              alt={`Screen ${i + 1}`}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </AnimatedSection>
      ))}
    </div>
  )
}

function PlaceholderSection({ project }) {
  return (
    <div
      className="rounded-3xl w-full aspect-video flex items-center justify-center my-8 border border-white/[0.08]"
      style={{
        background: `linear-gradient(135deg, ${project.color} 0%, ${project.accentColor} 100%)`,
      }}
    >
      <span
        className="text-8xl font-extrabold opacity-15 tracking-tighter"
        style={{ color: project.accentColor }}
      >
        {project.title
          .split(' ')
          .map((w) => w[0])
          .join('')}
      </span>
    </div>
  )
}

function TextSection({ label, heading, body }) {
  return (
    <AnimatedSection className="my-16 max-w-3xl">
      {label && <div className="section-label">{label}</div>}
      {heading && (
        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-5">
          {heading}
        </h2>
      )}
      {body && (
        <div className="text-muted text-lg leading-relaxed space-y-4">
          {body.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      )}
    </AnimatedSection>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)
  const nextProject = getNextProject(slug)

  if (!project) return <Navigate to="/work" replace />

  const { title, subtitle, role, company, duration, platform, highlights, sections, coverImage, color, accentColor } = project

  return (
    <PageTransition>
      {/* ─── HERO ─────────────────────────────── */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${accentColor}18 0%, transparent 65%)`,
          }}
        />
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          {/* Back */}
          <div className="mb-10">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-muted hover:text-white transition-colors text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All Projects
            </Link>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            {title}
          </h1>
          <p className="text-muted text-xl leading-relaxed max-w-2xl mb-10">
            {subtitle}
          </p>

          {/* Meta grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden mb-12">
            {[
              { label: 'Role', value: role },
              { label: 'Company', value: company },
              { label: 'Duration', value: duration },
              { label: 'Platform', value: platform },
            ].map((item) => (
              <div key={item.label} className="bg-bg-2 px-5 py-4">
                <p className="text-muted text-xs font-semibold uppercase tracking-widest mb-1">{item.label}</p>
                <p className="text-white text-sm font-medium leading-snug">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Highlights */}
          {highlights?.length > 0 && (
            <div className="flex flex-wrap gap-6">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="px-6 py-4 rounded-2xl border border-white/[0.08] bg-bg-2 text-center min-w-[110px]"
                >
                  <p className="text-3xl font-extrabold text-white mb-1" style={{ color: accentColor }}>
                    {h.value}
                  </p>
                  <p className="text-muted text-xs">{h.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─── COVER IMAGE ──────────────────────── */}
      <section className="pb-4">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          {coverImage ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="rounded-3xl overflow-hidden border border-white/[0.08]"
            >
              <img src={coverImage} alt={title} className="w-full h-auto object-cover" />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <PlaceholderSection project={project} />
            </motion.div>
          )}
        </div>
      </section>

      {/* ─── CASE STUDY SECTIONS ──────────────── */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          {sections.map((section, i) => {
            if (section.type === 'text') {
              return (
                <TextSection
                  key={i}
                  label={section.label}
                  heading={section.heading}
                  body={section.body}
                />
              )
            }
            if (section.type === 'gallery') {
              return (
                <GallerySection
                  key={i}
                  images={section.images}
                  captions={section.captions}
                />
              )
            }
            if (section.type === 'screens') {
              return <ScreensSection key={i} images={section.images} />
            }
            return null
          })}
        </div>
      </section>

      {/* ─── NEXT PROJECT ─────────────────────── */}
      {nextProject && (
        <section className="py-16 border-t border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 md:px-10">
            <AnimatedSection>
              <p className="text-muted text-sm font-semibold uppercase tracking-widest mb-4">Next Project</p>
              <Link to={`/projects/${nextProject.slug}`} className="group block">
                <div
                  className="relative rounded-3xl p-8 md:p-12 overflow-hidden border border-white/[0.08] hover:border-white/20 transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${nextProject.color} 0%, ${nextProject.accentColor}33 100%)`,
                  }}
                >
                  <div className="flex items-center justify-between flex-wrap gap-6">
                    <div>
                      <h3 className="text-white text-3xl md:text-4xl font-extrabold mb-2 group-hover:text-accent transition-colors">
                        {nextProject.title}
                      </h3>
                      <p className="text-white/60 text-lg">{nextProject.subtitle}</p>
                    </div>
                    <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10h12M10 4l6 6-6 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      )}
    </PageTransition>
  )
}
