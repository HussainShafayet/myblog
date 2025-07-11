// app/not-found.js
import Link from 'next/link'

export const metadata = {
  title: '404 - Page Not Found',
}

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-white dark:bg-zinc-900">
      <div className="max-w-xl text-center">
        <h1 className="text-6xl font-extrabold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-white">
          Oops! Page not found.
        </h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-6">
          <Link
            href="/"
            className="inline-block px-6 py-3 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
