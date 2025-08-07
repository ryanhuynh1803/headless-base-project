import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { getPosts } from '@/utils/Get.posts';
import { Post } from '@/types/post';

export const usePostsQuery = (limit = 10, page = 1) => {
  return useQuery<{ data: Post[]; total: number }, Error>({
    queryKey: ['posts', limit, page],
    queryFn: () => getPosts(limit, page),
    placeholderData: keepPreviousData,
  });
};