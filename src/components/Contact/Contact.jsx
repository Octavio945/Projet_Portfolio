import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [showModal, setShowModal] = useState(false)

  const handleOpen = () => setShowModal(true)
  const handleClose = () => setShowModal(false)
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  

  return (
    <section id="contact" className="contact">
      <div className="container" ref={ref}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>
        
        <motion.p 
          className="contact-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Feel free to reach out to me for any questions or opportunities. I'm looking forward to hearing from you!
        </motion.p>
        
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>Contact Info</h3>
            
            <div className="info-item">
              <h4>Phone</h4>
              <p>+229-01-559-942-36</p>
            </div>
            
            <div className="info-item">
              <h4>Email</h4>
              <p>octaviohounye123@gmail.com</p>
            </div>
            
            <div className="info-item">
              <h4>Location</h4>
              <span className="map-link" onClick={handleOpen}>
                Cotonou, BENIN
              </span>
            </div>
            
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/octavio-michel-hounye-15648931a/" target="_blank" rel="noopener noreferrer" title='Linkedin'>
                <FaLinkedin />
              </a>
              <a href="https://github.com/Octavio945/" target="_blank" rel="noopener noreferrer" title='Github'>
                <FaGithub />
              </a>
            </div>
          </motion.div>
          
          <motion.form 
            className="contact-form"
            action="https://formspree.io/f/manoboqy"
            method="POST"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="form-group">
              <input 
                type="text" 
                id="name" 
                name="name"
                placeholder="Name" 
                required 
              />
            </div>
            
            <div className="form-group">
              <input 
                type="email" 
                id="email" 
                name="email"
                placeholder="Email" 
                required 
              />
            </div>
            
            <div className="form-group">
              <input 
                type="text" 
                id="subject" 
                name="subject"
                placeholder="Subject" 
                required 
              />
            </div>
            
            <div className="form-group">
              <textarea 
                id="message" 
                name="message"
                placeholder="Message" 
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">Send Message</button>
          </motion.form>

        </div>

        {showModal && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleClose}>X</button>
            <iframe
              title="map"
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps?q=Cotonou,Benin&output=embed"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      </div>
    </section>
  )
}

export default Contact