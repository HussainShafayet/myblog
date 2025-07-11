export default function FeaturedPosts() {
  return (
    <section className="py-16 bg-zinc-50 dark:bg-zinc-900 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Featured Posts</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-white dark:bg-zinc-800 rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2">Blog Post Title {n}</h3>
              <p className="text-zinc-600 dark:text-zinc-300 mb-4">A short summary of what this blog post is about.</p>
              <a href="#" className="text-blue-600 hover:underline font-medium">Read More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
