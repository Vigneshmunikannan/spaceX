import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram ,faFacebook} from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <div>
      <footer className="footer-container">
        <div className="footer-container1">
 

          <div className="contact-info">
       <p>Contact</p>
          <p>1659/15GF Govindpuri Kalkaji, <br></br>New Delhi-110019</p>
          <p>9999572003, 9999536698</p>
          <p>Infospacex65@gmail.com</p>
        </div>
        <div className="quick-links">
          <p>Quick links</p>
          <ul>
          <li><Link className='quick-links-items' to="/">Home</Link></li>
          <li><Link className='quick-links-items' to="/About-Us">About Us</Link></li>
          <li><Link className='quick-links-items' to="/Services">Services</Link></li>
          <li><Link className='quick-links-items' to="/Portfolio">Portfolio</Link></li>
          <li><Link className='quick-links-items' to="/Contact-Us">Contact Us</Link></li>
          </ul>
        </div>

        
        
        <div className="follow-us">
          <p>Follow Us:</p>
          <div className="social-icons">
            <ul>
              <li><a href="https://www.instagram.com/spacex_interior" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} /> spacex_interior
            </a></li>
            <li>
            <a href="https://www.facebook.com/profile.php?id=61555776211638" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} style={{color: "#ffffff",}} /> Spacex interior
            </a>
            </li>
            </ul>            
          </div>
        </div>
        <div>
          
        </div>

        <div className="business-hours">
          <p>Business Hours<br></br>9 AM-10 PM</p>
        </div>
        </div>

        <div className="copyright">
          <p>&copy; 2024 spacex interior, All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;