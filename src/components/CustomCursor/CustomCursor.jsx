import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', updateMousePosition);

    const handleMouseOver = (e) => {
      // Add hovering effect when over actionable elements
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('hover-target')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 15, // Offset by half the width/height to center
      y: mousePosition.y - 15,
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 28,
        mass: 0.5
      }
    }
  };

  return (
    <motion.div
      className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
      variants={variants}
      animate="default"
    />
  );
};

export default CustomCursor;
