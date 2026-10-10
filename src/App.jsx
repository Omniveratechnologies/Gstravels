import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Fleet from './components/Fleet.jsx'
import WhyUs from './components/WhyUs.jsx'
import CtaBanners from './components/CtaBanners.jsx'
import Gallery from './components/Gallery.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-void text-ink font-body antialiased selection:bg-amber selection:text-void">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Fleet />
        <WhyUs />
        <CtaBanners />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
