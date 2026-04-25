import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import PageTransition from '../../components/PageTransition'
import AnimatedSection from '../../components/AnimatedSection'
import useScrollReveal, { getRevealStyle } from '../../hooks/useScrollReveal'
import { getNextProject } from '../../data/projects'

import ejarDashboard from '@/assets/images/ejar/Smart Dashboard.jpg'
import ejarPackages  from '@/assets/images/ejar/Ejar+ Packages page.jpg'
import ejarNavbar    from '@/assets/images/ejar/navbar cases.jpg'
import ejarButtons   from '@/assets/images/ejar/DS Buttons.jpg'
import ejarController from '@/assets/images/ejar/DS controller.jpg'
import ejarStepper   from '@/assets/images/ejar/DS stepper.jpg'

/* ─── palette ─────────────────────────────────────────────── */
const TEAL   = '#2a7060'
const TEAL_D = '#1a3a35'
const TEAL_L = '#4db89a'
const NAVY   = '#0f1f2e'

/* ─── tiny helpers ────────────────────────────────────────── */
function Label({ text, color = TEAL_L }) {
  return (
    <span
      className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-5"
      style={{ color }}
    >
      <span className="inline-block w-6 h-px" style={{ background: color }} />
      {text}
    </span>
  )
}

function SectionDivider() {
  return <div className="border-t border-white/[0.06] my-20" />
}

/* ─── animated metric bar ─────────────────────────────────── */
function MetricBar({ label, value, change, percent, color = TEAL_L, delay = 0 }) {
  const [ref, isVisible] = useScrollReveal({ delay, threshold: 0.2 })
  return (
    <div ref={ref} style={getRevealStyle(isVisible, { duration: 550 })}>
      <div className="flex justify-between items-end mb-2">
        <span className="text-white/70 text-sm">{label}</span>
        <div className="flex items-center gap-2">
          {change && (
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400">
              +{change}
            </span>
          )}
          <span className="text-white font-bold text-lg">{value}</span>
        </div>
      </div>
      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full transition-[width] duration-[1200ms] ease-out"
          style={{
            width: isVisible ? `${percent}%` : '0%',
            background: `linear-gradient(90deg, ${TEAL} 0%, ${color} 100%)`,
            transitionDelay: isVisible ? `${delay}ms` : '0ms',
          }}
        />
      </div>
    </div>
  )
}

/* ─── service card ────────────────────────────────────────── */
function ServiceCard({ icon, title, desc, delay = 0 }) {
  const [ref, isVisible] = useScrollReveal({ delay, threshold: 0.1 })
  return (
    <div
      ref={ref}
      style={getRevealStyle(isVisible, { duration: 550, distance: 20 })}
      className="p-5 rounded-2xl border border-white/[0.07] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 group"
    >
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center mb-4 text-lg"
        style={{ background: `${TEAL}22`, color: TEAL_L }}
      >
        {icon}
      </div>
      <p className="text-white font-semibold text-sm mb-1 leading-snug">{title}</p>
      {desc && <p className="text-white/40 text-xs leading-relaxed">{desc}</p>}
    </div>
  )
}

/* ─── full-width image with caption ──────────────────────── */
function CaseImage({ src, alt, caption, className = '' }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.08 })
  return (
    <div ref={ref} style={getRevealStyle(isVisible, { duration: 700, distance: 24 })}>
      <figure className={`rounded-2xl overflow-hidden border border-white/[0.08] ${className}`}>
        <img src={src} alt={alt} className="w-full h-auto object-cover" loading="lazy" />
        {caption && (
          <figcaption className="px-5 py-3 text-xs text-white/35 text-center border-t border-white/[0.06]">
            {caption}
          </figcaption>
        )}
      </figure>
    </div>
  )
}

/* ─── sticky section nav ─────────────────────────────────── */
const NAV_ITEMS = [
  { id: 'overview',       label: 'Overview'        },
  { id: 'regulatory',     label: 'Regulatory'      },
  { id: 'ejar-plus',      label: 'EJAR Plus'       },
  { id: 'design-system',  label: 'Design System'   },
  { id: 'impact',         label: 'Impact'          },
]

