import React from 'react';
import './portfolio.css';

import ProjectImage1 from './images/portfolio/project 1/1.jpeg';
import ProjectImage2 from './images/portfolio/project 1/3.jpeg';
import ProjectImage3 from './images/portfolio/project 1/2.jpeg';


import ProjectImage4 from './images/portfolio/project 2/1.jpeg';
import ProjectImage5 from './images/portfolio/project 2/2.jpeg';
import ProjectImage6 from './images/portfolio/project 2/3.jpeg';
import ProjectImage7 from './images/portfolio/project 2/4.jpeg';

import ProjectImage11 from './images/portfolio/project 3/1.jpeg';
import ProjectImage8 from './images/portfolio/project 3/2.jpeg';
import ProjectImage9 from './images/portfolio/project 3/3.jpeg';
import ProjectImage10 from './images/portfolio/project 3/4.jpeg';

import ProjectImage12 from './images/portfolio/project 4/1.jpeg';
import ProjectImage13 from './images/portfolio/project 4/2.jpeg';
import ProjectImage14 from './images/portfolio/project 4/3.jpeg';

import ProjectImage15 from './images/portfolio/project 5/1.jpeg';
import ProjectImage16 from './images/portfolio/project 5/2.jpeg';
import ProjectImage17 from './images/portfolio/project 5/3.jpeg';

const projects = [
  {
    name: 'Office Harmony',
    description: 'A modern and collaborative office space design with open workstations and vibrant colors.',
    images: [ProjectImage1,ProjectImage2,ProjectImage3],
    categories: ['Office Spaces'],
    services: ['Space Planning', 'Furniture Design'],
    clientTestimonial: 'Working with SpaceX Interiors was a delightful experience. They transformed our workspace beyond expectations.',
    duration: '3 months',
    challenges: 'Overcame challenges related to maximizing space utilization and creating a dynamic work environment.',
  },
  {
    name: 'Tech Startup Hub',
    description: 'Designing a collaborative workspace for a tech startup, fostering innovation and productivity.',
    images: [ProjectImage4,ProjectImage5,ProjectImage6,ProjectImage7],
    categories: ['Office Spaces'],
    services: ['Space Planning', 'Technology Integration'],
    clientTestimonial: 'SpaceX Interiors exceeded our expectations, creating an inspiring workspace for our team.',
    duration: '2 months',
    challenges: 'Integrating tech infrastructure seamlessly into the design.',
  },
  {
    name: 'Modern Grey Office',
    description: 'Transforming a traditional office into a modern and sophisticated workspace with a grey color palette, dedicated rooms, and comfortable lounge areas.',
    images: [ProjectImage8, ProjectImage9, ProjectImage10, ProjectImage11],
    categories: ['Office Spaces'],
    services: ['Space Planning', 'Furniture Design', 'Room Design'],
    clientTestimonial: 'SpaceX Interiors creating a stylish and functional office environment for our us.',
    duration: '3 months',
    challenges: 'Balancing the aesthetics of grey tones while ensuring a comfortable and productive work environment.',

  },
  {
    name: 'Blue Horizon Workspace',
    description: 'Creating a vibrant and inspiring workspace with shades of blue, dedicated workstations, and collaborative workspace rooms.',
    images: [ProjectImage12, ProjectImage13, ProjectImage14],
    categories: ['Office Spaces'],
    services: ['Space Planning', 'Interior Design'],
    clientTestimonial: 'SpaceX Interiors brought a wave of freshness to our workspace with the Blue Horizon design. It truly reflects our innovative spirit.',
    duration: '4 months',
    challenges: 'Incorporating various shades of blue seamlessly into the design while maintaining a professional and energizing atmosphere.',
  },
  {
    name: 'Red Elegance Office',
    description: 'Infusing a sense of elegance and energy into the office space with a striking red color scheme, sophisticated rooms, and modern furnishings.',
    images: [ProjectImage16, ProjectImage17, ProjectImage15],
    categories: ['Office Spaces'],
    services: ['Interior Design', 'Furniture Design', 'Room Planning'],
    clientTestimonial: 'SpaceX Interiors turned our office into a dynamic and stylish space with the Red Elegance design. It reflects our passion and creativity.',
    duration: '5 months',
    challenges: 'Balancing the boldness of the red color while creating comfortable and functional rooms for various purposes.'
  }
];


const Portfolio = () => {
  return (
    <div className="portfolio-container">
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <h2>{project.name}</h2>
          <p className="project-description">{project.description}</p>
          <div className="project-images">
            {project.images.map((image, imgIndex) => (
              <img src={image} alt={`Project ${index + 1} ${imgIndex + 1}`} key={imgIndex} />
            ))}
          </div>
          <div className="project-details">
            <div className="project-info">
              <h3>Details</h3>
              <ul>
                <li>Category: {project.categories.join(', ')}</li>
                <li>Services: {project.services.join(', ')}</li>
                <li>Duration: {project.duration}</li>
              </ul>
            </div>
            <div className="project-info">
              <h3>Challenges & Solutions</h3>
              <p>{project.challenges}</p>
            </div>
            <div className="project-info">
              <h3>Client Testimonial</h3>
              <p>{project.clientTestimonial}</p>
            </div>
            {/* Add more project details as needed */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
