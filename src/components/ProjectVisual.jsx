function Chrome({ children, dark = false }) {
  return (
    <div
      className={`overflow-hidden rounded-xl border shadow-inner ${
        dark ? 'border-slate-800 bg-zinc-950' : 'border-slate-200 bg-slate-100'
      }`}
    >
      <div
        className={`flex items-center gap-1.5 border-b px-3 py-1.5 ${
          dark ? 'border-slate-800 bg-zinc-900' : 'border-slate-200 bg-white'
        }`}
      >
        <span className="h-2 w-2 rounded-full bg-rose-400/80" />
        <span className="h-2 w-2 rounded-full bg-amber-400/80" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
        <span className={`ml-2 h-1.5 flex-1 rounded ${dark ? 'bg-zinc-800' : 'bg-slate-100'}`} />
      </div>
      <div className="relative h-48 overflow-hidden">{children}</div>
    </div>
  )
}

function LabotecMark({ glow = false }) {
  return (
    <div
      className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full border-2 text-[6px] font-extrabold tracking-tight ${
        glow
          ? 'border-cyan-400 text-cyan-100 shadow-[0_0_12px_rgba(34,211,238,0.45)]'
          : 'border-teal-500 text-teal-700'
      }`}
    >
      L
    </div>
  )
}

export default function ProjectVisual({ type }) {
  if (type === 'service') {
    return (
      <Chrome dark>
        <div className="flex h-full flex-col bg-zinc-950 px-4 py-3">
          <LabotecMark glow />
          <p className="mt-1.5 text-center text-[9px] font-bold tracking-[0.18em] text-white">
            LABOTEC ENGINEERING
          </p>
          <p className="text-center text-[8px] text-cyan-400/80">Órdenes de servicio</p>
          <div className="mt-3 grid grid-cols-2 gap-1.5">
            {[
              { label: 'Preventivo', color: 'border-cyan-400/50 bg-cyan-950/50 text-cyan-200' },
              { label: 'Correctivo', color: 'border-rose-400/50 bg-rose-950/40 text-rose-200' },
              { label: 'Capacitación', color: 'border-violet-400/50 bg-violet-950/40 text-violet-200' },
              { label: 'Instalación', color: 'border-amber-400/50 bg-amber-950/40 text-amber-200' },
            ].map((item) => (
              <div
                key={item.label}
                className={`rounded-lg border px-2 py-2 text-[8px] font-semibold ${item.color}`}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </Chrome>
    )
  }

  if (type === 'purchase') {
    return (
      <Chrome>
        <div className="flex h-full bg-[#f3f4f6]">
          <aside className="flex w-[4.5rem] flex-col gap-1 bg-[#1e293b] px-1.5 py-2">
            <div className="mb-1 flex justify-center">
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-teal-400 text-[7px] font-bold text-teal-200">
                L
              </span>
            </div>
            {['Panel', 'Catálogo', 'Órdenes'].map((item, i) => (
              <div
                key={item}
                className={`rounded px-1 py-1 text-center text-[7px] font-medium ${
                  i === 0 ? 'bg-teal-600 text-white' : 'text-slate-300'
                }`}
              >
                {item}
              </div>
            ))}
          </aside>
          <div className="flex-1 p-2.5">
            <p className="text-[9px] font-bold text-slate-800">Panel de administración</p>
            <div className="mt-2 grid grid-cols-3 gap-1.5">
              {['Clientes', 'Productos', 'Órdenes'].map((label) => (
                <div key={label} className="rounded-md bg-white px-1.5 py-2 shadow-sm">
                  <p className="text-[7px] font-semibold tracking-wide text-slate-400 uppercase">{label}</p>
                  <div className="mt-1.5 h-2 w-8 rounded bg-slate-200" />
                </div>
              ))}
            </div>
            <div className="mt-2 overflow-hidden rounded-md bg-white shadow-sm">
              <div className="flex gap-2 border-b border-slate-100 px-2 py-1">
                <span className="rounded bg-teal-600 px-1.5 py-0.5 text-[7px] font-semibold text-white">Catálogo</span>
                <span className="text-[7px] text-slate-400">Carrito</span>
              </div>
              <div className="space-y-1 p-2">
                {[1, 2, 3].map((row) => (
                  <div key={row} className="flex items-center gap-2">
                    <span className="h-1.5 flex-1 rounded bg-slate-200" />
                    <span className="h-1.5 w-10 rounded bg-slate-100" />
                    <span className="rounded bg-teal-600 px-1.5 py-0.5 text-[6px] font-bold text-white">Agregar</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Chrome>
    )
  }

  if (type === 'inventory') {
    return (
      <Chrome>
        <div className="flex h-full">
          <div className="flex w-[42%] flex-col justify-between bg-[#0f172a] p-3">
            <div>
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-teal-500 text-[8px] font-extrabold text-white">
                CL
              </span>
              <p className="mt-2 text-[10px] font-bold leading-snug text-white">Coordina bodega, lote por lote.</p>
              <p className="mt-1 text-[7px] leading-snug text-slate-400">Recepción, perecederos y despacho FEFO.</p>
            </div>
            <div className="flex gap-2 text-[7px] font-bold tracking-wide text-slate-300">
              <span>ROLES</span>
              <span>FEFO</span>
              <span>ÁREAS</span>
            </div>
          </div>
          <div className="flex-1 space-y-1.5 bg-slate-100 p-2.5">
            <p className="text-[9px] font-bold text-slate-800">Entrar</p>
            {['Recepción y envío', 'Inventario', 'Montacargas', 'Administración'].map((role) => (
              <div
                key={role}
                className="flex items-center justify-between rounded-md bg-white px-2 py-1.5 shadow-sm"
              >
                <span className="text-[8px] font-semibold text-slate-700">{role}</span>
                <span className="rounded border border-teal-500 px-1.5 py-0.5 text-[7px] font-semibold text-teal-700">
                  Entrar
                </span>
              </div>
            ))}
          </div>
        </div>
      </Chrome>
    )
  }

  return (
    <Chrome>
      <div className="flex h-full gap-2 bg-gradient-to-br from-sky-50 to-violet-50 p-3">
        <div className="flex-1 rounded-lg bg-white/90 p-3 shadow-sm">
          <p className="text-[9px] font-bold tracking-wide text-slate-400 uppercase">Agenda</p>
          <div className="mt-2 grid grid-cols-4 gap-1">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className={`h-6 rounded ${i === 3 ? 'bg-teal-400' : 'bg-slate-100'}`} />
            ))}
          </div>
        </div>
        <div className="w-24 rounded-lg bg-white/90 p-3 shadow-sm">
          <p className="text-[10px] font-bold text-amber-500">★★★★★</p>
          <p className="mt-1 text-[9px] leading-snug text-slate-600">Reseñas de Google</p>
        </div>
      </div>
    </Chrome>
  )
}
