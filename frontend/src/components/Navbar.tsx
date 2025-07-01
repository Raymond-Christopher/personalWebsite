import { Link } from 'react-router-dom';
import '../styles/Home.css'; // or create a Navbar-specific CSS file if preferred

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo"></div>

      <nav className="navbar-links">
        <Link to="/" className="navbar-link">
          home
        </Link>
        <Link to="/about" className="navbar-link">
          about
        </Link>
        <a href="#featured" className="navbar-link">
          featured
        </a>
        <a href="#portfolio" className="navbar-link">
          portfolio
        </a>
        <a href="#blog" className="navbar-link">
          blog
        </a>
        <a href="#contact" className="navbar-link">
          contact
        </a>
      </nav>

      <div className="navbar-socials">
        <a href="#" className="navbar-icon">
          <i className="fab fa-twitter" />
        </a>
        <a href="#" className="navbar-icon">
          <i className="fab fa-dribbble" />
        </a>
        <a href="#" className="navbar-icon">
          <i className="fab fa-linkedin" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
