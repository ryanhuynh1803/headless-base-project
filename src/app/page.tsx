import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MadeWithDyad } from '@/components/made-with-dyad';

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-8">Welcome to My App</h1>
        
        <div className="space-x-4 mb-8">
          <Link to="/posts">
            <Button variant="outline">Xem danh sách bài viết</Button>
          </Link>
        </div>
      </main>
      
      <MadeWithDyad />
    </div>
  );
};

export default Page; // Thêm dòng này