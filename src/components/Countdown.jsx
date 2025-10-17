import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { GiCrystalBall, GiCrossedSwords, GiGems, GiAura } from "react-icons/gi";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [elementRef, isVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  useEffect(() => {
    const targetDate = new Date("2025-11-01T23:59:59");
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // 🎨 Mỗi icon có màu riêng biệt, vẫn hòa với nền
  const timeUnits = [
    {
      label: "Ngày",
      value: timeLeft.days,
      symbol: (
        <GiCrossedSwords className="text-orange-400 drop-shadow-[0_0_10px_rgba(255,120,0,0.5)]" />
      ),
    },
    {
      label: "Giờ",
      value: timeLeft.hours,
      symbol: (
        <GiAura className="text-emerald-400 drop-shadow-[0_0_10px_rgba(0,255,150,0.4)]" />
      ),
    },
    {
      label: "Phút",
      value: timeLeft.minutes,
      symbol: (
        <GiCrystalBall className="text-cyan-300 drop-shadow-[0_0_10px_rgba(0,200,255,0.4)]" />
      ),
    },
    {
      label: "Giây",
      value: timeLeft.seconds,
      symbol: (
        <GiGems className="text-rose-400 drop-shadow-[0_0_10px_rgba(255,100,150,0.4)]" />
      ),
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const TimeSegment = ({ label, value, symbol }) => (
    <motion.div
      variants={fadeUp}
      animate={isVisible ? "visible" : "hidden"}
      className="p-1"
    >
      <div
        className="bg-gradient-to-br from-black/70 to-yellow-900/20 p-6 rounded-2xl 
                      border border-yellow-500/30 hover:border-yellow-400/60 
                      transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,200,0,0.25)] 
                      backdrop-blur-sm"
      >
        <div className="text-center">
          {/* Symbol */}
          <div className="text-4xl md:text-5xl mb-2 mx-auto w-fit">
            {symbol}
          </div>

          {/* Value */}
          <div className="text-5xl md:text-6xl font-extrabold text-amber-300 mb-2 font-mono relative h-16 overflow-hidden flex justify-center items-center drop-shadow-[0_0_15px_rgba(255,200,0,0.4)]">
            <motion.span key={value} className="absolute">
              {value.toString().padStart(2, "0")}
            </motion.span>
          </div>

          {/* Label */}
          <div className="text-yellow-100 text-lg font-semibold tracking-wider">
            {label}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section ref={elementRef} className="py-60 relative z-10">
      <div className="container mx-auto px-4">
        {/* Title */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-6xl font-extrabold mb-4 font-unbounded 
                       tracking-wider bg-gradient-to-r 
                       from-yellow-200 via-amber-400 to-orange-600 
                       bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,200,0,0.5)]"
          >
            COUNTDOWN
          </h2>
          <p className="text-lg md:text-xl text-yellow-100/80 max-w-2xl mx-auto italic font-gilroy">
            Thời gian đang dần trôi qua...
          </p>
        </motion.div>

        {/* Countdown grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {timeUnits.map((unit) => (
            <TimeSegment
              key={unit.label}
              label={unit.label}
              value={unit.value}
              symbol={unit.symbol}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countdown;
