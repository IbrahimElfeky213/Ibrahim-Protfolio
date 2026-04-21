import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import AnimatedSection from '../components/AnimatedSection'
import profileImg from '../assets/images/profile.jpg'
import Testimonials from '../components/Testimonials'

const experience = [
  {
    role: 'Senior Product Designer',
    company: 'NHC (National Housing Company)',
    location: 'Riyadh, KSA',
    period: 'Jul 2023 — Present',
    description:
      'Leading UX design for Ejar — Saudi Arabia\'s national real estate rental platform serving 15M+ users. Delivered 60+ UX enhancements, built design system components, and collaborated with cross-functional government teams.',
  },
  {
    role: 'UX/UI Designer (Lead UI)',
    company: 'Tremoloo',
    location: 'Cairo, Egypt (Remote)',
    period: '2022 — 2023',
    description:
      'Led UI direction for multiple client products including Ahly-Momkn (National Bank of Egypt), Budget KSA, and others. Created custom icon sets, design systems, and handled full design-to-handoff cycles.',
  },
  {
    role: 'UX/UI Designer',
    company: 'Dipdux Analytica',
    location: 'Cairo, Egypt',
    period: '2021 — 2022',
    description:
      'Designed mobile and web products including CinemaX and Log Circle. Focused on UX research, wireframing, prototyping, and delivering pixel-perfect UI across iOS, Android, and web.',
  },
  {
    role: 'UI Designer',
    company: 'Freelance',
    location: 'Remote',
    period: '2018 — 2021',
    description:
      'Worked with various clients on branding, UI design, and front-end development. Built skills across visual design, interaction design, and HTML/CSS/JS implementation.',
  },
]

const skillCategories = [
  {
    title: 'Design',
    skills: ['UX Research', 'User Testing', 'Wireframing', 'Prototyping', 'Interaction Design', 'Visual Design'],
  },
  {
    title: 'Tools',
    skills: ['Figma', 'FigJam', 'Maze', 'Hotjar', 'Notion', 'Jira'],
  },
  {
    title: 'Systems',
    skills: ['Design Systems', 'Design Tokens', 'Figma Variables', 'Component Libraries', 'Documentation'],
  },
  {
    title: 'Development',
    skills: ['HTML / CSS', 'JavaScript', 'React (basics)', 'Tailwind CSS', 'Responsive Design'],
  },
]

const certifications = [
  {
    title: 'UX Advanced Nanodegree',
    org: 'Udacity',
    logo: 'https://logo.clearbit.com/udacity.com',
    link: 'https://www.udacity.com/course/ux-designer-nanodegree--nd578',
  },
  {
    title: 'Google UX Design Specialization',
    org: 'Google / Coursera',
    logo: 'https://logo.clearbit.com/coursera.org',
    link: 'https://www.coursera.org/professional-certificates/google-ux-design',
  },
  {
    title: 'Product Designer Certification',
    org: 'Uxcel',
    logo: 'https://logo.clearbit.com/uxcel.com',
    link: 'https://uxcel.com/certifications/product-designer',
  },
  {
    title: 'UX/UI Designer Certification',
    org: 'Uxcel',
    logo: 'https://logo.clearbit.com/uxcel.com',
    link: 'https://uxcel.com/certifications/ux-ui-designer',
  },
  {
    title: 'UX Writer Certification',
    org: 'Uxcel',
    logo: 'https://logo.clearbit.com/uxcel.com',
    link: 'https://uxcel.com/certifications/ux-writer',
  },
  {
    title: 'Product Discovery',
    org: 'Uxcel',
    logo: 'https://logo.clearbit.com/uxcel.com',
    link: 'https://uxcel.com/',
  },
  {
    title: 'Customer Experience Certification',
    org: 'CX Academy',
    logo: 'https://logo.clearbit.com/cxacademy.online',
    link: 'https://cxacademy.online/',
  },
  {
    title: 'McKinsey Forward Program',
    org: 'McKinsey & Company',
    logo: 'https://logo.clearbit.com/mckinsey.com',
    link: 'https://www.mckinsey.com/forward/overview',
  },
  {
    title: 'Product Strategy',
    org: 'Product School',
    logo: 'https://logo.clearbit.com/productschool.com',
    link: 'https://productschool.com/',
  },
  {
    title: 'Effective Leadership',
    org: 'HP Life',
    logo: 'https://logo.clearbit.com/life-global.org',
    link: 'https://www.life-global.org/',
  },
]

