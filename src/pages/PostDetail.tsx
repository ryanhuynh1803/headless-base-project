interface Post {
  title: string;
  date?: string;
  content: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
    };
  };
}

// Then modify the render section:
{post?.featuredImage?.node?.sourceUrl && (
  <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
    <img
      src={post.featuredImage.node.sourceUrl}
      alt={post?.title || 'Post image'}
      className="object-cover w-full h-full"
    />
  </div>
)}