export const getPosts = async (limit = 10, page = 1) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  const totalCount = response.headers.get('x-total-count');
  return {
    data: await response.json(),
    total: totalCount ? parseInt(totalCount) : 0,
  };
};