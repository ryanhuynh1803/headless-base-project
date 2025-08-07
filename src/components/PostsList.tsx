"use client";

import { GET_POSTS } from '@/graphql/queries/posts';
import { useGraphQLQuery } from '@/hooks/useGraphQL';
import { Skeleton } from '@/components/ui/skeleton';

const PostsList = () => {
  const { loading, error, data } = useGraphQLQuery(GET_POSTS);

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

  // Error handling is now automatic via the hook
  return (
    <div className="space-y-4">
      {data?.posts.nodes.map((post) => (
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