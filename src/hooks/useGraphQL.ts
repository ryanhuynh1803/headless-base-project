import { useQuery, useMutation, QueryHookOptions, MutationHookOptions } from '@apollo/client';
import { showError } from '@/utils/toast';

type GraphQLOptions = {
  onError?: (error: Error) => void;
};

export const useGraphQLQuery = (query: any, options: QueryHookOptions & GraphQLOptions = {}) => {
  const result = useQuery(query, {
    ...options,
    onError: (error) => {
      showError(error.message);
      options.onError?.(error);
    },
  });

  return result;
};

export const useGraphQLMutation = (mutation: any, options: MutationHookOptions & GraphQLOptions = {}) => {
  const [mutate, result] = useMutation(mutation, {
    ...options,
    onError: (error) => {
      showError(error.message);
      options.onError?.(error);
    },
  });

  return [mutate, result];
};