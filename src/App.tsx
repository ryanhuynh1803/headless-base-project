import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/app/page';
import PostsPage from '@/pages/PostsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;