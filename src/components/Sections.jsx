import { ArrowRight, Building2, Trophy, Network, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

export function ValuePillars() {
  const items = [
    { icon: Building2, title: 'BFSI Expertise' },
    { icon: Trophy, title: 'Award-Winning Platforms' },
    { icon: CheckCircle2, title: '20+ Years of Trust' },
    { icon: Network, title: 'API-Driven Technology' },
  ]
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5 text-center">
              <it.icon className="mx-auto mb-3 h-7 w-7 text-red-600" />
              <div className="text-sm font-semibold text-slate-900">{it.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FeaturedProducts() {
  const items = [
    { name: 'M-Banx', desc: 'Digital Core Banking Platform', to: '/products/m-banx' },
    { name: 'RapidX', desc: 'Remittances & FX Platform', to: '/products/rapidx' },
    { name: 'Mobile Wallet', desc: 'Next-gen Wallet & Payments', to: '/products/wallet' },
    { name: 'Margin-X', desc: 'Capital Markets & Margin Trading', to: '/products/margin-x' },
    { name: 'Ocoplex', desc: 'Executive Governance Automation', to: '/products/ocoplex' },
  ]
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Featured Products</h2>
          <Link to="/products" className="text-sm font-semibold text-red-600 hover:text-red-500">
            View all
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <Link
              key={p.name}
              to={p.to}
              className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold text-slate-900">{p.name}</div>
                  <div className="text-sm text-slate-600">{p.desc}</div>
                </div>
                <ArrowRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-red-600" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ServicesOverview() {
  const items = [
    { title: 'IT Operations Outsourcing' },
    { title: 'Bespoke Software Development' },
    { title: 'BPO Services' },
    { title: 'BPR & Consulting' },
    { title: 'BFSI Technology Advisory' },
  ]
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-2xl font-bold text-slate-900 sm:text-3xl">Services</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <div key={s.title} className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-base font-semibold text-slate-900">{s.title}</div>
              <p className="mt-2 text-sm text-slate-600">
                Enterprise-grade delivery with measurable outcomes for BFSI.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CaseStudyPreview() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-2xl font-bold text-slate-900 sm:text-3xl">Case Studies</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="h-36 rounded-lg bg-slate-100" />
              <div className="mt-3 text-sm font-semibold text-slate-900">Transforming digital banking</div>
              <Link to="/case-studies" className="mt-2 inline-flex items-center text-xs font-semibold text-red-600">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CaseLogos() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-slate-500">
          Trusted by leading BFSI brands
        </div>
        <div className="grid grid-cols-2 place-items-center gap-6 sm:grid-cols-3 md:grid-cols-5">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="h-10 w-28 rounded bg-slate-200" />
          ))}
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-lg font-bold text-slate-900">Synapsys</div>
            <p className="mt-2 text-sm text-slate-600">FinTech and digital banking solutions for forward-thinking institutions.</p>
          </div>
          {['Products','Services','Industries','Company'].map((h) => (
            <div key={h}>
              <div className="text-sm font-semibold text-slate-900">{h}</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {['Link 1','Link 2','Link 3','Link 4'].map((l) => (
                  <li key={l}><a href="#" className="hover:text-red-600">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row">
          <div>© {new Date().getFullYear()} Synapsys. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-red-600">LinkedIn</a>
            <a href="#" className="hover:text-red-600">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
