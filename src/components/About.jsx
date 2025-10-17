import React from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactTyped } from "react-typed";
import {
  faHatWizard,
  faStarOfLife,
  faEye,
  faHandHoldingHeart,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const typedRef = React.useRef(null);
  // useIntersectionObserver Hook
  const [elementRef, isVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  // ✨ Fade + Up + Scale animation cho toàn vùng
  const fadeUp = {
    hidden: { opacity: 0, y: 200, scale: 0.4 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 2.5,
        ease: "easeOut",
      },
    },
  };

  // ✨ Fade + Up + Grow cho từng ô
  const itemVariants = {
    hidden: { opacity: 0, y: 200, scale: 0.4 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay,
        duration: 3,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section ref={elementRef} className="text-gray-100 overflow-hidden">
      {/* Hiệu ứng nền nhẹ */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-800 to-indigo-900 rounded-full mix-blend-lighten filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-pink-800 to-red-900 rounded-full mix-blend-lighten filter blur-3xl animation-delay-2000 animate-blob"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        {/* 🌠 Title */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mb-16 md:mb-20"
        >
          <h2
            className="text-4xl pt-2 pb-1.5 md:text-6xl font-extrabold mb-4 font-unbounded 
                       tracking-wider bg-gradient-to-r 
                       from-yellow-200 via-amber-400 to-orange-600 
                       bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,200,0,0.5)] min-h-[25px]"
          >
            GIỚI THIỆU
          </h2>

          <p className="text-lg md:text-xl text-yellow-100/80 max-w-2xl mx-auto italic font-gilroy">
            <span
              style={{
                display: "inline-block",
                minHeight: "1.5em",
                verticalAlign: "top",
              }}
            >
              <ReactTyped
                ref={typedRef}
                strings={[
                  "Cùng khám phá cuộc thi tranh biện đỉnh cao năm 2026 là gì nhé...!",
                ]}
                typeSpeed={50}
                backSpeed={30}
                backDelay={2000}
                showCursor={false}
                loop
                smartBackspace
                onLastStringBackspaced={() => {
                  const instance = typedRef.current?.typed;
                  if (instance) {
                    if (instance.el.textContent.length <= 1) {
                      instance.stop();
                      setTimeout(() => instance.reset(), 800);
                    }
                  }
                }}
              />
            </span>
          </p>
        </motion.div>

        {/* About Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <div className="relative bg-gradient-to-br from-yellow-900/6 via-black/90 to-yellow-800/10 rounded-2xl md:p-12 mb-16 shadow-2xl shadow-black/60 backdrop-blur-sm transition-all duration-400 hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)] ring-1 ring-yellow-400/15 overflow-hidden">
            {/* Tarot corner icons */}
            <div className="absolute top-0 left-0 w-full flex justify-between p-4 z-20">
              <img
                src="../img/king.png"
                alt="king"
                className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-lg transform -rotate-12 hover:rotate-0 transition-transform duration-300"
              />
              <h3 className="text-2xl md:text-[44px] font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 bg-clip-text text-transparent mt-4 font-unbounded drop-shadow-[0_0_15px_rgba(255,200,0,0.4)] self-center">
                FPTU Debate Championship 2026...?
              </h3>
              <img
                src="../img/queen.png"
                alt="queen"
                className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300"
              />
            </div>

            {/* Content container with padding to avoid overlap */}
            <div className="mt-16 md:mt-20">
              <div className="absolute -right-8 -top-8 w-64 h-64 rounded-full bg-gradient-to-br from-yellow-400/8 to-black/0 blur-3xl pointer-events-none" />

              <p className="text-xl text-yellow-100/90 leading-relaxed mb-6 font-gilroy font-light">
                FPTU Debate Championship 2026 là cuộc thi tranh biện và diễn
                thuyết chuyên nghiệp dành riêng cho sinh viên Đại học FPT, nhằm
                mang đến một sân chơi học thuật bổ ích và đầy thử thách. Sự kiện
                không chỉ giúp sinh viên có cơ hội cọ xát, rèn luyện tư duy phản
                biện và khả năng diễn thuyết trước đám đông, mà còn là dịp để
                học hỏi, giao lưu cùng các diễn giả và chuyên gia có chuyên môn
                trong lĩnh vực tranh biện. Thông qua cuộc thi, ban tổ chức mong
                muốn nuôi dưỡng niềm đam mê hùng biện, khuyến khích tinh thần tự
                tin, sáng tạo và làm chủ ngôn từ trong thế hệ sinh viên FPT. Kết
                thúc hành trình, chương trình sẽ vinh danh Top 4 đội thi xuất
                sắc nhất gồm Quán quân, Á quân, Quý quân và Khuyến khích, cùng
                hai giải đặc biệt dành cho Đội thi được yêu thích nhất và Đội
                thi có tinh thần đồng đội tốt nhất, hứa hẹn mang đến một mùa
                tranh biện đầy cảm xúc và bứt phá.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
