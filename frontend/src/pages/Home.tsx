import '@/styles/Home.css';
import placeholderImg from '@/assets/placeholder-face.png';
import Navbar from '@/components/common/Navbar';
import ScriptTerminal from '@/components/home/ScriptTerminal';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-wrapper relative min-h-screen overflow-hidden bg-white text-gray-900 dark:bg-zinc-900 dark:text-white">
        {/* ✅ Put background inside a full-screen absolutely-positioned container */}
        <div className="absolute inset-0 z-0">
          <ScriptTerminal />
        </div>

        {/* ✅ The hero content floats above the background */}
        <section className="home-hero relative z-10 flex h-screen flex-col justify-between py-8 md:flex-row md:items-center">
          <div className="flex w-full justify-center md:w-1/2 md:justify-start">
            <img src={placeholderImg} alt="Profile" className="hero-image" />
          </div>
          <div className="mt-8 px-4 text-center md:mt-0 md:w-1/2 md:text-right">
            <div className="text-group">
              <h1 className="hero-title">&lt;coder&gt;</h1>
              {/* Optional: Add intro or tagline here */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
