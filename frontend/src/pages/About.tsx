// src/pages/About.tsx
import '../styles/About.css';
import Navbar from '../components/Navbar';
import Skills from '../components/skills';
import Jobs from '../components/jobs';

const About = () => {
  return (
    <>
      <Navbar />

      <section className="about-page overflow-y-scroll">
        <div className="about-container">
          <h1 className="about-title">Christopher M. Raymond</h1>
          <p className="contact-line">
            📍 Nashville, TN | 📞 (915) 760-0904 | 📧 christopher.m.raymond2@gmail.com | 🌐{' '}
            <a
              href="https://www.linkedin.com/in/cmraymon/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              LinkedIn
            </a>
          </p>

          {/* Summary */}
          <div className="about-section">
            <h2 className="section-title">Summary</h2>
            <p className="about-bio">
              Multidisciplinary software engineer with a robust background in cybersecurity,
              full-stack development, and system integrations. Skilled in Golang, PostgreSQL,
              JavaScript, and CI/CD. I’m driven by a deep passion for elegant problem-solving,
              crafting scalable systems, and mentoring teams. When not coding, I’m experimenting
              with the science of espresso and mixology—two pursuits that fuel both my creativity
              and attention to detail.
            </p>
          </div>

          {/* Technical Skills */}
          <Skills />
          {/* Experience */}
          <div className="about-section">
            <Jobs />
          </div>

          {/* Education */}
          <div className="about-section">
            <h2 className="section-title">Education</h2>
            <div className="education-list">
              <div className="education-entry">
                <h3 className="degree">Master of Science – Computer Science</h3>
                <p className="school">Vanderbilt University </p>
              </div>

              <div className="education-entry">
                <h3 className="degree">Bachelor of Science – Computer Science</h3>
                <p className="school">Butler University </p>
              </div>

              <div className="education-entry">
                <h3 className="degree">Bachelor of Science – Biomedical Engineering</h3>
                <p className="school">Purdue University </p>
              </div>

              <div className="education-entry">
                <h3 className="degree">Honors & Awards</h3>
                <p className="school">Butler Grant Academic Scholarship, Outstanding Tutor Award</p>
              </div>
            </div>
          </div>

          {/* Leadership */}
          <div className="about-section">
            <h2 className="section-title">Leadership & Community</h2>
            <ul className="list-disc pl-6">
              <li className="community-entry">CSSE Tutor, Butler University</li>
              <li className="community-entry">Secretary, ACM Student Chapter</li>
              <li className="community-entry">Mentor, Junior Engineering Cohorts</li>
            </ul>
          </div>

          {/* Passions */}
          <div className="about-section">
            <h2 className="section-title">Passions & Creative Interests</h2>
            <p className="about-bio">
              Outside of tech, I’m a devoted craftsman—whether it’s dialing in the perfect espresso
              shot or balancing the chemistry of a signature cocktail. I find joy in precision,
              experimentation, and aesthetics—qualities that influence both my engineering and
              personal life.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