function StickyNav({ active }) {
  return (
    <div className="sticky top-16 z-30 bg-bg/80 backdrop-blur-md border-b border-white/[0.06] -mx-6 md:-mx-10 px-6 md:px-10 mb-16">
      <nav className="flex gap-1 overflow-x-auto scrollbar-none py-3 max-w-5xl mx-auto">
        {NAV_ITEMS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={e => {
              e.preventDefault()
              document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}
            className="flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 whitespace-nowrap"
            style={
              active === id
                ? { background: `${TEAL}33`, color: TEAL_L, border: `1px solid ${TEAL}55` }
                : { color: 'rgba(255,255,255,0.4)', border: '1px solid transparent' }
            }
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════════════════════════════ */
export default function EjarCaseStudy() {
  const nextProject = getNextProject('ejar')
  const [activeSection, setActiveSection] = useState('overview')
  const sectionRefs = useRef({})

  /* track active section on scroll */
  useEffect(() => {
    const observers = NAV_ITEMS.map(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      )
      obs.observe(el)
      return obs
    }).filter(Boolean)
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <PageTransition>

      {/* ══════════ HERO ══════════════════════════════════════ */}
      <section
        className="relative pt-28 pb-20 overflow-hidden"
        style={{ background: `linear-gradient(160deg, ${TEAL_D} 0%, #0d0d0d 55%)` }}
      >
        {/* radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 70% 50% at 20% 50%, ${TEAL}25 0%, transparent 70%)` }}
        />

        <div className="relative max-w-5xl mx-auto px-6 md:px-10">
          {/* back */}
          <div className="mb-10">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All Projects
            </Link>
          </div>

          {/* tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['Real Estate', 'B2B SaaS', 'Design System', '15M+ Users'].map(t => (
              <span key={t} className="tag" style={{ borderColor: `${TEAL}55`, color: TEAL_L }}>{t}</span>
            ))}
          </div>

          {/* title */}
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-5">
            EJAR Platform<br />
            <span style={{ color: TEAL_L }}>&amp; EJAR Plus</span>
          </h1>
          <p className="text-white/55 text-xl leading-relaxed max-w-2xl mb-12">
            Designing regulatory compliance and premium B2B services for Saudi Arabia's national rental platform.
          </p>

          {/* meta row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/[0.08]"
               style={{ background: 'rgba(255,255,255,0.04)' }}>
            {[
              { label: 'Role',     value: 'Product Designer & DS Lead' },
              { label: 'Company',  value: 'NHC · Riyadh, KSA'          },
              { label: 'Timeline', value: 'Jul 2022 — Present'            },
              { label: 'Platform', value: 'Web + Mobile Responsive'     },
            ].map(item => (
              <div key={item.label} className="px-5 py-4" style={{ background: 'rgba(10,10,10,0.7)' }}>
                <p className="text-white/35 text-[10px] font-semibold uppercase tracking-widest mb-1">{item.label}</p>
                <p className="text-white text-sm font-medium leading-snug">{item.value}</p>
              </div>
            ))}
          </div>

          {/* highlight pills */}
          <div className="flex flex-wrap gap-4 mt-8">
            {[
              { value: '15M+', label: 'Platform Users'   },
              { value: '10M+', label: 'Contracts'        },
              { value: '14',   label: 'Services in 45d'  },
              { value: '92%',  label: 'Satisfaction Q1'  },
              { value: '67',   label: 'NPS Score'        },
            ].map(h => (
              <div
                key={h.label}
                className="px-5 py-3 rounded-2xl border text-center"
                style={{ borderColor: `${TEAL}44`, background: `${TEAL}18` }}
              >
                <p className="text-xl font-extrabold leading-none mb-1" style={{ color: TEAL_L }}>{h.value}</p>
                <p className="text-white/40 text-xs">{h.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ COVER IMAGE ═══════════════════════════════ */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <AnimatedSection>
            <div className="rounded-3xl overflow-hidden border border-white/[0.08]">
              <img src={ejarDashboard} alt="EJAR Smart Dashboard" className="w-full h-auto object-cover" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════ BODY ══════════════════════════════════════ */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-8">

        <StickyNav active={activeSection} />

        {/* ── OVERVIEW ──────────────────────────────────────── */}
        <section id="overview" className="scroll-mt-32">
          <AnimatedSection>
            <Label text="Overview" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Two platforms,<br />
              <span style={{ color: TEAL_L }}>one design lead.</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <AnimatedSection delay={0.05}>
              <div className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] h-full">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4 text-base" style={{ background: `${TEAL}22`, color: TEAL_L }}>👤</div>
                <h3 className="text-white font-bold text-lg mb-3">My Role</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  Lead designer responsible for the full spectrum of EJAR's product design — from government-mandated regulatory features to premium B2B subscription tools and foundational design system work.
                </p>
                <ul className="space-y-2">
                  {[
                    'EJAR platform regulatory features',
                    'EJAR Plus B2B subscription services',
                    'Design system governance & documentation',
                    'Cross-functional stakeholder alignment',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/50">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: TEAL_L }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] h-full">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4 text-base" style={{ background: `${TEAL}22`, color: TEAL_L }}>🗺️</div>
                <h3 className="text-white font-bold text-lg mb-3">Scope</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  Multi-year engagement covering three interlocking work streams — each requiring a different design mindset.
                </p>
                <div className="space-y-3">
                  {[
                    { letter: 'A', label: 'Regulatory Compliance', desc: '14 services in 45 days' },
                    { letter: 'B', label: 'EJAR Plus B2B Services', desc: '5 premium subscription features' },
                    { letter: 'C', label: 'Design System',          desc: 'Components, docs, governance' },
                  ].map(({ letter, label, desc }) => (
                    <div key={letter} className="flex items-center gap-3">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                        style={{ background: `${TEAL}33`, color: TEAL_L }}
                      >
                        {letter}
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{label}</p>
                        <p className="text-white/35 text-xs">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <SectionDivider />

        {/* ── SECTION A: REGULATORY ─────────────────────────── */}
        <section id="regulatory" className="scroll-mt-32">
          <AnimatedSection>
            <Label text="Part A — Regulatory Compliance" color="#f5a442" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              14 Services.<br />
              <span style={{ color: '#f5a442' }}>45 Days.</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed max-w-2xl">
              New Crown Prince regulations required rapid implementation of services governing landlord-tenant relationships and preventing rental market exploitation.
            </p>
          </AnimatedSection>

          {/* challenge callout */}
          <AnimatedSection delay={0.08} className="mt-10">
            <div
              className="p-6 md:p-8 rounded-2xl border"
              style={{ background: 'rgba(245,164,66,0.06)', borderColor: 'rgba(245,164,66,0.2)' }}
            >
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { icon: '⏱', label: 'Timeline',    body: '45 days for analysis, design, development, testing & launch' },
                  { icon: '🔗', label: 'Complexity',  body: 'Multi-stakeholder alignment: NHC, DGA, legal, engineering' },
                  { icon: '🚫', label: 'Constraint',  body: 'No time for user research — relied on heuristics & expertise' },
                ].map(c => (
                  <div key={c.label}>
                    <div className="text-2xl mb-2">{c.icon}</div>
                    <p className="text-[#f5a442] font-bold text-sm uppercase tracking-wider mb-1">{c.label}</p>
                    <p className="text-white/50 text-sm leading-relaxed">{c.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* services grid */}
          <div className="mt-12">
            <AnimatedSection>
              <h3 className="text-white font-bold text-xl mb-2">Services Delivered</h3>
              <p className="text-white/40 text-sm mb-6">6 of 14 highlighted below — all shipped on time.</p>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '🧮', title: 'Rent Calculator',              desc: 'Caps on Riyadh neighborhood pricing' },
                { icon: '🔄', title: 'Contract Auto-Renewal',         desc: 'Automated renewal control flows' },
                { icon: '📊', title: 'Price Increase Management',     desc: 'Regulated increase/decrease workflows' },
                { icon: '✍️',  title: 'Contract Terms Editing',       desc: 'Controlled mid-term amendments' },
                { icon: '🏛', title: 'Data Quality Enhancement',     desc: 'Government API integration (DGA)' },
                { icon: '✅', title: 'Property Verification',         desc: 'Landlord approval gate for updates' },
              ].map((s, i) => (
                <ServiceCard key={s.title} {...s} delay={i * 60} />
              ))}
            </div>
          </div>

          {/* approach */}
          <AnimatedSection className="mt-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-white font-bold text-xl mb-4">Approach</h3>
                <div className="space-y-3">
                  {[
                    { tag: 'Heuristics',          detail: "Nielsen's 10 usability principles as the design framework" },
                    { tag: "Hick's Law",           detail: 'Limited choices per step to reduce decision fatigue' },
                    { tag: "Tesler's Law",         detail: 'Absorbed complexity on our end, not the user\'s' },
                    { tag: 'Progressive Disclosure', detail: 'Complex forms revealed in manageable steps' },
                    { tag: 'Mobile-First',         detail: '80% of Saudi users access via mobile' },
                    { tag: 'Bilingual UX',         detail: 'Arabic/English error states, labels, and flows' },
                  ].map(a => (
                    <div key={a.tag} className="flex items-start gap-3">
                      <span
                        className="flex-shrink-0 px-2.5 py-0.5 rounded-md text-xs font-bold mt-0.5"
                        style={{ background: `${TEAL}22`, color: TEAL_L }}
                      >
                        {a.tag}
                      </span>
                      <span className="text-white/45 text-sm leading-relaxed">{a.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-4">Outcome</h3>
                <div className="space-y-4">
                  {[
                    { icon: '🚀', label: 'All 14 services launched on time',              sub: 'Zero delays in a 45-day sprint'            },
                    { icon: '⚖️', label: 'Full regulatory compliance achieved',             sub: 'Crown Prince mandate met'                  },
                    { icon: '🤝', label: 'Platform as neutral mediator',                   sub: 'Balanced landlord & tenant rights'          },
                    { icon: '📱', label: 'Mobile-first deployment',                        sub: 'Optimized for 80% mobile user base'         },
                  ].map(o => (
                    <div key={o.label} className="flex items-start gap-3 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                      <span className="text-xl">{o.icon}</span>
                      <div>
                        <p className="text-white text-sm font-semibold">{o.label}</p>
                        <p className="text-white/35 text-xs mt-0.5">{o.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        <SectionDivider />

        {/* ── SECTION B: EJAR PLUS ──────────────────────────── */}
        <section id="ejar-plus" className="scroll-mt-32">
          <AnimatedSection>
            <Label text="Part B — EJAR Plus" color={TEAL_L} />
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Premium B2B tools<br />
              <span style={{ color: TEAL_L }}>for brokerage offices.</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed max-w-2xl">
              EJAR Plus is a paid subscription layer offering professional-grade analytics, workflow automation, and team management for brokerage firms operating within EJAR.
            </p>
          </AnimatedSection>

          {/* dashboard image */}
          <div className="mt-10">
            <CaseImage src={ejarDashboard} alt="EJAR Plus Smart Dashboard" caption="Smart Dashboard — analytics and performance metrics for brokers" />
          </div>

          {/* services */}
          <div className="mt-12">
            <AnimatedSection>
              <h3 className="text-white font-bold text-xl mb-6">Services Designed</h3>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '📈', title: 'Smart Dashboard',         desc: 'Analytics, KPIs, and performance metrics' },
                { icon: '📋', title: 'Reports',                  desc: 'Financial and operational reporting tools' },
                { icon: '👥', title: 'User Management',          desc: 'Role-based access control for teams' },
                { icon: '📝', title: 'Contract Review',          desc: 'Approval workflows and commenting system' },
                { icon: '🔔', title: 'Notification Center',     desc: 'Centralized alerts and status updates' },
              ].map((s, i) => (
                <ServiceCard key={s.title} {...s} delay={i * 70} />
              ))}
            </div>
          </div>

          {/* packages page image */}
          <div className="mt-8">
            <CaseImage src={ejarPackages} alt="EJAR Plus Packages Page" caption="EJAR+ Packages Page — subscription tier selection" />
          </div>

          {/* challenge + approach */}
          <AnimatedSection className="mt-12">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02]">
                <h3 className="text-white font-bold text-lg mb-4">The B2B Design Challenge</h3>
                <div className="space-y-3">
                  {[
                    'Complex admin-level workflows with deep permission trees',
                    'Cross-functional collaboration with analytics and business teams',
                    'Professional users with zero tolerance for friction',
                    'Data-dense interfaces requiring clear visual hierarchy',
                  ].map(c => (
                    <div key={c} className="flex items-start gap-2 text-sm text-white/45">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-amber-400" />
                      {c}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02]">
                <h3 className="text-white font-bold text-lg mb-4">Design Principles</h3>
                <div className="space-y-3">
                  {[
                    'Data visualization best practices for dashboard density',
                    'Role-based interface customization per user type',
                    'Clear information architecture for deep navigation',
                    'Empty states and onboarding for new office admins',
                  ].map(p => (
                    <div key={p} className="flex items-start gap-2 text-sm text-white/45">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: TEAL_L }} />
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        <SectionDivider />

        {/* ── SECTION C: DESIGN SYSTEM ──────────────────────── */}
        <section id="design-system" className="scroll-mt-32">
          <AnimatedSection>
            <Label text="Part C — Design System" color="#a78bfa" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Components that<br />
              <span style={{ color: '#a78bfa' }}>scale with the product.</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed max-w-2xl">
              Technical debt in core components was slowing delivery and creating UX inconsistencies. I rebuilt the navigation system from scratch and standardized the component library.
            </p>
          </AnimatedSection>

          {/* work items */}
          <AnimatedSection delay={0.08} className="mt-10">
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              {[
                { icon: '🧭', title: 'Navigation Bar Redesign',      desc: 'Full rebuild with 12 role-case documentation pages, interaction specs, and responsive variants' },
                { icon: '🧩', title: 'Component Library Fixes',       desc: 'Resolved broken Figma instances, standardized spacing tokens, cleaned auto-layout drift' },
                { icon: '📖', title: 'Design System Docs',            desc: 'Comprehensive usage guidelines, do/don\'t examples, DGA Unified Design System compliance' },
              ].map((w, i) => (
                <div
                  key={w.title}
                  className="p-5 rounded-2xl border border-white/[0.07] bg-white/[0.02]"
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4 text-lg"
                       style={{ background: 'rgba(167,139,250,0.12)', color: '#a78bfa' }}>
                    {w.icon}
                  </div>
                  <p className="text-white font-semibold text-sm mb-2">{w.title}</p>
                  <p className="text-white/35 text-xs leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* navbar image full width */}
          <CaseImage src={ejarNavbar} alt="Navbar role cases" caption="Navigation Bar — 12 role-case documentation: tenant, broker, admin, and more" />

          {/* component screenshots grid */}
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <CaseImage src={ejarButtons}    alt="Design System — Buttons"    caption="DS Buttons" />
            <CaseImage src={ejarController} alt="Design System — Controller" caption="DS Controller" />
            <CaseImage src={ejarStepper}    alt="Design System — Stepper"    caption="DS Stepper" />
          </div>

          {/* outcomes */}
          <AnimatedSection className="mt-10">
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { value: 'Scalable', label: 'Component architecture', sub: 'Built for future features' },
                { value: 'Faster',   label: 'Feature delivery',        sub: 'Less rework per sprint'     },
                { value: 'DGA',      label: 'Compliance maintained',   sub: 'Unified design system'      },
              ].map(o => (
                <div
                  key={o.label}
                  className="p-5 rounded-2xl border text-center"
                  style={{ borderColor: 'rgba(167,139,250,0.25)', background: 'rgba(167,139,250,0.06)' }}
                >
                  <p className="text-xl font-extrabold mb-1" style={{ color: '#a78bfa' }}>{o.value}</p>
                  <p className="text-white text-sm font-medium">{o.label}</p>
                  <p className="text-white/35 text-xs mt-1">{o.sub}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </section>

        <SectionDivider />

        {/* ── IMPACT ────────────────────────────────────────── */}
        <section id="impact" className="scroll-mt-32">
          <AnimatedSection>
            <Label text="Impact & Results — Q1 2026" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              The numbers<br />
              <span style={{ color: TEAL_L }}>speak for themselves.</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed max-w-2xl">
              Measured satisfaction across EJAR Plus services following Q1 2026 survey. Quarter-over-quarter improvements across every tracked metric.
            </p>
          </AnimatedSection>

          {/* top-level KPIs */}
          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            {/* NPS big card */}
            <AnimatedSection delay={0.05}>
              <div
                className="p-8 rounded-2xl border h-full flex flex-col justify-between"
                style={{ background: `linear-gradient(135deg, ${TEAL_D} 0%, #0d1e1a 100%)`, borderColor: `${TEAL}44` }}
              >
                <div>
                  <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-2">Net Promoter Score</p>
                  <p className="text-7xl font-extrabold leading-none mb-2" style={{ color: TEAL_L }}>67</p>
                  <p className="text-white/40 text-sm">EJAR Plus · Q1 2026</p>
                </div>
                <div className="mt-6 pt-6 border-t border-white/[0.08]">
                  <p className="text-white/50 text-sm">
                    A strong NPS for a government-regulated B2B platform — reflecting genuine user advocacy among brokerage professionals.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* overall satisfaction */}
            <AnimatedSection delay={0.1}>
              <div
                className="p-8 rounded-2xl border h-full flex flex-col justify-between"
                style={{ background: `linear-gradient(135deg, ${TEAL_D} 0%, #0d1e1a 100%)`, borderColor: `${TEAL}44` }}
              >
                <div>
                  <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-2">Overall Satisfaction</p>
                  <p className="text-7xl font-extrabold leading-none mb-2" style={{ color: TEAL_L }}>92%</p>
                  <p className="text-white/40 text-sm">Across all EJAR Plus services</p>
                </div>
                <div className="mt-6 pt-6 border-t border-white/[0.08]">
                  <p className="text-white/50 text-sm">
                    Driven by improvements in all five service areas — from user management to contract review workflows.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* service satisfaction bars */}
          <AnimatedSection className="mt-8">
            <div
              className="p-6 md:p-8 rounded-2xl border border-white/[0.07] bg-white/[0.02]"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-bold text-lg">Service Satisfaction Breakdown</h3>
                <span className="text-xs text-white/30 font-medium">Q1 2026</span>
              </div>
              <div className="space-y-5">
                <MetricBar label="User Management"  value="100%" change="14% from Q4 2025" percent={100} delay={0}   />
                <MetricBar label="Contract Review"  value="96%"  change={null}             percent={96}  delay={80}  />
                <MetricBar label="Overall"          value="92%"  change={null}             percent={92}  delay={160} />
                <MetricBar label="Notifications"    value="91%"  change="8% from Q4 2025"  percent={91}  delay={240} />
                <MetricBar label="Reports"          value="82%"  change={null}             percent={82}  delay={320} />
              </div>
            </div>
          </AnimatedSection>

          {/* QoQ callout */}
          <AnimatedSection delay={0.08} className="mt-6">
            <div
              className="p-6 rounded-2xl border flex flex-wrap gap-6 items-center justify-between"
              style={{ background: 'rgba(77,184,154,0.05)', borderColor: 'rgba(77,184,154,0.2)' }}
            >
              <div>
                <p className="text-white font-semibold mb-1">Quarter-over-Quarter Growth</p>
                <p className="text-white/45 text-sm max-w-sm">
                  Two standout services improved significantly from Q4 2025 — a direct result of targeted redesigns and workflow refinements.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="text-center">
                  <p className="text-2xl font-extrabold" style={{ color: TEAL_L }}>+14%</p>
                  <p className="text-white/40 text-xs mt-1">User Management</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold" style={{ color: TEAL_L }}>+8%</p>
                  <p className="text-white/40 text-xs mt-1">Notifications</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        <SectionDivider />

        {/* ── KEY TAKEAWAYS ─────────────────────────────────── */}
        <section id="takeaways" className="scroll-mt-32 pb-8">
          <AnimatedSection>
            <Label text="Key Takeaways" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              What two years on<br />
              <span style={{ color: TEAL_L }}>a national platform taught me.</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {/* learnings */}
            <AnimatedSection delay={0.05}>
              <div className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] h-full">
                <h3 className="text-white font-bold text-lg mb-5">What I Learned</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Regulatory design is UX design',
                      body:  'Compliance requirements aren\'t constraints — they\'re design inputs. Framing regulations as user needs unlocks better solutions.',
                    },
                    {
                      title: 'B2B needs a different lens',
                      body:  'Professional users optimize for efficiency, not delight. Every extra click has a business cost.',
                    },
                    {
                      title: 'Design systems pay compound interest',
                      body:  'Every hour invested in system work saved three hours in the next sprint. Especially under tight regulatory timelines.',
                    },
                    {
                      title: 'Bilingual UX is non-negotiable in KSA',
                      body:  'Arabic-first design with English fallback — not translation. Language affects layout, flow, and interaction patterns.',
                    },
                  ].map(l => (
                    <div key={l.title} className="pb-4 border-b border-white/[0.05] last:border-0 last:pb-0">
                      <p className="text-white font-semibold text-sm mb-1">{l.title}</p>
                      <p className="text-white/40 text-sm leading-relaxed">{l.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* principles */}
            <AnimatedSection delay={0.1}>
              <div className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] h-full">
                <h3 className="text-white font-bold text-lg mb-5">Design Principles Applied</h3>
                <div className="space-y-3">
                  {[
                    { icon: '🎯', title: 'Clarity over creativity',         desc: 'In financial and legal flows, clarity builds trust. Cleverness kills it.' },
                    { icon: '📡', title: 'System status visibility',         desc: 'Users need to know where they are, what happened, and what\'s next — always.' },
                    { icon: '🧱', title: 'Progressive disclosure',           desc: 'Reveal complexity only when the user needs it. Protect cognitive bandwidth.' },
                    { icon: '📱', title: 'Mobile-first for Saudi market',    desc: '80% mobile usage means every decision starts with a 390px screen.' },
                    { icon: '♿', title: 'Accessible by default',            desc: 'WCAG 2.1 AA and RTL support aren\'t extras — they\'re launch requirements.' },
                  ].map(p => (
                    <div key={p.title} className="flex items-start gap-3 p-4 rounded-xl border border-white/[0.05] bg-white/[0.02]">
                      <span className="text-xl flex-shrink-0">{p.icon}</span>
                      <div>
                        <p className="text-white text-sm font-semibold mb-0.5">{p.title}</p>
                        <p className="text-white/35 text-xs leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>

      {/* ══════════ NEXT PROJECT ══════════════════════════════ */}
      {nextProject && (
        <section className="py-16 border-t border-white/[0.06]">
          <div className="max-w-5xl mx-auto px-6 md:px-10">
            <AnimatedSection>
              <p className="text-white/30 text-sm font-semibold uppercase tracking-widest mb-4">Next Project</p>
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
