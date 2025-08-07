import { Post } from '@/types/post';
import { Button } from '@/components/ui/button';
import { PostSkeleton } from './PostSkeleton';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
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
  if (isLoading && posts.length === 0) {
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
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="p-4 border rounded-lg shadow-sm">
          <h3 className="font-bold text-lg">{post.title}</h3>
          {(post as any).body && <p className="text-sm text-gray-600 mt-2 line-clamp-2">{(post as any).body}</p>}
        </div>
      ))}
      {hasMore && onLoadMore && (
        <div className="mt-8 text-center">
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