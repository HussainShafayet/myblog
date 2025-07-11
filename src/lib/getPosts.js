export default async function getBlog() {
    const res = await fetch('https://dummyjson.com/posts?limit=10', {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!res.ok) {
      throw new Error('Failed to fetch posts');
    }

    const data = await res.json();
    return data.posts;
}