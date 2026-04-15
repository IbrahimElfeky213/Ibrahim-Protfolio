import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import AnimatedSection from '../components/AnimatedSection'
import StatCounter from '../components/StatCounter'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import profileImg from '../assets/images/profile.jpg'
import heroShape from '../assets/images/hero-shape.png'
import Testimonials from '../components/Testimonials'

const stats = [
  { value: '6+', label: 'Years Experience' },
  { value: '30+', label: 'Projects Delivered' },
  { value: '15M+', label: 'Users Impacted' },
  { value: '4', label: 'Countries Worked In' },
]

const skills = [
  'UX Research', 'Product Strategy', 'Wireframing', 'Prototyping',
  'Design Systems', 'Figma', 'UI Animation', 'User Testing',
  'Design Tokens', 'Accessibility', 'Agile / Scrum', 'Handoff',
]

const featured = projects.slice(0, 3)

export default function Home() {
  return (
    <PageTransition>
      {/* ─── HERO ─────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 60% 30%, rgba(232,120,74,0.07) 0%, transparent 65%)',
          }}
        />
        {/* Hero shape — decorative background */}
        <img
          src={heroShape}
          alt=""
          aria-hidden="true"
          className="absolute right-0 top-0 h-full w-auto max-w-[55%] object-contain opacity-[0.04] pointer-events-none select-none"
        />

        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full py-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div className="section-label mb-6">Senior Product Designer</div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-6">
              Designing products{' '}
              <span className="gradient-text">people love</span>
              {' '}to use.
            </h1>

            <p className="text-muted text-lg md:text-xl leading-relaxed max-w-xl mb-10">
              I'm Ibrahim Elfeky — a Senior Product Designer with 6+ years crafting end-to-end
              digital experiences in fintech, real estate, and e-commerce across the MENA region.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/work" className="btn-primary">
                View My Work
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link to="/about" className="btn-secondary">About Me</Link>
            </div>

            <div className="inline-flex items-center gap-2 mt-8 px-4 py-2 rounded-full border border-white/[0.08] text-sm text-muted">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for new opportunities
            </div>
          </div>

          {/* Profile image */}
          <div className="relative hidden lg:block">
            <div className="relative w-full max-w-md mx-auto">
              <div
                className="absolute inset-0 rounded-3xl blur-3xl opacity-30"
                style={{ background: 'radial-gradient(circle, #E8784A 0%, transparent 70%)' }}
              />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/5]">
                <img src={profileImg} alt="Ibrahim Elfeky" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-5 -left-6 bg-bg-2 border border-white/10 rounded-2xl px-4 py-3">
                <p className="text-white text-sm font-semibold">NHC · Riyadh, KSA</p>
                <p className="text-muted text-xs mt-0.5">Currently working here</p>
              </div>
              <div className="absolute -top-5 -right-6 bg-bg-2 border border-white/10 rounded-2xl px-4 py-3">
                <p className="text-accent text-sm font-bold">15M+</p>
                <p className="text-muted text-xs mt-0.5">Users Impacted</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-dim text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-0.5 h-8 bg-gradient-to-b from-accent to-transparent rounded-full"
          />
        </div>
      </section>

      {/* ─── STATS ─────────────────────────────────────── */}
      <section className="py-20 border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((s, i) => (
              <StatCounter key={s.label} value={s.value} label={s.label} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED WORK ─────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <AnimatedSection className="flex items-end justify-between mb-12 gap-6 flex-wrap">
            <div>
              <div className="section-label">Selected Work</div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Featured Projects
              </h2>
            </div>
            <Link to="/work" className="btn-secondary text-sm">
              View All Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT TEASER ──────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="section-label">About Me</div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                Design that{' '}
                <span className="gradient-text">bridges business</span>{' '}
                and people.
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-6">
                I'm a Cairo-based product designer with a background in front-end development,
                giving me a unique edge: I design with both empathy and technical precision.
                My work spans fintech, real estate, logistics, and entertainment — always
                with a focus on clarity, scalability, and real impact.
              </p>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Currently a Senior Product Designer at NHC in Riyadh, leading UX for Ejar —
                Saudi Arabia's national rental regulation platform serving 15M+ users.
              </p>
              <Link to="/about" className="btn-primary">
                Read My Story
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, duration: 0.4 }}
                    className="bg-bg-2 border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-muted hover:border-accent/40 hover:text-white transition-all"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ──────────────────────────────── */}
      <Testimonials />

      {/* ─── CTA ───────────────────────────────────────── */}
      <section className="py-28 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 text-center relative cta-glow">
          <AnimatedSection>
            <div className="section-label justify-center">Let's Connect</div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Got a project in mind?
            </h2>
            <p className="text-muted text-xl leading-relaxed mb-10">
              I'm always open to interesting projects and collaborations.
              Let's create something remarkable together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:ibrahim.elfeky21@gmail.com" className="btn-primary">
                Get In Touch
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 4l6 5 6-5M2 4h12v8H2V4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/ibrahimelfeky21/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                LinkedIn
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  )
}
