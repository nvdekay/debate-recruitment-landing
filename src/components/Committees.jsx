import React, { useState } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const Committees = () => {
    const [flippedCard, setFlippedCard] = useState(null);
    const [elementRef, isVisible] = useIntersectionObserver({
        threshold: 0.1,
    });

    const committees = [
        {
            name: "Nội dung",
            nameEn: "Content",
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
            name: "Truyền thông",
            nameEn: "Media",
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
            name: "Hậu cần",
            nameEn: "Logistics",
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
            nameEn: "Takecare",
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
            nameEn: "External Affairs",
            symbol: "♠",
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
            name: "Design",
            nameEn: "Design",
            symbol: "♥",
            description:
                "Design and create visually appealing branding materials for the championship",
            responsibilities: ["Brand Identity", "Graphic Design", "Web Design"],
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
            className="py-20"
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
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white font-sans">
                        Giới thiệu các ban
                    </h2>
                </motion.div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {committees.map((committee, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            initial="hidden"
                            animate={isVisible ? "visible" : "hidden"}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <div
                                className="relative h-80 cursor-pointer perspective-1000"
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
                                            <h4 className="text-lg text-red-300 mb-4">
                                                {committee.nameEn}
                                            </h4>
                                            <p className="text-gray-300 text-sm leading-relaxed">
                                                {committee.description}
                                            </p>
                                            <div className="absolute bottom-4 text-red-400 text-sm font-semibold animate-pulse">
                                                Click to flip
                                            </div>
                                        </div>
                                    </div>

                                    {/* Back */}
                                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br from-red-950 to-black border-2 border-red-500/60">
                                        <div className="flex flex-col justify-center h-full p-6">
                                            <h3 className="text-xl font-bold text-white mb-4 text-center">
                                                {committee.nameEn} Responsibilities
                                            </h3>
                                            <ul className="space-y-3">
                                                {committee.responsibilities.map((responsibility, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-center text-gray-300"
                                                    >
                                                        <span className="text-red-500 text-lg mr-3">•</span>
                                                        {responsibility}
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-red-400 text-sm font-semibold animate-pulse">
                                                Click to flip back
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Button */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-center mt-16"
                >
                    <button className="group relative px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xl rounded-lg transition-all duration-300 hover:from-red-700 hover:to-red-800 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
                        <span className="relative z-10">Apply for Committee</span>
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                    </button>
                </motion.div>
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
