import React, { useState } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { ReactTyped } from "react-typed";

// 🌟 Font Awesome Icons 🌟
import {
    faWandMagicSparkles,   // Nội dung
    faDumbbell,             // Hậu cần
    faHandHoldingHeart,     // Takecare
    faHandshake,            // Đối ngoại
    faStar,                 // Truyền thông
    faPaintBrush,           // Thiết kế
    faCameraRetro,          // Media
    faCoins                 // Tài chính
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Committees = () => {
    const [flippedCard, setFlippedCard] = useState(null);
    const [elementRef, isVisible] = useIntersectionObserver({
        threshold: 0.1,
    });

    // Danh sách các ban với icon Font Awesome
    const committees = [
        {
            name: "NỘI DUNG",
            icon: faWandMagicSparkles,
            description:
                "Ban Nội Dung là linh hồn của giải đấu. Chúng tôi chịu trách nhiệm nghiên cứu sâu rộng, soạn thảo các chủ đề tranh biện phức tạp, thiết lập hệ thống quy tắc công bằng, và cung cấp các tài liệu giáo dục cần thiết. Ban Nội Dung đảm bảo Debate Prophecy không chỉ là một cuộc thi, mà là một hành trình thách thức tư duy đỉnh cao.",
        },
        {
            name: "HẬU CẦN",
            icon: faDumbbell,
            description:
                "Ban Hậu Cần đóng vai trò là người giữ lửa cho sự kiện. Mọi hoạt động từ việc chuẩn bị địa điểm, quản lý thiết bị kỹ thuật, điều phối lịch trình, đến việc đảm bảo mọi nguồn cung cấp đều sẵn sàng đều do chúng tôi phụ trách. Chúng tôi tạo ra một môi trường hoạt động liền mạch và hiệu quả, hỗ trợ tối đa cho các ban khác.",
        },
        {
            name: "TAKE CARE",
            icon: faHandHoldingHeart,
            description:
                "Ban Takecare là sứ giả của sự ấm áp. Nhiệm vụ chính là đảm bảo phúc lợi toàn diện cho tất cả thí sinh và khách mời. Từ dịch vụ khách sạn, sắp xếp chỗ ăn ở, đến việc hỗ trợ tinh thần và giải quyết các vấn đề cá nhân, chúng tôi cam kết mang lại một trải nghiệm thoải mái, chu đáo và đáng nhớ nhất cho mọi người tham gia.",
        },
        {
            name: "ĐỐI NGOẠI",
            icon: faHandshake,
            description:
                "Ban Đối Ngoại là cầu nối vươn xa của giải đấu. Chúng tôi xây dựng và duy trì mối quan hệ chiến lược với các nhà tài trợ, đối tác truyền thông và các tổ chức bên ngoài. Chúng tôi mở rộng mạng lưới ảnh hưởng, đảm bảo nguồn lực dồi dào và nâng cao vị thế của Debate Prophecy trên bản đồ các sự kiện học thuật.",
        },
        {
            name: "TRUYỀN THÔNG",
            icon: faStar,
            description:
                "Ban Truyền Thông là tiếng nói của giải đấu. Chúng tôi quản lý toàn bộ chiến lược quảng bá, nội dung mạng xã hội và các chiến dịch digital. Mục tiêu của chúng tôi là lan tỏa thông điệp của Debate Prophecy, thu hút sự chú ý của công chúng và đảm bảo mọi diễn biến quan trọng của cuộc thi được đưa tin rộng rãi và kịp thời.",
        },
        {
            name: "DESIGN",
            icon: faPaintBrush,
            description:
                "Ban Design là nghệ sĩ thị giác của sự kiện. Chúng tôi chịu trách nhiệm tạo ra tất cả các ấn phẩm truyền thông, nhận diện thương hiệu, và tài liệu quảng cáo. Với sự sáng tạo không giới hạn, chúng tôi biến mọi ý tưởng thành hình ảnh độc đáo, thống nhất và gây ấn tượng mạnh mẽ với công chúng.",
        },
        {
            name: "MEDIA",
            icon: faCameraRetro,
            description:
                "Ban Media là người ghi lại khoảnh khắc lịch sử. Chúng tôi sản xuất, quay phim, chụp ảnh và chỉnh sửa toàn bộ nội dung đa phương tiện trong suốt sự kiện. Từ các video highlight kịch tính đến những bức ảnh chân thực, chúng tôi lưu giữ mọi cảm xúc và cột mốc quan trọng của Debate Prophecy một cách chuyên nghiệp và sắc nét.",
        },
        {
            name: "TÀI CHÍNH",
            icon: faCoins,
            description:
                "Ban Tài Chính là người quản lý nguồn lực của giải đấu. Chúng tôi đảm bảo mọi chi phí được sử dụng hiệu quả, lập kế hoạch ngân sách chi tiết và tối ưu hóa các nguồn thu. Ban Tài Chính là trụ cột giữ cho toàn bộ hành trình hoạt động bền vững và hiệu quả lâu dài.",
        },
    ];

    const handleCardClick = (index) => {
        setFlippedCard(flippedCard === index ? null : index);
    };

    const fadeUpAndReveal = {
        hidden: { opacity: 0, y: 50, rotateY: -30, scale: 0.8 },
        visible: {
            opacity: 1,
            y: 0,
            rotateY: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 15,
                duration: 1,
                ease: "easeOut",
            },
        },
    };

    // 🌟 Mặt trước thẻ
    const CardFront = ({ committee, index }) => (
        <motion.div
            className="absolute inset-0 w-full h-full backface-hidden rounded-2xl 
                       bg-gradient-to-br from-gray-900 to-purple-950 border-2 border-transparent 
                       shadow-lg flex flex-col items-center justify-center p-6 text-center"
            whileHover={{
                borderColor: ['#8b5cf6', '#ec4899', '#fde047', '#8b5cf6'],
                boxShadow: '0 0 25px rgba(168,85,247,0.7)',
            }}
            transition={{
                borderColor: { duration: 1.5, repeat: Infinity, ease: "linear" },
                boxShadow: { duration: 0.5 }
            }}
        >
            <div className="text-yellow-300 text-8xl mb-4 drop-shadow-lg">
                <FontAwesomeIcon icon={committee.icon} />
            </div>
            <h3 className="font-serif text-3xl font-extrabold text-red-400 mb-1 tracking-wide uppercase">
                Ban
            </h3>
            <h3 className="font-serif text-3xl font-extrabold text-white mb-2 tracking-wide uppercase">
                {committee.name}
            </h3>

            <p className="absolute bottom-4 text-xs text-gray-400 font-light">
                Click để xem Sứ Mệnh
            </p>
        </motion.div>
    );

    // 🌟 Mặt sau thẻ
    const CardBack = ({ committee }) => (
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl 
                        bg-gradient-to-br from-purple-950 to-gray-900 border-2 border-red-500/60 
                        shadow-lg flex flex-col justify-center p-6">
            <h4 className="font-serif text-2xl font-bold text-red-400 mb-4 text-center uppercase">
                Sứ Mệnh Của Ban
            </h4>
            <p className="text-gray-300 text-base leading-relaxed font-light text-justify">
                {committee.description}
            </p>
        </div>
    );

    return (
        <section ref={elementRef} className="py-20 lg:py-40 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Title */}
                <motion.div
                    variants={fadeUpAndReveal}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    transition={{ duration: 4 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-4xl md:text-6xl font-extrabold mb-8 
                                   bg-gradient-to-r from-red-400 via-purple-400 to-yellow-300 bg-clip-text text-transparent
                                   drop-shadow-lg tracking-wider">
                        Giới Thiệu Các Ban
                    </h2>

                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto italic font-light">
                        <ReactTyped
                            strings={[
                                "Mỗi lá bài hé lộ một mảnh ghép quyền năng, tạo nên thành công rực rỡ của Debate Championship 2026."
                            ]}
                            typeSpeed={50}
                            backSpeed={30}
                            loop={false}
                            showCursor={false}
                        />
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="max-w-7xl mx-auto space-y-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {committees.slice(0, 4).map((committee, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUpAndReveal}
                                initial="hidden"
                                animate={isVisible ? "visible" : "hidden"}
                                transition={{ delay: index * 0.2, duration: 1 }}
                                className="flex justify-center"
                            >
                                <motion.div
                                    className="relative w-72 h-96 cursor-pointer perspective-1000"
                                    onClick={() => handleCardClick(index)}
                                    whileHover={{ scale: 1.05, y: -8 }}
                                    transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 10 }}
                                >
                                    <div
                                        className={`relative w-full h-full transition-transform duration-800 ease-in-out preserve-3d ${flippedCard === index ? "rotate-y-180" : ""
                                            }`}
                                    >
                                        <CardFront committee={committee} index={index} />
                                        <CardBack committee={committee} />
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center mt-8 px-0">
                        {committees.slice(4).map((committee, index) => {
                            const actualIndex = index + 4;
                            return (
                                <motion.div
                                    key={actualIndex}
                                    variants={fadeUpAndReveal}
                                    initial="hidden"
                                    animate={isVisible ? "visible" : "hidden"}
                                    transition={{ delay: actualIndex * 0.2, duration: 1 }}
                                    className="flex justify-center"
                                >
                                    <motion.div
                                        className="relative w-72 h-96 cursor-pointer perspective-1000"
                                        onClick={() => handleCardClick(actualIndex)}
                                        whileHover={{ scale: 1.05, y: -8 }}
                                        transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 10 }}
                                    >
                                        <div
                                            className={`relative w-full h-full transition-transform duration-800 ease-in-out preserve-3d ${flippedCard === actualIndex ? "rotate-y-180" : ""
                                                }`}
                                        >
                                            <CardFront committee={committee} index={actualIndex} />
                                            <CardBack committee={committee} />
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                .preserve-3d {
                    transform-style: preserve-3d;
                }
                .backface-hidden {
                    backface-visibility: hidden;
                }
                .rotate-y-180 {
                    transform: rotateY(180deg);
                }
            `}</style>
        </section>
    );
};

export default Committees;
