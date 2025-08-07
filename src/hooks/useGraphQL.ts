import { useQuery, useMutation } from '@apollo/client';
import { showError } from '@/utils/toast';

export const useGraphQLQuery = (query, options = {}) => {
  const result = useQuery(query, {
    ...options,
    onError: (error) => {
      showError(error.message);
      options.onError?.(error);
    },
  });

  return result;
};

export const useGraphQLMutation = (mutation, options = {}) => {
  const [mutate, result] = useMutation(mutation, {
    ...options,
    onError: (error) => {
      showError(error.message);
      options.onError?.(error);
    },
  });

  return [mutate, result];
};