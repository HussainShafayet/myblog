import React from 'react'

const Comments = async ({commentsData}) => {
  const  {comments}  = await commentsData;
  return (
    <section className="max-w-3xl mx-auto mt-14 bg-white p-8 sm:p-10 rounded-lg shadow border border-gray-200">
        <h2 className="text-3xl font-semibold mb-8 border-b pb-3 text-gray-900">
          Comments ({comments.length})
        </h2>

        {comments.length === 0 ? (
          <p className="text-gray-500 italic">No comments yet. Be the first to comment!</p>
        ) : (
          <ul className="space-y-8">
            {comments.map(({ id, user, body }) => (
              <li
                key={id}
                className="flex gap-5 p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0">
                  {/* Avatar circle with user initials */}
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold uppercase select-none">
                    {user.username.slice(0, 2)}
                  </div>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">{user.username}</p>
                  <p className="mt-1 text-gray-800">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
  )
}

export default Comments;