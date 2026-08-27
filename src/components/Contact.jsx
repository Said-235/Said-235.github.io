import { useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/content'

const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    if (!accessKey) {
      setStatus('missing')
      return
    }

    setStatus('sending')
    setError('')

    const formData = new FormData(event.target)
    formData.append('access_key', accessKey)
    formData.append('subject', `Portafolio Kitzune — mensaje de ${formData.get('name')}`)
    formData.append('from_name', 'Portafolio Said Hernandez')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()
      if (!data.success) {
        throw new Error(data.message || 'No se pudo enviar')
      }
      event.target.reset()
      setStatus('sent')
    } catch (err) {
      setError(err.message || 'Error al enviar')
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold tracking-widest text-teal-700 uppercase">Contacto</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Hablemos
          </h2>
          <p className="mt-4 max-w-md text-slate-600">
            Si quieres comentar un proyecto o una idea, escribe aquí. El mensaje llega a mi correo.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-block text-sm font-semibold text-teal-800 hover:text-teal-600"
          >
            {profile.email}
          </a>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <label className="block text-sm font-medium text-slate-700">
            Nombre
            <input
              required
              name="name"
              type="text"
              autoComplete="name"
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none ring-teal-500/0 transition focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-500/15"
            />
          </label>
          <label className="mt-4 block text-sm font-medium text-slate-700">
            Correo
            <input
              required
              name="email"
              type="email"
              autoComplete="email"
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none transition focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-500/15"
            />
          </label>
          <label className="mt-4 block text-sm font-medium text-slate-700">
            Mensaje
            <textarea
              required
              name="message"
              rows={5}
              className="mt-1.5 w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none transition focus:border-teal-400 focus:bg-white focus:ring-4 focus:ring-teal-500/15"
            />
          </label>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-5 w-full rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
          </button>
          {status === 'sent' && (
            <p className="mt-3 text-sm font-medium text-emerald-700">Mensaje enviado. Gracias.</p>
          )}
          {status === 'missing' && (
            <p className="mt-3 text-sm text-amber-800">
              Falta configurar la clave de Web3Forms. Mientras tanto puedes escribir a{' '}
              <a className="font-semibold underline" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              .
            </p>
          )}
          {status === 'error' && (
            <p className="mt-3 text-sm text-rose-700">{error}</p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
