import { MapPin, Phone, Mail, Send } from 'lucide-react'
import { BRAND } from '../data'
import Waypoint from './Waypoint.jsx'

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Waypoint code="WP-07" label="Get in Touch" />
        <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ink mb-14 max-w-xl">
          Send us a message
        </h2>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
          <div className="rounded-2xl overflow-hidden border border-line relative">
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-cyan/10 z-10" />
            <iframe
              title="GS Travels location"
              src={BRAND.mapEmbed}
              className="w-full h-full min-h-[340px] grayscale contrast-125 invert-[0.92] hue-rotate-180"
              loading="lazy"
            />
          </div>

          <div className="rounded-2xl border border-line bg-void-surface/60 p-7 sm:p-9">
            <div className="grid sm:grid-cols-3 gap-6 mb-8 pb-8 border-b border-line">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-amber shrink-0 mt-0.5" />
                <span className="text-sm text-ink-muted leading-relaxed">{BRAND.address}</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-amber shrink-0 mt-0.5" />
                <div className="text-sm text-ink-muted leading-relaxed">
                  <a href={BRAND.phonePrimaryHref} className="block hover:text-amber transition-colors">
                    {BRAND.phonePrimary}
                  </a>
                  <a href={BRAND.phoneSecondaryHref} className="block hover:text-amber transition-colors">
                    {BRAND.phoneSecondary}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-amber shrink-0 mt-0.5" />
                <a href={`mailto:${BRAND.email}`} className="text-sm text-ink-muted hover:text-amber transition-colors">
                  {BRAND.email}
                </a>
              </div>
            </div>

            <form className="grid sm:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                placeholder="Full Name"
                className="w-full bg-void/60 border border-line rounded-lg px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber transition-colors"
              />
              <input
                placeholder="Phone Number"
                className="w-full bg-void/60 border border-line rounded-lg px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber transition-colors"
              />
              <input
                placeholder="Email Address"
                type="email"
                className="sm:col-span-2 w-full bg-void/60 border border-line rounded-lg px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber transition-colors"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="sm:col-span-2 w-full bg-void/60 border border-line rounded-lg px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber transition-colors resize-none"
              />
              <button
                type="submit"
                className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-lg bg-amber py-3.5 font-mono text-sm font-semibold uppercase tracking-wide text-void hover:bg-amber-soft transition-colors shadow-glow"
              >
                <Send size={15} /> Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
