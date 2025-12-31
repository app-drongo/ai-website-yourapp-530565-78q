import Hero from '@/components/sections/home/Hero'
import Features from '@/components/sections/home/Features'
import Testimonials from '@/components/sections/home/Testimonials'

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
    </>
  )
}