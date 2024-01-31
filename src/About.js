import React from 'react';
import './About.css'; // Import the CSS file for styling
import Image1 from './images/about/1.jpg'; // Import or replace with your actual image URLs
import Image2 from './images/about/2.jpg';
import Image3 from './images/about/3.jpeg';

const About = () => {
return(
    <div className="about-us-container">
      <section className="about-company">
        <img src={Image1} alt="Company Building" />
        <div className="company-info">
          <h2>About SpaceX Interiors</h2>
          <p>
            SpaceX Interiors is a renowned name in the field of innovative and high-quality modular office furniture.
            With a commitment to excellence, we take pride in transforming workspaces into functional and aesthetically
            pleasing environments.
          </p>
          <p>
            Our journey began with a vision to redefine office furniture by combining artistry, functionality, and
            competitive pricing. Over the years, we have evolved as a market leader, catering to the diverse needs of
            consumers with the highest standards of quality and design.
          </p>
          {/* Add more content as needed */}
        </div>
      </section>

      <section className="management-team">
        <div className="team-info">
          <h2>Our Leadership Team</h2>
          <p>
            At the helm of SpaceX Interiors is Mr. Nikhil Jain, serving as the Director. Guided by a robust management
            team led by Mr. Amit Jain, we strive to bring innovation, expertise, and a customer-centric approach to
            every project.
          </p>
          {/* Add more content as needed */}
        </div>
        <img src={Image2} alt="Management Team" />
      </section>

      <section className="factory-and-products">
        <img src={Image3} alt="Factory and Products" />
        <div className="factory-info">
          <h2>Manufacturing Excellence</h2>
          <p>
            SpaceX Interiors operates from a state-of-the-art factory in the heart of the capital city, New Delhi. Our
            extensive product catalog includes a wide range of office furniture, from modular workstations and chairs
            to sofas and lounge furniture.
          </p>
          <p>
            With over 13 years of industry experience, we have mastered the art of customization, ensuring that each
            solution aligns perfectly with the unique requirements of our clients. Our CAD and Design facilities
            provide professional layouts, 3D visuals, and realistic renditions.
          </p>
          <p>
            Visit our showroom to witness firsthand the quality and innovation embedded in our office furniture
            products.
          </p>
          {/* Add more content as needed */}
        </div>
      </section>

      <section className="mission-vision">
        <div className="mission-info">
          <h2>Our Mission</h2>
          <p>
            SpaceX Interiors is on a mission to be the industry leader in manufacturing and marketing modular office
            furniture. Additionally, we diversify our offerings with HPL products, chairs, sofas, and transition
            profiles.
          </p>
          <ul>
            <li>Boost sales through repeat purchases.</li>
            <li>Maintain our after-sales service.</li>
            <li>Low cost of production to provide better pricing to our clients.</li>
            {/* Add more objectives as needed */}
          </ul>
          {/* Add more content as needed */}
        </div>

        <div className="vision-info">
          <h2>Our Vision</h2>
          <p>
            SpaceX Interiors envisions establishing itself as one of the top furniture manufacturing companies in the
            country. Committed to providing innovative and quality products, we aim to achieve sustainable competitive
            advantages in the domestic marketplace.
          </p>
          <p>
            We strive to reach our goals by meeting the needs and expectations of our customers, continuously improving
            quality, productivity, value, introducing new products, and ensuring customer satisfaction.
          </p>
          {/* Add more content as needed */}
        </div>
      </section>

      {/* Add more sections as needed */}
    </div>
  );
};

export default About;
