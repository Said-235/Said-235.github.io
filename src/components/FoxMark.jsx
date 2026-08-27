export default function FoxMark({ className = 'h-8 w-8' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" className="fill-slate-900" />
      <path d="M8 22 L10 12 L16 16 L22 12 L24 22 Z" className="fill-teal-400" />
      <circle cx="13" cy="18" r="1.2" className="fill-slate-900" />
      <circle cx="19" cy="18" r="1.2" className="fill-slate-900" />
    </svg>
  )
}
