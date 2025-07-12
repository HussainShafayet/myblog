import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      aria-label="Hero section"
      className="relative flex flex-col justify-center min-h-[calc(100vh-4rem)] py-28 px-8 bg-gradient-to-b from-blue-50 to-white dark:from-zinc-900 dark:to-black overflow-hidden"
    >
      {/* Background gradient shapes */}
      <div
        aria-hidden="true"
        className="absolute -top-20 -left-32 w-72 h-72 bg-blue-300 rounded-full filter blur-3xl opacity-30 dark:bg-blue-700"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-blue-400 to-blue-200 rounded-3xl opacity-20 dark:opacity-40 dark:from-blue-600 dark:to-blue-800"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="mb-6 text-5xl md:text-7xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-blue-300 dark:to-blue-400">
          Welcome to MyBlog
        </h1>

        <p className="max-w-3xl mx-auto mb-10 text-lg md:text-2xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
          Insights, tutorials, and stories from developers and creators.
        </p>

        <Link
          href="/blog"
          className="inline-block px-10 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          aria-label="Explore the blog"
        >
          Explore the Blog
        </Link>

        <div className="mt-16 relative max-w-4xl mx-auto rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-tr from-white to-blue-50 dark:from-zinc-800 dark:to-zinc-900">
          <Image
            src="/dummy.jpg"
            alt="Hero illustration"
            width={800}
            height={400}
            className="object-cover rounded-3xl"
            priority
          />
          {/* subtle overlay for mood */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent dark:from-black/30 dark:to-transparent rounded-3xl" />
        </div>

        <p className="mt-8 text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-md mx-auto font-semibold">
          Trusted by <span className="text-blue-600 dark:text-blue-400">1000+</span> developers worldwide.
        </p>
      </div>
    </section>
  )
}
