import { motion } from 'framer-motion'
import { profile } from '../data/content'

const fade = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 grid-bg hero-glow" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            variants={fade}
            initial="hidden"
            animate="show"
            custom={0}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold tracking-wide text-teal-800 uppercase"
          >
            {profile.location} · {profile.alias}
          </motion.p>
          <motion.h1
            variants={fade}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]"
          >
            {profile.name}
          </motion.h1>
          <motion.p
            variants={fade}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-3 text-lg font-medium text-teal-800 sm:text-xl"
          >
            {profile.role}
          </motion.p>
          <motion.p
            variants={fade}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            {profile.headline}
          </motion.p>
          <motion.p
            variants={fade}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-3 max-w-xl text-base leading-relaxed text-slate-600"
          >
            {profile.blurb}
          </motion.p>
          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={5}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#proyectos"
              className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-teal-400 hover:text-teal-800"
            >
              Contactar
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-teal-300/50 via-sky-200/40 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-white p-3 shadow-2xl shadow-slate-900/10">
            <div className="overflow-hidden rounded-[1.25rem] bg-slate-900">
              <img
                src={profile.avatar}
                alt={`Foto de ${profile.name}`}
                className="aspect-square w-full object-cover"
                width={400}
                height={400}
              />
            </div>
            <div className="flex items-center justify-between px-3 py-3">
              <span className="text-xs font-semibold text-slate-500">github.com/Said-235</span>
              <span className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-800">
                Disponible
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
