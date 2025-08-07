import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_POST } from '@/graphql/queries/posts';
import NotFound from '@/pages/NotFound';
import { PostSkeleton } from '@/components/PostSkeleton';
import { Post } from '@/types/post';

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useQuery<{ post: Post }>(GET_POST, {
    variables: { id },
    skip: !id,
  });

  if (loading) return <PostSkeleton />;
  if (error || !data?.post) return <NotFound />;

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">{data.post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        {new Date(data.post.date).toLocaleDateString()}
      </p>
    </div>
  );
};

export default PostDetail;