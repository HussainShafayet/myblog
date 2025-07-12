// lib/getPosts.js
const LIMIT = 12

export default async function getTags() {
    const res = await fetch('https://dummyjson.com/posts/tag-list')
  if (!res.ok) {
    throw new Error('Failed to fetch posts')
  }

  const data = await res.json()

  return {
    tags: data,
  }
}
