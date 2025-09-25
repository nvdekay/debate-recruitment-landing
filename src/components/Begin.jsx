import React from "react";
import { motion } from "framer-motion";

const Begin = () => {
    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="text-center px-4 max-w-6xl mx-auto">
                {/* Main Title */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="font-poppins text-4xl md:text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent leading-tight">
                        Debate Championship
                    </h1>

                    {/* Year with Symbols */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <span className="text-red-500 text-6xl">♠</span>
                        <h2 className="text-6xl md:text-8xl font-bold text-red-500">2026</h2>
                        <span className="text-red-500 text-6xl">♥</span>
                    </div>
                </motion.div>

                {/* Date Range */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-center"
                >
                    <div className="flex items-center justify-center gap-6 mb-10">
                        <span className="h-px w-16 bg-gray-600"></span>
                        <p className="text-2xl md:text-3xl font-semibold text-gray-100 tracking-wide">
                            20.10.2025 – 01.11.2025
                        </p>
                        <span className="h-px w-16 bg-gray-600"></span>
                    </div>
                </motion.div>


                {/* Apply Now Button */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <button className="cursor-pointer group relative px-12 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xl rounded-lg transition-all duration-300 hover:from-red-700 hover:to-red-800 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
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