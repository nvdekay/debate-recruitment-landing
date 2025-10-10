import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const Begin = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
    const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

    const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 });
    const springRotateY = useSpring(rotateY, { stiffness: 100, damping: 30 });

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(event.clientX - centerX);
        mouseY.set(event.clientY - centerY);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 60, scale: 0.8, rotateX: -30 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.8
            }
        }
    };

    const symbolVariants = {
        hidden: { opacity: 0, scale: 0, rotate: -180 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 20
            }
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center py-60 relative overflow-hidden">
            {/* Animated Background Particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-purple-400 rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            opacity: 0
                        }}
                        animate={{
                            y: [null, -100, Math.random() * window.innerHeight],
                            opacity: [0, 0.6, 0],
                            scale: [0, 1.5, 0]
                        }}
                        transition={{
                            duration: 5 + Math.random() * 5,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            <motion.div
                className="text-center px-4 max-w-6xl mx-auto relative z-10"
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
                {/* Main Title */}
                <motion.div variants={itemVariants}>
                    <motion.h1
                        className="font-display text-5xl md:text-7xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-purple-400 to-red-400 bg-clip-text text-transparent leading-tight tracking-tight"
                        animate={{
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{
                            backgroundSize: "200% 200%"
                        }}
                    >
                        Debate Champion Recruitment 
                    </motion.h1>
                </motion.div>

                {/* Year with Animated Symbols */}
                <motion.div
                    variants={itemVariants}
                    className="flex items-center justify-center gap-6 mb-8"
                >
                    <motion.span
                        className="text-purple-400 text-5xl md:text-6xl"
                        variants={symbolVariants}
                        animate={{
                            rotate: [0, 10, -10, 10, 0],
                            scale: [1, 1.1, 1, 1.1, 1]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        whileHover={{
                            scale: 1.3,
                            rotate: 360,
                            transition: { duration: 0.6 }
                        }}
                    >
                        🔮
                    </motion.span>

                    <motion.h2
                        className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent"
                        animate={{
                            textShadow: [
                                "0 0 20px rgba(236, 72, 153, 0.5)",
                                "0 0 40px rgba(236, 72, 153, 0.8)",
                                "0 0 20px rgba(236, 72, 153, 0.5)"
                            ]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        2026
                    </motion.h2>

                    <motion.span
                        className="text-yellow-300 text-5xl md:text-6xl"
                        variants={symbolVariants}
                        animate={{
                            opacity: [0.5, 1, 0.5],
                            rotate: [0, -10, 10, -10, 0],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        whileHover={{
                            scale: 1.3,
                            rotate: -360,
                            transition: { duration: 0.6 }
                        }}
                    >
                        🌙
                    </motion.span>
                </motion.div>

                {/* Date Range */}
                <motion.div
                    variants={itemVariants}
                    className="text-center mb-12"
                >
                    <motion.div
                        className="flex items-center justify-center gap-6"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.5, delay: 1 }}
                    >
                        <motion.span
                            className="h-px w-16 bg-purple-500"
                            initial={{ width: 0 }}
                            animate={{ width: 64 }}
                            transition={{ duration: 1, delay: 1.2 }}
                        />
                        <motion.p
                            className="text-xl md:text-2xl font-medium text-gray-200 tracking-wider font-body"
                            initial={{ opacity: 0, letterSpacing: "0.5em" }}
                            animate={{ opacity: 1, letterSpacing: "0.1em" }}
                            transition={{ duration: 1, delay: 1.5 }}
                        >
                            Oct 20th – Nov 1st, 2025
                        </motion.p>
                        <motion.span
                            className="h-px w-16 bg-purple-500"
                            initial={{ width: 0 }}
                            animate={{ width: 64 }}
                            transition={{ duration: 1, delay: 1.2 }}
                        />
                    </motion.div>
                </motion.div>

                {/* Apply Button with Complex Animation */}
                <motion.div variants={itemVariants}>
                    <motion.button
                        className="cursor-pointer group relative px-16 py-4 bg-gradient-to-r from-purple-800 to-pink-600 text-white font-bold text-xl rounded-full overflow-hidden font-display"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 50px rgba(168,85,247,0.8)",
                        }}
                        whileTap={{
                            scale: 0.95,
                            boxShadow: "0 0 20px rgba(168,85,247,0.5)",
                        }}
                        animate={{
                            boxShadow: [
                                "0 0 20px rgba(168,85,247,0.3)",
                                "0 0 40px rgba(168,85,247,0.6)",
                                "0 0 20px rgba(168,85,247,0.3)"
                            ]
                        }}
                        transition={{
                            boxShadow: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }}
                    >
                        <motion.span
                            className="relative z-20 tracking-widest"
                            animate={{
                                textShadow: [
                                    "0 0 10px rgba(255,255,255,0.5)",
                                    "0 0 20px rgba(255,255,255,0.8)",
                                    "0 0 10px rgba(255,255,255,0.5)"
                                ]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity
                            }}
                        >
                            Apply Now
                        </motion.span>

                        {/* Animated Background Layers */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.6 }}
                        />

                        <motion.div
                            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_70%)]"
                            initial={{ opacity: 0, scale: 0 }}
                            whileHover={{ opacity: 0.3, scale: 2 }}
                            transition={{ duration: 0.5 }}
                        />

                        {/* Particle Effects */}
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-white rounded-full"
                                initial={{
                                    x: "50%",
                                    y: "50%",
                                    opacity: 0
                                }}
                                whileHover={{
                                    x: `${50 + Math.cos(i * 60 * Math.PI / 180) * 100}%`,
                                    y: `${50 + Math.sin(i * 60 * Math.PI / 180) * 100}%`,
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: i * 0.05
                                }}
                            />
                        ))}
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: -20 }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{ delay: 2, duration: 1 }}
            >
                <motion.div
                    animate={{
                        y: [0, -15, 0],
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Begin;