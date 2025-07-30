import Hero from '@/components/home/Hero'
import AboutSection from '@/components/home/AboutSection'
import ServicesSection from '@/components/home/ServiceSection'
import TestimonialsSection from '@/components/home/TestimonialSection'
import TeamsSection from '@/components/home/TeamSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="teams">
        <TeamsSection />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
    </div>
  )
}