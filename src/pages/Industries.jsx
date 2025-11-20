import Navbar from '../components/Navbar'
import { Footer } from '../components/Sections'
import { Link } from 'react-router-dom'

const industries = [
  'Banking',
  'Finance & Leasing',
  'Capital Markets',
  'Remittances & FX Operators',
  'Microfinance',
  'FinTech Startups',
  'Telco / Mobile Money',
]

export default function Industries() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl">Industries</h1>
        <p className="mt-2 max-w-2xl text-slate-300">Purpose-built solutions tailored for BFSI segments.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((name) => (
            <Link key={name} to="#" className="rounded-xl border border-white/10 bg-slate-900/60 p-6 hover:border-red-500/40">
              <div className="text-lg font-semibold text-white">{name}</div>
              <div className="mt-1 text-sm text-slate-300">Key challenges • Our solutions • Case studies</div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
