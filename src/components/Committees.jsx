import React, { useState } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { ReactTyped } from "react-typed";

const Committees = () => {
    const [flippedCard, setFlippedCard] = useState(null);
    const [elementRef, isVisible] = useIntersectionObserver({
        threshold: 0.1,
    });

    const committees = [
        {
            name: "Nội dung",
            symbol: "♠",
            description:
                "Develop debate topics, rules, and educational materials for the championship",
            responsibilities: [
                "Topic Research",
                "Rule Creation",
                "Quality Control",
                "Educational Content",
            ],
        },
        {
            name: "Hậu cần",
            symbol: "♦",
            description:
                "Handle venue management, equipment, and operational coordination",
            responsibilities: [
                "Venue Setup",
                "Equipment",
                "Coordination",
                "Supply Management",
            ],
        },
        {
            name: "Takecare",
            symbol: "♣",
            description:
                "Ensure participant welfare, hospitality, and overall experience",
            responsibilities: [
                "Hospitality",
                "Participant Support",
                "Catering",
                "Accommodation",
            ],
        },
        {
            name: "Đối ngoại",
            symbol: "♥",
            description:
                "Manage partnerships, sponsorships, and external relationships",
            responsibilities: [
                "Sponsorships",
                "Partnerships",
                "External Relations",
                "Networking",
            ],
        },
        {
            name: "Truyền thông",
            symbol: "♥",
            description:
                "Manage publicity, social media, and broadcasting of the championship",
            responsibilities: [
                "Social Media",
                "Live Streaming",
                "Photography",
                "Marketing",
            ],
        },
        {
            name: "Design",
            symbol: "♠",
            description:
                "Design and create visually appealing branding materials for the championship",
            responsibilities: ["Brand Identity", "Graphic Design", "Web Design"],
        },
        {
            name: "Media",
            symbol: "♦",
            description:
                "Produce, edit, and manage video & photo content throughout the championship",
            responsibilities: [
                "Video Production",
                "Photo Shooting",
                "Content Editing",
                "Highlight Reels",
            ],
        }
    ];

    const handleCardClick = (index) => {
        setFlippedCard(flippedCard === index ? null : index);
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section
            ref={elementRef}
            className="py-60 overflow-hidden"
        >
            <div className="container mx-auto px-4">
                {/* Title */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 text-red-500 drop-shadow-lg tracking-wider">
                        Giới thiệu các ban
                    </h2>
                    
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto italic">
                        Mảnh ghép tạo nên thành công của Debate Championship 2026
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="max-w-7xl mx-auto space-y-8">
                    {/* Hàng 1: 4 thẻ */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {committees.slice(0, 4).map((committee, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                initial="hidden"
                                animate={isVisible ? "visible" : "hidden"}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="flex justify-center"
                            >
                                <div
                                    className="relative w-72 h-80 cursor-pointer perspective-1000"
                                    onClick={() => handleCardClick(index)}
                                >
                                    <div
                                        className={`relative w-full h-full transition-transform duration-700 preserve-3d ${flippedCard === index ? "rotate-y-180" : ""
                                            }`}
                                    >
                                        {/* Front */}
                                        <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-gradient-to-br from-black to-red-950 border-2 border-red-500/30 hover:border-red-500/60 transition-all duration-300 hover:scale-105">
                                            <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                                                <div className="text-red-500 text-8xl mb-4">
                                                    {committee.symbol}
                                                </div>
                                                <h3 className="text-2xl font-bold text-white mb-2">
                                                    {committee.name}
                                                </h3>
                                                <p className="text-red-400 text-sm leading-relaxed font-bold mt-4">
                                                    <ReactTyped
                                                        strings={[
                                                            "Lật thẻ bài để khám phá điều bí ẩn đằng sau đang chờ bạn..."
                                                        ]}
                                                        typeSpeed={60}
                                                        backSpeed={30}
                                                        loop={false}
                                                        showCursor={false}
                                                    />
                                                </p>
                                            </div>
                                        </div>

                                        {/* Back */}
                                        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br from-red-950 to-black border-2 border-red-500/60">
                                            <div className="flex flex-col justify-center h-full p-6">
                                                <ul className="space-y-3">
                                                    {committee.responsibilities.map((responsibility, idx) => (
                                                        <li key={idx} className="flex items-center text-gray-300">
                                                            <span className="text-red-500 text-lg mr-3">•</span>
                                                            {responsibility}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Hàng 2: 3 thẻ (center + thụt vào) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mt-8">
                        {committees.slice(4).map((committee, index) => {
                            const actualIndex = index + 4;
                            return (
                                <motion.div
                                    key={actualIndex}
                                    variants={fadeUp}
                                    initial="hidden"
                                    animate={isVisible ? "visible" : "hidden"}
                                    transition={{ duration: 0.8, delay: actualIndex * 0.2 }}
                                    className="flex justify-center"
                                >
                                    <div
                                        className="relative w-72 h-80 cursor-pointer perspective-1000"
                                        onClick={() => handleCardClick(actualIndex)}
                                    >
                                        <div
                                            className={`relative w-full h-full transition-transform duration-700 preserve-3d ${flippedCard === actualIndex ? "rotate-y-180" : ""
                                                }`}
                                        >
                                            {/* Front */}
                                            <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-gradient-to-br from-black to-red-950 border-2 border-red-500/30 hover:border-red-500/60 transition-all duration-300 hover:scale-105">
                                                <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                                                    <div className="text-red-500 text-8xl mb-4">
                                                        {committee.symbol}
                                                    </div>
                                                    <h3 className="text-2xl font-bold text-white mb-2">
                                                        {committee.name}
                                                    </h3>
                                                    <p className="text-red-400 text-sm leading-relaxed font-bold mt-4">
                                                        <ReactTyped
                                                            strings={[
                                                                "Lật thẻ bài để khám phá điều bí ẩn đằng sau đang chờ bạn..."
                                                            ]}
                                                            typeSpeed={50}
                                                            backSpeed={30}
                                                            loop={false}
                                                            showCursor={false}
                                                        />
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Back */}
                                            <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br from-red-950 to-black border-2 border-red-500/60">
                                                <div className="flex flex-col justify-center h-full p-6">
                                                    <ul className="space-y-3">
                                                        {committee.responsibilities.map((responsibility, idx) => (
                                                            <li key={idx} className="flex items-center text-gray-300">
                                                                <span className="text-red-500 text-lg mr-3">•</span>
                                                                {responsibility}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Extra CSS */}
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
