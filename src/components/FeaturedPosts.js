import getPosts from "@/lib/getPosts";
import Link from "next/link";

export default async function FeaturedPosts() {
  const postData = await getPosts(1);
  const { posts } = postData;

  return (
    <section className="py-16 px-4 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-zinc-800 dark:text-white mb-6">Featured Blog Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
               <div key={post.id} className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 mt-10 border border-gray-200">
              <Link href={`/blog/${post.id}`} className="block mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{post.title}</h2>
                <p className="text-gray-700 mb-6 line-clamp-3">{post.body}</p>
              </Link>
                <div className="flex justify-between items-center flex-wrap gap-y-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <span>👍 {post.reactions.likes}</span>
                    <span>👎 {post.reactions.dislikes}</span>
                    <span>👁️ {post.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}
