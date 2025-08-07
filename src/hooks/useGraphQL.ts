import {
  useQuery,
  useMutation,
  QueryHookOptions,
  MutationHookOptions,
  OperationVariables,
  DocumentNode,
} from '@apollo/client';
import { showError } from '@/utils/toast';

export const useSafeQuery = <
  TData = any,
  TVariables extends OperationVariables = OperationVariables,
>(
  query: DocumentNode,
  options?: QueryHookOptions<TData, TVariables>,
) => {
  return useQuery<TData, TVariables>(query, {
    ...options,
    onError: (error) => {
      showError(error.message);
      options?.onError?.(error);
    },
  });
};

export const useSafeMutation = <
  TData = any,
  TVariables extends OperationVariables = OperationVariables,
>(
  mutation: DocumentNode,
  options?: MutationHookOptions<TData, TVariables>,
) => {
  return useMutation<TData, TVariables>(mutation, {
    ...options,
    onError: (error) => {
      showError(error.message);
      options?.onError?.(error);
    },
  });
};