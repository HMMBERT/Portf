import React from 'react';
import './Projects.css';
import ProjectsBlack from './assets/images/Projects_Black.png';
import ProjectsWhite from './assets/images/Projects_White.png';

function Projects({ isDarkMode }) {
  const backgroundImage = isDarkMode
    ? `url(${ProjectsBlack})`
    : `url(${ProjectsWhite})`;

  const projects = [
    { id: 1, title: 'Consulting', image: 'consulting.jpg', description: 'Expert guidance to optimize strategies.' },
    { id: 2, title: 'Software Development', image: 'software.jpg', description: 'Custom software tailored for you.' },
    { id: 3, title: 'Technical Support', image: 'support.jpg', description: 'Reliable 24/7 assistance.' },
    { id: 4, title: 'Customer Training', image: 'training.jpg', description: 'Empower your team with knowledge.' },
  ];

  return (
    <div>
      <div
        className="projects-background"
        style={{
          backgroundImage: backgroundImage,
          height: '100vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start', // Adjust to keep content at the top
          padding: '20px', // Optional: padding for spacing
        }}
      >
        {/* Background Section (with image) */}
      </div>

      {/* Text Section */}
      <div
        className="projects-text"
        style={{
          background: isDarkMode ? 'black' : 'white',
          padding: '20px',
          borderRadius: '8px',
          color: isDarkMode ? 'white' : 'black',
          textAlign: 'center',
          fontSize: '18px',
        }}
      >
        <h1 style={{ fontSize: '2.5em' }}>Our Projects</h1>
        <div className="gallery">
          {projects.map((project) => (
            <div className="gallery-item" key={project.id}>
              <img src={project.image} alt={project.title} className="gallery-image" />
              <div className="overlay">
                <div className="overlay-text">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
