export default function NewsletterCTA() {
  return (
    <section className="py-16 bg-blue-50 dark:bg-blue-950 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Join the Newsletter</h2>
        <p className="mb-6 text-zinc-700 dark:text-zinc-300">
          Get the latest posts and updates delivered straight to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full sm:w-auto px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900"
          />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
