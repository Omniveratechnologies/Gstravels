import { ArrowRight, MessageCircle } from 'lucide-react'
import { BRAND, HERO } from '../data'
import BookingForm from './BookingForm.jsx'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28 sm:pt-48 sm:pb-36">
      {/* HUD grid backdrop */}
      <div className="absolute inset-0 bg-grid-fade pointer-events-none" />

      {/* animated route path */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M -50 620 C 250 620 300 300 620 300 S 950 560 1250 460 S 1450 200 1550 150"
          stroke="#ffb627"
          strokeWidth="2"
          className="route-path"
        />
        <circle cx="620" cy="300" r="4" fill="#35e8d0" />
        <circle cx="1250" cy="460" r="4" fill="#35e8d0" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-void-surface/60 px-4 py-1.5 mb-8">
              <span className="relative flex h-1.5 w-1.5 rounded-full bg-cyan">
                <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-cyan" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-cyan">
                {HERO.eyebrow}
              </span>
            </div>

            <h1 className="font-display text-balance text-5xl sm:text-6xl lg:text-[4.2rem] leading-[1.04] font-semibold text-ink">
              your pick of <span className="text-amber">rides</span> at
              <br className="hidden sm:block" /> low prices
            </h1>

            <p className="mt-7 max-w-xl text-lg text-ink-muted leading-relaxed">
              {HERO.body}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={BRAND.phonePrimaryHref}
                className="inline-flex items-center gap-2 rounded-full bg-amber px-7 py-4 font-mono text-sm font-semibold uppercase tracking-wide text-void hover:bg-amber-soft transition-colors shadow-glow"
              >
                Booking Now <ArrowRight size={16} strokeWidth={2.5} />
              </a>
              <a
                href={BRAND.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-4 font-mono text-sm font-semibold uppercase tracking-wide text-ink hover:border-cyan hover:text-cyan transition-colors"
              >
                <MessageCircle size={16} /> Whatsapp
              </a>
            </div>

            <dl className="mt-14 grid grid-cols-3 max-w-md gap-6 border-t border-line pt-7">
              {[
                ['300+', 'Vehicles'],
                ['3.5k', 'Riders'],
                ['2018', 'On the Road Since'],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-mono text-2xl text-ink">{v}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wide text-ink-faint">{l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <BookingForm />
        </div>
      </div>
    </section>
  )
}
