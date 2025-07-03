import { useState } from 'react';
import type { Post } from '@/types/Post';

export default function PostCard({ post, onClick }: { post: Post; onClick: () => void }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`absolute cursor-pointer rounded-md bg-yellow-200 p-3 shadow-lg transition-all duration-300 ease-in-out ${expanded ? 'z-20 max-w-md' : 'h-52 w-52 overflow-hidden'} hover:scale-105`}
      style={{
        top: post.y,
        left: post.x,
        transform: `rotate(${Math.random() * 4 - 2}deg)`,
      }}
      onClick={() => {
        setExpanded(!expanded);
        onClick(); // Optional for external behavior
      }}
    >
      <h2 className="mb-1 text-sm font-semibold text-gray-800">{post.title}</h2>
      <p
        className={`text-xs leading-tight text-gray-700 ${expanded ? 'line-clamp-none' : 'line-clamp-4'} `}
      >
        {post.description}
      </p>
    </div>
  );
}
