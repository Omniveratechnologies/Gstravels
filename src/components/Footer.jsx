import { Facebook, Twitter, Youtube, Linkedin, MapPin, Phone, Mail } from 'lucide-react'
import { BRAND, FOOTER_LINKS } from '../data'

const SOCIAL_ICON = { Facebook, Twitter, Youtube, Linkedin }

export default function Footer() {
  return (
    <footer className="relative border-t border-line pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-14">
          <div>
            <img src={BRAND.logo} alt={BRAND.name} className="h-9 w-auto mb-5" />
            <p className="text-sm text-ink-muted leading-relaxed max-w-xs">
              Experience the best car rental service in Kolkata with our wide range of comfortable, budget-friendly vehicles.
            </p>
            <div className="mt-6 flex gap-3">
              {FOOTER_LINKS.social.map((s) => {
                const Icon = SOCIAL_ICON[s]
                return (
                  <a
                    key={s}
                    href="#"
                    aria-label={s}
                    className="h-9 w-9 flex items-center justify-center rounded-full border border-line text-ink-faint hover:text-amber hover:border-amber transition-colors"
                  >
                    <Icon size={15} />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint mb-5">
              Importent links
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.important.map((l) => (
                <li key={l}>
                  <span className="text-sm text-ink-muted hover:text-amber transition-colors cursor-pointer">
                    {l}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.quick.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-ink-muted hover:text-amber transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-3.5 text-sm text-ink-muted">
              <li className="flex gap-2.5">
                <MapPin size={16} className="text-amber shrink-0 mt-0.5" /> {BRAND.address}
              </li>
              <li className="flex gap-2.5">
                <Phone size={16} className="text-amber shrink-0 mt-0.5" />
                <span className="flex flex-col">
                  <a href={BRAND.phonePrimaryHref} className="hover:text-amber transition-colors">
                    {BRAND.phonePrimary}
                  </a>
                  <a href={BRAND.phoneSecondaryHref} className="hover:text-amber transition-colors">
                    {BRAND.phoneSecondary}
                  </a>
                </span>
              </li>
              <li className="flex gap-2.5">
                <Mail size={16} className="text-amber shrink-0 mt-0.5" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-amber transition-colors">
                  {BRAND.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-faint font-mono">
          <span>© All Rights Reserved GS Travels - {BRAND.year}</span>
          <span>
            Design By{' '}
            <a href={BRAND.builtBy.href} className="text-ink-muted hover:text-amber transition-colors">
              {BRAND.builtBy.name}
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
