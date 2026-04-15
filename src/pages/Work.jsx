import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import AnimatedSection from '../components/AnimatedSection'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const filters = [
  { id: 'all', label: 'All Work' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'web', label: 'Web' },
  { id: 'fintech', label: 'Fintech' },
  { id: 'real-estate', label: 'Real Estate' },
  { id: 'design-system', label: 'Design System' },
]

export default function Work() {
  const [active, setActive] = useState('all')

  const filtered =
    active === 'all'
      ? projects
      : projects.filter((p) => p.categories?.includes(active))

  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-36 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 10%, rgba(232,120,74,0.07) 0%, transparent 65%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <div className="section-label justify-center">
            Portfolio
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-5">
            Selected <span className="gradient-text">Work</span>
          </h1>
          <p className="text-muted text-xl max-w-xl mx-auto">
            6+ years of product design across fintech, real estate, logistics, and entertainment.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-16 md:top-20 z-30 bg-bg/80 backdrop-blur-xl border-b border-white/[0.06] py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === f.id
                    ? 'bg-accent text-white'
                    : 'text-muted hover:text-white border border-white/[0.08] hover:border-white/20'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-muted py-20"
            >
              No projects in this category yet.
            </motion.p>
          )}
        </div>
      </section>
    </PageTransition>
  )
}
