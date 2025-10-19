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

  // 🎨 Icon có tone khác nhau nhưng phù hợp với nền
  const timeUnits = [
    {
      label: "Ngày",
      value: timeLeft.days,
      symbol: (
        <GiCrossedSwords className="text-red-500 drop-shadow-[0_0_10px_rgba(255,80,80,0.6)]" />
      ),
    },
    {
      label: "Giờ",
      value: timeLeft.hours,
      symbol: (
        <GiAura className="text-amber-400 drop-shadow-[0_0_10px_rgba(255,200,0,0.5)]" />
      ),
    },
    {
      label: "Phút",
      value: timeLeft.minutes,
      symbol: (
        <GiCrystalBall className="text-green-500 drop-shadow-[0_0_10px_rgba(180,180,180,0.5)]" />
      ),
    },
    {
      label: "Giây",
      value: timeLeft.seconds,
      symbol: (
        <GiGems className="text-fuchsia-400 drop-shadow-[0_0_10px_rgba(255,120,255,0.4)]" />
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
        className="bg-gradient-to-br from-gray-600/80 to-gray-800/60 p-6 rounded-2xl 
                   border border-white/30 hover:border-red-400/60 
                   transition-all duration-300 
                   hover:shadow-[0_0_25px_rgba(255,50,50,0.3)] 
                   backdrop-blur-sm"
      >
        <div className="text-center">
          {/* Icon */}
          <div className="text-4xl md:text-5xl mb-2 mx-auto w-fit">
            {symbol}
          </div>

          {/* Value */}
          <div className="text-5xl md:text-6xl font-extrabold text-white mb-2 font-mono relative h-16 overflow-hidden flex justify-center items-center drop-shadow-[0_0_15px_rgba(255,50,50,0.4)]">
            <motion.span key={value} className="absolute">
              {value.toString().padStart(2, "0")}
            </motion.span>
          </div>

          {/* Label */}
          <div className="text-gray-200 text-lg font-semibold tracking-wider">
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
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 font-unbounded tracking-wider bg-gradient-to-r from-red-200 via-white to-gray-200 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,80,80,0.5)]">
            COUNTDOWN
          </h2>
          <p className="text-lg md:text-xl text-gray-300/90 max-w-2xl mx-auto italic font-gilroy">
            Thời gian đang dần trôi qua...
          </p>
        </motion.div>

        {/* Countdown Grid */}
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
