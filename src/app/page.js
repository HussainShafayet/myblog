import Hero from '@/components/Hero'
import About from '@/components/About'
import FeaturedPosts from '@/components/FeaturedPosts'
import Categories from '@/components/Categories'
import NewsletterCTA from '@/components/NewsletterCTA'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedPosts />
      <Categories />
      <NewsletterCTA />
      <Footer />
    </>
  )
}
