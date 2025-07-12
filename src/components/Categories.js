export default function Categories() {
  const topics = ['React', 'Next.js', 'JavaScript', 'UI/UX', 'Performance', 'Career']

  return (
    <section className="py-20 bg-white dark:bg-black px-6 sm:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-10 text-gray-900 dark:text-white tracking-tight">
          Explore Categories
        </h2>
        <div className="flex flex-wrap justify-center gap-5">
          {topics.map((topic) => (
            <button
              key={topic}
              type="button"
              className="cursor-pointer bg-gradient-to-r from-blue-300 to-blue-500 dark:from-blue-700 dark:to-blue-900 
                         text-white px-5 py-2.5 rounded-full font-semibold text-base shadow-md
                         hover:from-blue-400 hover:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-800
                         transition-colors duration-300
                         focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50"
            >
              {topic}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
