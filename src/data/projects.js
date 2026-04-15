// Import Ejar images
import ejarDashboard from '@/assets/images/ejar/Smart Dashboard.jpg'
import ejarPackages from '@/assets/images/ejar/Ejar+ Packages page.jpg'
import ejarNavbar from '@/assets/images/ejar/navbar cases.jpg'
import ejarButtons from '@/assets/images/ejar/DS Buttons.jpg'
import ejarController from '@/assets/images/ejar/DS controller.jpg'
import ejarStepper from '@/assets/images/ejar/DS stepper.jpg'

// Import Momkn images
import momkn00 from '@/assets/images/momkn/Mobile app 00.jpg'
import momkn01 from '@/assets/images/momkn/Mobile app 01.jpg'
import momkn02 from '@/assets/images/momkn/Mobile app 02.jpg'
import momkn03 from '@/assets/images/momkn/Mobile app 03.jpg'
import momkn04 from '@/assets/images/momkn/Mobile app 04.jpg'
import momkn05 from '@/assets/images/momkn/Mobile app 05.jpg'
import momkn06 from '@/assets/images/momkn/Mobile app 06.jpg'
import momkn07 from '@/assets/images/momkn/Mobile app 07.jpg'
import momkn08 from '@/assets/images/momkn/Mobile app 08.jpg'
import momkn09 from '@/assets/images/momkn/Mobile app 09.jpg'
import momkn10 from '@/assets/images/momkn/Mobile app 10.jpg'
import momkn11 from '@/assets/images/momkn/Mobile app 11.jpg'
import momkn12 from '@/assets/images/momkn/Mobile app 12.jpg'
import momkn13 from '@/assets/images/momkn/Mobile app 13.jpg'
import momkn14 from '@/assets/images/momkn/Mobile app 14.jpg'

