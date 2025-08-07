import { Post } from '@/types/post';

export const getPosts = async (limit = 10, page = 1): Promise<{ data: Post[]; total: number }> => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
    
    if (!response.ok) {
      throw new Error('Không thể lấy dữ liệu bài viết');
    }

    const data = await response.json();
    const total = Number(response.headers.get('x-total-count')) || 0;
    
    return {
      data: data.map((post: any) => ({
        id: post.id.toString(),
        title: post.title,
        body: post.body,
        date: new Date().toISOString() // Thêm ngày giả lập
      })),
      total
    };
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu:', error);
    throw error;
  }
};