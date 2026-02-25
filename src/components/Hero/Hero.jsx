import { useCallback } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import Typewriter from 'typewriter-effect'
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import './Hero.css'

const Hero = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <section id="hero" className="hero">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#00d2ff",
            },
            links: {
              color: "#3a7bd5",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 60,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0
        }}
      />
      <div className="container hero-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h4>HELLO!</h4>
            <h1>I'm <span className="text-primary">Octavio<br />Michel HOUNYE</span></h1>

            <div className="typewriter-container" style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--color-text-light)' }}>
              <Typewriter
                options={{
                  strings: [
                    'Fullstack Web Developer',
                    'React & Node.js Enthusiast',
                    'Problem Solver'
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </div>

            <div className="hero-buttons">
              <Link to="contact" smooth={true} duration={500} offset={-70}>
                <button className="btn btn-primary hover-target">Contact Me</button>
              </Link>
              <Link to="projects" smooth={true} duration={500} offset={-70}>
                <button className="btn btn-secondary hover-target">My Works</button>
              </Link>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-image hover-target"
        >
          <img
            src="/images/WhatsApp Image 2025-05-05 at 12.40.45 (6).png"
            alt="Octavio Michel HOUNYE"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero