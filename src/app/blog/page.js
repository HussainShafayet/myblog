

// app/blog/page.js
import Link from 'next/link'
import { notFound } from 'next/navigation'
import  getPosts  from '@/lib/getPosts'

export const metadata = {
  title: 'Blog',
  description: 'Explore all blog posts with pagination.',
}

export default async function BlogPage({ searchParams }) {
  const page = parseInt(searchParams.page || '1')

  // 🧠 Validate input
  if (isNaN(page) || page < 1) return notFound()

  // 🛠 Get post data
  let postData
  try {
    postData = await getPosts(page)
  } catch {
    return notFound()
  }

  const { posts, totalPages } = postData

  // ❌ If page exceeds totalPages, show 404
  if (page > totalPages) return notFound()

  return (
    <main className="min-h-screen py-16 px-4 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white">
            Blog Posts
          </h1>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            Page {page} of {totalPages}
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group bg-white dark:bg-zinc-800 rounded-xl p-5 shadow hover:shadow-lg border border-zinc-200 dark:border-zinc-700 transition"
            >
              {/*<img
                src={`https://source.unsplash.com/600x300/?blog,tech&sig=${post.id}`}
                alt={post.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />*/}
              <div className="mb-2 flex flex-wrap gap-1">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-2 py-0.5 rounded-full uppercase font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
              <h2 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-blue-600">
                {post.title}
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 line-clamp-3 mt-1">{post.body}</p>
              <div className="mt-3 flex justify-between text-xs text-zinc-500 dark:text-zinc-400">
                <span>👤 User #{post.userId}</span>
                <span>👁️ {post.views} views</span>
              </div>
              <div className="mt-1 text-sm text-zinc-500 dark:text-zinc-400 flex gap-4">
                <span>👍 {post.reactions.likes}</span>
                <span>👎 {post.reactions.dislikes}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination controls */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-2 text-sm font-medium">
          {/* Previous button */}
          {page > 1 && (
            <Link
              href={`/blog?page=${page - 1}`}
              className="px-3 py-2 rounded-md bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-white hover:bg-zinc-300 dark:hover:bg-zinc-600"
            >
              ← Prev
            </Link>
          )}

          {/* Numbered page links */}
          {Array.from({ length: totalPages }, (_, i) => {
            const pageNumber = i + 1;
            const isActive = pageNumber === page;

            // Show only nearby page numbers (e.g. +/- 2), plus first and last
            if (
              pageNumber === 1 ||
              pageNumber === totalPages ||
              (pageNumber >= page - 2 && pageNumber <= page + 2)
            ) {
              return (
                <Link
                  key={pageNumber}
                  href={`/blog?page=${pageNumber}`}
                  className={`px-3 py-2 rounded-md ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "bg-zinc-100 dark:bg-zinc-700 text-zinc-800 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-600"
                  }`}
                >
                  {pageNumber}
                </Link>
              );
            }

            // Ellipsis for skipped pages
            if (
              (pageNumber === page - 3 && pageNumber > 1) ||
              (pageNumber === page + 3 && pageNumber < totalPages)
            ) {
              return (
                <span
                  key={pageNumber}
                  className="px-2 text-zinc-500 dark:text-zinc-400"
                >
                  ...
                </span>
              );
            }

            return null;
          })}

          {/* Next button */}
          {page < totalPages && (
            <Link
              href={`/blog?page=${page + 1}`}
              className="px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            >
              Next →
            </Link>
          )}
        </div>
      </div>
    </main>
  )
}

