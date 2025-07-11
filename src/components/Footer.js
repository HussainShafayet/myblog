export default function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-zinc-500 dark:text-zinc-400 border-t border-zinc-200 dark:border-zinc-800">
      © {new Date().getFullYear()} MyBlog. Built with Next.js.
    </footer>
  )
}
