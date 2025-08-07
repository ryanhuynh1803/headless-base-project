/**
 * Fetches posts from an API endpoint
 * @param {number} limit - Maximum number of posts to fetch
 * @param {number} page - Page number for pagination
 * @returns {Promise<Array>} Array of posts
 */
export const getPosts = async (limit = 10, page = 1) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};