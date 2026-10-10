import { Star, Quote } from 'lucide-react'
import { TESTIMONIALS } from '../data'
import Waypoint from './Waypoint.jsx'

export default function Testimonials() {
  return (
    <section id="testimonial" className="relative py-28 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Waypoint code="WP-06" label="What Our Customers Say" tone="cyan" />
        <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ink mb-4 max-w-xl">
          Thousands of satisfied customers
        </h2>
        <p className="text-ink-muted mb-14 max-w-lg">
          who have experienced our services
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="rounded-2xl border border-line bg-void-surface/60 p-7 flex flex-col">
              <Quote size={22} className="text-amber/50" />
              <p className="mt-4 text-sm leading-relaxed text-ink-muted flex-1">{t.quote}</p>
              <div className="mt-6 flex items-center gap-3 pt-6 border-t border-line">
                <img src={t.image} alt={t.name} className="h-11 w-11 rounded-full object-cover border border-line" />
                <div>
                  <div className="font-display text-sm font-semibold text-ink">{t.name}</div>
                  <div className="text-xs text-ink-faint">{t.role}</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} className="text-amber fill-amber" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
