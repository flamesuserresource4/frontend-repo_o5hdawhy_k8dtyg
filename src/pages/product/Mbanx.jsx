import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import { Footer } from '../../components/Sections'
import { Link } from 'react-router-dom'

const modules = ['Core Ledger','Loans','Deposits','Payments','Digital Channels','API Marketplace']
const values = ['Performance','Security','Scalability','Compliance (CBSL / IFRS / AML)']

export default function Mbanx() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero
        title="M-Banx: The Digital Core for Modern Banking"
        subtitle="Next-gen, cloud-native core banking with modular capabilities"
        primaryCta={<Link to="/contact" className="rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white">Book Demo</Link>}
        secondaryCta={<a href="#" className="rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white">Download Brochure</a>}
      />

      <section className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="text-2xl font-bold text-white">Modules / Capabilities</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m) => (
            <div key={m} className="rounded-xl border border-white/10 bg-slate-900/60 p-5 text-white">{m}</div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-dashed border-white/15 p-8 text-center text-slate-400">Architecture Diagram Placeholder</div>
          <div>
            <h3 className="text-lg font-semibold text-white">Key Value Areas</h3>
            <ul className="mt-3 grid gap-2 text-slate-300">
              {values.map((v) => (
                <li key={v} className="rounded-md border border-white/10 bg-slate-900/60 px-4 py-3">{v}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-950 to-black py-14">
        <div className="mx-auto max-w-7xl px-4">
          <h3 className="text-2xl font-bold text-white">Case Studies</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-40 rounded-xl border border-white/10 bg-slate-900/60" />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 text-center">
        <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-3 text-sm font-semibold text-white">Schedule your demo</Link>
      </section>

      <Footer />
    </div>
  )
}
