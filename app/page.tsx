import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Examples from '@/components/Examples'
import Performance from '@/components/Performance'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900">
      <Hero />
      <Performance />
      <Examples />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}
