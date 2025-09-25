import React from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const About = () => {
    const [elementRef, isVisible] = useIntersectionObserver({
        threshold: 0.1,
    });

    // Variants cho animation
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section ref={elementRef} className="py-80 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                {/* Title */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                        Giới thiệu
                    </h2>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {/* About section */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="bg-gradient-to-br from-red-950/20 to-black border border-red-500/20 rounded-2xl p-8 md:p-12 mb-8 hover:border-red-500/40 transition-all duration-300">
                            <h3 className="text-2xl md:text-3xl font-bold text-red-400 mb-6">
                                What is Debate Championship 2026?
                            </h3>
                            <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                The Debate Championship 2026 is the premier intellectual competition bringing together the brightest minds
                                from universities across the nation. This prestigious tournament showcases exceptional oratory skills,
                                critical thinking, and the art of persuasive argumentation.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Our championship creates a platform where ideas clash, minds sharpen, and future leaders emerge.
                                Join us in organizing this landmark event that will define the standards of academic debate excellence.
                            </p>
                        </div>
                    </motion.div>

                    {/* Features */}
                    {/* <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Elite Competition",
                                description: "Featuring top debaters from premier universities",
                                symbol: "♠",
                                delay: 0.4,
                            },
                            {
                                title: "Professional Standards",
                                description: "International-level judging and tournament format",
                                symbol: "♥",
                                delay: 0.6,
                            },
                            {
                                title: "Prestige & Recognition",
                                description: "Winners gain national recognition and opportunities",
                                symbol: "♦",
                                delay: 0.8,
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                initial="hidden"
                                animate={isVisible ? "visible" : "hidden"}
                                transition={{ duration: 0.8, delay: item.delay }}
                            >
                                <div className="bg-gradient-to-br from-black to-red-950/20 border border-red-500/20 rounded-xl p-6 text-center hover:border-red-500/40 transition-all duration-300 hover:scale-105">
                                    <div className="text-red-500 text-5xl mb-4">{item.symbol}</div>
                                    <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                                    <p className="text-gray-300">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default About;
