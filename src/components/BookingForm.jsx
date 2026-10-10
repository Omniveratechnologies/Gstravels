import { useState } from 'react'
import { Search, User, Mail, Phone, MapPin, Calendar, Clock } from 'lucide-react'

const FIELD_CLASS =
  'w-full bg-void/60 border border-line rounded-lg pl-10 pr-3 py-3 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber transition-colors'

function Field({ icon: Icon, label, type = 'text', ...props }) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-wide text-ink-faint">
        {label}
      </span>
      <span className="relative block">
        <Icon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-faint" />
        <input type={type} className={FIELD_CLASS} {...props} />
      </span>
    </label>
  )
}

export default function BookingForm() {
  const [trip, setTrip] = useState('One Way Trip')

  return (
    <div className="relative rounded-2xl border border-line bg-void-surface/80 backdrop-blur-xl p-6 sm:p-8 shadow-2xl">
      <div className="absolute -top-3 left-8 rounded-full bg-void border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan">
        lets find your perfect car
      </div>

      <form className="mt-4 grid sm:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
        <Field icon={User} label="Full Name" placeholder="Your name" />
        <Field icon={Mail} label="Email Address" type="email" placeholder="you@email.com" />
        <Field icon={Phone} label="Mobile No." placeholder="+91" />
        <Field icon={MapPin} label="Pickup Location" placeholder="Kolkata" />
        <Field icon={Calendar} label="Pickup Date" type="date" />
        <Field icon={Clock} label="Pickup Time" type="time" />
        <Field icon={MapPin} label="Drop location" placeholder="Destination" />
        <Field icon={Calendar} label="Drop-of Date" type="date" />
        <Field icon={Clock} label="Drop-of Time" type="time" />

        <label className="block sm:col-span-1">
          <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-wide text-ink-faint">
            Your Trip
          </span>
          <select
            value={trip}
            onChange={(e) => setTrip(e.target.value)}
            className="w-full bg-void/60 border border-line rounded-lg px-3 py-3 text-sm text-ink focus:outline-none focus:border-amber focus:ring-1 focus:ring-amber transition-colors"
          >
            <option>One Way Trip</option>
            <option>Round Trip</option>
            <option>Local Trip</option>
          </select>
        </label>

        <div className="sm:col-span-2 mt-2">
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-amber py-3.5 font-mono text-sm font-semibold uppercase tracking-wide text-void hover:bg-amber-soft transition-colors shadow-glow"
          >
            <Search size={16} strokeWidth={2.5} />
            Search rental car
          </button>
        </div>
      </form>
    </div>
  )
}
