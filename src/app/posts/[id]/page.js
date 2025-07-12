import Comments from '@/components/Comments';
import getComments from '@/lib/getComments';
import getSinglePost from '@/lib/getSinglePost';
import React, {Suspense} from 'react'

const Blog = async ({params}) => {
  const { id } = await params

  const post = await getSinglePost(id)

    // const commentsRes = await fetch(`https://dummyjson.com/posts/${params.id}/comments`);
  const commentsData = getComments(id);


  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 px-4 py-12">
      <article className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 sm:p-10 border border-gray-200">
        {/* Post Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold leading-tight mb-2 text-gray-900">
            {post.title}
          </h1>
          <p className="text-sm text-gray-500">
            Author ID: <span className="font-medium">{post.userId}</span> · Views: <span className="font-medium">{post.views}</span>
          </p>
        </header>

        {/* Post Body */}
        <section className="prose prose-lg prose-gray max-w-none mb-10">
          <p>{post.body}</p>
        </section>

        {/* Tags */}
        <section className="flex flex-wrap gap-3 mb-10">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide select-none"
            >
              #{tag}
            </span>
          ))}
        </section>

        {/* Reactions */}
        <footer className="flex items-center gap-8 text-sm text-gray-600 border-t pt-5">
          <span className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zM9 7v6l5-3-5-3z" />
            </svg>
            {post.reactions.likes} Likes
          </span>
          <span className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zM11 7v6l-5-3 5-3z" />
            </svg>
            {post.reactions.dislikes} Dislikes
          </span>
          <span className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M2 12c2-4 6-7 10-7s8 3 10 7c-2 4-6 7-10 7s-8-3-10-7z" />
            </svg>
            {post.views} Views
          </span>
        </footer>

        {/* Back link */}
        <div className="mt-10">
          <a
            href="/"
            className="inline-block text-sm text-blue-600 hover:underline transition"
          >
            ← Back to home
          </a>
        </div>
      </article>

      {/* Comments Section */}
      <Suspense fallback={<div className="text-center text-gray-500">Loading comments...</div>}>
        <Comments commentsData={commentsData} />
      </Suspense>
    </main>
  )
}

export default Blog;
