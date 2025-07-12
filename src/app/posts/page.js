// app/blog/page.js
import Link from 'next/link'
import { notFound } from 'next/navigation'
import getPosts from '@/lib/getPosts'
import getTags from '@/lib/getTags';
import Image from 'next/image';

export const metadata = {
  title: 'Blog',
  description: 'Explore all blog posts with pagination.',
}

export default async function BlogPage({ searchParams }) {
  searchParams = await searchParams;
  const page = parseInt(searchParams.page || '1')
  if (isNaN(page) || page < 1) return notFound();
  const currentTag =  searchParams.tag || null

  let postData, tagsData = []
  postData = await getPosts(page, currentTag);

    
 

  const { posts, totalPages } = postData;
  if (page > totalPages) return notFound()

  return (
      <>
      {/* Posts grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            className="group bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6 shadow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            {post.image && (
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}

            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs uppercase font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-2 py-0.5 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white group-hover:text-blue-600 transition">
              {post.title}
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 line-clamp-3">
              {post.body}
            </p>

            <hr className="my-4 border-zinc-200 dark:border-zinc-700" />

            <div className="flex justify-between text-xs text-zinc-500 dark:text-zinc-400">
              <span>👤 User #{post.userId}</span>
              <span>👁️ {post.views} views</span>
            </div>
            <div className="mt-1 text-sm flex gap-4 text-zinc-500 dark:text-zinc-400">
              <span>👍 {post.reactions.likes}</span>
              <span>👎 {post.reactions.dislikes}</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-16 flex flex-wrap justify-center items-center gap-2 text-sm font-medium">
        {page > 1 && (
          <Link
            href={`/posts?tag=${currentTag ?? ''}&page=${page - 1}`}
            className="px-4 py-2 rounded-full bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-white hover:bg-zinc-300 dark:hover:bg-zinc-600 transition"
          >
            ← Prev
          </Link>
        )}

        {Array.from({ length: totalPages }, (_, i) => {
          const pageNumber = i + 1;
          const isActive = pageNumber === page;
          if (
            pageNumber === 1 ||
            pageNumber === totalPages ||
            (pageNumber >= page - 2 && pageNumber <= page + 2)
          ) {
            return (
              <Link
                key={pageNumber}
                href={`/posts?tag=${currentTag ?? ''}&page=${pageNumber}`}
                className={`px-4 py-2 rounded-full transition ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'bg-zinc-100 dark:bg-zinc-700 text-zinc-800 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-600'
                }`}
              >
                {pageNumber}
              </Link>
            );
          }
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

        {page < totalPages && (
          <Link
            href={`/posts?tag=${currentTag ?? ''}&page=${page + 1}`}
            className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Next →
          </Link>
        )}
      </div>
    </>
   

  )
}
