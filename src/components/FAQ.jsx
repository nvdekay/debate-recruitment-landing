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
      question: "Ai có thể tham gia Ban Tổ Chức FPTU Debate Championship 2026?",
      answer:
        "Nếu bạn đang phân vân “liệu mình có hợp không?”, câu trả lời là: có! Giống như The Fool, bạn chỉ cần can đảm bước bước đầu tiên để bắt đầu hành trình mới. BTC FPTU Debate Championship 2026 chào đón mọi sinh viên Đại học FPT Hà Nội và các trường ĐH lân cận – những người muốn học hỏi, thử sức và cùng nhau tạo nên một sự kiện tranh biện chuyên nghiệp, sáng tạo và đậm chất FPT. Không cần kinh nghiệm – chỉ cần tinh thần sẵn sàng và khát khao trải nghiệm.",
      symbol: <FaHatWizard />,
      tarotName: "THE FOOL",
    },
    {
      question: "Quá trình tuyển chọn diễn ra như thế nào?",
      answer:
        "Hành trình trở thành thành viên BTC gồm 2 vòng tuyển chọn: Vòng Đơn (20/10 – 1/11): Điền form ứng tuyển, giới thiệu bản thân và vị trí mong muốn. Vòng Phỏng vấn (3/11 – 6/11): Gặp gỡ trực tiếp đội ngũ Core và bước vào “cửa ải” cuối cùng để khám phá xem “định mệnh” có gọi tên bạn hay không. Kết quả chính thức sẽ công bố ngày 8/11.",
      symbol: <FaInfinity />,
      tarotName: "WHEEL OF FORTUNE",
    },
    {
      question: "Quyền lợi và giá trị bạn nhận được là gì?",
      answer:
        "The Star tượng trưng cho sự tỏa sáng sau hành trình nỗ lực. Trở thành thành viên BTC, bạn sẽ nhận được: Chứng nhận và ghi nhận thành tích từ FPT Debate Championship, CLB Monstage - MC & Thuyết Trình và Phòng Hợp tác Quốc tế & Phát triển Cá nhân ICPDP FPTU. Trải nghiệm vận hành một sự kiện quy mô lớn từ khâu sáng tạo đến tổ chức. Cơ hội làm việc cùng giảng viên, khách mời và influencer trong lĩnh vực diễn thuyết, truyền thông, tổ chức sự kiện. Kết nối bạn bè, mở rộng network và phát triển kỹ năng mềm: teamwork, communication, leadership,...",
      symbol: <FaRegStar />,
      tarotName: "THE STAR",
    },
    {
      question: "Làm thế nào để đăng ký trở thành thành viên BTC?",
      answer:
        "The Magician là người biến ý tưởng thành hành động. Đừng chỉ nghĩ “mình muốn thử” — hãy bắt đầu ngay! Truy cập fanpage chính thức của FPTU Debate Championship/ hoặc nhấn vào “Apply Now”  -> Nhấn vào đường link mở đơn tuyển BTC -> Điền thông tin và chọn ban bạn muốn gia nhập (Truyền thông, Nội dung, Hậu cần, Takecare, Design,...) -> Đừng quên mở thông báo gmail để nhận thông tin bạn nhé! Chỉ cần một cú click – bạn đã mở ra hành trình để phép màu bắt đầu.",
      symbol: <FaFeatherPointed />,
      tarotName: "THE MAGICIAN",
    },
    {
      question: "Cần chuẩn bị gì trước khi ứng tuyển?",
      answer:
        "Trước khi bước vào hành trình mới, hãy như The Hermit – chiêm nghiệm, tìm hiểu và sẵn sàng. Hãy suy nghĩ: bạn thật sự muốn học hỏi điều gì khi tham gia BTC? Tìm hiểu về sự kiện Debate Championship và vai trò từng ban để chọn vị trí phù hợp. Chuẩn bị tinh thần cởi mở, chủ động – vì ở đây, bạn sẽ làm việc, tranh luận, sáng tạo và trưởng thành cùng đồng đội. Hãy đến với tinh thần cầu thị – BTC không cần người giỏi nhất, mà cần người sẵn sàng nhất.",
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
