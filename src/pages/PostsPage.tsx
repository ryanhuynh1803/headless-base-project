const { refetch } = useQuery(GET_POSTS, {
  variables: { first: 10 }
});