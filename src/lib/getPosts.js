// lib/getPosts.js
const LIMIT = 12

export default async function getPosts(page = 1, tag=null) {
  const baseUrl = `https://dummyjson.com/posts`;
  const skip = (page - 1) * LIMIT

  
  let url = `https://dummyjson.com/posts?limit=${LIMIT}&skip=${skip}`;

  if (tag) {
    // Adjust URL or API call to fetch posts by tag if API supports it
    url = `${baseUrl}/tag/${encodeURIComponent(tag)}?limit=${LIMIT}&skip=${skip}`;
  }
  
  const res = await fetch(url, {
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
