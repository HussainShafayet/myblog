export default async function getComments(id) {
    const res = await fetch(`https://dummyjson.com/posts/${id}/comments`, {
    });

    if (!res.ok) {
        throw new Error('Failed to fetch comments');
    }

    const data = await res.json();
    
    return data;
}