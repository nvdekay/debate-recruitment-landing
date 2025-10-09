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
                duration: 3.5,
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
                duration: 3.5,
                ease: "easeOut",
            },
        }),
    };

    return (
        <section
            ref={elementRef}
            className="py-80 md:py-32 lg:py-40 text-gray-100 overflow-hidden"
        >
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
                    <h2 className="min-h-[1.5em] text-4xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-yellow-300 via-purple-400 to-red-400 bg-clip-text text-transparent drop-shadow-lg tracking-tighter">
                        Giới thiệu
                    </h2>

                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto italic font-light">
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

                {/* 🌙 About Card */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                >
                    <div className="bg-gradient-to-br from-purple-900/30 to-black/50 rounded-2xl p-8 md:p-12 mb-16 shadow-xl backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                        <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-300 to-purple-300 bg-clip-text text-transparent mb-6 font-serif">
                            Debate Championship 2026...?
                        </h3>
                        <p className="text-lg text-gray-300 leading-relaxed mb-6 font-light">
                            Cuộc thi Debate Championship 2026 là sân chơi tranh biện học thuật quy mô toàn quốc, nơi những bộ óc trẻ trung, sắc bén cùng nhau đối thoại, phản biện và bảo vệ quan điểm một cách logic, thuyết phục và sáng tạo. Với chủ đề mang tính thời sự và nhân văn, cuộc thi không chỉ là nơi thể hiện khả năng lập luận và tư duy phản biện, mà còn là hành trình khám phá tri thức, rèn luyện kỹ năng giao tiếp, tư duy chiến lược và tinh thần làm việc nhóm. Debate Championship 2026 hướng đến mục tiêu xây dựng một thế hệ người trẻ tự tin, bản lĩnh và biết lắng nghe — những người có thể tạo nên ảnh hưởng tích cực cho cộng đồng và xã hội.
                        </p>
                    </div>
                </motion.div>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            title: "Cosmic Insight",
                            description: "Mỗi vòng tranh biện là một hành trình mở rộng nhận thức, nơi người tham gia được thử thách trong tư duy và được truyền cảm hứng để nhìn thế giới bằng một góc độ mới.",
                            icon: faHatWizard,
                        },
                        {
                            title: "Illuminated Minds",
                            description: "Nơi những người trẻ mang trong mình niềm đam mê, lý tưởng và sự đồng cảm cùng nhau chia sẻ, phản biện và học hỏi — để cùng nhau trưởng thành qua từng cuộc tranh luận.",
                            icon: faEye,
                        },
                        {
                            title: "Destiny's Stage",
                            description: "Debate Championship 2026 là không gian để mỗi cá nhân thể hiện sự tự tin, khả năng lập luận và tư duy phản biện, từng bước khẳng định mình như một nhà lãnh đạo của tương lai.",
                            icon: faStarOfLife,
                        },
                        {
                            title: "United Souls",
                            description: "Cuộc thi không chỉ kết nối những người yêu tranh biện, mà còn tạo nên một cộng đồng gắn bó — nơi mọi tiếng nói được tôn trọng, mọi khác biệt được thấu hiểu và mọi ý tưởng đều có giá trị.",
                            icon: faHandHoldingHeart,
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            custom={index * 0.2}
                            variants={itemVariants}
                            initial="hidden"
                            animate={isVisible ? "visible" : "hidden"}
                            className="h-full"
                        >
                            <div className="bg-gradient-to-br from-gray-900/70 to-purple-950/40 rounded-2xl p-6 text-center h-full flex flex-col justify-between shadow-lg backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                                <div className="text-5xl mb-4 text-yellow-300 drop-shadow-[0_0_10px_rgba(253,224,71,0.7)]">
                                    <FontAwesomeIcon icon={item.icon} />
                                </div>
                                <h4 className="text-xl font-bold bg-gradient-to-r from-yellow-300 to-purple-300 bg-clip-text text-transparent mb-3 font-serif">
                                    {item.title}
                                </h4>
                                <p className="text-gray-300 text-base leading-relaxed font-light">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
