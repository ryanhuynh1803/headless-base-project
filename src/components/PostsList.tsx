import { Post } from '@/types/post';
import { Button } from '@/components/ui/button';
import { PostSkeleton } from '@/components/PostSkeleton';

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
    return <p className="text-red-500">Lỗi: {error.message}</p>;
  }

  if (posts.length === 0) {
    return <p>Không có bài viết nào.</p>;
  }

  return (
    <div>
      <ul className="space-y-6">
        {posts.map(post => (
          <li key={post.id} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-xl">{post.title}</h3>
            {post.body && <p className="text-gray-700 mt-2">{post.body}</p>}
          </li>
        ))}
      </ul>
      {hasMore && (
        <div className="text-center mt-8">
          <Button 
            onClick={onLoadMore}
            disabled={isLoading || isFetchingMore}
          >
            {(isLoading || isFetchingMore) ? 'Đang tải...' : 'Tải thêm'}
          </Button>
        </div>
      )}
    </div>
  );
};