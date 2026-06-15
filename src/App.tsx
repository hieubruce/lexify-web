import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { HowItWorks } from './components/HowItWorks'
import { Sync } from './components/Sync'
import { Download } from './components/Download'
import { Faq } from './components/Faq'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { useReveal } from './lib/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Sync />
        <Download />
        <Faq />
        <About />
      </main>
      <Footer />
    </>
  )
}
