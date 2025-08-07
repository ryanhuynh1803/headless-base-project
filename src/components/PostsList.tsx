"use client";

import { useQuery } from '@apollo/client';
import { GET_POSTS } from '@/graphql/queries/posts';
import { Post, PostsData } from '@/types/post';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const PostsList = () => {
  const { loading, error, data } = useQuery<PostsData>(GET_POSTS);

  if (loading) return (
    <div className="space-y-4">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="p-4 border rounded-lg space-y-2">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ))}
    </div>
  );

  if (error) return (
    <Alert variant="destructive">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Error loading posts</AlertTitle>
      <AlertDescription>
        {error.message}
      </AlertDescription>
    </Alert>
  );

  return (
    <div className="space-y-4">
      {data?.posts.nodes.map((post: Post) => (
        <div key={post.id} className="p-4 border rounded-lg hover:bg-accent transition-colors">
          <h3 className="text-lg font-medium">{post.title}</h3>
          <p className="text-sm text-muted-foreground">{post.date}</p>
          <a 
            href={`/posts/${post.slug}`} 
            className="text-primary hover:underline inline-block mt-2"
          >
            Read more →
          </a>
        </div>
      ))}
    </div>
  );
};

export default PostsList;