export default function About() {
  return (
    <PageTransition>
      {/* ─── HERO ─────────────────────────────────── */}
      <section className="pt-36 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 50% at 30% 20%, rgba(232,120,74,0.07) 0%, transparent 65%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label">
                About Me
              </div>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-6">
                Designer who{' '}
                <span className="gradient-text">thinks in systems</span>
                , feels for users.
              </h1>
              <p className="text-muted text-lg leading-relaxed mb-4">
                Hi, I'm Ibrahim — a Senior Product Designer based in Cairo, Egypt, with 6+ years of
                experience designing digital products used by millions across the MENA region.
              </p>
              <p className="text-muted text-lg leading-relaxed mb-4">
                My background in front-end development gives me a unique perspective: I understand
                both the user's need and the technical constraints, allowing me to design solutions
                that are not only beautiful but actually buildable.
              </p>
              <p className="text-muted text-lg leading-relaxed mb-8">
                I thrive on complexity — whether managing 8 user roles on a government platform,
                building a design system from scratch, or turning a confusing user journey into
                something that just works.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://drive.google.com/file/d/1AMHnUeRJQJkdc28ijheEBdBd1KVN3FRF/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2v8M4 7l4 4 4-4M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  PDF Portfolio
                </a>
                <a
                  href="https://drive.google.com/file/d/1zxz4lGanMIX1hKwoql02lBueWvBW6oB-/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2v8M4 7l4 4 4-4M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Resume
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative max-w-sm mx-auto">
                <div
                  className="absolute inset-0 rounded-3xl blur-3xl opacity-25"
                  style={{ background: 'radial-gradient(circle, #E8784A 0%, transparent 70%)' }}
                />
                <div className="relative rounded-3xl overflow-hidden border border-white/10">
                  <img src={profileImg} alt="Ibrahim Elfeky" className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE ────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <AnimatedSection className="mb-14">
            <div className="section-label">Experience</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Where I've Worked
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-white/[0.08] hidden md:block" />

            <div className="space-y-10">
              {experience.map((exp, i) => (
                <AnimatedSection key={i} delay={i * 0.08} className="md:pl-10 relative">
                  {/* Dot */}
                  <div className="hidden md:block absolute left-0 top-2 w-2 h-2 rounded-full bg-accent -translate-x-[3px]" />
                  <div className="bg-bg-2 border border-white/[0.08] rounded-2xl p-6 md:p-8 hover:border-white/15 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-white font-bold text-xl">{exp.role}</h3>
                        <p className="text-accent text-sm font-semibold mt-0.5">
                          {exp.company} · {exp.location}
                        </p>
                      </div>
                      <span className="text-muted text-sm whitespace-nowrap shrink-0">{exp.period}</span>
                    </div>
                    <p className="text-muted leading-relaxed">{exp.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SKILLS ────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <AnimatedSection className="mb-14">
            <div className="section-label">Skills</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              My Toolkit
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, ci) => (
              <AnimatedSection key={cat.title} delay={ci * 0.1}>
                <div className="bg-bg-2 border border-white/[0.08] rounded-2xl p-6 h-full">
                  <h3 className="text-accent font-semibold text-sm uppercase tracking-widest mb-5">
                    {cat.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {cat.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2 text-muted text-sm">
                        <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EDUCATION & CERTS ─────────────────────── */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Education */}
            <AnimatedSection direction="left">
              <div className="section-label">Education</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">Academic Background</h2>
              <div className="space-y-4">
                <div className="bg-bg-2 border border-white/[0.08] rounded-2xl p-6 md:p-8">
                  <h3 className="text-white font-bold text-xl">Bachelor of Management Information Systems</h3>
                  <p className="text-accent text-sm font-semibold mt-1">Obour Higher Institute · Cairo, Egypt</p>
                  <p className="text-muted text-sm mt-4 leading-relaxed">
                    Studied management, databases, programming, and networking.
                    Graduated cum laude each year — building a strong analytical foundation
                    that shapes my data-informed approach to product design.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Certifications */}
            <AnimatedSection direction="right" delay={0.1}>
              <div className="section-label">Certifications</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">Continuous Learning</h2>
              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                  >
                    {cert.link ? (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-bg-2 border border-white/[0.08] rounded-xl p-5 flex items-start gap-4 hover:border-accent/40 hover:bg-accent/[0.03] transition-all duration-200 group"
                      >
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 overflow-hidden bg-white/[0.06]">
                          <img
                            src={cert.logo}
                            alt={cert.org}
                            className="w-7 h-7 object-contain"
                            onError={(e) => {
                              e.target.style.display = 'none'
                              e.target.parentElement.style.background = 'rgba(232,120,74,0.15)'
                              e.target.parentElement.innerHTML = `<span style="color:#E8784A;font-size:11px;font-weight:700">${cert.org.slice(0,2).toUpperCase()}</span>`
                            }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <p className="text-white text-sm font-semibold group-hover:text-accent transition-colors">{cert.title}</p>
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                              <path d="M1 10L10 1M10 1H4M10 1V7" stroke="#E8784A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <p className="text-muted text-xs mt-0.5">{cert.org}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="bg-bg-2 border border-white/[0.08] rounded-xl p-5 flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 overflow-hidden bg-white/[0.06]">
                          <img
                            src={cert.logo}
                            alt={cert.org}
                            className="w-7 h-7 object-contain"
                            onError={(e) => {
                              e.target.style.display = 'none'
                              e.target.parentElement.innerHTML = `<span style="color:#E8784A;font-size:11px;font-weight:700">${cert.org.slice(0,2).toUpperCase()}</span>`
                            }}
                          />
                        </div>
                        <div>
                          <p className="text-white text-sm font-semibold">{cert.title}</p>
                          <p className="text-muted text-xs mt-0.5">{cert.org}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Testimonials />
    </PageTransition>
  )
}
