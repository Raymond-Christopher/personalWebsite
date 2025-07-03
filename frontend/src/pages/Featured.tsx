// src/page/Featured.tsx
import FeaturedTerminal from '@/components/featured/FeaturedTerminal';
import Navbar from '@/components/common/Navbar';

function FeaturedPage() {
  return (
    <>
      {' '}
      <Navbar />
      <div className="min-h-screen bg-white px-6 py-20 text-gray-900 dark:bg-zinc-900 dark:text-white">
        <section id="featured" className="mt-20">
          <h2 className="mb-4 text-2xl font-bold">Featured</h2>
          <FeaturedTerminal />
        </section>
      </div>
    </>
  );
}

export default FeaturedPage;
