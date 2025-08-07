import { Post } from "@/types/post";
import { Button } from "@/components/ui/button";
import { PostSkeleton } from "./PostSkeleton";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertCircle } from "lucide-react";
import PostItem from "./PostItem";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handlePostClick = (id: string) => {
    navigate(`/posts/${id}`);
  };

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
    <div className="space-y-6">
      <div className="space-y-4">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} onClick={handlePostClick} />
        ))}
      </div>
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