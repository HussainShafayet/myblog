import getPosts from "@/lib/getPosts";
import Link from "next/link";

export default async function FeaturedPosts() {
  const postData = await getPosts(1);
  const { posts } = postData;

  return (
    <section className="py-16 px-6 bg-zinc-50 dark:bg-zinc-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white mb-10 tracking-tight">
          Featured Blog Posts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group block bg-white dark:bg-zinc-800 rounded-xl border border-gray-200 dark:border-zinc-700 p-6 shadow-sm hover:shadow-lg hover:border-blue-500 transition-all duration-300 ease-in-out max-w-2xl mx-auto"
              aria-label={`Read more about ${post.title}`}
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {post.title}
              </h3>

              <p className="text-gray-700 dark:text-zinc-300 mb-6 line-clamp-3 leading-relaxed">
                {post.body}
              </p>

              <div className="flex justify-between flex-wrap gap-y-4 items-center">
                <div className="flex flex-wrap gap-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gradient-to-r from-blue-400 to-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm select-none"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400 select-none">
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 9l-3 3m0 0l-3-3m3 3V4"
                      />
                    </svg>
                    {post.reactions.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 15l3-3m0 0l3 3m-3-3v7"
                      />
                    </svg>
                    {post.reactions.dislikes}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400 dark:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m0 0l3-3m0 6l-3-3"
                      />
                    </svg>
                    {post.views}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
