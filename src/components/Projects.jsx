import { motion } from 'framer-motion'
import { projects } from '../data/content'
import ProjectVisual from './ProjectVisual'

export default function Projects() {
  return (
    <section id="proyectos" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold tracking-widest text-teal-700 uppercase">Proyectos</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Trabajo que ya está en uso
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Sistemas internos, inventario y una landing con agenda conectada a Google. Las previews recrean la interfaz; no incluyen datos, precios ni catálogo real.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/60 p-5 shadow-sm transition hover:border-teal-200 hover:shadow-lg hover:shadow-teal-900/5"
            >
              <ProjectVisual type={project.visual} />
              <h3 className="mt-5 text-lg font-bold text-slate-900">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{project.description}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-white px-2.5 py-0.5 text-xs font-medium text-slate-600 ring-1 ring-slate-200"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-teal-800 hover:text-teal-600"
                  >
                    Ver en GitHub →
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-slate-700 hover:text-slate-900"
                  >
                    Demo en vivo →
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
