import React from 'react';
import './service.css'; // Import the CSS file for styling
import CategoryImage1 from './images/services/1.jpg'; 
import CategoryImage2 from './images/services/2.jpg';
import CategoryImage3 from './images/services/3.jpg';
import CategoryImage4 from './images/services/4.jpg';
import CategoryImage5 from './images/services/5.jpg';
import CategoryImage6 from './images/services/6.jpg';

import CategoryImage7 from './images/services/7.jpg'; 
import CategoryImage8 from './images/services/8.jpg';
import CategoryImage9 from './images/services/9.jpg';
import CategoryImage10 from './images/services/10.jpg';
import CategoryImage11 from './images/services/11.jpg';
import CategoryImage12 from './images/services/12.jpg';
import CategoryImage13 from './images/services/13.jpg';

import CategoryImage14 from './images/services/14.jpg';
import CategoryImage15 from './images/services/15.jpg';
import CategoryImage16 from './images/services/16.jpg';

import CategoryImage17 from './images/services/17.jpg';
import CategoryImage18 from './images/services/18.jpg';
import CategoryImage19 from './images/services/19.jpg';

import CategoryImage20 from './images/services/20.jpg';

function Services() {
    return (
      <div className="products-container">
        <h2 className='products-container-header'>MODULAR FURNITURE & INTERIOR</h2>
      <section className="category">
        <h2>SPACEX CHAIR SERIES</h2>
        <div className="product-images">
          <img src={CategoryImage1} alt="Product 1" />
          <img src={CategoryImage2} alt="Product 2" />
          <img src={CategoryImage3} alt="Product 3" />
          <img src={CategoryImage4} alt="Product 4" />
          <img src={CategoryImage5} alt="Product 5" />
          <img src={CategoryImage6} alt="Product 6" />
        </div>
      </section>

      <section className="category">
        <h2>SPACEX TABLE SERIES</h2>
        <div className="product-images">
          <img src={CategoryImage7} alt="Product 1" />
          <img src={CategoryImage8} alt="Product 2" />
          <img src={CategoryImage9} alt="Product 3" />
          <img src={CategoryImage10} alt="Product 4" />
          <img src={CategoryImage11} alt="Product 5" />
          <img src={CategoryImage12} alt="Product 6" />
          <img src={CategoryImage13} alt="Product 7" />
        </div>
      </section>

      <section className="category">
        <h2>SPACEX WORKSTATION SERIES</h2>
        <div className="product-images">
          <img src={CategoryImage14} alt="Product 1" />
          <img src={CategoryImage15} alt="Product 2" />
          <img src={CategoryImage16} alt="Product 2" />
          </div>
      </section>

      <section className="category">
        <h2>SPACEX TABLE SERIES</h2>
        <div className="product-images">
          <img src={CategoryImage17} alt="Product 1" />
          <img src={CategoryImage18} alt="Product 2" />
          <img src={CategoryImage19} alt="Product 3" />
        </div>
      </section>

      <section className="category">
        <h2>SPACEX SOFA SERIES</h2>
        <div className="product-images">
          <img src={CategoryImage20} alt="Product 1" />
        </div>
      </section>

    </div>
    );
  }
  
  export default Services;