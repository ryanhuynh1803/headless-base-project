"use client";

import { useQuery } from '@apollo/client';
import { GET_POSTS } from '@/graphql/queries/posts';
import { Post, PostsData } from '@/types/post';

const PostsList = () => {
  const { loading, error, data } = useQuery<PostsData>(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="space-y-4">
      {data?.posts.nodes.map((post: Post) => (
        <div key={post.id} className="p-4 border rounded-lg">
          <h3 className="text-lg font-medium">{post.title}</h3>
          <p className="text-sm text-gray-500">{post.date}</p>
          <a href={`/posts/${post.slug}`} className="text-blue-500 hover:underline">
            Read more
          </a>
        </div>
      ))}
    </div>
  );
};

export default PostsList;