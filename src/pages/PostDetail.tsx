import { useQuery } from '@apollo/client';
import { GET_POST } from '@/graphql/queries/posts';

const PostDetail = ({ params }: { params: { id: string } }) => {
  const { data } = useQuery(GET_POST, {
    variables: { id: params.id }
  });
  // ... rest of component
};