import { debounce } from 'lodash-es';

const PostsPage = () => {
  const handleSearch = debounce((query) => {
    refetch({ search: query });
  }, 300);

  // Rest of component
};