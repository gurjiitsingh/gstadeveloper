// app/components/PostList.tsx
'use client';

import posts from '@/data/post.json';
import Link from 'next/link';

export default function PostList() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Posts</h1>
      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.slug}`}>
              <span className="text-blue-600 hover:underline">
                {post.title.rendered}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


// import WordPressPostList from "@/components/WordPressPostList";
// import posts from "@/data/post.json"; // Adjust the path as needed

// export default function Post() {
//   return (
//     <main className="min-h-screen bg-gray-100">
//       <h1 className="text-3xl font-bold text-center py-8">Latest Posts</h1>
//       <WordPressPostList posts={posts} />
//     </main>
//   );
// }