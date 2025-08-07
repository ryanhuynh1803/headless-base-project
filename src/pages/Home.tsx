import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '@/graphql/queries/posts';
import { Post } from '@/types/post';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PostItem from '@/components/PostItem';

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

  const navigate = useNavigate();

  const handlePostClick = (id: string) => {
    navigate(`/posts/${id}`);
  };

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
      <div className="space-y-4 mb-8">
        {data.posts.nodes.map((post) => (
          <PostItem key={post.id} post={post} onClick={handlePostClick} />
        ))}
      </div>

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