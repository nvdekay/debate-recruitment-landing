import React, { useState } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const Committees = () => {
  const [flippedCard, setFlippedCard] = useState(null);
  const [elementRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const committees = [
    {
      name: "TRƯỞNG BAN TỔ CHỨC",
      title: "The Emperor – Trưởng Ban Tổ Chức",
      img: "../img/Bộ thẻ bài/tbtc.png",
    },
    {
      name: "NHÂN SỰ",
      title: "Justice – Ban Nhân Sự (HR)",
      img: "../img/Bộ thẻ bài/hr.png",
    },
    {
      name: "DEVELOPER",
      title: "King of Swords – Developer",
      img: "../img/Bộ thẻ bài/dev.png",
    },
    {
      name: "TRUYỀN THÔNG",
      title: "The Star – Ban Truyền Thông",
      img: "../img/Bộ thẻ bài/tt.png",
    },
    {
      name: "TÀI CHÍNH",
      title: "Nine of Pentacles – Ban Tài Chính",
      img: "../img/Bộ thẻ bài/tc.png",
    },
    {
      name: "ĐỐI NGOẠI",
      title: "Eight of Pentacles – Ban Đối Ngoại",
      img: "../img/Bộ thẻ bài/đn.png",
    },
    {
      name: "HẬU CẦN",
      title: "Strength – Ban Hậu Cần",
      img: "../img/Bộ thẻ bài/hc.png",
    },
    {
      name: "TAKECARE",
      title: "The Empress – Ban Takecare",
      img: "../img/Bộ thẻ bài/takecare.png",
    },
    {
      name: "DESIGN",
      title: "Wands – Ban Design",
      img: "../img/Bộ thẻ bài/des.png",
    },
    {
      name: "MEDIA",
      title: "The Sun – Ban Media",
      img: "../img/Bộ thẻ bài/media.png",
    },
    {
      name: "NỘI DUNG",
      title: "The Magician – Ban Nội Dung",
      img: "../img/Bộ thẻ bài/nd.png",
    },
  ];

  const descriptions = [
    "Giữ vị trí trung tâm trong vòng tròn định mệnh, The Emperor là biểu tượng của kỷ luật, trật tự và quyền lực vững vàng. Người đứng đầu mang trong mình sứ mệnh kiến tạo nền móng cho cả vũ trụ Debate Champion, định hình luật lệ, hướng đi và linh hồn cho toàn bộ hành trình.",
    "Giữa thế giới nơi lý lẽ và cảm xúc đan xen, Justice là cán cân giữ cho tất cả được cân bằng. Họ là người bảo vệ sự công bằng và minh bạch trong mỗi quyết định, lắng nghe từng tiếng nói, gìn giữ sự hài hòa giữa cá nhân và tập thể. Justice đảm bảo rằng mọi lá bài đều được nhìn nhận đúng giá trị, rằng mọi nỗ lực đều được ghi nhận xứng đáng.",
    "Tựa như vị vua cầm kiếm đứng giữa cơn bão dữ, King of Swords mang trong mình trí tuệ sắc bén và lý trí vững vàng. Developer chính là đầu não công nghệ, nơi mọi ý tưởng được chuyển hóa thành hệ thống, nền tảng và công cụ thực tiễn.",
    "Giữa màn đêm của sự im lặng, The Star tỏa sáng như ngọn hải đăng dẫn đường. Ban Truyền thông là người gieo niềm tin, truyền cảm hứng và kết nối mọi trái tim hướng về cùng một lý tưởng. Họ biến mỗi thông điệp thành tia sáng lan tỏa, khiến cả cộng đồng cùng nhìn về Debate Champion với khát vọng và tự hào. Sứ mệnh của họ là giữ cho ánh sáng không bao giờ tắt — để dù trong đêm tối, vẫn luôn có một vì sao dẫn lối.",
    "Giữa vườn nho trĩu quả của sự thành công, Nine of Pentacles hiện lên như biểu tượng của sự độc lập, ổn định và sung túc. Ban Tài chính là người quản lý nguồn lực – vừa khéo léo, vừa cẩn trọng, đảm bảo mọi giá trị được sử dụng đúng chỗ, đúng lúc. Họ không chỉ là người giữ ngân khố, mà còn là người nuôi dưỡng sự bền vững cho cả hành trình. Nếu The Emperor là nền móng, thì Nine of Pentacles là nguồn sinh khí vật chất nuôi dưỡng toàn bộ vũ trụ Debate Champion.",
    "Và cuối cùng, khi vòng triệu hồi khép lại, Eight of Pentacles xuất hiện – biểu tượng của sự rèn giũa và kết nối bền vững. Ban Đối ngoại là người xây dựng cầu nối – giữa con người và con người, giữa tổ chức và thế giới bên ngoài. Họ là người mở ra cánh cổng hợp tác, đem giá trị của Debate Champion lan xa hơn, vững vàng hơn. Nếu không có Eight of Pentacles, mọi thành tựu sẽ mãi chỉ dừng ở giới hạn nội bộ, không thể hóa thành di sản thực sự.",
    "Ẩn mình sau hậu trường, Strength là nguồn sức mạnh bền bỉ giúp cả đoàn không bao giờ gục ngã. Ban Hậu cần mang năng lượng của sự kiên định và chăm chỉ — họ là người đảm bảo mọi thứ diễn ra trọn vẹn, dù không phải lúc nào cũng được thấy. Họ không rực rỡ, nhưng là trụ cột thầm lặng giữ cho bánh xe vận hành liên tục. Nếu không có Strength, hành trình sẽ sụp đổ ngay từ bên trong.",
    "Ban Design tạo ra các ấn phẩm thị giác, nhận diện thương hiệu và phong cách hình ảnh cho giải đấu.",
    "Ban Media ghi lại những khoảnh khắc đáng nhớ qua ảnh, video và các sản phẩm đa phương tiện.",
    "Ban Nội Dung phụ trách xây dựng đề tài, hệ thống chấm điểm và định hướng học thuật cho cuộc thi.",
  ];

  const handleCardClick = (index) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 100, rotateY: -90, scale: 0.5 },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 15, duration: 0.8 },
    },
  };

  // relative w-full overflow-hidden rounded-2xl border-2 shadow-xl
  const CardFront = ({ committee, index, isFlipped }) => (
    <motion.div
      className="relative h-full backface-hidden rounded-2xl shadow-xl overflow-hidden"
      style={{
        aspectRatio: "1046 / 1900",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
      }}
      animate={{
        boxShadow: isFlipped
          ? "0 0 25px rgba(255,255,255,0.2)"
          : [
              "0 0 25px rgba(255,255,255,0.2)",
              "0 0 40px rgba(220,38,38,0.5)",
              "0 0 25px rgba(255,255,255,0.2)",
            ],
      }}
      transition={{
        boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      <img
        src={committee.img}
        alt={committee.name}
        className="w-full h-full object-contain rounded-2xl"
      />
      <motion.p
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm text-gray-200 font-body bg-black/50 px-4 py-1 rounded-md whitespace-nowrap"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        Click để xem chi tiết ✨
      </motion.p>
    </motion.div>
  );

  const CardBack = ({ committee, description }) => (
    <motion.div
      className="absolute inset-0 w-full h-full backface-hidden rounded-2xl shadow-xl p-6 flex flex-col justify-center"
      style={{
        aspectRatio: "1046 / 1900",
        transform: "rotateY(180deg)",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.h4
        className="font-display text-2xl font-bold text-gray-100 mb-4 text-center uppercase relative z-10 tracking-widest"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
      >
        {committee.title}
      </motion.h4>
      <motion.p
        className="text-gray-300 text-base leading-relaxed font-body text-justify relative z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring" }}
      >
        {description}
      </motion.p>
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{
          boxShadow: [
            "inset 0 0 20px rgba(255,255,255,0.1)",
            "inset 0 0 40px rgba(255,255,255,0.3)",
            "inset 0 0 20px rgba(255,255,255,0.1)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );

  return (
    <section ref={elementRef} className="py-60 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full"
            style={{
              background: `radial-gradient(circle, ${
                i % 2 === 0 ? "rgba(255,255,255,0.1)" : "rgba(220,38,38,0.1)"
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
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl pt-5 md:text-6xl font-extrabold mb-4 font-unbounded tracking-wider bg-gradient-to-r from-gray-100 via-white to-gray-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]">
            CƠ CẤU BAN TỔ CHỨC
          </h2>
          <p className="text-lg md:text-xl text-gray-300/90 max-w-2xl mx-auto italic font-gilroy">
            Mỗi lá bài hé lộ một mảnh ghép quyền năng, tạo nên thành công rực rỡ
            của Debate Championship 2026.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="max-w-6xl mx-auto flex flex-col items-center gap-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
            {committees.slice(0, 2).map((committee, index) => (
              <motion.div key={index} variants={cardVariants}>
                <motion.div
                  className="relative w-72 h-96 cursor-pointer perspective-1000 mx-auto"
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
                    animate={{ rotateY: flippedCard === index ? 180 : 0 }}
                    transition={{
                      duration: 0.6,
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <CardFront
                      committee={committee}
                      index={index}
                      isFlipped={flippedCard === index}
                    />
                    <CardBack
                      committee={committee}
                      description={descriptions[index]}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {committees.slice(2).map((committee, index) => (
              <motion.div key={index + 2} variants={cardVariants}>
                <motion.div
                  className="relative w-72 h-96 cursor-pointer perspective-1000 mx-auto"
                  onClick={() => handleCardClick(index + 2)}
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
                    animate={{ rotateY: flippedCard === index + 2 ? 180 : 0 }}
                    transition={{
                      duration: 0.6,
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <CardFront
                      committee={committee}
                      index={index + 2}
                      isFlipped={flippedCard === index + 2}
                    />
                    <CardBack
                      committee={committee}
                      description={descriptions[index + 2]}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
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
