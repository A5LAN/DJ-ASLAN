import React from 'react';
import 'src/assets/styles.css';

// Dummy projects data
const projects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One.',
    image: '/images/project1.jpg', // Replace with actual image paths
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    image: '/images/project2.jpg', // Replace with actual image paths
  },
  {
    title: 'Project Three',
    description: 'A brief description of Project Three.',
    image: '/images/project3.jpg', // Replace with actual image paths
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section">
      <h2>Featured Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href="/projects" className="view-more">
                View More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
