import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Password Generator",
      description: "A responsive web application that generates secure passwords with customizable criteria. Features a clean, user-friendly interface optimized for both desktop and mobile devices with seamless clipboard integration for instant password copying.",
      image: "/api/placeholder/400/250",
      technologies: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
      techNames: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/shivam898989",
      live: "#",
      featured: true,
      highlights: [
        "Responsive UI Design optimized for all devices",
        "Customizable password criteria (length, character types)",
        "Clipboard integration for instant copying",
        "Clean and intuitive user interface"
      ]
    },
    {
      id: 2,
      title: "Trip Planner Website",
      description: "An interactive front-end web application for trip planning with dynamic pricing calculations. Features a visually appealing, responsive layout that adapts seamlessly across devices with backend processing for ticket pricing.",
      image: "/api/placeholder/400/250",
      technologies: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
      techNames: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/shivam898989",
      live: "#",
      featured: true,
      highlights: [
        "Interactive front-end design with responsive layout",
        "Backend processing for dynamic ticket pricing",
        "UI layout editor for scene interactions",
        "Cross-device compatibility"
      ]
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>My Projects</h2>
          <p>Web applications built with modern technologies and best practices</p>
        </motion.div>

        {/* Featured Projects */}
        <div className="featured-projects">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card featured-card card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="project-image">
                <div className="image-placeholder">
                  <span>Project Screenshot</span>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.highlights && (
                  <div className="project-highlights">
                    <h4>Key Features:</h4>
                    <ul>
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-icon" title={project.techNames[techIndex]}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects Section - Can be expanded in the future */}
        {otherProjects.length > 0 && (
          <>
            <motion.div
              className="other-projects-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>More Projects Coming Soon</h3>
              <p>I'm constantly working on new projects and learning new technologies.</p>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
