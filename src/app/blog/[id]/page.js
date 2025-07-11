import getPost from '@/lib/getSinglePost';
import React from 'react'

const Blog = async ({params}) => {
    const { id } = params;
    const post = await getPost(id);

  return (
    <div>{post.title}</div>
  )
}

export default Blog;