export const projects = [
  {
    id: 'ejar',
    slug: 'ejar',
    title: 'Ejar Platform',
    subtitle: 'Regulating Saudi Arabia\'s real estate rental sector.',
    description: 'National rental regulation platform for NHC, serving over 15M users and 10M contracts. Led 60+ UX enhancements and built a comprehensive design system.',
    tags: ['Real Estate', 'SAAS', '15M+ Users'],
    categories: ['real-estate', 'web', 'design-system'],
    role: 'Senior Product Designer',
    company: 'NHC · Riyadh, KSA',
    duration: 'Jul 2023 — Present',
    platform: 'Web + Mobile Responsive',
    coverImage: ejarDashboard,
    color: '#1a3a35',
    accentColor: '#2a7060',
    highlights: [
      { value: '15M+', label: 'Platform Users' },
      { value: '10M+', label: 'Contracts Managed' },
      { value: '60+', label: 'UX Enhancements' },
    ],
    sections: [
      {
        type: 'text',
        label: 'Overview',
        heading: "Saudi Arabia's National Rental Platform",
        body: "Ejar is an electronic network designed to regulate Saudi Arabia's real estate rental sector, ensuring the rights of tenants, lessors, and brokers. It aims to enhance confidence in the market and stimulate investment in real estate across the Kingdom.\n\nAs the key designer at NHC, I worked on this platform serving over 15 million users and 10 million contracts, collaborating with cross-functional teams to deliver 60+ targeted UX enhancements.",
      },
      {
        type: 'gallery',
        images: [ejarDashboard, ejarPackages, ejarNavbar],
        captions: ['Smart Dashboard', 'Ejar+ Packages Page', 'Navbar Role Cases'],
      },
      {
        type: 'text',
        label: 'The Challenge',
        heading: 'Managing 8 Interrelated User Roles',
        body: "The complexity of designing EJAR arose from managing 8 interrelated roles — Tenant, Lessor, Brokerage Officer, Brokerage Manager, Bank Representative, Admin Ejar, Ejar Officer, and Company Admin — where changes to one role could affect several others.\n\nDetailed BRDs and government regulations made it particularly complex. Each screen had to serve different permission levels while maintaining a consistent, intuitive experience.",
      },
      {
        type: 'gallery',
        images: [ejarButtons, ejarController, ejarStepper],
        captions: ['Design System — Buttons', 'Design System — Controller', 'Design System — Stepper'],
      },
      {
        type: 'text',
        label: 'Design System',
        heading: 'Building for Consistency at Scale',
        body: "I contributed to the Ejar design system by creating new components based on evolving product needs. Each component was thoroughly documented with clear guidelines on how and when to use them.\n\nThis documentation helped other designers understand system consistency and supported the development team in implementing designs accurately — reducing handoff friction and accelerating delivery cycles.",
      },
    ],
    next: 'momkn',
  },
  {
    id: 'momkn',
    slug: 'momkn',
    title: 'Ahly-Momkn App',
    subtitle: 'A fintech & bill payment app from the National Bank of Egypt.',
    description: 'Fintech bill payment app for the National Bank of Egypt. Led UI direction, built a custom glassmorphism icon set and a comprehensive design system.',
    tags: ['Fintech', 'Bill Payments', 'Mobile'],
    categories: ['fintech', 'mobile', 'design-system'],
    role: 'UX/UI Designer (Lead UI)',
    company: 'Tremoloo · National Bank of Egypt',
    duration: '2 Months',
    platform: 'iOS & Android',
    coverImage: momkn01,
    color: '#1a3535',
    accentColor: '#2a8070',
    highlights: [
      { value: '2mo', label: 'Delivery Timeline' },
      { value: '30+', label: 'Custom Icons' },
      { value: '1', label: 'Unified Design System' },
    ],
    sections: [
      {
        type: 'text',
        label: 'Overview',
        heading: 'Secure Financial Management for Millions',
        body: "Ahly Momkn is a fintech and bill payment app from the National Bank of Egypt, designed for secure, everyday financial management. Users can pay utility bills, top up mobile lines, book bus tickets, buy game credits, and more.\n\nAs the lead UI designer, I set the entire UI direction, designed every screen, created a custom glassmorphism icon set, and built a comprehensive design system.",
      },
      {
        type: 'screens',
        images: [momkn00, momkn01, momkn02, momkn03, momkn04, momkn05],
      },
      {
        type: 'text',
        label: 'Iconography System',
        heading: 'Custom Glassmorphism Icon Set',
        body: "To create a modern, premium look, I self-taught the glassmorphism technique to craft a fully custom icon set. This added depth and elegance through layered gradients, frosted glass effects, and subtle shadows.\n\nEvery icon was designed on a consistent grid with a two-tone teal and orange color language — aligned with the brand while remaining universally recognizable.",
      },
      {
        type: 'screens',
        images: [momkn06, momkn07, momkn08, momkn09, momkn10, momkn11],
      },
      {
        type: 'text',
        label: 'Design System',
        heading: 'Standardizing for Speed & Consistency',
        body: "I developed a comprehensive design system including standardized UI elements like buttons, form inputs, navigation bars, toast messages, and ticket components — each documented with usage guidelines.\n\nThe system ensured smooth collaboration and a seamless handoff between design and development, eliminating ambiguity and reducing revision cycles.",
      },
      {
        type: 'screens',
        images: [momkn12, momkn13, momkn14],
      },
    ],
    next: 'budget',
  },
  {
    id: 'budget',
    slug: 'budget',
    title: 'Budget App',
    subtitle: 'Easy, reliable car rentals — 1M+ downloads.',
    description: 'VIP car rental platform designed for Saudi Arabia. Seamless booking flows, vehicle selection, and payment experiences. Over 1 million downloads.',
    tags: ['Car Rental', 'VIP', '1M+ Downloads'],
    categories: ['mobile'],
    role: 'UI Designer',
    company: 'Tremoloo · Budget KSA',
    duration: '2 Months',
    platform: 'iOS & Android',
    coverImage: null,
    color: '#1a2535',
    accentColor: '#1e4080',
    highlights: [
      { value: '1M+', label: 'App Downloads' },
      { value: '2mo', label: 'Design Timeline' },
      { value: 'KSA', label: 'Primary Market' },
    ],
    sections: [
      {
        type: 'text',
        label: 'Overview',
        heading: 'The Go-To Car Rental App in Saudi Arabia',
        body: "Budget App is a VIP car rental platform that allows users to rent cars for business trips, getaways, or special occasions. With a wide selection of vehicles, a seamless booking process, and competitive pricing, it provides a user-friendly, efficient experience.\n\nThe app has been downloaded over 1 million times on app stores, reflecting its popularity and reliability across Saudi Arabia.",
      },
      {
        type: 'text',
        label: 'Design Challenge',
        heading: 'Simplifying a Complex Booking Flow',
        body: "Car rental apps involve many decision points — vehicle type, pickup location, dates, add-ons, loyalty points, and payment. The challenge was to reduce cognitive load while giving users the control they need.\n\nI used a progressive disclosure approach — showing only the most relevant information at each step, with clear calls-to-action that guided users naturally through the booking funnel.",
      },
      {
        type: 'text',
        label: 'Result',
        heading: '1 Million+ Downloads & Growing',
        body: "The app's clean, intuitive interface resonated with users. Budget App became a trusted choice for car rental across Saudi Arabia, surpassing 1 million downloads — a testament to the quality of the user experience delivered.",
      },
    ],
    next: 'sak',
  },
  {
    id: 'sak',
    slug: 'sak',
    title: 'SAK Platform',
    subtitle: 'Simplifying property buying in Saudi Arabia.',
    description: 'Real estate property buying platform. Achieved 58% increase in reservations and 20% user growth through UX improvements and a design token system.',
    tags: ['Real Estate', '+58% Reservations', 'Design Tokens'],
    categories: ['real-estate', 'mobile', 'design-system'],
    role: 'Senior Product Designer',
    company: 'SAK Real Estate · Riyadh',
    duration: 'Mar 2023 — Aug 2023',
    platform: 'iOS & Android',
    coverImage: null,
    color: '#2a2810',
    accentColor: '#c8aa00',
    highlights: [
      { value: '58%', label: 'Increase in Reservations' },
      { value: '20%', label: 'User Growth' },
      { value: '30%', label: 'Dev Time Reduced' },
    ],
    sections: [
      {
        type: 'text',
        label: 'Overview',
        heading: 'Your Trusted Real Estate Partner',
        body: "SAK App is a real estate platform designed to make property buying in Saudi Arabia easier and more transparent. Connecting buyers with real estate developers, it offers a range of properties, secure payment options, and clear information to simplify the purchasing process.",
      },
      {
        type: 'text',
        label: 'Design Tokens',
        heading: 'Empowering Developers with Figma Variables',
        body: "I adopted Figma Variables for defining design tokens — colors, spacing, border radii, and typography — which enhanced collaboration between design and development. This allowed for clear, structured specifications easily understood by developers, leading to a 30% reduction in development time.",
      },
      {
        type: 'text',
        label: 'Results',
        heading: 'Measurable Business Impact',
        body: "The redesigned SAK platform achieved a 58% increase in property reservations and 20% user growth — direct results of a more intuitive, trustworthy UX. The design system reduced development time by 30%, enabling the team to ship updates faster and more consistently.",
      },
    ],
    next: 'cinema',
  },
  {
    id: 'cinema',
    slug: 'cinema',
    title: 'Cinema X',
    subtitle: 'Effortless cinema ticket bookings.',
    description: 'Dark, immersive cinema ticket booking app. Book tickets in 3 taps — search cinemas, browse showtimes, choose seats, and pay.',
    tags: ['Entertainment', 'Ticket Booking', 'Cinema'],
    categories: ['mobile'],
    role: 'UX/UI Designer',
    company: 'Dipdux Analytica',
    duration: '2 Months',
    platform: 'iOS & Android',
    coverImage: null,
    color: '#2a1015',
    accentColor: '#c03030',
    highlights: [
      { value: '3', label: 'Taps to Book' },
      { value: '2mo', label: 'Design Timeline' },
      { value: '0', label: 'Queue Time' },
    ],
    sections: [
      {
        type: 'text',
        label: 'Overview',
        heading: 'No More Queues — Just Great Movies',
        body: "CinemaX simplifies the cinema ticket reservation process. Users can search for cinemas, browse showtimes, and reserve tickets with just a few taps — eliminating the need to stand in long queues.\n\nThe app was designed to feel fast, immersive, and effortless — matching the excitement of going to the movies.",
      },
      {
        type: 'text',
        label: 'Design Approach',
        heading: 'Dark, Immersive, Cinema-First',
        body: "I designed CinemaX with a dark theme that puts movies front and center — large poster visuals, bold typography, and a high-contrast red accent color that evokes the energy of cinema.\n\nThe seat selection screen was made intuitive through a top-down theater view with clear color coding: available, selected, and unavailable seats all at a glance.",
      },
    ],
    next: 'logcircle',
  },
  {
    id: 'logcircle',
    slug: 'logcircle',
    title: 'Log Circle',
    subtitle: 'Connecting logistics service providers globally.',
    description: 'Web platform connecting importers and exporters with logistics providers. Complex shipping data presented in an intuitive, user-friendly interface.',
    tags: ['Logistics', 'Shipping', 'Web Platform'],
    categories: ['web', 'fintech'],
    role: 'UI Designer',
    company: 'Dipdux Analytica',
    duration: '4+ Months',
    platform: 'Web Application',
    coverImage: null,
    color: '#101828',
    accentColor: '#2a4a70',
    highlights: [
      { value: '3', label: 'User Roles' },
      { value: '4mo', label: 'Design Timeline' },
      { value: 'B2B', label: 'Platform Type' },
    ],
    sections: [
      {
        type: 'text',
        label: 'Overview',
        heading: 'Connecting the Global Trade Ecosystem',
        body: "Log Circle is a web platform that connects importers and exporters with transportation and logistics service providers. Users find and hire companies for shipping needs, while providers access new clients and expand their business opportunities.",
      },
      {
        type: 'text',
        label: 'The Challenge',
        heading: 'Complex Data Made Human',
        body: "The challenge was presenting complex shipping data — container types, package weights, volumes, customs terms, and shipment timelines — in a user-friendly format.\n\nWe aimed to simplify the trading process and shipment tracking, creating an intuitive interface that improved user efficiency and reduced the time needed to complete common tasks.",
      },
    ],
    next: 'ejar',
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)
export const getNextProject = (slug) => {
  const current = getProject(slug)
  return current ? getProject(current.next) : null
}
