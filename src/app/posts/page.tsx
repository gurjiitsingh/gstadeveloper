import WordPressPostList from "@/components/WordPressPostList";
import posts from "@/data/post.json"; // Adjust the path as needed

export default function Post() {
  return (
    <main className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center py-8">Latest Posts</h1>
      <WordPressPostList posts={posts} />
    </main>
  );
}