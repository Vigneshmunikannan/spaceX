import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./images/logo/5.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
function Nav() {
  const [isContentVisible, setIsContentVisible] = React.useState(false);
  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };


    return (
      <div>
        <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <FontAwesomeIcon className="nav-menu"icon={faBars} onClick={toggleContentVisibility}/>
        <div className="nav-links">
          <Link className="Nav-item" to="/">Home</Link>
          <Link className="Nav-item" to="/About-Us">About Us</Link>
          <Link className="Nav-item" to="/Services">Services</Link>
          <Link className="Nav-item" to="/Portfolio">Portfolio</Link>
          <Link className="Nav-item" to="/Contact-Us">Contact Us</Link>
        </div>
      </nav>
      {
        isContentVisible && 
        
        <div className={`nav-links2 ${isContentVisible ? 'visible' : ''}`}>
        <Link className="Nav-item" to="/" onClick={toggleContentVisibility}>Home</Link>
        <Link className="Nav-item" to="/About-Us" onClick={toggleContentVisibility}>About Us</Link>
        <Link className="Nav-item" to="/Services" onClick={toggleContentVisibility}>Services</Link>
        <Link className="Nav-item" to="/Portfolio" onClick={toggleContentVisibility}>Portfolio</Link>
        <Link className="Nav-item" to="/Contact-Us" onClick={toggleContentVisibility}>Contact Us</Link>
        <FontAwesomeIcon className="Nav-close" icon={faTimes} style={{width:"200px"}} onClick={toggleContentVisibility} />
      </div>

      }
      </div>
    );
  }
  
  export default Nav;