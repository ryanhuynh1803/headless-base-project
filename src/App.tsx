import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from '@/app/page'; // Đổi từ Home thành Page
import PostsPage from '@/pages/PostsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} /> {/* Sửa thành Page */}
        <Route path="/posts" element={<PostsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;