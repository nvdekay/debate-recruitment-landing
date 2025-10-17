import React from 'react';
import { motion } from "framer-motion";
import Countdown from './components/Countdown';
import About from './components/About';
import Committees from './components/Committees';
import Timeline from './components/Timeline';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Begin from './components/Begin';

// 🌟 Các biểu tượng Tarot/Huyền bí để thay thế lá bài Tây 🌟
// Chúng ta sẽ dùng các ký tự Unicode đơn giản để tránh import thư viện icon ở đây.
const tarotSymbols = ["🔮", "🌙", "✨", "⛤"];

function App() {
  return (
    <div className="h-screen overflow-x-hidden relative">
      <div className="fixed inset-0 z-0">

        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #6e5300 0%, #000000 80%)",
          }}
        >

          <div className="absolute inset-0 opacity-20">
            {Array.from({ length: 25 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-purple-400 text-5xl md:text-7xl font-bold select-none cursor-default"
                style={{
                  // Tạo vị trí ngẫu nhiên ban đầu
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  color: i % 2 === 0 ? "#a855f7" : "#facc15",
                }}
                animate={{
                  x: [0, (Math.random() - 0.5) * 100, 0],
                  y: [0, (Math.random() - 0.5) * 100, 0],
                  rotate: [0, Math.random() > 0.5 ? 90 : -90, 0],
                  opacity: [0.1, 0.4, 0.1],
                }}
                transition={{
                  duration: 3 + Math.random(),
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 5,
                }}
              >
                {tarotSymbols[Math.floor(Math.random() * tarotSymbols.length)]}
              </motion.div>
            ))}
          </div>

          {/* 🌌 Lớp Gradient Overlay phụ — thêm chiều sâu, ánh tím nhẹ */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at center, rgba(168,85,247,0.2) 0%, transparent 70%)",
              mixBlendMode: "overlay",
            }}
          ></div>
        </div>
      </div>


      <div className="relative z-10">
        <Begin />
        <Countdown />
        <About />
        <Committees />
        <Timeline />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}

export default App;