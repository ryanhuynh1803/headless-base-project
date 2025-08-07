export interface Post {
  id: string;
  title: string;
  slug: string;
  date: string;
  body?: string;
  content?: string;
}

export interface PostsData {
  posts: {
    nodes: Post[];
  };
}