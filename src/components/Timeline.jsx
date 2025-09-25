import React from "react";
import { motion } from "framer-motion";

const timelineEvents = [
    {
        title: "Vòng Đơn",
        date: "20/10 - 1/11",
    },
    {
        title: "Vòng Phỏng Vấn",
        date: "3/11 - 6/11",
    },
    {
        title: "Công Bố Kết Quả",
        date: "8/11",
    }
];

const TimelineItem = ({ event, index, isMobile = false }) => {
    const animationProps = isMobile
        ? {
            initial: { opacity: 0, x: 30 },
            whileInView: { opacity: 1, x: 0 },
        }
        : {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
        };

    return (
        <motion.div
            key={index}
            className={`relative flex ${isMobile ? 'items-start mb-12' : 'flex-col items-center text-center flex-1 px-4'}`}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            {...animationProps}
        >
            {/* Vạch mốc (chấm nhỏ thay ô tròn to) */}
            <div className="w-4 h-4 bg-gradient-to-br from-rose-500 to-purple-600 rounded-full mb-4 relative z-20"></div>

            {/* Nội dung */}
            <div className={`${isMobile ? 'ml-6 text-left' : ''}`}>
                <h3 className="text-lg md:text-xl font-bold text-white mb-1">{event.title}</h3>
                <p className="text-sm font-semibold text-rose-400 mb-1">{event.date}</p>
            </div>
        </motion.div>
    );
};

const Timeline = () => {
    return (
        <section className="py-80 overflow-hidden">

            <div className="container mx-auto px-4 relative z-10">
                {/* Tiêu đề */}
                <motion.div
                    className="text-center mb-16 lg:mb-24"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-600">
                        Timeline
                    </h2>
                </motion.div>

                {/* Desktop Timeline (ngang) */}
                <div className="hidden lg:block max-w-6xl mx-auto">
                    <div className="relative flex justify-between items-start">
                        {/* Đường kẻ ngang */}
                        <motion.div
                            className="absolute top-2 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 to-purple-500"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 2 }}
                            viewport={{ once: true }}
                        ></motion.div>

                        {timelineEvents.map((event, index) => (
                            <TimelineItem key={index} event={event} index={index} />
                        ))}
                    </div>
                </div>

                

                {/* Mobile Timeline (dọc) */}
                <div className="lg:hidden max-w-md mx-auto">
                    <div className="relative">
                        {/* Đường kẻ dọc */}
                        <motion.div
                            className="absolute left-2 top-0 w-1 bg-gradient-to-b from-rose-500 to-purple-500 rounded-full"
                            initial={{ height: 0 }}
                            whileInView={{ height: "100%" }}
                            transition={{ duration: 2 }}
                            viewport={{ once: true }}
                        ></motion.div>

                        {timelineEvents.map((event, index) => (
                            <TimelineItem
                                key={index}
                                event={event}
                                index={index}
                                isMobile={true}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
