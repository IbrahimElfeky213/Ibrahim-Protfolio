import { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import AnimatedSection from '../components/AnimatedSection'

const contactInfo = [
  {
    label: 'Email',
    value: 'ibrahim.elfeky@gmail.com',
    href: 'mailto:ibrahim.elfeky@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2 5l8 6 8-6M2 5h16v10H2V5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Cairo, Egypt',
    href: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2C6.686 2 4 4.686 4 8c0 4.5 6 10 6 10s6-5.5 6-10c0-3.314-2.686-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Availability',
    value: 'Open to opportunities',
    href: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

const quickLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/ibrahimelfeky' },
  { label: 'Behance', href: 'https://behance.net/ibrahimelfeky' },
  { label: 'Dribbble', href: 'https://dribbble.com/ibrahimelfeky' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email address'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    // Simulate async send
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSent(true)
  }

  const handleChange = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    if (errors[field]) setErrors((er) => ({ ...er, [field]: '' }))
  }

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
            Contact
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-5">
            Let's <span className="gradient-text">Work Together</span>
          </h1>
          <p className="text-muted text-xl max-w-xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something remarkable.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form — 3 cols */}
            <AnimatedSection direction="left" className="lg:col-span-3">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-bg-2 border border-white/[0.08] rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M6 16l7 7 13-13" stroke="#E8784A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-3">Message Sent!</h3>
                  <p className="text-muted">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-bg-2 border border-white/[0.08] rounded-2xl p-8 md:p-10 space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-muted font-medium mb-2">Name *</label>
                      <input
                        className={`input ${errors.name ? 'border-red-500/60' : ''}`}
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange('name')}
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm text-muted font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        className={`input ${errors.email ? 'border-red-500/60' : ''}`}
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange('email')}
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-muted font-medium mb-2">Subject</label>
                    <input
                      className="input"
                      placeholder="Project collaboration, job opportunity…"
                      value={form.subject}
                      onChange={handleChange('subject')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted font-medium mb-2">Message *</label>
                    <textarea
                      rows={6}
                      className={`input resize-none ${errors.message ? 'border-red-500/60' : ''}`}
                      placeholder="Tell me about your project or idea…"
                      value={form.message}
                      onChange={handleChange('message')}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" strokeDasharray="40" strokeDashoffset="10" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M2 8h12M8 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatedSection>

            {/* Info — 2 cols */}
            <AnimatedSection direction="right" delay={0.1} className="lg:col-span-2 space-y-6">
              {/* Contact details */}
              <div className="bg-bg-2 border border-white/[0.08] rounded-2xl p-6 md:p-8">
                <h3 className="text-white font-bold text-lg mb-6">Contact Details</h3>
                <div className="space-y-5">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center text-accent shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-muted text-xs font-semibold uppercase tracking-widest mb-0.5">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a href={item.href} className="text-white text-sm hover:text-accent transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white text-sm">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick links */}
              <div className="bg-bg-2 border border-white/[0.08] rounded-2xl p-6 md:p-8">
                <h3 className="text-white font-bold text-lg mb-6">Find Me Online</h3>
                <div className="space-y-3">
                  {quickLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl border border-white/[0.08] hover:border-accent/40 hover:bg-accent/5 transition-all group"
                    >
                      <span className="text-muted text-sm group-hover:text-white transition-colors">
                        {link.label}
                      </span>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-dim group-hover:text-accent transition-colors">
                        <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Response time */}
              <div
                className="rounded-2xl p-6"
                style={{ background: 'linear-gradient(135deg, rgba(232,120,74,0.12) 0%, rgba(232,120,74,0.05) 100%)', border: '1px solid rgba(232,120,74,0.2)' }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white text-sm font-semibold">Currently Available</span>
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  I typically respond within 24 hours. For urgent inquiries, reach out directly on LinkedIn.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
