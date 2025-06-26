import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';

const ScrollingMacbook = () => {
    const [isHovered, setIsHovered] = useState(false);

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

    // Update hover spring to follow scroll rotation when not hovered
    useEffect(() => {
        if (!isHovered) {
            const unsubscribe = smoothRotateX.on('change', (latest) => {
                hoverRotateX.set(latest);
            });
            return unsubscribe;
        }
    }, [isHovered, smoothRotateX, hoverRotateX]);

    return (
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
                    style={{
                        rotateX: hoverRotateX,
                    }}
                    className="absolute bottom-[calc(100%-0.0625rem)] flex h-[8.5rem] w-[13rem] origin-bottom translate-x-3 items-center justify-center rounded-t border border-gray-600 px-0.5 py-1 shadow-[inset_0_0_0_2px_theme(colors.black/75%)] [--screen-off-color:theme(colors.gray.900)] [--screen-on-color:theme(colors.gray.600)] [perspective:60px] [transform-style:preserve-3d] before:absolute before:inset-[-0.0625rem] before:z-10 before:rounded-[inherit] before:bg-gradient-to-b before:from-black/40 before:from-[0.0625rem] before:to-black/80 before:transition-opacity before:duration-1000 before:group-hover:opacity-0 before:group-hover:duration-500 after:absolute after:inset-x-[-1px] after:top-0 after:-z-10 after:h-[0.125rem] after:[transform:rotateX(90deg)_translateY(-1px)] after:rounded-t-full after:bg-gray-500"
                >
                    <div className="absolute inset-y-0 mx-auto h-1 w-6 rounded-b-xs bg-black/70"></div>
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
                        <div className="absolute size-[110%] -translate-x-10 -translate-y-1/2 -rotate-45 bg-gradient-to-l from-white/10"></div>
                    </motion.div>
                    <motion.div
                        animate={{
                            scale: isHovered ? 1.5 : 1,
                            translateY: isHovered ? -50 : 0,
                            translateX: isHovered ? 100 : 0,
                            backdropFilter: isHovered ? 'blur(10px)' : 'none',
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 20,
                        }}
                        className="z-40 flex h-full w-full flex-col items-center justify-center rounded-sm bg-cyan-400/20"
                    >
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 text-sm font-bold text-white">
                            EU
                        </div>
                        <p className="mt-1 text-xs font-light text-white/80">
                            ui.eunary.com
                        </p>
                    </motion.div>
                </motion.div>
                <div className="relative z-10 h-[0.75rem] w-[14.5rem] rounded-t-sm rounded-b-lg bg-gradient-to-b from-gray-600 from-65% to-gray-700 shadow-[inset_0_2px_0px] shadow-white/10 before:absolute before:top-0 before:left-1/2 before:h-[0.25rem] before:w-[2.5rem] before:-translate-x-1/2 before:rounded-b-full before:bg-gray-700 before:shadow-[inset_2px_0_1px_-2px_theme(colors.black/50%),inset_-2px_0_1px_-2px_theme(colors.black/50%),0_1px_0_theme(colors.white/10%)]"></div>
            </motion.div>
        </div>
    );
};

export default ScrollingMacbook;
