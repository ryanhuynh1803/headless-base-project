interface PostsListProps {
  posts: Post[];
  isLoading: boolean;
  error: Error | null;
  onLoadMore?: () => void;
  hasMore?: boolean;
  isFetchingMore?: boolean; // Thêm prop mới
}

export const PostsList = ({ 
  posts = [], // Giá trị mặc định
  isLoading = false,
  error = null,
  onLoadMore,
  hasMore = false,
  isFetchingMore = false
}: PostsListProps) => {
  // ... giữ nguyên phần còn lại
  return (
    // ...
    <Button 
      onClick={onLoadMore}
      disabled={isLoading || isFetchingMore} // Thêm điều kiện disabled
    >
      {(isLoading || isFetchingMore) ? 'Đang tải...' : 'Tải thêm'}
    </Button>
  );
};