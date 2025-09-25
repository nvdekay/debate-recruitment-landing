import React from 'react';
import { motion } from "framer-motion";
import Countdown from './components/Countdown';
import About from './components/About';
import Committees from './components/Committees';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import Begin from './components/Begin';

const cardSymbols = ["♠", "♥", "♦", "♣"];

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Global Background Pattern */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gray-800">
          <div className="absolute inset-0 opacity-10">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-red-400 text-6xl md:text-8xl font-bold select-none"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2,
                }}
              >
                {cardSymbols[Math.floor(Math.random() * 4)]}
              </motion.div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-black"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Begin />
        <Countdown />
        <About />
        <Committees />
        <Timeline />
        <Footer />
      </div>
    </div>
  );
}

export default App;