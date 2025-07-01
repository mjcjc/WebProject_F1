import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>F1 Project</h3>
            <p>Your premier destination for Formula 1 content and applications.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/list">List</a></li>
              <li><a href="/apply">Apply</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: info@f1project.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} F1 Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 