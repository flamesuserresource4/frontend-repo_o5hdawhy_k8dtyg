import Navbar from '../components/Navbar'
import { Footer } from '../components/Sections'

const filters = ['Core Banking','Remittances','Capital Markets','Governance','Wallets']

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl">Case Studies</h1>
        <div className="mt-4 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button key={f} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-200 hover:border-red-500/40 hover:text-white">
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-slate-900/60 p-3">
              <div className="h-36 rounded-lg bg-white/5" />
              <div className="mt-3 text-sm font-semibold text-white">Case study title</div>
              <button className="mt-2 text-xs font-semibold text-red-400">Read More</button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
