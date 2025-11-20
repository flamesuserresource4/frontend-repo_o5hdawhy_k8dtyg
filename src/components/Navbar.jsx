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
      isActive ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-red-600 to-red-400 shadow-lg shadow-red-500/20" />
            <div className="leading-tight">
              <div className="text-base font-bold tracking-wide text-slate-900">Synapsys</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500">FinTech & Digital Banking</div>
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
              className="inline-flex items-center gap-2 rounded-md border border-red-200 bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-500"
            >
              <PhoneCall size={16} /> Book a Demo
            </Link>
          </div>

          <button
            className="inline-flex items-center justify-center rounded-md border border-slate-200 p-2 text-slate-700 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="mt-3 border-t border-slate-200 pt-3 md:hidden">
            <nav className="grid gap-1">
              {navItems.map((n) => (
                <NavLink key={n.to} to={n.to} className={linkCls} onClick={() => setOpen(false)}>
                  {n.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md border border-red-200 bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-500"
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
