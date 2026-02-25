import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import CustomCursor from './components/CustomCursor/CustomCursor'
import Preloader from './components/Preloader/Preloader'

function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="progress-bar"
            style={{
              scaleX,
              position: 'fixed',
              top: 0, left: 0, right: 0,
              height: '4px',
              background: 'var(--color-primary)',
              transformOrigin: '0%',
              zIndex: 9999
            }}
          />
          <CustomCursor />
          <Header />
          <main>
            <Hero />
            <About />
            <Services />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  )
}

export default App