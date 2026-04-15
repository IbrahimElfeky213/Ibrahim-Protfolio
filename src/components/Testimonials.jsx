import AnimatedSection from './AnimatedSection'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Ziad Khaled',
    title: 'Senior Software Engineer · Mobile Team Lead',
    gender: 'male',
    date: 'Dec 2024',
    text: "I had the privilege of working alongside Ibrahim for two years, and I can confidently say that he is one of the most talented Product Designers I've ever collaborated with. His creativity, attention to detail, and user-centered approach have significantly contributed to the success of our projects and the overall growth of the company. His collaborative spirit, professionalism, and genuine kindness make him a joy to work with.",
  },
  {
    name: 'Nourhan Elkomi',
    title: 'Product Designer',
    gender: 'female',
    date: 'Feb 2023',
    text: "I highly recommend Ibrahim for his exceptional UI design skills. He has a natural talent for creating beautiful and intuitive user interfaces that effectively communicate a brand's message and purpose. What sets him apart is his ability to not only create aesthetically pleasing designs, but also to consider the functionality and user experience of the product. Ibrahim is an asset to any team.",
  },
  {
    name: 'Deyaa Eldeen Hassan',
    title: 'UX/UI Team Lead · 6+ Years in UX/UI Design',
    gender: 'male',
    date: 'Jan 2023',
    text: "Ibrahim has a natural talent for understanding user needs and creating designs that not only look good but are also functional and user-friendly. He is a team player and is always willing to go the extra mile to ensure that the end product meets the highest standards. I highly recommend Ibrahim for any Product Design role — he will be sure to exceed your expectations.",
  },
  {
    name: 'Bassel Mahdy',
    title: 'UX Lead · Al Rajhi Capital',
    gender: 'male',
    date: 'Jan 2023',
    text: "Ibrahim is a talented and dedicated Product Designer with a strong passion for creating intuitive and visually stunning designs. I have had the pleasure of working with him on several projects, and was consistently impressed by his ability to take a project from concept to completion with minimal guidance.",
  },
  {
    name: 'Ahmed Mealy',
    title: 'Senior Product Designer · webook.com',
    gender: 'male',
    date: 'Dec 2022',
    text: "We collaborated on many projects. He is always willing to share best practices, very committed and focused on delivering on time. He is a top performer who seeks to improve himself and always stays up to date with the latest technologies. I enjoyed working with him — highly recommended.",
  },
  {
    name: 'Nehal Mohsen',
    title: 'Senior Product Designer & Design Lead · Fintech / Gov / SaaS',
    gender: 'female',
    date: 'Aug 2022',
    text: "Ibrahim is a passionate, hard worker and always willing to learn — he delivers fast with quality. He communicates professionally with clients, especially given his excellent development background. A truly reliable designer and collaborator.",
  },
]

function Avatar({ name, gender }) {
  const initials = name.split(' ').map((w) => w[0]).join('').slice(0, 2)
  const isFemale = gender === 'female'

  return (
    <div
      className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
      style={{
        background: isFemale
          ? 'linear-gradient(135deg, #c084fc, #e879f9)'
          : 'linear-gradient(135deg, #E8784A, #f0a070)',
      }}
    >
      {initials}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-24 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <AnimatedSection className="mb-14 text-center">
          <div className="section-label justify-center">Testimonials</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            What People Say
          </h2>
        </AnimatedSection>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="break-inside-avoid bg-bg-2 border border-white/[0.08] rounded-2xl p-6 hover:border-white/15 transition-colors duration-300"
            >
              {/* Quote mark */}
              <div className="text-accent text-3xl font-serif leading-none mb-4 opacity-60">"</div>

              {/* Text */}
              <p className="text-muted text-sm leading-relaxed mb-6">{t.text}</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <Avatar name={t.name} gender={t.gender} />
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-dim text-xs mt-0.5">{t.title}</p>
                </div>
                <span className="ml-auto text-dim text-xs shrink-0">{t.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* LinkedIn link */}
        <AnimatedSection className="mt-12 text-center">
          <a
            href="https://linkedin.com/in/ibrahimelfeky"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted hover:text-white text-sm transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            View all recommendations on LinkedIn
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
