import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import { ValuePillars, FeaturedProducts, ServicesOverview, CaseLogos, Footer } from '../components/Sections'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero
        title="The Digital Core for Modern Banking"
        subtitle="Cloud-native | Modular | API-first | Secure"
        primaryCta={
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-red-500"
          >
            Book a Demo
          </Link>
        }
        secondaryCta={
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
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
