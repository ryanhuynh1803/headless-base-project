import { useQuery, useMutation, QueryHookOptions, MutationHookOptions } from '@apollo/client';
import { showError } from '@/utils/toast';

export const useSafeQuery = (
  query: any,
  options: QueryHookOptions = {}
) => {
  return useQuery(query, {
    ...options,
    onError: (error) => {
      showError(error.message);
      options.onError?.(error);
    },
  });
};

export const useSafeMutation = (
  mutation: any, 
  options: MutationHookOptions = {}
) => {
  return useMutation(mutation, {
    ...options,
    onError: (error) => {
      showError(error.message);
      options.onError?.(error);
    },
  });
};