import { useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import './Projects.css'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg',
      category: 'Web Development',
      link: '#'
    },
    {
      id: 2,
      title: 'Portfolio Dashboard',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
      category: 'UI/UX Design',
      link: '#'
    },
    {
      id: 3,
      title: 'Education Platform',
      image: 'https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg',
      category: 'Full Stack',
      link: '#'
    },
    {
      id: 4,
      title: 'Blog Platform',
      image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg',
      category: 'Web Development',
      link: '#'
    },
    {
      id: 5,
      title: 'Task Management App',
      image: 'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg',
      category: 'React App',
      link: '#'
    },
    {
      id: 6,
      title: 'Social Media Dashboard',
      image: 'https://images.pexels.com/photos/7088008/pexels-photo-7088008.jpeg',
      category: 'Full Stack',
      link: '#'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 15,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.05,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }

  return (
    <section id="projects" className="projects">
      <div className="container" ref={ref}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-item"
              variants={itemVariants}
            >
              <Tilt options={defaultOptions} style={{ height: '100%', width: '100%' }}>
                <div className="project-img hover-target">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <h3>{project.title}</h3>
                    <p>{project.category}</p>
                    <a href={project.link} className="project-link hover-target">View Project</a>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="#" className="btn btn-primary hover-target">See More</a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects