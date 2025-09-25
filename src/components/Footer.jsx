import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaUser } from "react-icons/fa";

const Footer = () => {
    const contactInfo = [
        {
            icon: <FaMapMarkerAlt className="text-red-400 text-2xl" />,
            title: "Địa chỉ",
            content:
                "Đại học FPT, Khu Công nghệ cao Hòa Lạc, KM 29 Đại lộ Thăng Long, Hà Nội, Việt Nam",
            email: "jsclub.fpt@gmail.com",
        },
        {
            icon: <FaUser className="text-red-400 text-2xl" />,
            title: "Chủ nhiệm",
            content: "Nguyễn Quang Huy",
            email: "huynq@jsclub.dev",
        },
        {
            icon: <FaUser className="text-red-400 text-2xl" />,
            title: "Phó chủ nhiệm",
            content: "Phan Trung Dũng",
            email: "dungpt@jsclub.dev",
        },
    ];

    return (
        <footer className="py-12">
            <div className="container mx-auto px-6">
                <motion.div
                    className="grid md:grid-cols-3 gap-10 text-center md:text-left"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {contactInfo.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="flex flex-col items-center md:items-start gap-3"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3">
                                {item.icon}
                                <h3 className="text-white font-semibold">{item.title}:</h3>
                            </div>
                            <p className="text-gray-300 font-medium">{item.content}</p>
                            {item.email && (
                                <div className="flex items-center gap-2 text-gray-300">
                                    <FaEnvelope className="text-red-400" />
                                    <span className="font-medium">{item.email}</span>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Copyright */}
                <motion.div
                    className="border-t border-red-500/20 mt-10 pt-6 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className="text-gray-400 text-sm">
                        © 2024 JS Club. All rights reserved.
                    </p>
                    <p className="text-red-400 text-sm mt-1">
                        "Where Ideas Collide, Leaders Emerge"
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
