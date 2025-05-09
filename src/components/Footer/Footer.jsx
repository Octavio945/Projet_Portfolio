import { FaLinkedin, FaGithub } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <a href="/">OCTAVIO_M</a>
          </div>
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/octavio-michel-hounye-15648931a/" target="_blank" rel="noopener noreferrer" title='Linkedin'>
              <FaLinkedin />
            </a>
            <a href="https://github.com/Octavio945/" target="_blank" rel="noopener noreferrer" title='Github'>
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Octavio Michel HOUNYE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer