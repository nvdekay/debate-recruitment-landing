import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [elementRef, isVisible] = useIntersectionObserver({
        threshold: 0.1,
    });

    const faqData = [
        {
            question: "Ai có thể tham gia Debate Championship 2026?",
            answer:
                "Cuộc thi mở rộng cho tất cả sinh viên đang học tại các trường đại học, cao đẳng trên toàn quốc. Không yêu cầu kinh nghiệm tranh luận trước đó, chỉ cần có đam mê học hỏi và thể hiện quan điểm của mình một cách thuyết phục.",
            symbol: "♠",
        },
        {
            question: "Thể thức thi đấu như thế nào?",
            answer:
                "Cuộc thi gồm 3 vòng chính: Vòng đơn (20/10 - 1/11) với bài thi trực tuyến, Vòng phỏng vấn (3/11 - 6/11) đánh giá kỹ năng tranh luận trực tiếp, và Chung kết với các đội xuất sắc nhất tranh tài tại sự kiện lớn.",
            symbol: "♥",
        },
        {
            question: "Giải thưởng và quyền lợi khi tham gia?",
            answer:
                "Ngoài các giải thưởng giá trị lên đến hàng chục triệu đồng, người tham gia còn có cơ hội kết nối với các chuyên gia, nhận chứng chỉ tham gia, và mở rộng mạng lưới quan hệ trong cộng đồng tranh luận học thuật.",
            symbol: "♦",
        },
        {
            question: "Làm thế nào để đăng ký tham gia?",
            answer:
                "Bạn có thể đăng ký trực tuyến thông qua website chính thức hoặc liên hệ qua email debate.fpt@gmail.com. Hạn chót nộp hồ sơ là 1/11/2025. Hồ sơ bao gồm thông tin cá nhân, CV và một bài essay ngắn về chủ đề được chỉ định.",
            symbol: "♣",
        },
        {
            question: "Cần chuẩn bị gì để tham gia hiệu quả?",
            answer:
                "Bạn nên rèn luyện kỹ năng diễn đạt, tìm hiểu về các chủ đề xã hội thời sự, và luyện tập tư duy phản biện. Chúng tôi cũng sẽ cung cấp tài liệu hướng dẫn và tổ chức các buổi workshop chuẩn bị cho thí sinh.",
            symbol: "♠",
        },
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    const expandVariants = {
        hidden: { height: 0, opacity: 0 },
        visible: {
            height: "auto",
            opacity: 1,
            transition: { duration: 0.4, ease: "easeInOut" },
        },
        exit: {
            height: 0,
            opacity: 0,
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
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-red-500 drop-shadow-lg tracking-wider">
                        Câu hỏi bí ẩn
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto italic">
                        Giải mã những bí mật của Debate Championship 2026...
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
                        >
                            <div className="bg-gradient-to-br from-black/80 to-red-950/40 border border-red-500/40 rounded-2xl overflow-hidden backdrop-blur-sm shadow-[0_0_25px_rgba(255,0,0,0.2)] group-hover:shadow-[0_0_40px_rgba(255,0,0,0.6)] transition-all duration-500">
                                {/* Question Header */}
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full px-6 py-6 md:px-8 flex items-center justify-between text-left transition-all duration-300 group-hover:bg-red-950/20"
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="text-red-500 text-3xl drop-shadow-lg animate-pulse-slow">
                                            {item.symbol}
                                        </span>
                                        <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-red-400 transition-colors duration-300">
                                            {item.question}
                                        </h3>
                                    </div>
                                    <motion.div
                                        animate={{
                                            rotate: openIndex === index ? 180 : 0,
                                        }}
                                        transition={{ duration: 0.4 }}
                                        className="text-red-400 text-2xl font-bold drop-shadow-lg"
                                    >
                                        ▼
                                    </motion.div>
                                </button>

                                {/* Answer Content */}
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            variants={expandVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            className="overflow-hidden relative"
                                        >
                                            <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                                                <div className="pl-12 md:pl-16 relative">
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent animate-shine pointer-events-none"></div>
                                                    <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                                                        {item.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
