import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaJava } from 'react-icons/fa';
import './About.css';

const About = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with React, HTML5, CSS3, and modern JavaScript frameworks."
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description: "Building robust server-side applications with Node.js, Python, and modern web technologies."
    },
    {
      icon: <FaDatabase />,
      title: "Database Design",
      description: "Designing efficient database schemas and optimizing queries for better performance with SQL and NoSQL databases."
    },
    {
      icon: <FaJava />,
      title: "DSA with Java",
      description: "Implementing efficient algorithms and data structures using Java for competitive programming and software development."
    }
  ];

  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <p>Get to know more about who I am and what I do</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>I'm a passionate Full Stack Developer</h3>
            <p>
              With over 3 years of experience in web development, I specialize in creating 
              modern, scalable, and user-friendly applications. I have a strong foundation 
              in both frontend and backend technologies, allowing me to build complete 
              end-to-end solutions.
            </p>
            <p>
              I'm constantly learning new technologies and staying up-to-date with industry 
              trends. My goal is to write clean, efficient code that not only works well 
              but is also maintainable and scalable.
            </p>
            <div className="stats">
              <div className="stat">
                <h4>50+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h4>3+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h4>25+</h4>
                <p>Happy Clients</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="services"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>What I Do</h3>
            <div className="services-grid">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="service-card card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="service-icon">{service.icon}</div>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
