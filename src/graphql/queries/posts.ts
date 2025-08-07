import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query GetPosts($first: Int, $after: String, $search: String) {
    posts(first: $first, after: $after, where: { search: $search }) {
      nodes {
        id
        title
        date
        excerpt
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export const GET_POST = gql`
  query GetPost($id: ID!) {
    post(id: $id) {
      id
      title
      date
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`;