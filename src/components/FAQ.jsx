import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
// 🌟 IMPORT ICONS FONT AWESOME (Giả định đã cài đặt: npm install react-icons) 🌟
import { FaHatWizard, FaInfinity, FaRegStar, FaFeatherPointed, FaBookOpen } from "react-icons/fa6";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [elementRef, isVisible] = useIntersectionObserver({
        threshold: 0.1,
    });

    // 🌟 Icons Font Awesome 6 được sử dụng (ví dụ) 🌟
    const faqData = [
        {
            question: "Ai có thể tham gia Debate Championship 2026?",
            answer:
                "Cuộc thi mở rộng cho tất cả sinh viên đang học tại các trường đại học, cao đẳng trên toàn quốc. Không yêu cầu kinh nghiệm tranh luận trước đó, chỉ cần có đam mê học hỏi và thể hiện quan điểm của mình một cách thuyết phục.",
            symbol: <FaHatWizard />, // The Fool -> Wizard Hat (Khởi đầu/Tiềm năng)
            tarotName: "THE FOOL",
        },
        {
            question: "Thể thức thi đấu như thế nào?",
            answer:
                "Cuộc thi gồm 3 vòng chính: Vòng đơn (20/10 - 1/11) với bài thi trực tuyến, Vòng phỏng vấn (3/11 - 6/11) đánh giá kỹ năng tranh luận trực tiếp, và Chung kết với các đội xuất sắc nhất tranh tài tại sự kiện lớn.",
            symbol: <FaInfinity />, // Wheel of Fortune -> Infinity (Chu kỳ/Vòng quay)
            tarotName: "WHEEL OF FORTUNE",
        },
        {
            question: "Giải thưởng và quyền lợi khi tham gia?",
            answer:
                "Ngoài các giải thưởng giá trị lên đến hàng chục triệu đồng, người tham gia còn có cơ hội kết nối với các chuyên gia, nhận chứng chỉ tham gia, và mở rộng mạng lưới quan hệ trong cộng đồng tranh luận học thuật.",
            symbol: <FaRegStar />, // The Star -> Star (Hy vọng/Thành công)
            tarotName: "THE STAR",
        },
        {
            question: "Làm thế nào để đăng ký tham gia?",
            answer:
                "Bạn có thể đăng ký trực tuyến thông qua website chính thức hoặc liên hệ qua email debate.fpt@gmail.com. Hạn chót nộp hồ sơ là 1/11/2025. Hồ sơ bao gồm thông tin cá nhân, CV và một bài essay ngắn về chủ đề được chỉ định.",
            symbol: <FaFeatherPointed />, // The Magician -> Quill/Feather (Thực hiện/Viết lách)
            tarotName: "THE MAGICIAN",
        },
        {
            question: "Cần chuẩn bị gì để tham gia hiệu quả?",
            answer:
                "Bạn nên rèn luyện kỹ năng diễn đạt, tìm hiểu về các chủ đề xã hội thời sự, và luyện tập tư duy phản biện. Chúng tôi cũng sẽ cung cấp tài liệu hướng dẫn và tổ chức các buổi workshop chuẩn bị cho thí sinh.",
            symbol: <FaBookOpen />, // The Hermit -> Open Book (Khôn ngoan/Hướng dẫn)
            tarotName: "THE HERMIT",
        },
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    // Giữ Spring animation cho sự mượt mà
    const expandVariants = {
        hidden: { height: 0, opacity: 0, scaleY: 0.8 },
        visible: {
            height: "auto",
            opacity: 1,
            scaleY: 1,
            transition: {
                type: "spring",
                stiffness: 400, // Giảm stiffness để mượt hơn
                damping: 30,    // Giảm damping để có độ nảy tinh tế
                duration: 0.5,
            },
        },
        exit: {
            height: 0,
            opacity: 0,
            scaleY: 0.8,
            transition: { duration: 0.3, ease: "easeInOut" },
        },
    };

    return (
        <section ref={elementRef} className="py-40 relative overflow-hidden">

            <div className="container relative mx-auto px-4 z-10">
                {/* Title */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-4 font-serif drop-shadow-lg tracking-wider 
                                   bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-holotitle">
                        GIẢI MÃ LÁ BÀI TAROT
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto italic font-light">
                        Mỗi lá bài ẩn chứa một thông điệp định mệnh về Debate Championship 2026...
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <div className="max-w-4xl mx-auto space-y-6">
                    {faqData.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            initial="hidden"
                            animate={isVisible ? "visible" : "hidden"}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="relative group"
                            whileHover={{ scale: 1.01, zIndex: 10, boxShadow: "0 0 35px rgba(255, 105, 180, 0.4)" }}
                        >
                            <div className="bg-gray-900/80 rounded-2xl overflow-hidden backdrop-blur-sm shadow-xl 
                                            border-2 border-transparent hover:border-purple-500 transition-all duration-300 animate-holoborder">

                                {/* Question Header */}
                                <motion.button
                                    onClick={() => toggleAccordion(index)}
                                    className="cursor-pointer w-full px-6 py-5 md:px-8 flex items-center justify-between text-left transition-all duration-300 group-hover:bg-purple-900/30"
                                    whileTap={{ scale: 0.98 }} // 🌟 Thêm hiệu ứng nhấn mượt mà 🌟
                                >
                                    <div className="flex items-center gap-4">
                                        {/* Icon Tarot */}
                                        <span className="text-pink-400 text-3xl drop-shadow-lg animate-pulse-slow">
                                            {item.symbol}
                                        </span>
                                        {/* Tarot Name */}
                                        <span className="text-sm font-light text-cyan-400 uppercase tracking-widest hidden sm:inline-block">
                                            ({item.tarotName})
                                        </span>
                                        {/* Question Text */}
                                        <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-pink-400 transition-colors duration-300">
                                            {item.question}
                                        </h3>
                                    </div>
                                    {/* Chevron/Mũi tên xoay */}
                                    <motion.div
                                        animate={{
                                            rotate: openIndex === index ? 180 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="text-cyan-400 text-xl font-bold drop-shadow-lg"
                                    >
                                        ▼
                                    </motion.div>
                                </motion.button>

                                {/* Answer Content with AnimatePresence */}
                                <AnimatePresence initial={false}>
                                    {openIndex === index && (
                                        <motion.div
                                            variants={expandVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            className="overflow-hidden relative origin-top" // origin-top quan trọng cho scaleY
                                        >
                                            {/* Line separator */}
                                            <div className="w-[90%] mx-auto h-[1px] bg-purple-700/50"></div>

                                            <div className="px-6 md:px-8 pb-6 md:pb-8 pt-6 relative">
                                                {/* Hiệu ứng Shine (Ánh sáng lướt qua) - Màu Holo */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-300/10 to-transparent animate-shine pointer-events-none opacity-50"></div>

                                                <p className="text-gray-300 leading-relaxed text-base md:text-lg relative z-10
                                                            before:content-['~'] before:absolute before:left-[-1.5rem] before:text-pink-400 before:text-2xl before:-top-1 before:animate-pulse">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CSS Cho hiệu ứng Holo, Shine và Animation */}
            <style jsx global>{`
                /* Hiệu ứng Shine (Giữ nguyên, đổi màu via) */
                @keyframes shine {
                    0% { transform: translateX(-100%); }
                    60% { transform: translateX(100%); }
                    100% { transform: translateX(100%); }
                }
                .animate-shine {
                    animation: shine 3s infinite ease-in-out;
                }
                /* Hiệu ứng Pulse (Giữ nguyên) */
                @keyframes pulse-slow {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 3s infinite;
                }

                /* 🌟 HIỆU ỨNG HOLO VIỀN (Optional: nếu muốn viền glow liên tục) 🌟 */
                @keyframes holoborder {
                    0% { border-color: #f472b6; } /* pink-400 */
                    33% { border-color: #a78bfa; } /* violet-400 */
                    66% { border-color: #22d3ee; } /* cyan-400 */
                    100% { border-color: #f472b6; }
                }
                /* Dùng border hover thay vì animate-holoborder liên tục để tránh giật lag*/

                /* Font serif cho tiêu đề chính */
                .font-serif {
                    font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
                }
            `}</style>
        </section>
    );
};

export default FAQ;