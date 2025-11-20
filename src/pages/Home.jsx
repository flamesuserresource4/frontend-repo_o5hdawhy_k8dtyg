import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import { ValuePillars, FeaturedProducts, ServicesOverview, CaseLogos, Footer } from '../components/Sections'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero
        title="The Digital Core for Modern Banking"
        subtitle="Cloud-native | Modular | API-first | Secure"
        primaryCta={
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-900/40 ring-1 ring-white/10 transition hover:bg-red-500"
          >
            Book a Demo
          </Link>
        }
        secondaryCta={
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Download Brochure
          </a>
        }
      />
      <ValuePillars />
      <FeaturedProducts />
      <ServicesOverview />
      <CaseLogos />
      <Footer />
    </div>
  )
}
