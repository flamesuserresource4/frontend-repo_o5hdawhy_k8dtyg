import Navbar from '../components/Navbar'
import { Footer } from '../components/Sections'

const items = [
  { title: 'Technology Services', desc: 'Cloud-native engineering, integration and platform modernization.' },
  { title: 'Managed IT Operations', desc: '24/7 monitoring, SRE practices, and secure operations for BFSI.' },
  { title: 'BPO Services', desc: 'Specialized back-office operations for financial institutions.' },
  { title: 'Business Process Reengineering', desc: 'Lean processes and automation to drive efficiency.' },
  { title: 'BFSI Consultancy', desc: 'Advisory across core banking, payments, compliance and risk.' },
]

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Services</h1>
        <p className="mt-2 max-w-2xl text-slate-600">Trusted delivery for mission-critical BFSI initiatives.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <div key={s.title} className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-lg font-semibold text-slate-900">{s.title}</div>
              <div className="mt-1 text-sm text-slate-600">{s.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl bg-gradient-to-r from-red-600 to-red-500 p-8 text-white">
          <div className="text-xl font-bold">Let’s discuss your transformation journey</div>
          <a href="/contact" className="mt-3 inline-flex rounded-md bg-white/10 px-4 py-2 text-sm font-semibold">Book a consultation</a>
        </div>
      </section>
      <Footer />
    </div>
  )
}
