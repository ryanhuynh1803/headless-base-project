import React from 'react';
import { usePostsQuery } from '@/hooks/usePostsQuery';
import { PostsList } from '@/components/PostsList';

export const PostsPage = () => {
  const [page, setPage] = React.useState(1);
  const { data, isLoading, error } = usePostsQuery(10, page);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Danh sách bài viết</h1>
      
      <PostsList
        posts={data?.data || []}
        isLoading={isLoading}
        error={error}
        onLoadMore={handleLoadMore}
        hasMore={data ? data.total > data.data.length : false}
      />
    </div>
  );
};

export default PostsPage;