import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import './About.css'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const developerCode = `const aboutMe = {
  name: 'Octavio Michel HOUNYE',
  title: 'Fullstack Web Developer',
  location: 'Cotonou, BENIN',
  email: 'octaviohounye123@gmail.com',
  passion: 'Creating beautiful, functional websites',
  completedProjects: '12+',
  technologies: ['React', 'Node.js', 'PHP', 'Laravel', 'MongoDB'],
  getContact: function() {
    return this.email;
  }
};`

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
            <div className="terminal-window">
              <div className="terminal-window-header">
                <div className="terminal-buttons">
                  <div className="btn-close"></div>
                  <div className="btn-min"></div>
                  <div className="btn-max"></div>
                </div>
                <div className="terminal-title">about.js</div>
              </div>
              <div className="terminal-window-body">
                <SyntaxHighlighter
                  language="javascript"
                  style={atomDark}
                  customStyle={{
                    margin: 0,
                    padding: '1.5rem',
                    background: 'transparent',
                    fontSize: '0.9rem',
                    borderRadius: '0 0 8px 8px'
                  }}
                >
                  {developerCode}
                </SyntaxHighlighter>
              </div>
            </div>

            <a href="/Cv/CV professionnel gris simple-1 (1).pdf" className="btn btn-primary mt-4 hover-target" download style={{ marginTop: '2rem' }}>
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About