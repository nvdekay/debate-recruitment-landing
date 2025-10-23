import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaGlobe,
  FaPhone,
  FaMapMarkerAlt,
  FaUserTie,
  FaStar,
  FaMagic,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaFacebook />,
      label: "Facebook",
      href: "https://www.facebook.com/fptuchampionship/",
    },
    { icon: <FaGlobe />, label: "Website", href: "https://debate-recruitment.vercel.app/" },
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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <footer
      className="w-full text-white border-t border-red-600/40 py-12 
  bg-gradient-to-b from-gray-900 via-[#1a0000] to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              color:
                i % 2 === 0 ? "rgba(255,0,0,0.25)" : "rgba(200,200,200,0.25)",
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
        className="max-w-[1630px] mx-auto px-6 relative z-10"
      >
        {/* ===== Top Content ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* 🎯 Logo + Social */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center lg:items-start"
          >
            <motion.h3 className="text-3xl font-bold bg-gradient-to-r from-red-500 via-gray-300 to-white bg-clip-text text-transparent mb-4 font-display text-center lg:text-left">
              FPTU Debate Championship 2026
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
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-gray-800 flex items-center justify-center text-lg"
                  whileHover={{
                    scale: 1.15,
                    rotate: 360,
                    boxShadow: "0 0 15px rgba(255,0,0,0.6)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-4 text-center lg:text-left sm:ml-10 lg:ml-20"
          >
            <h4 className="text-xl font-bold text-red-500 mb-2 font-display">
              Thông tin liên hệ
            </h4>

            <motion.div
              className="flex items-start gap-3 justify-center lg:justify-start"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <FaMapMarkerAlt className="text-2xl text-red-500 flex-shrink-0" />
              <a
                href="https://goo.gl/maps/AYC7XBBsCnfwXKQj9"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-gray-300 hover:text-red-400 transition-colors font-body"
              >
                Đại học FPT, Khu Công nghệ cao Hòa Lạc,
                <br />
                KM 29 Đại lộ Thăng Long, Hà Nội, Việt Nam
              </a>
            </motion.div>

            <motion.div
              className="flex items-center gap-3 justify-center lg:justify-start"
              whileHover={{ x: 5 }}
            >
              <FaEnvelope className="text-2xl text-red-400" />
              <a
                href="mailto:debate.fpt@gmail.com"
                className="text-sm text-gray-300 hover:text-red-400 transition-colors font-body"
              >
                fptu.debatechampionship@gmail.com
              </a>
            </motion.div>
          </motion.div>

          {/* 👤 Organizer */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-3 text-center lg:text-left"
          >
            <h4 className="text-xl font-bold text-gray-200 mb-2 font-display">
              Ban Tổ Chức
            </h4>

            {/* Head of Organization */}
            <div className="flex flex-row gap-4 justify-center lg:justify-start flex-wrap">
              <div>
                <motion.div
                  className="flex items-start gap-3 justify-center lg:justify-start"
                  whileHover={{ x: 5 }}
                >
                  <FaUserTie className="text-2xl text-red-400" />
                  <div className="text-sm text-gray-300 font-body">
                    <p className="font-semibold text-white mb-1">
                      Head of Organization
                    </p>
                    <p className="text-red-400">Nguyễn Văn Hiệp</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3 justify-center lg:justify-start"
                  whileHover={{ x: 5 }}
                >
                  <FaPhone className="text-2xl text-gray-400" />
                  <a
                    href="tel:0906165937"
                    className="text-sm text-gray-300 hover:text-red-400 transition-colors font-body"
                  >
                    0906165937
                  </a>
                </motion.div>
              </div>

              {/* Human Resources 1 */}
              <div>
                <motion.div
                  className="flex items-start gap-3 justify-center lg:justify-start"
                  whileHover={{ x: 5 }}
                >
                  <FaUserTie className="text-2xl text-red-400" />
                  <div className="text-sm text-gray-300 font-body">
                    <p className="font-semibold text-white mb-1">
                      Human Resources
                    </p>
                    <p className="text-red-400">Vũ Kỳ Anh</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3 justify-center lg:justify-start"
                  whileHover={{ x: 5 }}
                >
                  <FaPhone className="text-2xl text-gray-400" />
                  <a
                    href="tel:0947031104"
                    className="text-sm text-gray-300 hover:text-red-400 transition-colors font-body"
                  >
                    0947031104
                  </a>
                </motion.div>
              </div>

              {/* Human Resources 2 */}
              <div>
                <motion.div
                  className="flex items-start gap-3 justify-center lg:justify-start"
                  whileHover={{ x: 5 }}
                >
                  <FaUserTie className="text-2xl text-red-400" />
                  <div className="text-sm text-gray-300 font-body">
                    <p className="font-semibold text-white mb-1">
                      Human Resources
                    </p>
                    <p className="text-red-400">Phạm Thị Anh Thư</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3 justify-center lg:justify-start"
                  whileHover={{ x: 5 }}
                >
                  <FaPhone className="text-2xl text-gray-400" />
                  <a
                    href="tel:0981703557"
                    className="text-sm text-gray-300 hover:text-red-400 transition-colors font-body"
                  >
                    0981703557
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===== Divider ===== */}
        <motion.div
          className="w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent mb-6"
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
            © 2026 FPTU Debate Championship. All rights reserved.
          </motion.p>
          <motion.a
            href="https://khanhnvd.site/"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Designed and Developed by{" "}
            <span className="text-red-500 font-semibold">
              Nguyen Vu Dang Khanh
            </span>
          </motion.a>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
