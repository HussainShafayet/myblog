// lib/getPosts.js
const LIMIT = 12

export default async function getPosts(page = 1) {
  const skip = (page - 1) * LIMIT
  const res = await fetch(`https://dummyjson.com/posts?limit=${LIMIT}&skip=${skip}`, {
    next: { revalidate: 60 }, // Cache + SSR
  })

  if (!res.ok) {
    throw new Error('Failed to fetch posts')
  }

  const data = await res.json()

  return {
    posts: data.posts,
    total: data.total,
    totalPages: Math.ceil(data.total / LIMIT),
    page,
  }
}
