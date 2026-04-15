import { Link } from 'react-router-dom'

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ibrahimelfeky21/' },
  { label: 'Behance', href: 'https://www.behance.net/ibrahimelfeky' },
  { label: 'Dribbble', href: 'https://dribbble.com/Ibrahimelfeky21' },
]

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] mt-0">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                style={{ background: '#E8784A' }}
              >
                IE
              </div>
              <span className="text-white font-semibold">Ibrahim Elfeky</span>
            </Link>
            <p className="text-dim text-sm max-w-xs leading-relaxed">
              Senior Product Designer crafting digital experiences in fintech, real estate & beyond.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-10">
            <div>
              <p className="text-muted text-xs font-semibold uppercase tracking-widest mb-4">Navigation</p>
              <ul className="space-y-2">
                {navLinks.map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} className="text-dim hover:text-white text-sm transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-muted text-xs font-semibold uppercase tracking-widest mb-4">Find Me</p>
              <ul className="space-y-2">
                {socials.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dim hover:text-white text-sm transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-dim text-xs">© 2026 Ibrahim Elfeky. All rights reserved.</p>
          <p className="text-dim text-xs">
            Designed & built with{' '}
            <span className="text-accent">♥</span>
            {' '}in Cairo, Egypt
          </p>
        </div>
      </div>
    </footer>
  )
}
