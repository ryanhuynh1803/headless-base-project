import React from 'react';
import { usePostsQuery } from '@/hooks/usePostsQuery';
import { PostsList } from '@/components/PostsList';
import { Post } from '@/types/post';

export const PostsPage = () => {
  const [page, setPage] = React.useState(1);
  const { data, isLoading, error, isFetching } = usePostsQuery(10, page);
  const [posts, setPosts] = React.useState<Post[]>([]);

  React.useEffect(() => {
    if (data?.data) {
      if (page === 1) {
        setPosts(data.data);
      } else {
        setPosts(prevPosts => {
            const newPosts = data.data.filter(p => !prevPosts.some(pp => pp.id === p.id));
            return [...prevPosts, ...newPosts];
        });
      }
    }
  }, [data, page]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Danh sách bài viết</h1>
      
      <PostsList
        posts={posts}
        isLoading={isLoading && posts.length === 0}
        error={error}
        onLoadMore={handleLoadMore}
        hasMore={data ? data.total > posts.length : false}
        isFetchingMore={isFetching && posts.length > 0}
      />
    </div>
  );
};

export default PostsPage;