import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { BRAND, NAV_LINKS } from '../data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-void/85 backdrop-blur-lg border-b border-line' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-2">
          <img src={BRAND.logo} alt={BRAND.name} className="h-9 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[13px] tracking-wide uppercase text-ink-muted hover:text-amber transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-amber transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href={BRAND.phonePrimaryHref}
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-amber px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wide text-void hover:bg-amber-soft transition-colors shadow-glow"
        >
          <Phone size={14} strokeWidth={2.5} />
          Request a Call
        </a>

        <button
          className="lg:hidden text-ink p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-void border-t border-line px-5 pb-6 pt-2">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm uppercase tracking-wide text-ink-muted hover:text-amber py-3 border-b border-line/60"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={BRAND.phonePrimaryHref}
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-amber px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wide text-void w-full"
          >
            <Phone size={14} /> Request a Call
          </a>
        </div>
      )}
    </header>
  )
}
