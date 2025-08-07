import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams();
  const { data } = useQuery(GET_POST, { variables: { id } });

  const formattedDate = useMemo(() => {
    return data?.post?.date 
      ? new Date(data.post.date).toLocaleDateString() 
      : null;
  }, [data?.post?.date]);

  if (!data?.post) return <NotFound />;

  return (
    <article>
      {/* Render optimized content */}
    </article>
  );
};