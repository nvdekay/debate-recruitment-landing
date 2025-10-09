import React from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi"; // Dùng icon mũi tên từ react-icons

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

    // Thay thế các ký hiệu lá bài Tây bằng biểu tượng Tarot:
    // 🔮 (Crystal Ball) và 🌙 (Crescent Moon) để tạo cảm giác huyền bí.

    return (
        // Đổi màu nền (ví dụ: nền đen sẫm) để nổi bật chủ đề huyền bí
        <section className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="text-center px-4 max-w-6xl mx-auto">
                {/* Main Title - Giữ lại hiệu ứng gradient nhưng chuyển sang tông Vàng/Tím/Đỏ đậm hơn để phù hợp với Tarot */}
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
                        <h2 className="text-6xl md:text-8xl font-extrabold text-red-500">2026</h2>
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

                {/* --- */}

                {/* Date Range - Animation mượt mà hơn */}
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

                {/* --- */}

                {/* Apply Now Button - Animation bật lên và hiệu ứng bóng sáng huyền ảo */}
                <motion.div
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <button className="cursor-pointer group relative px-16 py-4 bg-gradient-to-r from-purple-700 to-red-600 text-white font-bold text-xl rounded-full transition-all duration-300 hover:from-purple-800 hover:to-red-700 hover:scale-[1.03] hover:shadow-2xl hover:shadow-purple-500/50 overflow-hidden">
                        <span className="relative z-10 tracking-widest">Receive Your Reading</span>
                        {/* Hiệu ứng flash nhẹ bên trong button khi hover */}
                        <motion.div
                            className="absolute inset-0 bg-white opacity-0"
                            whileHover={{ opacity: 0.1, scale: 1.5 }}
                            transition={{ duration: 0.5 }}
                        />
                    </button>
                </motion.div>
            </div>

            {/* --- */}

            {/* Scroll Indicator - Animation nhấp nhô và icon mới */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
                {/* Thay thế bằng icon FiChevronDown (mũi tên xuống) */}
                <FiChevronDown className="text-white text-4xl opacity-70" />
            </motion.div>
        </section>
    );
};

export default Begin;