import React from "react";
import { motion } from "framer-motion";

const symbols = ["♠", "♥", "♦", "♣"];

const Begin = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Pattern */}
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
                            {symbols[Math.floor(Math.random() * 4)]}
                        </motion.div>
                    ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-black"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="font-poppins text-4xl md:text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent leading-tight">
                        Debate Championship
                    </h1>
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <span className="text-red-500 text-6xl">♠</span>
                        <h2 className="text-6xl md:text-8xl font-bold text-red-500">2026</h2>
                        <span className="text-red-500 text-6xl">♥</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Join the elite organizing committee and help create the most
                        prestigious debate tournament of 2026
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <button className="group relative px-12 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xl rounded-lg transition-all duration-300 hover:from-red-700 hover:to-red-800 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
                        <span className="relative z-10">Apply Now</span>
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                    <motion.div
                        className="w-1 h-3 bg-white rounded-full mt-2"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Begin;
