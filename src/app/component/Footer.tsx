import React from 'react';
import '../styling/footer.css'; // Ensure you have a CSS file for footer styles

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Sakeena-Majeed. All rights reserved.</p>
          <ul className="social-links">
            <li><a href="https://www.linkedin.com/in/sakeena-majeed-86b58732a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/SakeenaMajeed" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.facebook.com/share/r/1Ca41tYgGD/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
