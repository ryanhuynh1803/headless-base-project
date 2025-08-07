import React from 'react';
import { Post } from '@/types/post';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

interface PostsListProps {
  posts: Post[];
  isLoading: boolean;
  error: Error | null;
  onLoadMore?: () => void;
  hasMore?: boolean;
}

export const PostsList = ({ 
  posts, 
  isLoading, 
  error,
  onLoadMore,
  hasMore
}: PostsListProps) => {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="p-4 border rounded-lg">
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-full" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 p-4 border border-red-200 rounded-lg bg-red-50">
        Lỗi khi tải dữ liệu: {error.message}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg">{post.title}</h3>
          <p className="text-gray-600 mt-2">{post.body}</p>
          {post.date && (
            <p className="text-sm text-gray-400 mt-2">
              {new Date(post.date).toLocaleDateString()}
            </p>
          )}
        </div>
      ))}
      
      {hasMore && (
        <div className="flex justify-center mt-6">
          <Button 
            onClick={onLoadMore}
            disabled={isLoading}
          >
            {isLoading ? 'Đang tải...' : 'Tải thêm'}
          </Button>
        </div>
      )}
    </div>
  );
};