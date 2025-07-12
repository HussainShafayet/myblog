// app/posts/layout.js
import React, {Suspense} from 'react';
import Loading from './loading'
import Sidebar from '@/components/Sidebar';

export const metadata = {
  title: 'Posts',
  description: 'All posts with tag filtering',
};

export default async function PostsLayout({ children }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 flex gap-10">
      <Sidebar />
      {/* This is where posts page renders */}
      <main className="flex-1">
         <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </main>
    </div>
  );
}
