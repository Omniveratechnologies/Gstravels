# GS Travels — React + Tailwind Rebuild

A modern, futuristic redesign of the original GS Travels (gstravels.org) WordPress/Elementor
site, rebuilt as a React + Tailwind CSS single-page app. All copy, phone numbers, the address,
service list, fleet specs, stats, and testimonials are unchanged from the original — only the
visual design and code have been rebuilt.

## Design direction

Dark "automotive HUD" theme: near-black base, taxi-amber accent (a nod to Kolkata's yellow cabs),
electric cyan for secondary highlights, `Space Grotesk` for display type, `Inter` for body copy,
and `JetBrains Mono` for data/labels (specs, stats, nav). A recurring "waypoint" marker (a pulsing
dot + route code, e.g. `WP-03`) threads through every section as a route/journey motif, and the
hero has an animated dashed GPS route line in the background.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

Requires Node 18+.

## Project structure

```
src/
  data.js                 # all site copy/content, pulled from gstravels.org
  App.jsx                 # page assembly
  components/
    Navbar.jsx
    Hero.jsx
    BookingForm.jsx
    Waypoint.jsx           # signature route-marker element
    Services.jsx
    About.jsx
    Fleet.jsx
    WhyUs.jsx
    CtaBanners.jsx
    Gallery.jsx
    Testimonials.jsx
    Contact.jsx
    Footer.jsx
```

## Notes

- Images (logo, gallery, vehicle/testimonial photos) are referenced directly from the original
  site's media URLs (`gstravels.org/wp-content/uploads/...`). Swap these for your own hosted
  assets whenever convenient.
- The booking and contact forms are UI-only (no backend wired up) — connect them to your
  booking/CRM system or a form service of your choice.
- The Google Map embed reuses the original address query; replace with an API-key-based embed
  for production if you outgrow the query-string version.
