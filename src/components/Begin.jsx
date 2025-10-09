import React from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const Begin = () => {
    // Biến thể Framer Motion cho các animation
    const headerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.2, ease: "easeOut" }
        }
    };

    const dateVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.9, delay: 0.5, ease: "easeOut" }
        }
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.7, delay: 1.2, type: "spring", stiffness: 100 }
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center py-20">
            <div className="text-center px-4 max-w-6xl mx-auto">
                {/* Main Title */}
                <motion.div
                    variants={headerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <h1 className="font-serif text-4xl md:text-6xl lg:text-8xl font-extrabold mb-6 bg-gradient-to-r from-yellow-300 via-purple-400 to-red-400 bg-clip-text text-transparent leading-tight tracking-tighter">
                        Debate Prophecy
                    </h1>

                    {/* Year with Tarot Symbols */}
                    <div className="flex items-center justify-center gap-6 mb-8">
                        {/* Biểu tượng 🔮 với animation xoay nhẹ */}
                        <motion.span
                            className="text-purple-400 text-5xl md:text-6xl"
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            🔮
                        </motion.span>
                        {/* 🌟 CHỈNH SỬA MÀU 2026: Dùng gradient để đồng bộ holo 🌟 */}
                        <h2 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
                            2026
                        </h2>
                        {/* Biểu tượng 🌙 với animation nhấp nháy/mờ dần */}
                        <motion.span
                            className="text-yellow-300 text-5xl md:text-6xl"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        >
                            🌙
                        </motion.span>
                    </div>
                </motion.div>

                {/* Date Range */}
                <motion.div
                    variants={dateVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center"
                >
                    <div className="flex items-center justify-center gap-6 mb-10">
                        {/* Đường kẻ mờ ảo hơn */}
                        <span className="h-px w-16 bg-purple-500 opacity-50"></span>
                        <p className="text-xl md:text-2xl font-medium text-gray-200 tracking-wider">
                            Oct 20th – Nov 1st, 2025
                        </p>
                        <span className="h-px w-16 bg-purple-500 opacity-50"></span>
                    </div>
                </motion.div>


                {/* Apply Now Button - Hiệu ứng bồng bềnh và Holo */}
                <motion.div
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.button
                        // 🌟 HIỆU ỨNG BỒNG BỀNH (Float) & RUNG NHẸ 🌟
                        // Đảm bảo whileHover được định nghĩa đúng
                        whileHover={{
                            scale: 1.05,
                            y: -5,
                            rotate: [0, 0.2, -0.2, 0.2, -0.2, 0],
                        }}

                        // Framer Motion Transition (Kiểm soát hoàn toàn animation)
                        transition={{
                            scale: { duration: 0.3 },
                            y: { duration: 0.4, type: "spring", stiffness: 150, damping: 10 },
                            // Hiệu ứng rung nhẹ liên tục chỉ khi hover:
                            rotate: { duration: 0.5, type: "spring", stiffness: 200, damping: 5, repeat: Infinity, repeatDelay: 1.5 }
                        }}

                        className="cursor-pointer group relative px-16 py-4
            bg-gradient-to-r from-purple-800 to-pink-600
            text-white font-bold text-xl rounded-full 
            /* ❌ Đã xóa: transition-all duration-500 */
            hover:from-purple-900 hover:to-pink-700
            hover:shadow-[0_0_40px_rgba(168,85,247,0.7)] hover:shadow-pink-500/50
            overflow-hidden isolate">
                        {/* ... (Nội dung và các lớp overlay giữ nguyên) ... */}

                        <span className="relative z-20 tracking-widest font-serif">Apply Now</span>

                        {/* Lớp Overlay Holo (Ánh sáng bật ra) */}
                        <motion.div
                            className="absolute inset-0 z-10 
                       bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0%,transparent_60%)] 
                       rounded-full"
                            initial={{ opacity: 0, scale: 0 }}
                            whileHover={{ opacity: 0.2, scale: 2 }}
                            transition={{ duration: 0.4, type: "tween", ease: "easeOut" }}
                        />

                        {/* Lớp Shadow Mờ Phía Sau (Glow effect) */}
                        <motion.div
                            className="absolute inset-0 rounded-full 
                       bg-gradient-to-r from-purple-500/50 to-pink-500/50 opacity-0 blur-xl"
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        />
                    </motion.button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
                <FiChevronDown className="text-white text-4xl opacity-70" />
            </motion.div>
        </section>
    );
};

export default Begin;