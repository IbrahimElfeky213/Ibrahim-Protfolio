import AnimatedSection from './AnimatedSection'
import imgZiad from '../assets/images/ziad-khaled.png'
import imgNourhan from '../assets/images/nourhan-elkomi.jpg'
import imgDeyaa from '../assets/images/deyaa-eldeen.jpg'
import imgBassel from '../assets/images/bassel-mahdy.png'
import imgAhmed from '../assets/images/ahmed-mealy.jpeg'

const testimonials = [
  {
    name: 'Ziad Khaled',
    title: 'Senior Software Engineer · Mobile Team Lead',
    gender: 'male',
    date: 'Dec 2024',
    image: imgZiad,
    text: "I had the privilege of working alongside Ibrahim for two years, and I can confidently say that he is one of the most talented Product Designers I've ever collaborated with. His creativity, attention to detail, and user-centered approach have significantly contributed to the success of our projects. His collaborative spirit, professionalism, and genuine kindness make him a joy to work with.",
  },
  {
    name: 'Nourhan Elkomi',
    title: 'Product Designer',
    gender: 'female',
    date: 'Feb 2023',
    image: imgNourhan,
    text: "I highly recommend Ibrahim for his exceptional UI design skills. He has a natural talent for creating beautiful and intuitive user interfaces that effectively communicate a brand's message. What sets him apart is his ability to not only create aesthetically pleasing designs, but also to consider the functionality and user experience of the product. Ibrahim is an asset to any team.",
  },
  {
    name: 'Deyaa Eldeen Hassan',
    title: 'UX/UI Team Lead · 6+ Years in UX/UI Design',
    gender: 'male',
    date: 'Jan 2023',
    image: imgDeyaa,
    text: "Ibrahim has a natural talent for understanding user needs and creating designs that not only look good but are also functional and user-friendly. He is a team player and is always willing to go the extra mile to ensure that the end product meets the highest standards. I highly recommend Ibrahim for any Product Design role.",
  },
  {
    name: 'Bassel Mahdy',
    title: 'UX Lead · Al Rajhi Capital',
    gender: 'male',
    date: 'Jan 2023',
    image: imgBassel,
    text: "Ibrahim is a talented and dedicated Product Designer with a strong passion for creating intuitive and visually stunning designs. I have had the pleasure of working with him on several projects, and was consistently impressed by his ability to take a project from concept to completion with minimal guidance.",
  },
  {
    name: 'Ahmed Mealy',
    title: 'Senior Product Designer · webook.com',
    gender: 'male',
    date: 'Dec 2022',
    image: imgAhmed,
    text: "We collaborated on many projects. He is always willing to share best practices, very committed and focused on delivering on time. He is a top performer who seeks to improve himself and always stays up to date with the latest technologies. I enjoyed working with him — highly recommended.",
  },
  {
    name: 'Nehal Mohsen',
    title: 'Senior Product Designer & Design Lead · Fintech / Gov / SaaS',
    gender: 'female',
    date: 'Aug 2022',
    image: 'https://i.pravatar.cc/80?img=45',
    text: "Ibrahim is a passionate, hard worker and always willing to learn — he delivers fast with quality. He communicates professionally with clients, especially given his excellent development background. A truly reliable designer and collaborator.",
  },
]

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16" rx="3" fill="#0A66C2"/>
      <path d="M5.5 6.5H4V12H5.5V6.5ZM4.75 5.75C4.198 5.75 3.75 5.302 3.75 4.75C3.75 4.198 4.198 3.75 4.75 3.75C5.302 3.75 5.75 4.198 5.75 4.75C5.75 5.302 5.302 5.75 4.75 5.75ZM12.25 12H10.75V9.375C10.75 8.616 10.134 8 9.375 8C8.616 8 8 8.616 8 9.375V12H6.5V6.5H8V7.266C8.396 6.793 8.987 6.5 9.625 6.5C11.075 6.5 12.25 7.675 12.25 9.125V12Z" fill="white"/>
    </svg>
  )
}

function TestimonialCard({ t }) {
  return (
    <div
      className="shrink-0 w-[360px] rounded-2xl p-7 border border-white/[0.07] flex flex-col gap-5"
      style={{ background: '#161616' }}
    >
      {/* Header: avatar + name + title */}
      <div className="flex items-center gap-3.5">
        <img
          src={t.image}
          alt={t.name}
          className="w-14 h-14 rounded-full object-cover shrink-0 border border-white/10"
          onError={(e) => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
        />
        {/* Fallback avatar */}
        <div
          className="w-14 h-14 rounded-full shrink-0 items-center justify-center text-sm font-bold text-white hidden"
          style={{ background: t.gender === 'female' ? 'linear-gradient(135deg,#c084fc,#e879f9)' : 'linear-gradient(135deg,#E8784A,#f0a070)' }}
        >
          {t.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-0.5">
            <p className="text-white font-semibold text-sm leading-tight truncate">{t.name}</p>
            <LinkedInIcon />
          </div>
          <p className="text-white/40 text-xs leading-snug line-clamp-1">{t.title}</p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/[0.07]" />

      {/* Text */}
      <p className="text-white/65 text-sm leading-relaxed flex-1">{t.text}</p>
    </div>
  )
}

export default function Testimonials() {
  // Duplicate for seamless loop
  const doubled = [...testimonials, ...testimonials]

  return (
    <section className="py-24 border-t border-white/[0.06]">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-14">
        <AnimatedSection className="text-center">
          <div className="section-label justify-center">Testimonials</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            What People Say
          </h2>
        </AnimatedSection>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Fade left edge */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to right, #0a0a0a, transparent)' }}
        />
        {/* Fade right edge */}
        <div
          className="absolute right-0 top-0 bottom-0 w-24 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to left, #0a0a0a, transparent)' }}
        />

        <div className="marquee-right-track flex gap-4 pb-2">
          {doubled.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>

      {/* LinkedIn link */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-12 text-center">
        <a
          href="https://www.linkedin.com/in/ibrahimelfeky21/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-muted hover:text-white text-sm transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          View all recommendations on LinkedIn
        </a>
      </div>
    </section>
  )
}
