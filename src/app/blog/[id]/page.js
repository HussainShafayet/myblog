import getPost from '@/lib/getSinglePost';
import React from 'react'

const Blog = async ({params}) => {
    const { id } = params;
    const post = await getPost(id);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 px-4 py-10">
      <article className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 sm:p-10 border border-gray-200">
        
        {/* Post Header */}
        <header className="mb-6">
          <h1 className="text-4xl font-extrabold leading-tight mb-2 text-gray-900">
            {post.title}
          </h1>
          <p className="text-sm text-gray-500">
            Author ID: {post.userId} · Views: {post.views}
          </p>
        </header>

        {/* Body */}
        <section className="prose prose-lg prose-gray max-w-none mb-6">
          <p>{post.body}</p>
        </section>

        {/* Tags */}
        <section className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide"
            >
              #{tag}
            </span>
          ))}
        </section>

        {/* Reactions */}
        <footer className="flex items-center gap-6 text-sm text-gray-600 border-t pt-4">
          <span className="flex items-center gap-1">👍 {post.reactions.likes}</span>
          <span className="flex items-center gap-1">👎 {post.reactions.dislikes}</span>
          <span className="flex items-center gap-1">👁️ {post.views}</span>
        </footer>

        {/* Back link */}
        <div className="mt-8">
          <a
            href="/"
            className="inline-block text-sm text-blue-600 hover:underline transition"
          >
            ← Back to home
          </a>
        </div>
      </article>
    </main>
  )
}

export default Blog;
