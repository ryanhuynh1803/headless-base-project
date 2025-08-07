import { Post } from '@/types/post';
import { Button } from '@/components/ui/button';
import { PostSkeleton } from '@/components/PostSkeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

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
  if (isLoading) {
    return (
      <div className="space-y-6">
        {[...Array(5)].map((_, i) => <PostSkeleton key={i} />)}
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error.message}</AlertDescription>
      </Alert>
    );
  }

  if (posts.length === 0) {
    return <p>No posts found.</p>;
  }

  return (
    <div className="space-y-8">
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{post.body}</p>
          </li>
        ))}
      </ul>
      {hasMore && onLoadMore && (
        <div className="text-center">
          <Button 
            onClick={onLoadMore}
            disabled={isFetchingMore}
          >
            {isFetchingMore ? 'Đang tải...' : 'Tải thêm'}
          </Button>
        </div>
      )}
    </div>
  );
};