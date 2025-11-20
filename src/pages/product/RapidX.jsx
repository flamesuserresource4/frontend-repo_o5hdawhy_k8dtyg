import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import { Footer } from '../../components/Sections'
import { Link } from 'react-router-dom'

const modules = ['Remittance Engine','FX Engine','Agent Network','White-Label Apps','AML Screening']

export default function RapidX() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero
        title="RapidX: Digital Remittances Platform"
        subtitle="Real-time cross-border remittances with built-in compliance and FX"
        primaryCta={<Link to="/contact" className="rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white">Book Demo</Link>}
        secondaryCta={<a href="#" className="rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white">Download Brochure</a>}
      />

      <section className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="text-2xl font-bold text-white">Key Modules</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m) => (
            <div key={m} className="rounded-xl border border-white/10 bg-slate-900/60 p-5 text-white">{m}</div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-dashed border-white/15 p-8 text-center text-slate-400">
          Workflow Diagram Section
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-slate-900/60 p-6 text-white">Case Study Highlight</div>
          <div className="rounded-xl border border-white/10 bg-slate-900/60 p-6 text-white">Global agent onboarding at scale</div>
        </div>
      </section>

      <section className="py-10 text-center">
        <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white">Schedule your demo</Link>
      </section>

      <Footer />
    </div>
  )
}
