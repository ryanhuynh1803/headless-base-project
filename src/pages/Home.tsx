import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '@/graphql/queries/posts';
import { Post } from '@/types/post';

const Home = () => {
    const { loading, error, data } = useQuery<{ posts: { nodes: Post[] } }>(GET_POSTS);

    if (loading) return <p className="text-gray-600 text-center mt-10">Đang tải dữ liệu...</p>;
    if (error) return <p className="text-red-500 text-center mt-10">Lỗi: {error.message}</p>;

    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">📰 Bài viết mới nhất</h2>
            <ul className="space-y-4">
                {data?.posts.nodes.map((post) => (
                    <li
                        key={post.id}
                        className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition-shadow duration-200"
                    >
                        <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
                        {post.date && (
                            <p className="text-sm text-gray-500 mt-1">
                                📅 {new Date(post.date).toLocaleDateString()}
                            </p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;