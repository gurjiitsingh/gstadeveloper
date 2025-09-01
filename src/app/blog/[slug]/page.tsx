import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

// ✅ Fix: Make this async and await params
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    keywords: post.metadata.keywords,
  };
}

// ✅ Fix: Make page async and await params
export default async function BlogArticle({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 py-12 prose prose-lg dark:prose-invert">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </main>
  );
}
