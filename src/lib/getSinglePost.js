export default async function getPost(id) {
    const res = await fetch(`https://dummyjson.com/posts/${id}`, {
    });
    
    if (!res.ok) {
        throw new Error('Failed to fetch post');
    }
    
    const data = await res.json();
    return data;
}