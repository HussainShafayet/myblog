import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white dark:from-zinc-900 dark:to-black">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to <span className="text-blue-600">MyBlog</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 mb-6">
          Insights, tutorials, and stories from developers and creators.
        </p>
        <Link href="/blog" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          Explore the Blog
        </Link>
        <div className="mt-10">
          <Image src="/dummy.jpg" alt="Hero" width={800} height={400} className="rounded-lg shadow" />
        </div>
      </div>
    </section>
  )
}
