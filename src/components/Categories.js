

export default async function Categories() {
  const res = await fetch(`https://dummyjson.com/posts/tag-list`);
  const tags = await res.json();

  const visibleTags = tags.slice(0, 6); // Show only first 6

  return (
    <section className="py-20 bg-white dark:bg-black px-6 sm:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-10 text-gray-900 dark:text-white tracking-tight">
          Explore Categories
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {visibleTags.map((tag) => (
            <span
              key={tag}
              className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-md transition hover:scale-105"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href="/categories"
          className="inline-block mt-2 text-blue-600 dark:text-blue-400 font-medium hover:underline text-sm transition"
        >
          View all categories →
        </a>
      </div>
    </section>
  );
}

