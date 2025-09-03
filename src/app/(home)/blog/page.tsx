import Link from "next/link";
import { posts } from "@/lib/posts";

export default function BlogListPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Latest Articles</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-6 rounded-2xl shadow-md hover:shadow-lg transition bg-white dark:bg-zinc-900"
          >
            <h2 className="text-2xl font-semibold">
              <Link
                href={`/blog/${post.slug}`}
                className="text-[#00897b] hover:underline"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {post.metadata.description}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-block mt-4 text-[#00897b] font-medium hover:underline"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
