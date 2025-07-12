export default function About() {
  return (
    <section className="py-24 bg-white dark:bg-black px-6 sm:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="relative inline-block text-4xl font-extrabold mb-8 text-gray-900 dark:text-white tracking-wide">
          About the{' '}
          <span className="text-blue-600 dark:text-blue-400">Blog</span>
          <span
            aria-hidden="true"
            className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded opacity-30"
          />
        </h2>

        <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-2xl mx-auto tracking-wide">
          MyBlog is a <span className="font-semibold text-blue-600 dark:text-blue-400">friendly</span> place where I share web development tips, frontend tutorials, and thoughts on modern tech. Whether you are a beginner or a seasoned developer, you will find something useful here.
        </p>
      </div>
    </section>
  )
}
