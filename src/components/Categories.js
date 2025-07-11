export default function Categories() {
  const topics = ['React', 'Next.js', 'JavaScript', 'UI/UX', 'Performance', 'Career']

  return (
    <section className="py-16 bg-white dark:bg-black px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Explore Categories</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {topics.map((topic) => (
            <span key={topic} className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-100 px-4 py-2 rounded-full text-sm font-medium">
              {topic}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
