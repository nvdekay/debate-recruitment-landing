import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const Begin = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);
  const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const symbolVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 md:py-28 relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, -100, Math.random() * window.innerHeight],
              opacity: [0, 0.6, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Box Logo — Fixed to Top */}
      <motion.div
        className="w-full flex justify-center items-center px-4 z-10 absolute top-8"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          src="../img/box-logo.png"
          alt="Box Logo"
          className="max-w-[60%] md:max-w-[40%] lg:max-w-[30%] h-auto drop-shadow-xl"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Typo + Symbols */}
      <motion.div
        className="text-center px-4 relative z-10 mt-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: 1000,
          rotateX: springRotateX,
          rotateY: springRotateY,
        }}
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-3 md:gap-5"
        >
          {/* Sun — Bigger */}
          <motion.img
            src="../img/sun.png"
            alt="Sun"
            className="w-20 md:w-28"
            variants={symbolVariants}
            animate={{
              rotate: [0, 10, -10, 10, 0],
              scale: [1, 1.1, 1, 1.1, 1],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{
              scale: 1.3,
              rotate: 360,
              transition: { duration: 0.6 },
            }}
          />

          {/* Typo */}
          <motion.img
            src="../img/typo-concept.png"
            alt="Typo"
            className="mx-auto drop-shadow-[0_0_25px_rgba(255,255,150,0.6)]"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{
              width: "680px",
              height: "auto",
              maxWidth: "90vw",
              objectFit: "contain",
            }}
          />

          {/* Moon */}
          <motion.img
            src="../img/moon.png"
            alt="Moon"
            className="w-12 md:w-16"
            variants={symbolVariants}
            animate={{
              opacity: [0.5, 1, 0.5],
              rotate: [0, -10, 10, -10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            whileHover={{
              scale: 1.3,
              rotate: -360,
              transition: { duration: 0.6 },
            }}
          />
        </motion.div>

        {/* Subtitle — Smaller */}
        <motion.h2
          variants={itemVariants}
          className="font-unbounded text-3xl md:text-5xl mt-6 font-semibold bg-gradient-to-r from-[#ffe073] to-[#fff9d6] bg-clip-text text-transparent"
          animate={{
            textShadow: [
              "0 0 15px rgba(255, 226, 34, 0.5)",
              "0 0 35px rgba(255, 233, 86, 0.8)",
              "0 0 15px rgba(255, 226, 34, 0.5)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Hiring Member
        </motion.h2>

        {/* Date */}
        <motion.div variants={itemVariants} className="text-center mt-8 mb-10">
          <motion.div
            className="flex items-center justify-center gap-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            <motion.span
              className="h-px w-16 bg-yellow-600"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 1, delay: 1.2 }}
            />
            <motion.p
              className="font-gilroy text-lg md:text-xl text-gray-300 tracking-wider"
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.1em" }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              Oct 20th – Nov 1st, 2025
            </motion.p>
            <motion.span
              className="h-px w-16 bg-yellow-600"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 1, delay: 1.2 }}
            />
          </motion.div>
        </motion.div>

        {/* Apply Button */}
        <motion.div variants={itemVariants}>
          <motion.a
            href="https://forms.gle/YourApplicationFormLink"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer relative px-14 py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-400 text-black font-bold text-xl rounded-full overflow-hidden font-unbounded"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 50px rgba(255, 200, 50, 0.9)",
            }}
            whileTap={{
              scale: 0.95,
              boxShadow: "0 0 20px rgba(255, 180, 0, 0.6)",
            }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(255, 180, 0, 0.3)",
                "0 0 40px rgba(255, 220, 100, 0.6)",
                "0 0 20px rgba(255, 180, 0, 0.3)",
              ],
            }}
            transition={{
              boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <motion.span
              className="cursor-pointer font-unbounded relative z-20 tracking-widest text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
              animate={{
                textShadow: [
                  "0 0 10px rgba(255,255,255,0.6)",
                  "0 0 20px rgba(255,255,200,0.9)",
                  "0 0 10px rgba(255,255,255,0.6)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Apply Now
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Begin;
