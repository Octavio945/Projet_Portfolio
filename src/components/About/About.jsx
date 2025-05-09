import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="about" className="about">
      <div className="container about-container" ref={ref}>
        <motion.h2 
          className="section-title" 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="/images/WhatsApp Image 2025-05-05 at 12.40.45 (4).jpeg" 
              alt="Octavio Michel HOUNYE" 
            />
          </motion.div>
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="about-description">
              A skilled full-stack web developer with expertise in creating beautiful, functional websites. With years of experience, I've developed a passion for turning ideas into reality through code. I specialize in modern web technologies and strive to deliver exceptional user experiences.
            </p>
            
            <div className="about-details">
              <div className="detail-item">
                <h5>Name:</h5>
                <p>Octavio Michel HOUNYE</p>
              </div>
              <div className="detail-item">
                <h5>Date of Birth:</h5>
                <p>September 29, 2004</p>
              </div>
              <div className="detail-item">
                <h5>Address:</h5>
                <p>Djidjé, Cotonou, BENIN</p>
              </div>
              <div className="detail-item">
                <h5>Email:</h5>
                <p>octaviohounye123@gmail.com</p>
              </div>
              <div className="detail-item">
                <h5>Phone:</h5>
                <p>+229-01-559-942-36</p>
              </div>
              <div className="detail-item">
                <h5>Projects Completed:</h5>
                <p className="text-primary">12+</p>
              </div>
            </div>
            
            <a href="/Cv/CV professionnel gris simple-1 (1).pdf" className="btn btn-primary" download>
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About