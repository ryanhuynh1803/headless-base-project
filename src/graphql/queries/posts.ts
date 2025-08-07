export const GET_POST = gql`
  ${POST_FRAGMENT}
  query GetPost($id: ID!) {
    post(id: $id) {
      ...PostFields
    }
  }
`;