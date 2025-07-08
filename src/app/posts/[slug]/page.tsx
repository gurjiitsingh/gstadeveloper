import posts from '@/data/post.json';
import { notFound } from 'next/navigation';

type Params = {
  params: {
    slug: string;
  };
};

export default function SinglePostPage({ params }:any) {
  const post = posts.find((p: any) => p.slug === params.slug);

  if (!post) return notFound();

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


export  function generateStaticParams() {
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}
