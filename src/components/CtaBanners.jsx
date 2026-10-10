import { ArrowUpRight } from 'lucide-react'
import { CTA_BANNERS, BRAND } from '../data'

export default function CtaBanners() {
  return (
    <section className="relative py-6 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid sm:grid-cols-2 gap-5">
        {CTA_BANNERS.map((b, i) => (
          <a
            key={b.title}
            href={BRAND.phonePrimaryHref}
            className={`group relative rounded-2xl border border-line overflow-hidden p-10 flex items-center justify-between gap-6 transition-colors ${
              i === 0 ? 'bg-amber/[0.06] hover:border-amber/60' : 'bg-cyan/[0.06] hover:border-cyan/60'
            }`}
          >
            <div>
              <h3 className="font-display text-2xl font-semibold text-ink">{b.title}</h3>
              <p className="mt-2 text-sm text-ink-muted max-w-xs">{b.body}</p>
              <span
                className={`mt-5 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide ${
                  i === 0 ? 'text-amber' : 'text-cyan'
                }`}
              >
                {b.cta} <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
            <img src={b.image} alt="" className="h-24 sm:h-28 w-auto object-contain shrink-0" />
          </a>
        ))}
      </div>
    </section>
  )
}
