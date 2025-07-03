import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Akito Dangganga</h3>
            <p>ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
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
            <p>Email: info@danganga.com</p>
            <p>Phone: +82 (888) 888-8888</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Akito Dangganga. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 