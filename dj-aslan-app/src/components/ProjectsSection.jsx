import React from 'react';
import "../public/assets/styles.css";

const projects = [
  {
    title: 'Weddings',
    description: 'Capturing timeless moments at weddings.',
    video: '/DJ-ASLAN/videos/wedding.mp4',
  },
  {
    title: 'Restaurants',
    description: 'Setting the vibe at top dining locations.',
    image: '/DJ-ASLAN/images/restaurant.jpg',
  },
  {
    title: 'Special Events',
    description: 'Making special moments unforgettable.',
    image: '/DJ-ASLAN/images/special-event.jpg',
  },
  {
    title: 'Night Clubs',
    description: 'Spinning at vibrant nightlife venues.',
    image: '/DJ-ASLAN/images/project1.jpg',
  },
  {
    title: 'Concerts / Raves',
    description: 'Bringing energy to massive crowds.',
    image: '/DJ-ASLAN/images/project1.jpg',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section">
      <h2>Featured Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <div className="project-media">
              {project.video ? (
                <video
                  src={project.video}
                  className="project-image"
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label={`${project.title} video`}
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
              )}
            </div>
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
