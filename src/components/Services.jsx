import { SERVICES } from '../data'
import Waypoint from './Waypoint.jsx'

export default function Services() {
  return (
    <section id="services" className="relative py-28 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Waypoint code="WP-01" label="Where can you go with us" />
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ink max-w-xl">
            Latest Services
          </h2>
          <p className="max-w-sm text-ink-muted">
            Six ways to move through the city — and beyond it — without ever touching the wheel.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <div
              key={s.num}
              className="group relative rounded-2xl border border-line bg-void-surface/60 p-7 hover:border-amber/60 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="font-mono text-5xl font-semibold text-line group-hover:text-amber/30 transition-colors">
                {s.num}
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{s.desc}</p>
              <span className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-amber/0 group-hover:via-amber/60 to-transparent transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
