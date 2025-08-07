import { gql } from '@apollo/client';

export const POST_FRAGMENT = gql`
  fragment PostFields on Post {
    id
    title
    date
    excerpt
    featuredImage {
      node {
        sourceUrl
      }
    }
  }
`;

export const GET_POSTS = gql`
  ${POST_FRAGMENT}
  query GetPosts($first: Int, $after: String, $search: String) {
    posts(first: $first, after: $after, where: { search: $search }) {
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