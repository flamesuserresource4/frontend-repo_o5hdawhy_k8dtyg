import Navbar from '../components/Navbar'
import { Footer } from '../components/Sections'
import { Link } from 'react-router-dom'

const products = [
  { name: 'M-Banx', desc: 'Core Banking Platform', to: '/products/m-banx' },
  { name: 'RapidX', desc: 'Remittances & FX Platform', to: '/products/rapidx' },
  { name: 'Mobile Wallet', desc: 'Wallet & Payments', to: '/products/wallet' },
  { name: 'Margin-X', desc: 'Capital Markets / Margin Trading', to: '/products/margin-x' },
  { name: 'Ocoplex', desc: 'Executive & Board Governance', to: '/products/ocoplex' },
]

export default function Products() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl">Products</h1>
        <p className="mt-2 max-w-2xl text-slate-300">Cloud-native, modular platforms engineered for BFSI.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Link key={p.name} to={p.to} className="rounded-xl border border-white/10 bg-slate-900/60 p-6 transition hover:border-red-500/40">
              <div className="text-lg font-semibold text-white">{p.name}</div>
              <div className="text-sm text-slate-300">{p.desc}</div>
              <div className="mt-4 inline-flex rounded-md bg-red-600 px-3 py-1.5 text-xs font-semibold text-white">Learn More</div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
