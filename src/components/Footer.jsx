import { profile } from '../data/content'
import FoxMark from './FoxMark'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-10 sm:flex-row sm:items-center sm:px-6">
        <div className="flex items-center gap-3">
          <FoxMark className="h-8 w-8" />
          <div>
            <p className="text-sm font-semibold text-white">
              {profile.name} · {profile.alias}
            </p>
            <p className="text-xs text-slate-400">{profile.location}</p>
          </div>
        </div>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-teal-300 hover:text-teal-200"
        >
          GitHub
        </a>
      </div>
    </footer>
  )
}
