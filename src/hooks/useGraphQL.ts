import { useQuery, useMutation, QueryHookOptions, MutationHookOptions } from '@apollo/client';
import { showError } from '@/utils/toast';

export const useSafeQuery = (
  query: any,
  options: QueryHookOptions = {} // Add default empty object
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
  options: MutationHookOptions = {} // Add default empty object
) => {
  return useMutation(mutation, {
    ...options,
    onError: (error) => {
      showError(error.message);
      options.onError?.(error);
    },
  });
};