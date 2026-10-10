export default function Waypoint({ code, label, tone = 'amber' }) {
  const dot = tone === 'cyan' ? 'bg-cyan shadow-glow-cyan' : 'bg-amber shadow-glow'
  const text = tone === 'cyan' ? 'text-cyan' : 'text-amber'
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className={`relative flex h-2.5 w-2.5 rounded-full ${dot}`}>
        <span className={`pulse-dot absolute inline-flex h-full w-full rounded-full ${dot}`} />
      </span>
      <span className={`font-mono text-xs tracking-[0.3em] uppercase ${text}`}>
        {code} <span className="text-ink-faint mx-1">/</span> {label}
      </span>
      <span className="h-px flex-1 max-w-16 bg-line" />
    </div>
  )
}
