import { useState } from 'react';
import BlogCanvas from '@/components/blog/BlogCanvas';
import type { Post } from '@/types/Post';
import Navbar from '@/components/common/Navbar';

export default function HomePage() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  return (
    <>
      <Navbar />

      <main className="h-screen w-screen overflow-hidden">
        <BlogCanvas onSelectPost={setSelectedPost} />
        {/* Later add <PostViewer post={selectedPost} onClose={() => setSelectedPost(null)} /> */}
      </main>
    </>
  );
}
