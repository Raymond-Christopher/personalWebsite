import { useEffect, useState, useMemo } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import PostCard from './PostCard';
import type { Post } from '@/types/Post';

export default function BlogCanvas({ onSelectPost }: { onSelectPost: (post: Post) => void }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('http://localhost:3001/api/post');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load posts.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const CANVAS_PADDING = 1000;

  const canvasSize = useMemo(() => {
    if (posts.length === 0) return { width: 10000, height: 10000 };
    const maxX = Math.max(...posts.map((p) => p.x)) + CANVAS_PADDING;
    const maxY = Math.max(...posts.map((p) => p.y)) + CANVAS_PADDING;
    return { width: maxX, height: maxY };
  }, [posts]);

  const postElements = useMemo(
    () =>
      posts.map((post) => (
        <PostCard key={post.id} post={post} onClick={() => onSelectPost(post)} />
      )),
    [posts, onSelectPost]
  );

  if (loading) {
    return <div className="py-10 text-center text-white">Loading posts...</div>;
  }

  if (error) {
    return <div className="py-10 text-center text-red-400">{error}</div>;
  }

  return (
    <TransformWrapper
      minScale={0.5}
      maxScale={4}
      wheel={{ step: 0.1 }}
      doubleClick={{ disabled: true }}
      panning={{ velocityDisabled: true }}
      limitToBounds={false}
      centerOnInit={true}
    >
      <TransformComponent>
        <div
          className="relative overflow-hidden bg-gray-900"
          style={{
            width: Math.max(canvasSize.width, 100), // Ensures horizontal buffer
            height: Math.max(canvasSize.height, 400), // Ensures vertical buffer
            willChange: 'transform',
            paddingRight: '500px', // Optional visual or logical extension
            paddingBottom: '500px',
          }}
        >
          {postElements}
        </div>
      </TransformComponent>
    </TransformWrapper>
  );
}
