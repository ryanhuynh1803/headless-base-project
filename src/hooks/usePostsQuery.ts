import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { getPosts } from '@/utils/Get.posts';

export const usePostsQuery = (limit = 10, page = 1) => {
  return useQuery({
    queryKey: ['posts', limit, page],
    queryFn: () => getPosts(limit, page),
    placeholderData: keepPreviousData,
  });
};