'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { cn } from '@/lib/utils';

interface MacbookScrollProps {
    children: React.ReactNode;
    className?: string;
}

const ScrollingMacbook = ({ children, className }: MacbookScrollProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    // Set initial state and handle mounting
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const rotateX = useTransform(
        scrollYProgress,
        [0, 0.3, 0.5, 0.7, 1],
        [-75, -75, 0, -75, -75]
    );
    const topGlowRotateX = useTransform(
        scrollYProgress,
        [0, 0.4, 0.5, 0.6, 1],
        [60, 60, 0, 60, 60]
    );
    const topGlowOpacity = useTransform(
        scrollYProgress,
        [0, 0.3, 0.5, 0.7, 1],
        [1, 1, 0, 1, 1]
    );
    const opacity = useTransform(
        scrollYProgress,
        [0, 0.3, 0.5, 0.7, 1],
        [0, 0, 1, 0, 0]
    );
    const scale = useTransform(
        scrollYProgress,
        [0, 0.3, 0.5, 0.7, 1],
        [1, 1, 0.4, 1, 1]
    );

    const smoothRotateX = useSpring(rotateX, { stiffness: 100, damping: 20 });
    const smoothTopGlowRotateX = useSpring(topGlowRotateX, {
        stiffness: 100,
        damping: 20,
    });
    const hoverRotateX = useSpring(isMounted ? smoothRotateX.get() : -75, {
        stiffness: 150,
        damping: 25,
    });

    // Memoize hover handlers to prevent unnecessary re-renders
    const handleHoverStart = useCallback(() => {
        setIsHovered(true);
        hoverRotateX.set(0);
    }, [hoverRotateX]);

    const handleHoverEnd = useCallback(() => {
        setIsHovered(false);
        hoverRotateX.set(smoothRotateX.get());
    }, [hoverRotateX, smoothRotateX]);

    useEffect(() => {
        if (!isHovered && isMounted) {
            const unsubscribe = smoothRotateX.on('change', (latest) => {
                hoverRotateX.set(latest);
            });
            return unsubscribe;
        }
    }, [isHovered, smoothRotateX, hoverRotateX, isMounted]);

    const hoverAnimation = {
        scale: isHovered ? 1.5 : 1,
        translateY: isHovered ? -50 : 0,
        translateX: isHovered ? 100 : 0,
        opacity: isHovered ? 1 : 0,
    };

    const backdropAnimation = {
        scale: isHovered ? 1.5 : 1,
        translateY: isHovered ? -50 : 0,
        translateX: isHovered ? 100 : 0,
        backdropFilter: isHovered ? 'blur(10px)' : 'none',
    };

    const springTransition = {
        type: 'spring' as const,
        stiffness: 300,
        damping: 20,
    };

    return (
        <div
            ref={ref}
            className="relative isolate z-20 mx-auto flex justify-center"
        >
            <motion.div
                className="group relative isolate [perspective:1000px]"
                onHoverStart={handleHoverStart}
                onHoverEnd={handleHoverEnd}
                initial={{ opacity: 0 }}
                animate={{ opacity: isMounted ? 1 : 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    style={{ rotateX: hoverRotateX }}
                    className="absolute bottom-[calc(100%-0.0625rem)] h-[8.5rem] w-[13rem] origin-bottom translate-x-3 rounded-t border-2 border-gray-600 px-0.5 py-1 shadow-[inset_0_0_0_2px_theme(colors.black/75%)] [--screen-off-color:theme(colors.gray.900)] [--screen-on-color:theme(colors.gray.600)] [perspective:65px] [transform-style:preserve-3d] before:absolute before:inset-[-0.0625rem] before:z-10 before:rounded-[inherit] before:bg-gradient-to-b before:from-black/40 before:from-[0.0625rem] before:to-black/80 before:transition-opacity before:duration-1000 before:group-hover:opacity-0 before:group-hover:duration-500 after:absolute after:inset-x-[-1px] after:top-0 after:-z-10 after:h-[0.125rem] after:[transform:rotateX(90deg)_translateY(-1px)] after:rounded-t-full after:bg-gray-500"
                >
                    {/* Webcam notch */}
                    <motion.div
                        animate={{
                            opacity: isHovered ? 0 : 1,
                            transition: {
                                delay: isHovered ? 0 : 0.2,
                                duration: 0.01,
                            },
                        }}
                        className="absolute inset-y-0 right-[46%] z-50 h-1 w-6 rounded-b-xs bg-black/75"
                    />

                    {/* Top glow effect */}
                    <motion.div
                        className="absolute inset-x-0 top-0.5 h-10 origin-top bg-gradient-to-b from-white/15 to-transparent blur-sm"
                        style={{
                            rotateX: smoothTopGlowRotateX,
                            opacity: isHovered ? 0 : topGlowOpacity,
                            scale,
                        }}
                    />

                    {/* Reflection effect */}
                    <motion.div
                        style={{ opacity }}
                        className="absolute inset-0 z-30 overflow-hidden rounded-[inherit] transition-opacity duration-500"
                    >
                        <div className="absolute size-[110%] -translate-x-10 -translate-y-1/2 -rotate-45 bg-gradient-to-l from-white/10" />
                    </motion.div>

                    {/* Blur background for content */}
                    <motion.div
                        animate={hoverAnimation}
                        transition={springTransition}
                        className={cn(
                            className,
                            'z-40 h-full w-full rounded-sm bg-cyan-400/20 blur-lg'
                        )}
                    />

                    {/* Content container */}
                    <motion.div
                        animate={backdropAnimation}
                        transition={springTransition}
                        className={cn(
                            className,
                            'absolute inset-0 z-40 h-full w-full overflow-hidden rounded-sm bg-cyan-400/10'
                        )}
                    >
                        {children}
                    </motion.div>
                </motion.div>

                {/* MacBook base */}
                <div className="relative z-10 h-[0.75rem] w-[14.5rem] rounded-t-sm rounded-b-lg bg-gradient-to-b from-gray-600 from-65% to-gray-700 shadow-[inset_0_2px_0px] shadow-white/10 before:absolute before:top-0 before:left-1/2 before:h-[0.25rem] before:w-[2.5rem] before:-translate-x-1/2 before:rounded-b-full before:bg-gray-700 before:shadow-[inset_2px_0_1px_-2px_theme(colors.black/50%),inset_-2px_0_1px_-2px_theme(colors.black/50%),0_1px_0_theme(colors.white/10%)]" />
            </motion.div>
        </div>
    );
};

export default ScrollingMacbook;
