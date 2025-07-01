// src/pages/About.tsx
import React from 'react';
import '../styles/About.css';
import Navbar from '../components/Navbar';

const About = () => {
  // Before:
const x = 1;

// Change to:
const     x    =   1

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
          <div className="about-section">
            <h2 className="section-title">Technical Skills</h2>
            <ul className="skills-list">
              <li className="skill-entry">
                <span className="skill-category">ES Languages:</span>
                <ul className="nested-skill-list">
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>Node.js</li>
                </ul>
              </li>
              <li className="skill-entry">
                <span className="skill-category">.NET / Compiled Languages:</span>
                <ul className="nested-skill-list">
                  <li>C#</li>
                  <li>C++</li>
                  <li>Java</li>
                </ul>
              </li>
              <li className="skill-entry">
                <span className="skill-category">Backend / Scripting:</span>
                <ul className="nested-skill-list">
                  <li>Golang</li>
                  <li>Python</li>
                  <li>SQL</li>
                </ul>
              </li>
              <li className="skill-entry">
                <span className="skill-category">Web & UI:</span>
                <ul className="nested-skill-list">
                  <li>React</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                </ul>
              </li>
              <li className="skill-entry">
                <span className="skill-category">Tooling & DevOps:</span>
                <ul className="nested-skill-list">
                  <li>Docker</li>
                  <li>GitHub</li>
                  <li>CI/CD Pipelines</li>
                </ul>
              </li>
              <li className="skill-entry">
                <span className="skill-category">Databases & Integration:</span>
                <ul className="nested-skill-list">
                  <li>PostgreSQL</li>
                  <li>Workday Integrations</li>
                </ul>
              </li>
              <li className="skill-entry">
                <span className="skill-category">Special Interests:</span>
                <ul className="nested-skill-list">
                  <li>Packet inspection</li>
                  <li>Low-level protocol analysis</li>
                  <li>UX-minded frontend development</li>
                </ul>
              </li>
            </ul>
          </div>
          {/* Experience */}
          <div className="about-section">
            <h2 className="section-title">Experience</h2>

            <div className="experience-section">
              <div className="job-entry">
                <h3 className="job-title">Senior Software Engineer</h3>
                <p className="job-meta">
                  Phosphorus Cybersecurity — Nashville, TN | Sep 2023 – Present
                </p>
                <ul className="job-list">
                  <li>
                    Built full-stack internal tools (Golang, PostgreSQL, JS) to align sales and
                    product initiatives.
                  </li>
                  <li>
                    Reverse-engineered proprietary IoT encryption protocols to enable device
                    automation at scale.
                  </li>
                  <li>
                    Led device fingerprinting via network packet inspection, enhancing enterprise
                    security posture.
                  </li>
                  <li>
                    Mentored junior engineers and drove improvements in CI/CD workflows across
                    teams.
                  </li>
                </ul>
              </div>

              <div className="job-entry">
                <h3 className="job-title">Lead Technical Analyst</h3>
                <p className="job-meta">
                  Bridgestone Americas — Nashville, TN | Mar 2023 – Sep 2023
                </p>
                <ul className="job-list">
                  <li>
                    Engineered JavaScript-based Workday integrations to optimize reporting and data
                    compliance.
                  </li>
                  <li>
                    Partnered across HR, API, and payroll teams to streamline technical operations.
                  </li>
                  <li>
                    Ensured regulatory compliance with union and state-specific employment systems.
                  </li>
                </ul>
              </div>

              <div className="job-entry">
                <h3 className="job-title">Teaching Assistant – Java (OOP)</h3>
                <p className="job-meta">
                  Butler University — Indianapolis, IN | Jan 2020 – May 2020
                </p>
                <ul className="job-list">
                  <li>
                    Supported two classes of 20+ students by leading review sessions, grading code,
                    and guiding project development.
                  </li>
                </ul>
              </div>

              <div className="job-entry">
                <h3 className="job-title">Lead Intelligence Analyst</h3>
                <p className="job-meta">
                  U.S. Department of Defense — El Paso, TX | Mar 2013 – Jul 2016
                </p>
                <ul className="job-list">
                  <li>
                    Translated real-time battlefield data into actionable intelligence using
                    classified networks and tools.
                  </li>
                  <li>Ensured compliance with all DoD and Army cybersecurity regulations.</li>
                </ul>
              </div>
            </div>
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
