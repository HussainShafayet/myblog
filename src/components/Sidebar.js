// app/posts/sidebar.jsx
import Link from 'next/link'
import getTags from '@/lib/getTags'

export default async function Sidebar() {
  const { tags } = await getTags()

  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2">
        <h2 className="text-xl font-bold mb-4 text-zinc-800 dark:text-white">Tags</h2>
        <ul className="space-y-2">
          {tags.map(tag => (
            <li key={tag}>
              <Link href={`/posts?tag=${tag}`}>
                <span className="block px-4 py-2 rounded-lg text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700">
                  #{tag}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
