import { useParams, Link } from 'react-router-dom';
import { useSafeQuery } from '@/hooks/useGraphQL';
import { GET_POST } from '@/graphql/queries/posts';
import NotFound from '@/pages/NotFound';
import { PostSkeleton } from '@/components/PostSkeleton';
import { Post } from '@/types/post';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useSafeQuery<{ post: Post }>(GET_POST, {
    variables: { id },
    skip: !id,
  });

  if (loading) return <PostSkeleton />;
  if (error || !data?.post) return <NotFound />;

  return (
    <div className="container mx-auto py-8 px-4 max-w-3xl">
      <Link to="/" className="inline-block mb-8">
        <Button variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Quay lại danh sách
        </Button>
      </Link>
      <article>
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">{data.post.title}</h1>
        <p className="text-sm text-gray-500 mb-6">
          Đăng ngày {new Date(data.post.date).toLocaleDateString()}
        </p>
        <div
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: data.post.content || '' }}
        />
      </article>
    </div>
  );
};

export default PostDetail;