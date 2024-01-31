import React, { useState } from 'react';
import './contact.css'; // Create a CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirements: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="contact-container">
      <div className="contact-details">
        <h3>Contact Us</h3>
        <p>1659/15GF Govindpuri Kalkaji, New Delhi-110019</p>
        <p>9999572003, 9999536698</p>
        <p>Infospacex65@gmail.com</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="requirements">Requirements</label>
        <textarea
          id="requirements"
          name="requirements"
          value={formData.requirements}
          onChange={handleInputChange}
          required
        ></textarea>

        <div className='btn'>
        <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
