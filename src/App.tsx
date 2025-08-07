import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingSpinner from '@/components/ui/loading-spinner';

const Home = lazy(() => import('@/app/page'));
const PostsPage = lazy(() => import('@/pages/PostsPage'));
const PostDetail = lazy(() => import('@/pages/PostDetail'));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;