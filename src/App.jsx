import React from "react";
import { motion } from "framer-motion";
import Countdown from "./components/Countdown";
import About from "./components/About";
import Committees from "./components/Committees";
import Timeline from "./components/Timeline";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Begin from "./components/Begin";

const tarotImages = [
  `../img/xu.png`,
  `../img/linh.png`,
  `../img/kiem.png`,
  `../img/gay.png`,
  `../img/cup.png`,
  `../img/can.png`,
];

function App() {
  return (
    <div className="relative overflow-x-hidden">
      {/* Nền chính */}
      <div className="absolute inset-0 w-full h-screen">
        <div
          className="fixed inset-0 w-full"
          style={{
            background: "linear-gradient(135deg, #2e2e2e 0%, #000000 100%)",
          }}
        >
          {/* Hiệu ứng tarot bay lơ lửng */}
          <div className="absolute inset-0 opacity-20">
            {Array.from({ length: 25 }).map((_, i) => {
              const randomImage =
                tarotImages[Math.floor(Math.random() * tarotImages.length)];

              // Màu ánh sáng khác nhau — tông xám, trắng, tím
              const colorOverlay =
                i % 3 === 0
                  ? "drop-shadow(0 0 20px rgba(168,85,247,0.4)) brightness(1.1)"
                  : i % 3 === 1
                  ? "drop-shadow(0 0 18px rgba(255,255,255,0.25)) brightness(1.05)"
                  : "drop-shadow(0 0 15px rgba(107,114,128,0.3)) brightness(0.9)";

              // Ngẫu nhiên hướng bay
              const randomX = (Math.random() - 0.5) * 600;
              const randomY = (Math.random() - 0.5) * 600;

              return (
                <motion.img
                  key={i}
                  src={randomImage}
                  alt="tarot symbol"
                  className="absolute w-12 md:w-16 select-none cursor-default"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    filter: colorOverlay,
                    opacity: 0.4, // mờ nhẹ toàn bộ
                    transform: "translate(-50%, -50%)", // căn giữa biểu tượng
                  }}
                  animate={{
                    x: [0, randomX, -randomX, 0],
                    y: [0, randomY, -randomY, 0],
                    scale: [1, 1.05, 0.95, 1],
                    rotate: [0, Math.random() > 0.5 ? 360 : -360],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 12 + Math.random() * 8, // bay chậm
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 3,
                  }}
                />
              );
            })}
          </div>

          {/* Lớp overlay ánh sáng tím nhẹ */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at center, rgba(168,85,247,0.25) 0%, transparent 70%)",
              mixBlendMode: "overlay",
            }}
          ></div>
        </div>
      </div>

      {/* Nội dung chính */}
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
