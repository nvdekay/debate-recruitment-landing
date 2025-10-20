import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import {
  FaHatWizard,
  FaInfinity,
  FaRegStar,
  FaFeatherPointed,
  FaBookOpen,
} from "react-icons/fa6";

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
      symbol: <FaHatWizard />,
      tarotName: "THE FOOL",
    },
    {
      question: "Thể thức thi đấu như thế nào?",
      answer:
        "Cuộc thi gồm 3 vòng chính: Vòng đơn (20/10 - 1/11) với bài thi trực tuyến, Vòng phỏng vấn (3/11 - 6/11) đánh giá kỹ năng tranh luận trực tiếp, và Chung kết với các đội xuất sắc nhất tranh tài tại sự kiện lớn.",
      symbol: <FaInfinity />,
      tarotName: "WHEEL OF FORTUNE",
    },
    {
      question: "Giải thưởng và quyền lợi khi tham gia?",
      answer:
        "Ngoài các giải thưởng giá trị lên đến hàng chục triệu đồng, người tham gia còn có cơ hội kết nối với các chuyên gia, nhận chứng chỉ tham gia, và mở rộng mạng lưới quan hệ trong cộng đồng tranh luận học thuật.",
      symbol: <FaRegStar />,
      tarotName: "THE STAR",
    },
    {
      question: "Làm thế nào để đăng ký tham gia?",
      answer:
        "Bạn có thể đăng ký trực tuyến thông qua website chính thức hoặc liên hệ qua email debate.fpt@gmail.com. Hạn chót nộp hồ sơ là 1/11/2025. Hồ sơ bao gồm thông tin cá nhân, CV và một bài essay ngắn về chủ đề được chỉ định.",
      symbol: <FaFeatherPointed />,
      tarotName: "THE MAGICIAN",
    },
    {
      question: "Cần chuẩn bị gì để tham gia hiệu quả?",
      answer:
        "Bạn nên rèn luyện kỹ năng diễn đạt, tìm hiểu về các chủ đề xã hội thời sự, và luyện tập tư duy phản biện. Chúng tôi cũng sẽ cung cấp tài liệu hướng dẫn và tổ chức các buổi workshop chuẩn bị cho thí sinh.",
      symbol: <FaBookOpen />,
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

  const expandVariants = {
    hidden: { height: 0, opacity: 0, scaleY: 0.8 },
    visible: {
      height: "auto",
      opacity: 1,
      scaleY: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
        duration: 0.6,
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      scaleY: 0.8,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <section
      ref={elementRef}
      className="py-32 sm:py-40 relative overflow-hidden"
    >
      <div className="container relative mx-auto px-4 z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl pt-2.5 md:text-6xl font-extrabold mb-4 font-unbounded tracking-wider bg-gradient-to-r from-red-200 via-white to-gray-200 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,80,80,0.5)]">
            GIẢI MÃ LÁ BÀI TAROT
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300/90 max-w-xl mx-auto italic font-gilroy px-2 sm:px-4">
            Mỗi lá bài ẩn chứa một thông điệp định mệnh về Debate Championship
            2026...
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group"
              whileHover={{
                scale: 1.02,
                zIndex: 10,
                boxShadow: "0 0 40px rgba(255, 60, 60, 0.3)",
              }}
            >
              <div
                className="bg-zinc-900/90 rounded-2xl overflow-hidden backdrop-blur-md shadow-xl 
                           border border-gray-700 hover:border-red-600 transition-all duration-500"
              >
                <motion.button
                  onClick={() => toggleAccordion(index)}
                  className="cursor-pointer w-full px-6 py-5 md:px-8 flex items-center justify-between text-left 
                             transition-all duration-500 group-hover:bg-red-900/20"
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
                    <span className="text-red-500 text-3xl drop-shadow-lg animate-pulse-slow">
                      {item.symbol}
                    </span>
                    <span className="text-sm font-light text-gray-400 uppercase tracking-widest hidden sm:inline-block">
                      ({item.tarotName})
                    </span>
                    <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-red-400 transition-colors duration-300">
                      {item.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{
                      rotate: openIndex === index ? 180 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-300 text-xl font-bold drop-shadow-lg"
                  >
                    ▼
                  </motion.div>
                </motion.button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      variants={expandVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="overflow-hidden relative origin-top"
                    >
                      <div className="w-[90%] mx-auto h-[1px] bg-gradient-to-r from-gray-700 via-red-700 to-gray-700"></div>
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pt-6 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-300/10 to-transparent animate-shine pointer-events-none opacity-40"></div>
                        <p
                          className="text-gray-300 leading-relaxed text-base md:text-lg relative z-10
                                     before:content-['~'] before:absolute before:left-[-1.5rem] before:text-red-400 before:text-2xl before:-top-1 before:animate-pulse"
                        >
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

      <style jsx global>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          60% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shine {
          animation: shine 4s infinite ease-in-out;
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
      `}</style>
    </section>
  );
};

export default FAQ;
