import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaFileAlt } from 'react-icons/fa';
import './Resume.css';

const Resume = () => {
  const handleDownloadResume = () => {
    // Create a temporary link to download resume
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Shivam_Sharma_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="resume section-padding">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>My Resume</h2>
          <p>Download my complete resume to learn more about my experience and qualifications</p>
        </motion.div>

        <motion.div
          className="resume-download-container"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="resume-card">
            <div className="resume-icon">
              <FaFileAlt />
            </div>
            <div className="resume-content">
              <h3>Shivam Sharma - Resume</h3>
              <p>Complete details about my education, projects, skills, and experience</p>
              <ul className="resume-highlights">
                <li>Educational Background & Academic Achievements</li>
                <li>Technical Projects & Implementations</li>
                <li>Programming Skills & Technologies</li>
                <li>Extracurricular Activities & Leadership</li>
              </ul>
            </div>
            <button className="btn-primary download-btn" onClick={handleDownloadResume}>
              <FaDownload /> Download PDF
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
