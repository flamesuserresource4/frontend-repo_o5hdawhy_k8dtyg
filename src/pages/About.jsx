import Navbar from '../components/Navbar'
import { Footer } from '../components/Sections'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">About Synapsys</h1>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6 text-slate-700">
            <p>Synapsys is a leading Sri Lankan FinTech and digital banking solutions provider, delivering mission-critical platforms across BFSI.</p>
            <div>
              <div className="text-lg font-semibold text-slate-900">Vision & Mission</div>
              <p className="mt-2">Empowering financial institutions with cloud-native, secure, and scalable technologies.</p>
            </div>
            <div>
              <div className="text-lg font-semibold text-slate-900">Corporate Governance & CSR</div>
              <p className="mt-2">We uphold the highest standards of governance and contribute to local communities.</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm">Leadership Profiles</div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm">Milestones Timeline</div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm">Awards</div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm">Offices / Map</div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
