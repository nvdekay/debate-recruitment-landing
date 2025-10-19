import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useScroll } from "../hooks/useScroll";
import { FaRegFileAlt, FaComments, FaStar } from "react-icons/fa";

const Timeline = () => {
  const [elementRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const timelineRef = useRef(null);
  const scrollProgress = useScroll(timelineRef); // 0 → 1 khi scroll qua section

  const events = [
    { title: "Vòng Đơn", date: "20/10 - 1/11" },
    { title: "Vòng Phỏng Vấn", date: "3/11 - 6/11" },
    { title: "Công Bố Kết Quả", date: "8/11" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.8, ease: "easeInOut" },
    },
  };

  const TimelineItem = ({ event, index }) => (
    <motion.div
      variants={itemVariants}
      className="relative flex flex-col items-center text-center flex-1 
                 px-2 sm:px-4 md:px-6 lg:px-8"
      whileHover={{ scale: 1.06, y: -6 }}
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
    >
      {/* Icon */}
      <motion.div
        className="relative mb-4 sm:mb-6 z-20"
        animate={{ rotate: [0, 8, -8, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.3,
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)",
            filter: "blur(16px)",
          }}
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
                 flex items-center justify-center 
                     text-2xl sm:text-3xl text-white shadow-lg"
          whileHover={{
            scale: 1.15,
            rotate: 360,
            boxShadow: "0 0 40px rgba(168,85,247,0.8)",
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          animate={{
            boxShadow: [
              "0 0 20px rgba(168,85,247,0.4)",
              "0 0 30px rgba(168,85,247,0.7)",
              "0 0 20px rgba(168,85,247,0.4)",
            ],
          }}
        ></motion.div>
      </motion.div>

      <motion.div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2 font-display">
          {event.title}
        </h3>
        <p className="text-sm sm:text-base font-semibold text-rose-400 mb-2 font-body">
          {event.date}
        </p>
      </motion.div>
    </motion.div>
  );

  const MobileTimelineItem = ({ event, index }) => (
    <motion.div
      variants={itemVariants}
      className="relative flex items-start mb-10 sm:mb-12 px-2"
      whileHover={{ x: 6 }}
      transition={{ type: "spring", stiffness: 140, damping: 10 }}
    >
      <motion.div
        className="relative flex-shrink-0"
        animate={{ rotate: [0, 8, -8, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.3,
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)",
            filter: "blur(12px)",
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="relative w-10 h-10 sm:w-12 sm:h-12 
                     bg-gradient-to-br from-gray-400/80 to-gray-600/60 
                     rounded-full flex items-center justify-center 
                     text-xl sm:text-2xl text-white shadow-lg"
          whileHover={{ scale: 1.15, rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          {event.icon}
        </motion.div>
      </motion.div>

      <motion.div
        className="ml-4 sm:ml-6 flex-1"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
        transition={{ delay: 0.2 + index * 0.1 }}
      >
        <motion.h3
          className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 font-display"
          whileHover={{ x: 5 }}
        >
          {event.title}
        </motion.h3>
        <motion.p
          className="text-sm font-semibold text-rose-400 mb-1 font-body"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {event.date}
        </motion.p>
      </motion.div>
    </motion.div>
  );

  return (
    <section
      ref={elementRef}
      className="py-32 sm:py-40 md:py-52 lg:py-60 relative overflow-hidden"
    >
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${14 + Math.random() * 20}px`,
              color:
                i % 2 === 0 ? "rgba(168,85,247,0.15)" : "rgba(236,72,153,0.15)",
            }}
            animate={{
              y: [0, -80, 0],
              opacity: [0, 0.3, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 9 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          >
            ✦
          </motion.div>
        ))}
      </div>

      <div
        ref={timelineRef}
        className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10"
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="text-center mb-12 sm:mb-16 lg:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 font-unbounded tracking-wider bg-gradient-to-r from-red-200 via-white to-gray-200 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,80,80,0.5)]">
            TIMELINE
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300/90 max-w-xl mx-auto italic font-gilroy px-2 sm:px-4">
            Hành trình trở thành một phần của Debate Championship 2026 bắt đầu
            từ đây
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block max-w-6xl mx-auto relative mt-[200px]">
          <motion.img
            src="/img/xu.png"
            alt="xu"
            className="absolute w-50 h-50 -translate-y-1/2 z-30 pointer-events-none"
            style={{
              top: "-80px",
              left: `${scrollProgress * 98 + 2}%`,
              rotate: `${scrollProgress * 720}deg`,
            }}
            transition={{ type: "spring", stiffness: 60, damping: 0.8 }}
          />

          <div className="relative">
            {/* Animated Line */}
            <svg
              className="absolute top-8 left-0 right-0 w-full h-2"
              style={{ zIndex: 1 }}
            >
              <motion.path
                d={`M 0 1 L ${window.innerWidth} 1`}
                stroke="url(#gradient)"
                strokeWidth="2"
                fill="none"
                variants={lineVariants}
                initial="hidden"
                animate="visible" // luôn visible
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f43f5e" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#f43f5e" />
                </linearGradient>
              </defs>
            </svg>

            {/* Glowing Line */}
            <motion.div
              className="absolute top-8 left-0 h-1 bg-gradient-to-r from-gray-200 to-gray-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }} // luôn hiển thị
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1.5,
                }}
              />
            </motion.div>

            {/* Items */}
            <div
              className="relative flex justify-between items-start pt-2"
              style={{ zIndex: 10 }}
            >
              {events.map((event, index) => (
                <TimelineItem key={index} event={event} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden max-w-md sm:max-w-xl md:max-w-2xl mx-auto">
          <div className="relative">
            <motion.div
              className="absolute left-6 sm:left-8 top-0 w-0.5 bg-gradient-to-b from-rose-500 to-purple-500 rounded-full"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
            <div>
              {events.map((event, index) => (
                <MobileTimelineItem key={index} event={event} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
