import { gql } from '@apollo/client';

const POST_FRAGMENT = gql`
  fragment PostFields on Post {
    id
    title
    date
    slug
  }
`;

export const GET_POSTS = gql`
  ${POST_FRAGMENT}
  query GetPosts($first: Int, $after: String) {
    posts(first: $first, after: $after) {
      nodes {
        ...PostFields
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export const GET_POST = gql`
  ${POST_FRAGMENT}
  query GetPost($id: ID!) {
    post(id: $id) {
      ...PostFields
      content
    }
  }
`;