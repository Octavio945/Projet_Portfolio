import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h4>HELLO!</h4>
            <h1>I'm <span className="text-primary">Octavio<br />Michel HOUNYE</span></h1>
            <p>Fullstack Web Developer</p>
            <div className="hero-buttons">
              <Link to="contact" smooth={true} duration={500} offset={-70}>
                <button className="btn btn-primary">Contact Me</button>
              </Link>
              <Link to="projects" smooth={true} duration={500} offset={-70}>
                <button className="btn btn-secondary">My Works</button>
              </Link>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-image"
        >
          <img 
            src="/images/WhatsApp Image 2025-05-05 at 12.40.45 (6).jpeg" 
            alt="Octavio Michel HOUNYE" 
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero