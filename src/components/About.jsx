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
  const [elementRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const fadeUp = {
    hidden: { opacity: 0, y: 200, scale: 0.4 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 2.5, ease: "easeOut" },
    },
  };

  return (
    <section ref={elementRef} className="py-32 sm:py-40 md:py-60 relative z-10">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute -top-1/4 -left-1/4 w-3/4 sm:w-1/2 h-3/4 sm:h-1/2 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full mix-blend-lighten filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-3/4 sm:w-1/2 h-3/4 sm:h-1/2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full mix-blend-lighten filter blur-3xl animation-delay-2000 animate-blob"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 z-10 relative">
        {/* Title */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mb-10 sm:mb-14 md:mb-20"
        >
          <h2 className="text-3xl pt-1.5 pb-[8px] sm:text-4xl md:text-6xl font-extrabold mb-4 font-unbounded tracking-wider bg-gradient-to-r from-red-200 via-white to-gray-200 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,80,80,0.5)]">
            GIỚI THIỆU
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-300/90 max-w-xl sm:max-w-2xl mx-auto italic font-gilroy">
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
          <div className="relative bg-gradient-to-br from-gray-850 via-gray-900 to-gray-850 rounded-2xl p-6 sm:p-8 md:p-12 mb-10 sm:mb-12 md:mb-16 shadow-2xl shadow-black/80 backdrop-blur-sm transition-all duration-400 hover:shadow-[0_30px_60px_rgba(255,255,255,0.15)] ring-1 ring-gray-500/30 overflow-hidden">
            {/* Tarot corner icons */}
            <div className="absolute top-0 left-0 w-full flex justify-between items-center p-3 sm:p-4 z-20">
              <img
                src="../img/king.png"
                alt="king"
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] filter grayscale hover:grayscale-0 transition-transform duration-300 transform -rotate-12 hover:rotate-0"
              />
              <h3
                className="text-xl sm:text-xl md:text-[44px] font-bold bg-gradient-to-r 
                   from-white via-gray-200 to-gray-400 bg-clip-text text-transparent 
                   mt-2 sm:mt-4 font-unbounded tracking-wide 
                   drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] text-center flex-1"
              >
                FPTU Debate Championship 2026...?
              </h3>
              <img
                src="../img/queen.png"
                alt="queen"
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] filter grayscale hover:grayscale-0 transition-transform duration-300 transform rotate-12 hover:rotate-0"
              />
            </div>

            {/* Content container */}
            <div className="mt-14 sm:mt-16 md:mt-20 relative z-10">
              <div className="absolute -right-4 sm:-right-8 -top-4 sm:-top-8 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-gradient-to-br from-gray-200/10 via-gray-100/5 to-transparent blur-3xl pointer-events-none" />

              <p className="text-base pt-[24px] sm:text-lg md:text-xl text-gray-200/90 leading-relaxed mb-4 sm:mb-6 font-gilroy font-light tracking-wide text-justify sm:text-left px-2">
                FPTU Debate Championship 2026 là cuộc thi tranh biện và diễn
                thuyết chuyên nghiệp dành cho sinh viên trường Đại Học FPT và
                các trường Đại Học lân cận trên địa bàn Hà Nội, nhằm mang đến
                một sân chơi học thuật bổ ích và đầy thử thách. Sự kiện giúp
                sinh viên có cơ hội rèn luyện tư duy phản biện và kỹ năng diễn
                thuyết, đồng thời giao lưu cùng các diễn giả và chuyên gia tranh
                biện. Cuộc thi mong muốn nuôi dưỡng đam mê hùng biện, khuyến
                khích tinh thần sáng tạo và làm chủ ngôn từ. Kết thúc hành
                trình, chương trình sẽ vinh danh Top 4 đội thi xuất sắc nhất gồm
                Quán quân, Á quân, Quý quân và Khuyến khích, cùng hai giải đặc
                biệt dành cho Đội thi được yêu thích nhất và Đội thi có tinh
                thần đồng đội tốt nhất, hứa hẹn mang đến một mùa tranh biện đầy
                cảm xúc và bứt phá.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
