import { motion } from 'framer-motion'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experiencia" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold tracking-widest text-teal-700 uppercase">Experiencia</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Formación y trabajo
          </h2>
        </motion.div>

        <ol className="relative mt-12 space-y-8 border-l-2 border-teal-100 pl-8">
          {experience.map((item, i) => (
            <motion.li
              key={`${item.org}-${item.title}`}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative"
            >
              <span className="absolute top-1.5 -left-[39px] h-3.5 w-3.5 rounded-full border-2 border-white bg-teal-500 shadow" />
              <p className="text-xs font-semibold tracking-wide text-teal-700 uppercase">{item.period}</p>
              <h3 className="mt-1 text-lg font-bold text-slate-900">{item.title}</h3>
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-teal-800 hover:text-teal-600"
                >
                  {item.org}
                </a>
              ) : (
                <p className="text-sm font-medium text-slate-500">{item.org}</p>
              )}
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">{item.detail}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
