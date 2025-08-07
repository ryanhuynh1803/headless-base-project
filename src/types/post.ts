export interface Post {
  id: string;
  title: string;
  slug: string;
  date: string;
}

export interface PostsData {
  posts: {
    nodes: Post[];
  };
}