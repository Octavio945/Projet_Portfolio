import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaGithub, FaBootstrap, FaAws, FaPhp, FaDatabase
} from 'react-icons/fa'
import { 
  SiTailwindcss, SiMysql, SiMongodb, SiFirebase,
  SiExpress, SiTypescript, SiVuedotjs, SiAngular, SiAdobe
} from 'react-icons/si'
import './Skills.css'
import { title } from 'framer-motion/client'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skills = [
    { id: 1, name: 'HTML5', icon: <FaHtml5 />, color: '#E44D26' },
    { id: 2, name: 'CSS3', icon: <FaCss3Alt />, color: '#264DE4' },
    { id: 3, name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { id: 4, name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { id: 5, name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { id: 6, name: 'Express', icon: <SiExpress />, color: '#000000' },
    { id: 7, name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3' },
    { id: 8, name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38B2AC' },
    { id: 9, name: 'AWS', icon: <FaAws />, color: '#FF9900' },
    { id: 10, name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    { id: 11, name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
    { id: 12, name: 'GitHub', icon: <FaGithub />, color: '#181717' },
    { id: 13, name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
    { id: 14, name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
    { id: 15, name: 'PHP', icon: <FaPhp />, color: '#777BB4' },
    { id: 16, name: 'Adobe', icon: <SiAdobe />, color: '#FF0000' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4
      }
    }
  }

  return (
    <section id="skills" className="skills">
      <div className="container" ref={ref}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        <motion.p 
          className="skills-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Over 5 years of hands-on experience in web development, design, and creative projects — delivering real-world solutions and constantly learning.
        </motion.p>
        
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skills.map(skill => (
            <motion.div 
              key={skill.id} 
              className="skill-item"
              variants={itemVariants}
            >
              <div className="skill-icon" style={{ color: skill.color }} title={skill.name}>
                {skill.icon}
              </div>
              <p className="skill-name">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills