import { motion } from 'framer-motion'
import './ServiceCard.css'

const ServiceCard = ({ service }) => {
  const { icon, title, description } = service

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 } 
    }
  }

  return (
    <motion.div 
      className="service-card"
      variants={cardVariants}
    >
      <div className="service-icon">
        {icon}
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </motion.div>
  )
}

export default ServiceCard