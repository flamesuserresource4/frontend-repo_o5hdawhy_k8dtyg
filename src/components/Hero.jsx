import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero({ title, subtitle, primaryCta, secondaryCta }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-slate-950 to-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-28 sm:py-36 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-10"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-slate-200">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {primaryCta}
            {secondaryCta}
          </div>
        </motion.div>

        <div className="z-10" />
      </div>
    </section>
  )
}
