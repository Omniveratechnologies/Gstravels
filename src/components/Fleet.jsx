import { Users, Briefcase, Snowflake, Settings2, Phone, Info } from 'lucide-react'
import { FLEET, FLEET_NOTE, BRAND } from '../data'
import Waypoint from './Waypoint.jsx'

const specIcon = {
  seats: Users,
  bags: Briefcase,
  ac: Snowflake,
  transmission: Settings2,
}

function SpecRow({ icon: Icon, value }) {
  return (
    <div className="flex items-center gap-2 text-ink-muted">
      <Icon size={14} className="text-cyan shrink-0" />
      <span className="font-mono text-[13px] uppercase tracking-wide">{value}</span>
    </div>
  )
}

export default function Fleet() {
  return (
    <section id="car" className="relative py-28 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Waypoint code="WP-03" label="Hire our most popular vehicles" />
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ink max-w-xl">
            Rent a Car
          </h2>
          <p className="max-w-sm text-ink-muted">
            Choose from our wide selection of vehicles, from economical compacts to luxurious SUVs, all maintained to the highest standards.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FLEET.map((car) => (
            <div
              key={car.name}
              className="rounded-2xl border border-line bg-void-surface/60 p-6 hover:border-amber/50 transition-colors flex flex-col"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-display text-lg font-semibold text-ink">{car.name}</h3>
                <span className="rounded-full bg-amber/10 text-amber font-mono text-[10px] uppercase tracking-wide px-2.5 py-1">
                  Low Price
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-y-2.5 gap-x-3">
                <SpecRow icon={specIcon.seats} value={car.seats} />
                <SpecRow icon={specIcon.bags} value={car.bags} />
                <SpecRow icon={specIcon.ac} value={car.ac} />
                <SpecRow icon={specIcon.transmission} value={car.transmission} />
              </div>

              <div className="mt-5 pt-5 border-t border-line flex items-center gap-2">
                <div className="flex-1 flex gap-2.5">
                  <a
                    href={BRAND.phonePrimaryHref}
                    className="flex-1 text-center rounded-lg bg-amber py-2.5 font-mono text-xs font-semibold uppercase tracking-wide text-void hover:bg-amber-soft transition-colors"
                  >
                    Book Now
                  </a>
                  <a
                    href={BRAND.phonePrimaryHref}
                    className="flex-1 text-center rounded-lg border border-line py-2.5 font-mono text-xs font-semibold uppercase tracking-wide text-ink hover:border-cyan hover:text-cyan transition-colors"
                  >
                    More Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-2 text-ink-faint">
          <Info size={14} />
          <span className="font-mono text-xs">{FLEET_NOTE}</span>
        </div>
      </div>
    </section>
  )
}
