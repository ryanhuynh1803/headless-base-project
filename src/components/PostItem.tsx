import React, { memo } from 'react';
import { Post } from '@/types/post';

interface PostItemProps {
  post: Post;
  onClick: (id: string) => void;
}

const PostItem = memo(({ post, onClick }: PostItemProps) => (
  <div 
    className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
    onClick={() => onClick(post.id)}
  >
    <h3 className="font-medium">{post.title}</h3>
    {post.date && (
      <p className="text-sm text-gray-500">
        {new Date(post.date).toLocaleDateString()}
      </p>
    )}
  </div>
));

PostItem.displayName = 'PostItem';
export default PostItem;