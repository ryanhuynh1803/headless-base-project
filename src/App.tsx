import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page from '@/app/page';
import PostsPage from '@/pages/PostsPage';
import PostDetail from '@/pages/PostDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;