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
    <section className="bg-black py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-5 text-center">
              <it.icon className="mx-auto mb-3 h-7 w-7 text-red-500" />
              <div className="text-sm font-semibold text-white">{it.title}</div>
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
    <section className="bg-gradient-to-b from-black to-slate-950 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Featured Products</h2>
          <Link to="/products" className="text-sm font-semibold text-red-400 hover:text-red-300">
            View all
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <Link
              key={p.name}
              to={p.to}
              className="group rounded-xl border border-white/10 bg-slate-900/60 p-5 transition hover:border-red-500/40 hover:bg-slate-900"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold text-white">{p.name}</div>
                  <div className="text-sm text-slate-300">{p.desc}</div>
                </div>
                <ArrowRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-red-400" />
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
    <section className="bg-black py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-2xl font-bold text-white sm:text-3xl">Services</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <div key={s.title} className="rounded-xl border border-white/10 bg-slate-900/60 p-6">
              <div className="text-base font-semibold text-white">{s.title}</div>
              <p className="mt-2 text-sm text-slate-300">
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
    <section className="bg-gradient-to-b from-slate-950 to-black py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-2xl font-bold text-white sm:text-3xl">Case Studies</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-slate-900/60 p-5">
              <div className="h-36 rounded-lg bg-white/5" />
              <div className="mt-3 text-sm font-semibold text-white">Transforming digital banking</div>
              <Link to="/case-studies" className="mt-2 inline-flex items-center text-xs font-semibold text-red-400">
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
    <section className="bg-gradient-to-b from-black to-slate-950 py-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-slate-400">
          Trusted by leading BFSI brands
        </div>
        <div className="grid grid-cols-2 place-items-center gap-6 sm:grid-cols-3 md:grid-cols-5">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="h-10 w-28 rounded bg-white/5" />
          ))}
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-lg font-bold text-white">Synapsys</div>
            <p className="mt-2 text-sm text-slate-300">FinTech and digital banking solutions for forward-thinking institutions.</p>
          </div>
          {['Products','Services','Industries','Company'].map((h) => (
            <div key={h}>
              <div className="text-sm font-semibold text-slate-200">{h}</div>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                {['Link 1','Link 2','Link 3','Link 4'].map((l) => (
                  <li key={l}><a href="#" className="hover:text-red-400">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <div>© {new Date().getFullYear()} Synapsys. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-red-400">LinkedIn</a>
            <a href="#" className="hover:text-red-400">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
