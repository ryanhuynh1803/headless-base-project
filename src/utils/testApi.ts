import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const testGraphQLAPI = async () => {
  const client = new ApolloClient({
    uri: 'https://educhua.com/graphql',
    cache: new InMemoryCache(),
  });

  try {
    const { data } = await client.query({
      query: gql`
        query TestQuery {
          posts(first: 5) {
            nodes {
              id
              title
              date
            }
            pageInfo {
              hasNextPage
            }
          }
        }
      `,
    });

    console.log('API Response:', data);
    return {
      success: true,
      data,
      error: null
    };
  } catch (error) {
    console.error('API Error:', error);
    return {
      success: false,
      data: null,
      error: error.message
    };
  }
};

// Run the test
testGraphQLAPI().then(result => {
  console.log('Test Result:', result);
});