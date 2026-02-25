import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        // Sequence timing
        const timers = [
            setTimeout(() => setStep(1), 1000), // command typed
            setTimeout(() => setStep(2), 1500), // executing
            setTimeout(() => setStep(3), 2200), // success
            setTimeout(() => onComplete(), 2800) // finish and inform parent
        ];

        return () => timers.forEach(clearTimeout);
    }, [onComplete]);

    return (
        <motion.div
            className="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <div className="terminal-loader">
                <div className="terminal-header">
                    <div className="terminal-buttons">
                        <div className="btn-close"></div>
                        <div className="btn-min"></div>
                        <div className="btn-max"></div>
                    </div>
                    <div className="terminal-title">octavio@portfolio:~</div>
                </div>
                <div className="terminal-body">
                    <div className="terminal-line">
                        <span className="prompt">root@octavio:~$</span>
                        <span className="command">
                            <Typewriter
                                options={{
                                    strings: ['npm run start-portfolio'],
                                    autoStart: true,
                                    delay: 50,
                                    cursor: step === 0 ? '|' : ''
                                }}
                            />
                        </span>
                    </div>

                    {step >= 1 && (
                        <motion.div
                            className="terminal-line output"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
              > octavio-portfolio@1.0.0 start<br />
              > initializing modules...
                        </motion.div>
                    )}

                    {step >= 2 && (
                        <motion.div
                            className="terminal-line output"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            [OK] React components loaded.<br />
                            [OK] Animations compiled.<br />
                            [OK] Assets optimized.
                        </motion.div>
                    )}

                    {step >= 3 && (
                        <motion.div
                            className="terminal-line success"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            Server started on http://localhost:PORT
                        </motion.div>
                    )}

                </div>
            </div>
        </motion.div>
    );
};

export default Preloader;
