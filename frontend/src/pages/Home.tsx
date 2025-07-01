import '../styles/Home.css';
import placeholderImg from '../assets/placeholder-face.png';
import Navbar from '../components/Navbar'; 


const Home = () => {
  return (
<>
  {/* Navbar */}
   <Navbar />
  <div className="home-wrapper">
    <section className="home-hero h-screen flex flex-col justify-between py-8 md:flex-row md:items-center">
      <div className="flex justify-center md:justify-start w-full md:w-1/2">
        <img
          src={placeholderImg}
          alt="Profile"
          className="hero-image"
        />
      </div>
      <div className="text-center md:text-right md:w-1/2 mt-8 md:mt-0 px-4">
        <div className="text-group">
          <h1 className="hero-title">&lt;coder&gt;</h1>
          <p className="hero-description">
            Front End Developer who focuses on writing clean, elegant and efficient code.
            Love HTML5, CSS3, WordPress and a touch of jQuery.
          </p>
        </div>
      </div>
    </section>
  </div>
</>

  );
};

export default Home;
