import { Phone } from 'lucide-react'
import { ABOUT, BRAND } from '../data'
import Waypoint from './Waypoint.jsx'

export default function About() {
  return (
    <section id="about" className="relative py-28 border-t border-line overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-6 rounded-[2rem] border border-line/60" />
          <div className="relative rounded-[1.5rem] overflow-hidden border border-line bg-void-surface">
            <img src={ABOUT.image} alt="GS Travels vehicle" className="w-full h-auto object-cover" />
          </div>

          <div className="absolute -bottom-8 -right-4 sm:right-6 rounded-2xl border border-line bg-void/95 backdrop-blur-xl px-6 py-5 grid grid-cols-3 gap-6 shadow-2xl">
            {ABOUT.stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-mono text-2xl sm:text-3xl font-semibold text-amber">
                  {s.value}
                  <span className="text-cyan">{s.suffix}</span>
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-wide text-ink-faint">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <Waypoint code="WP-02" label={ABOUT.eyebrow} tone="cyan" />
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ink leading-tight text-balance">
            {ABOUT.title}
          </h2>
          <p className="mt-6 text-ink-muted leading-relaxed">{ABOUT.intro}</p>
          <p className="mt-4 text-ink-muted leading-relaxed">{ABOUT.body}</p>

          <a
            href={BRAND.phonePrimaryHref}
            className="mt-9 inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 font-mono text-sm font-semibold uppercase tracking-wide text-ink hover:border-cyan hover:text-cyan transition-colors"
          >
            <Phone size={15} /> About us
          </a>
        </div>
      </div>
    </section>
  )
}
