import { GALLERY } from '../data'
import Waypoint from './Waypoint.jsx'

export default function Gallery() {
  return (
    <section className="relative py-28 border-t border-line">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Waypoint code="WP-05" label="Our Gallery" />
        <h2 className="font-display text-4xl sm:text-5xl font-semibold text-ink mb-14 max-w-xl">
          Moments We Captured
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY.map((src, i) => (
            <div
              key={src}
              className={`group relative overflow-hidden rounded-xl border border-line ${
                i === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <img
                src={src}
                alt="GS Travels fleet"
                loading="lazy"
                className="h-full w-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 border border-cyan/0 group-hover:border-cyan/50 rounded-xl transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
