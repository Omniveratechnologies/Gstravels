import { PawPrint, Wallet, CalendarCheck2, MousePointerClick } from 'lucide-react'
import { WHY_US } from '../data'
import Waypoint from './Waypoint.jsx'

const ICONS = [PawPrint, Wallet, CalendarCheck2, MousePointerClick]

export default function WhyUs() {
  return (
    <section id="whyus" className="relative py-28 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Waypoint code="WP-04" label={WHY_US.eyebrow} tone="cyan" />
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ink leading-tight text-balance">
            {WHY_US.title}
          </h2>
          <p className="mt-6 text-ink-muted leading-relaxed max-w-lg">{WHY_US.body}</p>

          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {WHY_US.features.map((f, i) => {
              const Icon = ICONS[i]
              return (
                <div key={f.title} className="rounded-xl border border-line bg-void-surface/60 p-5">
                  <Icon size={20} className="text-amber" />
                  <h3 className="mt-3 font-display font-semibold text-ink">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-ink-muted leading-relaxed">{f.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[1.5rem] overflow-hidden border border-line">
            <img src={WHY_US.image} alt="Why choose GS Travels" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
