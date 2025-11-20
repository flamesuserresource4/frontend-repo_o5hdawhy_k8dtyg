import { Link, NavLink } from 'react-router-dom'
import { Menu, X, PhoneCall } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/products', label: 'Products' },
  { to: '/services', label: 'Services' },
  { to: '/industries', label: 'Industries' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkCls = ({ isActive }) =>
    `px-3 py-2 text-sm font-medium transition-colors ${
      isActive ? 'text-white' : 'text-slate-300 hover:text-white'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-red-600 to-red-400 shadow-lg shadow-red-500/20" />
            <div className="leading-tight">
              <div className="text-base font-bold tracking-wide text-white">Synapsys</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-400">FinTech & Digital Banking</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((n) => (
              <NavLink key={n.to} to={n.to} className={linkCls}>
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-red-500/30 bg-red-600/20 px-4 py-2 text-sm font-semibold text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] transition hover:bg-red-600/30"
            >
              <PhoneCall size={16} /> Book a Demo
            </Link>
          </div>

          <button
            className="inline-flex items-center justify-center rounded-md border border-white/10 p-2 text-slate-200 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="mt-3 border-t border-white/10 pt-3 md:hidden">
            <nav className="grid gap-1">
              {navItems.map((n) => (
                <NavLink key={n.to} to={n.to} className={linkCls} onClick={() => setOpen(false)}>
                  {n.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md border border-red-500/30 bg-red-600/20 px-4 py-2 text-sm font-semibold text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] hover:bg-red-600/30"
              >
                <PhoneCall size={16} /> Book a Demo
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
