import React from "react";

interface Post {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  link: string;
  featured_image_src?: string;
}

interface Props {
  posts: Post[];
}

const WordPressPostList: React.FC<Props> = ({ posts }) => {
  return (<div className="container mx-auto">
    <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <div key={post.id} className="bg-white shadow-md rounded-2xl overflow-hidden">
          {post.featured_image_src && (
            <img
              src={post.featured_image_src}
              alt={post.title.rendered}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-4">
            <h2
              className="text-xl font-semibold mb-2"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            <p className="text-gray-500 text-sm mb-2">{new Date(post.date).toDateString()}</p>
            <div
              className="text-gray-700 text-sm mb-4"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-600 font-medium hover:underline"
            >
              Read More →
            </a>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default WordPressPostList;