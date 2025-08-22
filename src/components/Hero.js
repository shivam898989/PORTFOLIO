import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>
              Hi, I'm <span className="gradient-text">Shivam Sharma</span>
            </h1>
            <h2>Full Stack Developer</h2>
            <p>
              I create exceptional digital experiences with modern web technologies. 
              Passionate about building scalable applications and solving complex problems.
            </p>
            
            <div className="hero-buttons">
              <button 
                className="btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>

            <div className="social-links">
              <a href="https://github.com/shivam898989" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/shivam-sharma-a5149434b" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="profile-image">
              <img 
                src="/Shivam.png" 
                alt="Shivam Sharma - Full Stack Developer" 
                className="profile-photo"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
