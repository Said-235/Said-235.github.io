import { motion } from 'framer-motion'
import { about } from '../data/content'

export default function About() {
  return (
    <section id="sobre-mi" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold tracking-widest text-teal-700 uppercase">Sobre mí</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            De la operación al producto
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4 text-base leading-relaxed text-slate-600">
            {about.paragraphs.map((p) => (
              <motion.p
                key={p.slice(0, 24)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45 }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {about.highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <p className="text-xs font-bold tracking-wide text-teal-700 uppercase">{item.label}</p>
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block text-sm font-medium text-slate-800 hover:text-teal-700"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 text-sm font-medium text-slate-800">{item.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
