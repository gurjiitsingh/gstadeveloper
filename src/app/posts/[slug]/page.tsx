import posts from "@/data/post.json";

interface PostProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export default function SinglePostPage({ params }: PostProps) {
  const post = posts.find((p: any) => p.slug === params.slug);

  if (!post) return <div className="p-6">Post not found.</div>;

  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      <h1
        className="text-3xl font-bold mb-4"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />
      <p className="text-sm text-gray-500 mb-4">
        {new Date(post.date).toDateString()}
      </p>
      {post.featured_image_src && (
        <img
          src={post.featured_image_src}
          alt={post.title.rendered}
          className="w-full rounded-xl mb-6"
        />
      )}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </article>
  );
}
