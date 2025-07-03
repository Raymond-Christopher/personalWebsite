// frontend/src/pages/Portfolio.tsx
import React from 'react';
import Navbar from '@/components/common/Navbar';
import GithubContributions from '@/components/portfolio/GithubContributions';
import Timeline from '@/components/portfolio/Timeline';

const Portfolio: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="portfolio-page min-h-screen bg-white px-6 py-20 text-gray-900 dark:bg-zinc-900 dark:text-white">
        <h1 className="mb-4 text-3xl font-bold">My Portfolio</h1>
        <GithubContributions />
        <h2 className="mt-10 text-2xl font-semibold">Project Timeline</h2>
        <Timeline />
      </div>
    </>
  );
};

export default Portfolio;
