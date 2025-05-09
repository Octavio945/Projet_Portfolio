import { useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
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
              <div className="project-img">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                  <a href={project.link} className="project-link">View Project</a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="#" className="btn btn-primary">See More</a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects