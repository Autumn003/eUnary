import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';

const ScrollingMacbook = () => {
    const [isHovered, setIsHovered] = useState(false);

    const containerVariants = {
        initial: { translateX: -100 },
    };

    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const rotateX = useTransform(
        scrollYProgress,
        [0.3, 0.5, 0.7],
        [-75, 0, -75]
    );
    const topGlowRotateX = useTransform(
        scrollYProgress,
        [0.4, 0.5, 0.6],
        [60, 0, 60]
    );
    const topGlowOpacity = useTransform(
        scrollYProgress,
        [0.3, 0.5, 0.7],
        [1, 0, 1]
    );

    const opacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);
    const scale = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [1, 0.4, 1]);

    const smoothRotateX = useSpring(rotateX, { stiffness: 100, damping: 20 });
    const smoothTopGlowRotateX = useSpring(topGlowRotateX, {
        stiffness: 100,
        damping: 20,
    });
    const hoverRotateX = useSpring(0, { stiffness: 150, damping: 25 });
    return (
        <div>
            <div
                ref={ref}
                className="relative isolate z-20 mx-auto flex justify-center"
            >
                <motion.div
                    className="relative isolate [perspective:1000px]"
                    onHoverStart={() => {
                        setIsHovered(true);
                        hoverRotateX.set(0);
                    }}
                    onHoverEnd={() => {
                        setIsHovered(false);
                        hoverRotateX.set(smoothRotateX.get());
                    }}
                >
                    <motion.div
                        animate={{
                            rotateX: isHovered ? 0 : undefined,
                        }}
                        transition={
                            isHovered
                                ? {
                                      type: 'spring',
                                      stiffness: 150,
                                      damping: 25,
                                      duration: 0.3,
                                  }
                                : undefined
                        }
                        style={{
                            rotateX: isHovered ? hoverRotateX : smoothRotateX,
                        }}
                        variants={containerVariants}
                        initial="initial"
                        className="transi absolute bottom-[calc(100%-0.0625rem)] left-1/2 flex h-[8.5rem] w-[13rem] origin-bottom items-center justify-center rounded-t border border-gray-600 p-2 shadow-[inset_0_0_0_2px_theme(colors.black/75%)] [--screen-off-color:theme(colors.gray.900)] [--screen-on-color:theme(colors.gray.600)] [perspective:60px] [transform-style:preserve-3d] before:absolute before:inset-[-0.0625rem] before:z-10 before:rounded-[inherit] before:bg-gradient-to-b before:from-black/40 before:from-[0.0625rem] before:to-black/80 before:transition-opacity before:duration-1000 before:group-hover:opacity-0 before:group-hover:duration-500 after:absolute after:inset-x-[-1px] after:top-0 after:-z-10 after:h-[0.125rem] after:[transform:rotateX(90deg)_translateY(-1px)] after:rounded-t-full after:bg-gray-500"
                    >
                        <motion.div
                            className="absolute inset-x-0 top-0.5 h-10 origin-top bg-gradient-to-b from-white/15 to-transparent blur-sm"
                            style={{
                                rotateX: smoothTopGlowRotateX,
                                opacity: isHovered ? 0 : topGlowOpacity,
                                scale,
                            }}
                        />

                        <motion.div
                            style={{ opacity }}
                            className="absolute inset-0 z-30 overflow-hidden rounded-[inherit] transition-opacity duration-500"
                        >
                            <div className="absolute size-[125%] -translate-x-10 -translate-y-1/2 -rotate-45 bg-gradient-to-l from-white/[0.08]"></div>
                        </motion.div>

                        <motion.div
                            animate={{
                                scale: isHovered ? 1.5 : 1,
                                translateY: isHovered ? -25 : 0,
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 20,
                                delay: 0.2,
                            }}
                            className="z-50 flex h-full w-full flex-col items-center justify-center rounded-sm bg-cyan-200/30 p-2 shadow-[0_1px] shadow-white/5 backdrop-blur-md"
                        >
                            <img
                                src="/media/logo-dark.jpg"
                                alt="logo"
                                width={28}
                                height={28}
                                className="h-fit rounded-lg brightness-150"
                            />
                            <p className="text-xs font-light">ui.eunary.com</p>
                        </motion.div>
                    </motion.div>
                    <div className="relative z-10 h-[0.75rem] w-[14.5rem] rounded-t-sm rounded-b-md bg-gradient-to-b from-gray-600 from-65% to-gray-700 shadow-[inset_0_1px_0px] shadow-white/10 before:absolute before:top-0 before:left-1/2 before:h-[0.125rem] before:w-[1.25rem] before:-translate-x-1/2 before:rounded-b-full before:bg-gray-700 before:shadow-[inset_2px_0_1px_-2px_theme(colors.black/50%),inset_-2px_0_1px_-2px_theme(colors.black/50%),0_1px_0_theme(colors.white/10%)]"></div>
                </motion.div>
            </div>
        </div>
    );
};

export default ScrollingMacbook;
