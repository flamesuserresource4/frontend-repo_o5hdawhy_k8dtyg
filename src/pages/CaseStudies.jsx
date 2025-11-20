import Navbar from '../components/Navbar'
import { Footer } from '../components/Sections'

const filters = ['Core Banking','Remittances','Capital Markets','Governance','Wallets']

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Case Studies</h1>
        <div className="mt-4 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button key={f} className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50">
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
              <div className="h-36 rounded-lg bg-slate-100" />
              <div className="mt-3 text-sm font-semibold text-slate-900">Case study title</div>
              <button className="mt-2 text-xs font-semibold text-red-600">Read More</button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
