import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '@/graphql/queries/posts';
import { Post } from '@/types/post';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

const POSTS_PER_PAGE = 5;

const Home = () => {
  const { loading, error, data, fetchMore } = useQuery<{ 
    posts: { 
      nodes: Post[];
      pageInfo: {
        hasNextPage: boolean;
        endCursor: string;
      }
    } 
  }>(GET_POSTS, {
    variables: { first: POSTS_PER_PAGE },
  });

  const loadMore = () => {
    if (!data?.posts.pageInfo.hasNextPage) return;

    fetchMore({
      variables: {
        after: data.posts.pageInfo.endCursor,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          posts: {
            ...fetchMoreResult.posts,
            nodes: [...prev.posts.nodes, ...fetchMoreResult.posts.nodes],
          },
        };
      },
    });
  };

  if (error) return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Lỗi</AlertTitle>
        <AlertDescription>
          {error.message}
        </AlertDescription>
      </Alert>
    </div>
  );

  if (loading && !data) return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">📰 Bài viết mới nhất</h2>
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-white shadow-md rounded-xl p-5">
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );

  if (!data?.posts.nodes.length) return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-center">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">📰 Bài viết mới nhất</h2>
      <p className="text-gray-600">Hiện chưa có bài viết nào</p>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">📰 Bài viết mới nhất</h2>
      <ul className="space-y-4 mb-8">
        {data.posts.nodes.map((post) => (
          <li
            key={post.id}
            className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition-shadow duration-200"
          >
            <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
            {post.date && (
              <p className="text-sm text-gray-500 mt-1">
                📅 {new Date(post.date).toLocaleDateString()}
              </p>
            )}
          </li>
        ))}
      </ul>

      {data.posts.pageInfo.hasNextPage && (
        <div className="text-center">
          <Button 
            onClick={loadMore}
            disabled={loading}
            variant="outline"
          >
            {loading ? 'Đang tải...' : 'Xem thêm'}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Home;