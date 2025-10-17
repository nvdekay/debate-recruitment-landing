import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
// Import các biểu tượng phù hợp với chủ đề Tarot
import { GiCrystalBall, GiCrossedSwords, GiGems, GiAura } from 'react-icons/gi';
// Giúp tạo cảm giác huyền bí. (Bạn cần cài đặt react-icons: npm install react-icons)

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // useIntersectionObserver Hook
    const [elementRef, isVisible] = useIntersectionObserver({
        threshold: 0.1,
    });

    // Thay đổi ngày mục tiêu cho khớp với thời điểm hiện tại của bạn
    // (VD: 2026-10-20 là ngày bắt đầu sự kiện trong component Begin)
    useEffect(() => {
        // Sử dụng ngày kết thúc là 01.11.2025 theo component Begin
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

    // Cập nhật các đơn vị thời gian với biểu tượng Tarot
    const timeUnits = [
        { label: "Ngày", value: timeLeft.days, symbol: <GiCrossedSwords className="text-purple-400" /> },
        { label: "Giờ", value: timeLeft.hours, symbol: <GiAura className="text-red-400" /> },
        { label: "Phút", value: timeLeft.minutes, symbol: <GiCrystalBall className="text-yellow-400" /> },
        { label: "Giây", value: timeLeft.seconds, symbol: <GiGems className="text-green-400" /> },
    ];


    // Framer Motion variants
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };

    const TimeSegment = ({ label, value, symbol, index }) => {
        // Dùng `AnimatePresence` để tạo hiệu ứng chuyển đổi khi `value` thay đổi
        return (
            <motion.div
                variants={fadeUp}
                animate={isVisible ? "visible" : "hidden"}
                className="p-1" // Giảm padding chung
            >
                <div className="bg-gradient-to-br from-gray-900 to-purple-950 p-6 rounded-2xl border border-purple-500/20 hover:border-red-500/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 backdrop-blur-sm">
                    <div className="text-center">
                        {/* Symbol */}
                        <div className="text-4xl md:text-5xl mb-2 mx-auto w-fit">
                            {symbol}
                        </div>

                        {/* Animated Value */}
                        <div className="text-5xl md:text-6xl font-extrabold text-white mb-2 font-mono relative h-16 overflow-hidden flex justify-center items-center">
                            <motion.span
                                key={value}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="absolute"
                            >
                                {value.toString().padStart(2, "0")}
                            </motion.span>
                        </div>

                        {/* Label */}
                        <div className="text-purple-300 text-lg font-semibold tracking-wider">
                            {label}
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    };

    return (
        <section
            ref={elementRef}
            className="py-60"
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
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-4 font-unbounded drop-shadow-lg tracking-wider 
                                   bg-gradient-to-r from-yellow-300 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        COUNTDOWN
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto italic font-gilroy">
                        Thời gian đang dần trôi qua... 
                    </p>
                </motion.div>

                {/* Countdown grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    {timeUnits.map((unit, index) => (
                        <TimeSegment
                            key={unit.label}
                            label={unit.label}
                            value={unit.value}
                            symbol={unit.symbol}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Countdown;