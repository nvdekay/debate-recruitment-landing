import React from "react";
import { motion } from "framer-motion";
import {
    FaFacebook,
    FaGlobe,
    FaInstagram,
    FaMapMarkerAlt,
    FaUserTie,
    FaStar,
    FaMagic,
    FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
    const socialLinks = [
        { icon: <FaFacebook />, label: "Facebook", href: "#" },
        { icon: <FaGlobe />, label: "Website", href: "#" },
        { icon: <FaInstagram />, label: "Social", href: "#" },
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.15,
                ease: "easeOut",
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <footer className="w-full text-white border-t border-gray-700 py-12 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
            {/* ✨ Background Animated Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-3xl"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            color: i % 2 === 0 ? 'rgba(168,85,247,0.3)' : 'rgba(236,72,153,0.3)',
                        }}
                        animate={{
                            y: [0, -10, 0],
                            opacity: [0.1, 0.4, 0.1],
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 12 + Math.random() * 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 4,
                        }}
                    >
                        {i % 2 === 0 ? <FaStar /> : <FaMagic />}
                    </motion.div>
                ))}
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-6xl mx-auto px-6 relative z-10"
            >
                {/* ===== Top Content ===== */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                    {/* 🎯 Logo + Social */}
                    <motion.div variants={itemVariants} className="flex flex-col items-center lg:items-start">
                        <motion.h3
                            className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent mb-4 font-display"
                            whileHover={{
                                scale: 1.05,
                                rotate: [0, -4, 4, 0],
                                transition: { duration: 0.6 },
                            }}
                        >
                            Debate Championship
                        </motion.h3>

                        <motion.p
                            className="text-gray-400 text-sm text-center lg:text-left italic font-body mb-4"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                            "Nơi định mệnh được khám phá qua nghệ thuật tranh biện"
                        </motion.p>

                        <div className="flex gap-4">
                            {socialLinks.map((link, idx) => (
                                <motion.a
                                    key={idx}
                                    href={link.href}
                                    className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-lg"
                                    whileHover={{
                                        scale: 1.15,
                                        rotate: 360,
                                        boxShadow: "0 0 15px rgba(168,85,247,0.6)",
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    {link.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* 📍 Contact Info */}
                    <motion.div variants={itemVariants} className="flex flex-col gap-4 text-center lg:text-left">
                        <h4 className="text-xl font-bold text-purple-400 mb-2 font-display">Thông Tin Liên Hệ</h4>

                        <motion.div
                            className="flex items-start gap-3 justify-center lg:justify-start"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <FaMapMarkerAlt className="text-2xl text-purple-400 flex-shrink-0" />
                            <a
                                href="https://goo.gl/maps/AYC7XBBsCnfwXKQj9"
                                target="_blank"
                                rel="noreferrer"
                                className="text-sm text-gray-300 hover:text-purple-400 transition-colors font-body"
                            >
                                Đại học FPT, Khu Công nghệ cao Hòa Lạc,<br />
                                KM 29 Đại lộ Thăng Long, Hà Nội, Việt Nam
                            </a>
                        </motion.div>

                        <motion.div
                            className="flex items-center gap-3 justify-center lg:justify-start"
                            whileHover={{ x: 5 }}
                        >
                            <FaEnvelope className="text-2xl text-pink-400" />
                            <a
                                href="mailto:debate.fpt@gmail.com"
                                className="text-sm text-gray-300 hover:text-pink-400 transition-colors font-body"
                            >
                                debate.fpt@gmail.com
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* 👤 Organizer */}
                    <motion.div variants={itemVariants} className="flex flex-col gap-4 text-center lg:text-left">
                        <h4 className="text-xl font-bold text-pink-400 mb-2 font-display">Ban Tổ Chức</h4>

                        <motion.div
                            className="flex items-start gap-3 justify-center lg:justify-start"
                            whileHover={{ x: 5 }}
                        >
                            <FaUserTie className="text-2xl text-pink-400" />
                            <div className="text-sm text-gray-300 font-body">
                                <p className="font-semibold text-white mb-1">Trưởng BTC:</p>
                                <p className="text-purple-400">Nguyễn Văn Hiệp</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex items-center gap-3 justify-center lg:justify-start"
                            whileHover={{ x: 5 }}
                        >
                            <FaEnvelope className="text-2xl text-purple-400" />
                            <a
                                href="mailto:nguyenvanhiep17082004@gmail.com"
                                className="text-sm text-gray-300 hover:text-pink-400 transition-colors font-body"
                            >
                                nguyenvanhiep17082004@gmail.com
                            </a>
                        </motion.div>
                    </motion.div>
                </div>

                {/* ===== Divider ===== */}
                <motion.div
                    className="w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-6"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                />

                {/* ===== Bottom Row ===== */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400 font-body"
                >
                    <motion.p
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        © 2026 Debate Championship. All rights reserved.
                    </motion.p>
                    <motion.a
                        href="https://khanhnvd.site/"
                        target="_blank"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        Designed and Developed by <span className="text-purple-400 font-semibold">Nguyen Vu Dang Khanh</span>
                    </motion.a>
                </motion.div>
            </motion.div>
        </footer>
    );
};

export default Footer;
