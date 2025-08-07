import { Post } from '@/types/post';
import { Button } from '@/components/ui/button';
import { PostSkeleton } from './PostSkeleton';

interface PostsListProps {
  posts: Post[];
  isLoading: boolean;
  error: Error | null;
  onLoadMore?: () => void;
  hasMore?: boolean;
  isFetchingMore?: boolean;
}

export const PostsList = ({ 
  posts = [],
  isLoading = false,
  error = null,
  onLoadMore,
  hasMore = false,
  isFetchingMore = false
}: PostsListProps) => {
  if (isLoading && posts.length === 0) {
    return (
      <div className="space-y-6">
        {[...Array(5)].map((_, i) => <PostSkeleton key={i} />)}
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 text-center">Đã xảy ra lỗi: {error.message}</p>;
  }

  if (!isLoading && posts.length === 0) {
    return <p className="text-center text-gray-500">Không có bài viết nào.</p>;
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {posts.map(post => (
          <div key={post.id} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-xl mb-2">{post.title}</h3>
            <p className="text-gray-700">{post.body}</p>
          </div>
        ))}
      </div>
      {hasMore && onLoadMore && (
        <div className="mt-8 text-center">
          <Button 
            onClick={onLoadMore}
            disabled={isFetchingMore}
          >
            {(isFetchingMore) ? 'Đang tải...' : 'Tải thêm'}
          </Button>
        </div>
      )}
    </div>
  );
};