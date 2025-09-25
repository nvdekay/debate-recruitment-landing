import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const [elementRef, isVisible] = useIntersectionObserver({
        threshold: 0.1,
    });

    useEffect(() => {
        const targetDate = new Date("2025-11-01T23:59:59");

        const updateCountdown = () => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                    (difference % (1000 * 60 * 60)) / (1000 * 60)
                );
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, []);

    const timeUnits = [
        { label: "Ngày", value: timeLeft.days, symbol: "♠" },
        { label: "Giờ", value: timeLeft.hours, symbol: "♥" },
        { label: "Phút", value: timeLeft.minutes, symbol: "♦" },
        { label: "Giây", value: timeLeft.seconds, symbol: "♣" },
    ];

    // Framer Motion variants
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
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                        Application Deadline
                    </h2>
                    <p className="text-xl text-gray-300">Time remaining to apply</p>
                </motion.div>

                {/* Countdown grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {timeUnits.map((unit, index) => (
                        <motion.div
                            key={unit.label}
                            variants={fadeUp}
                            initial="hidden"
                            animate={isVisible ? "visible" : "hidden"}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <div className="bg-gradient-to-br from-black to-red-950 p-6 rounded-2xl border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10">
                                <div className="text-center">
                                    <div className="text-red-500 text-4xl mb-2">
                                        {unit.symbol}
                                    </div>
                                    <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-mono">
                                        {unit.value.toString().padStart(2, "0")}
                                    </div>
                                    <div className="text-gray-300 text-lg font-semibold">
                                        {unit.label}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Countdown;
