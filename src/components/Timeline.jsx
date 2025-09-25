import React from "react";
import { motion } from "framer-motion";

const Timeline = () => {
    const timelineEvents = [
        {
            title: "Application Round",
            date: "20/10 - 1/11",
            description:
                "Submit your application and show us your passion for organizing excellence",
            symbol: "♠",
            color: "red-500",
        },
        {
            title: "Interview Round",
            date: "3/11 - 6/11",
            description: "Face-to-face interviews with the selection committee",
            symbol: "♥",
            color: "red-600",
        },
        {
            title: "Results Announcement",
            date: "8/11",
            description: "Selected committee members will be announced",
            symbol: "♦",
            color: "red-700",
        },
        {
            title: "Orientation",
            date: "10/11",
            description: "Kick-off meeting and committee role assignments",
            symbol: "♣",
            color: "red-800",
        },
    ];

    return (
        <section className="py-20 overflow-hidden">
            {/* Background Symbols */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/3 left-1/6 text-red-500 text-8xl transform rotate-12">
                    ♠
                </div>
                <div className="absolute bottom-1/3 right-1/6 text-red-500 text-8xl transform -rotate-12">
                    ♥
                </div>
                <div className="absolute top-1/2 left-1/2 text-red-500 text-6xl transform -translate-x-1/2 -translate-y-1/2 rotate-45">
                    ♦
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                        Recruitment Timeline
                    </h2>
                    <p className="text-xl text-gray-300">
                        Important dates you need to know
                    </p>
                </motion.div>

                {/* Desktop Timeline */}
                <div className="hidden lg:block max-w-6xl mx-auto">
                    <div className="relative">
                        {/* Timeline Line */}
                        <motion.div
                            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-red-500 to-red-700 transform -translate-y-1/2"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 2 }}
                            viewport={{ once: true }}
                        ></motion.div>

                        <div className="flex justify-between items-center">
                            {timelineEvents.map((event, index) => (
                                <motion.div
                                    key={index}
                                    className="relative flex flex-col items-center"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    {/* Event Circle */}
                                    <div
                                        className={`w-16 h-16 bg-${event.color} rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer relative z-10`}
                                    >
                                        {event.symbol}
                                    </div>

                                    {/* Event Card */}
                                    <div
                                        className={`mt-6 p-6 bg-gradient-to-br from-black to-red-950/20 border border-${event.color}/30 rounded-xl hover:border-${event.color}/60 transition-all duration-300 hover:scale-105 max-w-xs`}
                                    >
                                        <h3 className="text-lg font-bold text-white mb-2">
                                            {event.title}
                                        </h3>
                                        <p className={`text-${event.color} font-bold mb-2`}>
                                            {event.date}
                                        </p>
                                        <p className="text-gray-300 text-sm">{event.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile Timeline */}
                <div className="lg:hidden max-w-md mx-auto">
                    <div className="relative">
                        {/* Vertical Line */}
                        <motion.div
                            className="absolute left-8 top-0 w-1 bg-gradient-to-b from-red-500 to-red-700"
                            initial={{ height: 0 }}
                            whileInView={{ height: "100%" }}
                            transition={{ duration: 2 }}
                            viewport={{ once: true }}
                        ></motion.div>

                        {timelineEvents.map((event, index) => (
                            <motion.div
                                key={index}
                                className="relative flex items-start mb-12"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                {/* Event Circle */}
                                <div
                                    className={`w-16 h-16 bg-${event.color} rounded-full flex items-center justify-center text-white text-xl font-bold shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer relative z-10 flex-shrink-0`}
                                >
                                    {event.symbol}
                                </div>

                                {/* Event Card */}
                                <div
                                    className={`ml-6 p-6 bg-gradient-to-br from-black to-red-950/20 border border-${event.color}/30 rounded-xl hover:border-${event.color}/60 transition-all duration-300 hover:scale-105 flex-1`}
                                >
                                    <h3 className="text-lg font-bold text-white mb-2">
                                        {event.title}
                                    </h3>
                                    <p className={`text-${event.color} font-bold mb-2`}>
                                        {event.date}
                                    </p>
                                    <p className="text-gray-300 text-sm">{event.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
