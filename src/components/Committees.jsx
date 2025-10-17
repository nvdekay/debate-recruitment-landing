import React, { useState } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import {
  FaMagic,
  FaTools,
  FaHandsHelping,
  FaHandshake,
  FaBullhorn,
  FaPaintBrush,
  FaCameraRetro,
  FaMoneyBillWave,
} from "react-icons/fa";

const Committees = () => {
  const [flippedCard, setFlippedCard] = useState(null);
  const [elementRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const committees = [
    {
      name: "NỘI DUNG",
      icon: <FaMagic className="text-7xl text-purple-400 drop-shadow-glow" />,
      description:
        "Ban Nội Dung là linh hồn của giải đấu. Chúng tôi chịu trách nhiệm nghiên cứu sâu rộng, soạn thảo các chủ đề tranh biện phức tạp, thiết lập hệ thống quy tắc công bằng, và cung cấp các tài liệu giáo dục cần thiết. Ban Nội Dung đảm bảo Debate Prophecy không chỉ là một cuộc thi, mà là một hành trình thách thức tư duy đỉnh cao.",
      color: "from-purple-500 to-indigo-600",
    },
    {
      name: "HẬU CẦN",
      icon: <FaTools className="text-7xl text-orange-400 drop-shadow-glow" />,
      description:
        "Ban Hậu Cần đóng vai trò là người giữ lửa cho sự kiện. Mọi hoạt động từ việc chuẩn bị địa điểm, quản lý thiết bị kỹ thuật, điều phối lịch trình, đến việc đảm bảo mọi nguồn cung cấp đều sẵn sàng đều do chúng tôi phụ trách. Chúng tôi tạo ra một môi trường hoạt động liền mạch và hiệu quả, hỗ trợ tối đa cho các ban khác.",
      color: "from-red-500 to-orange-600",
    },
    {
      name: "TAKE CARE",
      icon: (
        <FaHandsHelping className="text-7xl text-pink-400 drop-shadow-glow" />
      ),
      description:
        "Ban Takecare là sứ giả của sự ấm áp. Nhiệm vụ chính là đảm bảo phúc lợi toàn diện cho tất cả thí sinh và khách mời. Từ dịch vụ khách sạn, sắp xếp chỗ ăn ở, đến việc hỗ trợ tinh thần và giải quyết các vấn đề cá nhân, chúng tôi cam kết mang lại một trải nghiệm thoải mái, chu đáo và đáng nhớ nhất cho mọi người tham gia.",
      color: "from-pink-500 to-rose-600",
    },
    {
      name: "ĐỐI NGOẠI",
      icon: <FaHandshake className="text-7xl text-cyan-400 drop-shadow-glow" />,
      description:
        "Ban Đối Ngoại là cầu nối vươn xa của giải đấu. Chúng tôi xây dựng và duy trì mối quan hệ chiến lược với các nhà tài trợ, đối tác truyền thông và các tổ chức bên ngoài. Chúng tôi mở rộng mạng lưới ảnh hưởng, đảm bảo nguồn lực dồi dào và nâng cao vị thế của Debate Prophecy trên bản đồ các sự kiện học thuật.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      name: "TRUYỀN THÔNG",
      icon: (
        <FaBullhorn className="text-7xl text-yellow-400 drop-shadow-glow" />
      ),
      description:
        "Ban Truyền Thông là tiếng nói của giải đấu. Chúng tôi quản lý toàn bộ chiến lược quảng bá, nội dung mạng xã hội và các chiến dịch digital. Mục tiêu của chúng tôi là lan tỏa thông điệp của Debate Prophecy, thu hút sự chú ý của công chúng và đảm bảo mọi diễn biến quan trọng của cuộc thi được đưa tin rộng rãi và kịp thời.",
      color: "from-yellow-500 to-amber-600",
    },
    {
      name: "DESIGN",
      icon: (
        <FaPaintBrush className="text-7xl text-fuchsia-400 drop-shadow-glow" />
      ),
      description:
        "Ban Design là nghệ sĩ thị giác của sự kiện. Chúng tôi chịu trách nhiệm tạo ra tất cả các ấn phẩm truyền thông, nhận diện thương hiệu, và tài liệu quảng cáo. Với sự sáng tạo không giới hạn, chúng tôi biến mọi ý tưởng thành hình ảnh độc đáo, thống nhất và gây ấn tượng mạnh mẽ với công chúng.",
      color: "from-fuchsia-500 to-purple-600",
    },
    {
      name: "MEDIA",
      icon: (
        <FaCameraRetro className="text-7xl text-emerald-400 drop-shadow-glow" />
      ),
      description:
        "Ban Media là người ghi lại khoảnh khắc lịch sử. Chúng tôi sản xuất, quay phim, chụp ảnh và chỉnh sửa toàn bộ nội dung đa phương tiện trong suốt sự kiện. Từ các video highlight kịch tính đến những bức ảnh chân thực, chúng tôi lưu giữ mọi cảm xúc và cột mốc quan trọng của Debate Prophecy một cách chuyên nghiệp và sắc nét.",
      color: "from-emerald-500 to-teal-600",
    },
    {
      name: "TÀI CHÍNH",
      icon: (
        <FaMoneyBillWave className="text-7xl text-lime-400 drop-shadow-glow" />
      ),
      description:
        "Ban Tài Chính là người quản lý nguồn lực của giải đấu. Chúng tôi đảm bảo mọi chi phí được sử dụng hiệu quả, lập kế hoạch ngân sách chi tiết và tối ưu hóa các nguồn thu. Ban Tài Chính là trụ cột giữ cho toàn bộ hành trình hoạt động bền vững và hiệu quả lâu dài.",
      color: "from-lime-500 to-green-600",
    },
  ];

  const handleCardClick = (index) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      rotateY: -90,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const CardFront = ({ committee, index, isFlipped }) => (
    <motion.div
      className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-purple-950 border-2 border-purple-500/30 shadow-lg flex flex-col items-center justify-center p-6 text-center overflow-hidden"
      style={{
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
      }}
      animate={{
        borderColor: isFlipped
          ? "rgba(168,85,247,0.3)"
          : [
              "rgba(168,85,247,0.3)",
              "rgba(236,72,153,0.5)",
              "rgba(253,224,71,0.5)",
              "rgba(168,85,247,0.3)",
            ],
        boxShadow: isFlipped
          ? "0 0 25px rgba(168,85,247,0.3)"
          : [
              "0 0 25px rgba(168,85,247,0.3)",
              "0 0 40px rgba(168,85,247,0.5)",
              "0 0 25px rgba(168,85,247,0.3)",
            ],
      }}
      transition={{
        borderColor: { duration: 3, repeat: Infinity, ease: "linear" },
        boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      {/* Mystical Glow Effect */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${committee.color} opacity-0`}
        whileHover={{ opacity: 0.15 }}
        transition={{ duration: 0.3 }}
      />

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        className="text-8xl mb-4 relative z-10"
        animate={{
          rotate: [0, -5, 5, -5, 0],
          scale: [1, 1.05, 1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.2,
          rotate: 360,
          transition: { duration: 0.6 },
        }}
        style={{
          filter: "drop-shadow(0 0 20px rgba(168,85,247,0.6))",
        }}
      >
        {committee.icon}
      </motion.div>

      <h3 className="font-display text-3xl font-extrabold text-red-400 mb-1 tracking-wide uppercase relative z-10">
        Ban
      </h3>
      <h3 className="font-display text-3xl font-extrabold text-white mb-4 tracking-wide uppercase relative z-10">
        {committee.name}
      </h3>

      <motion.p
        className="text-xs text-gray-400 font-body absolute bottom-4"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Click để xem Sứ Mệnh ✨
      </motion.p>

      {/* Corner Decorations */}
      <motion.div
        className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-purple-500/50"
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: index * 0.1,
        }}
      />
      <motion.div
        className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-purple-500/50"
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: index * 0.1 + 0.5,
        }}
      />
    </motion.div>
  );

  const CardBack = ({ committee }) => (
    <motion.div
      className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-gradient-to-br from-purple-950 to-gray-900 border-2 border-red-500/60 shadow-lg flex flex-col justify-center p-6 overflow-hidden"
      style={{
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        transform: "rotateY(180deg)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Mystical Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              color: "rgba(168,85,247,0.5)",
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>

      <motion.h4
        className="font-display text-2xl font-bold text-red-400 mb-4 text-center uppercase relative z-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
      >
        Sứ Mệnh Của Ban
      </motion.h4>
      <motion.p
        className="text-gray-300 text-base leading-relaxed font-body text-justify relative z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring" }}
      >
        {committee.description}
      </motion.p>

      {/* Glowing Border Effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{
          boxShadow: [
            "inset 0 0 20px rgba(239,68,68,0.3)",
            "inset 0 0 40px rgba(239,68,68,0.6)",
            "inset 0 0 20px rgba(239,68,68,0.3)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );

  return (
    <section ref={elementRef} className="py-60 overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full"
            style={{
              background: `radial-gradient(circle, ${
                i % 3 === 0
                  ? "rgba(168,85,247,0.1)"
                  : i % 3 === 1
                  ? "rgba(236,72,153,0.1)"
                  : "rgba(253,224,71,0.1)"
              } 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : -50,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          className="text-center mb-16"
        >
          <h2>
            BAN TỔ CHỨC
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto italic font-light">
            Mỗi lá bài hé lộ một mảnh ghép quyền năng, tạo nên thành công rực rỡ
            của Debate Championship 2026
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {committees.slice(0, 4).map((committee, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="flex justify-center"
              >
                <motion.div
                  className="relative w-72 h-96 cursor-pointer perspective-1000"
                  onClick={() => handleCardClick(index)}
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    rotateZ: Math.random() > 0.5 ? 2 : -2,
                  }}
                  transition={{
                    duration: 0.3,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                >
                  <motion.div
                    className="relative w-full h-full preserve-3d"
                    animate={{
                      rotateY: flippedCard === index ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.6,
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <CardFront
                      committee={committee}
                      index={index}
                      isFlipped={flippedCard === index}
                    />
                    <CardBack committee={committee} />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {committees.slice(4).map((committee, index) => {
              const actualIndex = index + 4;
              return (
                <motion.div
                  key={actualIndex}
                  variants={cardVariants}
                  className="flex justify-center"
                >
                  <motion.div
                    className="relative w-72 h-96 cursor-pointer perspective-1000"
                    onClick={() => handleCardClick(actualIndex)}
                    whileHover={{
                      scale: 1.05,
                      y: -10,
                      rotateZ: Math.random() > 0.5 ? 2 : -2,
                    }}
                    transition={{
                      duration: 0.3,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                  >
                    <motion.div
                      className="relative w-full h-full preserve-3d"
                      animate={{
                        rotateY: flippedCard === actualIndex ? 180 : 0,
                      }}
                      transition={{
                        duration: 0.6,
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                      }}
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <CardFront
                        committee={committee}
                        index={actualIndex}
                        isFlipped={flippedCard === actualIndex}
                      />
                      <CardBack committee={committee} />
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
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
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
};

export default Committees;
