import Navbar from '../components/Navbar'
import { Footer } from '../components/Sections'

export default function Contact() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl">Contact</h1>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <form className="space-y-4 rounded-xl border border-white/10 bg-slate-900/60 p-6">
            <div>
              <label className="text-sm text-slate-300">Name</label>
              <input className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
            <div>
              <label className="text-sm text-slate-300">Work Email</label>
              <input type="email" className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
            <div>
              <label className="text-sm text-slate-300">Company</label>
              <input className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
            <div>
              <label className="text-sm text-slate-300">Message</label>
              <textarea rows="4" className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
            <button className="rounded-md bg-red-600 px-5 py-2 text-sm font-semibold text-white">Send</button>
          </form>

          <div className="space-y-4 text-slate-300">
            <div className="rounded-xl border border-white/10 bg-slate-900/60 p-6">
              <div className="text-white">Sales</div>
              <div>sales@synapsys.lk</div>
              <div>+94 11 234 5678</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900/60 p-6">
              <div className="text-white">Head Office</div>
              <div>Colombo, Sri Lanka</div>
              <div className="mt-2 h-40 rounded-lg bg-white/5" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
