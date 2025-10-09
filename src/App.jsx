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
  // Thay đổi màu nền chính sang màu đen sâu hơn
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden relative">
      <div className="fixed inset-0 z-0">

        {/* Lớp nền chính màu đen */}
        <div className="absolute inset-0 bg-gray-800">

          {/* Lớp Overlay chứa các biểu tượng di chuyển (Animation) */}
          <div className="absolute inset-0 opacity-15">
            {Array.from({ length: 25 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-purple-400 text-5xl md:text-7xl font-bold select-none cursor-default"
                style={{
                  // Tạo vị trí ngẫu nhiên ban đầu
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  // Đặt màu cho các biểu tượng (Tím/Vàng)
                  color: i % 2 === 0 ? '#a855f7' : '#facc15',
                }}

                // Animation di chuyển chậm và xoay nhẹ nhàng
                animate={{
                  x: [0, (Math.random() - 0.5) * 100, 0], // Di chuyển ngang ngẫu nhiên
                  y: [0, (Math.random() - 0.5) * 100, 0], // Di chuyển dọc ngẫu nhiên
                  rotate: [0, Math.random() > 0.5 ? 90 : -90, 0], // Xoay nhẹ
                  opacity: [0.1, 0.4, 0.1], // Hiệu ứng nhấp nháy/lờ mờ
                }}

                transition={{
                  duration: 3 + Math.random(), // Thời gian di chuyển rất chậm
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 5, // Delay ngẫu nhiên để không bị đồng bộ
                }}
              >
                {/* Chọn biểu tượng Tarot ngẫu nhiên */}
                {tarotSymbols[Math.floor(Math.random() * tarotSymbols.length)]}
              </motion.div>
            ))}
          </div>

          {/* Lớp Gradient Holo Overlay: Tạo chiều sâu và màu sắc huyền bí */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-purple-950/20 to-black/50 opacity-90"></div>
        </div>
      </div>

      {/* Content (Đảm bảo nội dung luôn nằm trên lớp nền) */}
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