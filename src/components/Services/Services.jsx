import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { 
  FaLaptopCode, 
  FaMobileAlt, 
  FaPalette, 
  FaServer, 
  FaShieldAlt, 
  FaChartLine 
} from 'react-icons/fa'
import ServiceCard from './ServiceCard'
import './Services.css'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      id: 1,
      icon: <FaLaptopCode />,
      title: 'Fullstack Web Development',
      description: 'End-to-end web application development using modern frontend and backend technologies.',
    },
    {
      id: 2,
      icon: <FaShieldAlt />,
      title: 'Optimization & Maintenance',
      description: 'Improve performance, security, and reliability of your existing web applications.',
    },
    {
      id: 3,
      icon: <FaPalette />,
      title: 'Web Design',
      description: 'Create beautiful, responsive designs that enhance user experience and build brand identity.',
    },
    {
      id: 4,
      icon: <FaMobileAlt />,
      title: 'Custom Web Solutions',
      description: 'Tailor-made solutions to address your specific business needs and requirements.',
    },
    {
      id: 5,
      icon: <FaServer />,
      title: 'Web Integration',
      description: 'Seamless integration of third-party services and APIs to enhance your web applications.',
    },
    {
      id: 6,
      icon: <FaChartLine />,
      title: 'Graphic Design & Branding',
      description: 'Create cohesive visual identities, logos and branding materials for your business.',
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

  return (
    <section id="services" className="services">
      <div className="container" ref={ref}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My Services
        </motion.h2>
        
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services