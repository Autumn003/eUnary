import React from 'react';
import { AnimatePresence, easeInOut, motion } from 'motion/react';

const ScrollingMacbook = () => {
    const containerVariants = {
        initial: { translateX: -50, rotateX: -75 },
        whileInView: { rotateX: 0 },
    };

    const topGlowVariants = {
        initial: { rotateX: 90, opacity: 1 },
        whileInView: { rotateX: 0, opacity: 0 },
    };

    const shineOverlayVariants = {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
    };

    return (
        <div>
            <div className="relative isolate z-20 mx-auto flex justify-center">
                <motion.div
                    className="relative isolate [perspective:1000px]"
                    data-sentry-component="MacBook"
                    data-sentry-source-file="SessionManagement.tsx"
                >
                    <motion.div
                        variants={containerVariants}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ amount: 0.2 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="absolute bottom-[calc(100%-0.0625rem)] left-1/2 flex h-[4.25rem] w-[6.5rem] origin-bottom items-center justify-center rounded-t border border-gray-600 shadow-[inset_0_0_0_2px_theme(colors.black/75%)] [--screen-off-color:theme(colors.gray.900)] [--screen-on-color:theme(colors.gray.600)] [perspective:60px] [transform-style:preserve-3d] before:absolute before:inset-[-0.0625rem] before:z-10 before:rounded-[inherit] before:bg-gradient-to-b before:from-black/40 before:from-[0.0625rem] before:to-black/80 before:transition-opacity before:duration-1000 before:group-hover:opacity-0 before:group-hover:duration-500 after:absolute after:inset-x-[-1px] after:top-0 after:-z-10 after:h-[0.125rem] after:[transform:rotateX(90deg)_translateY(-1px)] after:rounded-t-full after:bg-gray-500"
                    >
                        <motion.div
                            className="absolute inset-x-0 top-0.5 h-5 origin-top bg-gradient-to-b from-white/15 to-transparent blur-sm"
                            variants={topGlowVariants}
                            transition={{ duration: 0.4 }}
                        />

                        <motion.div
                            variants={shineOverlayVariants}
                            className="absolute inset-0 z-30 overflow-hidden rounded-[inherit] transition-opacity duration-500"
                        >
                            <div className="absolute size-[125%] -translate-x-10 -translate-y-1/2 -rotate-45 bg-gradient-to-l from-white/[0.08]"></div>
                        </motion.div>

                        <div className="p-2 shadow-[0_1px] shadow-white/5">
                            <img
                                src="/media/logo-dark.jpg"
                                alt="logo"
                                width={28}
                                height={28}
                                className="h-fit rounded-lg brightness-150"
                            />
                        </div>
                    </motion.div>

                    <div className="relative h-[0.375rem] w-[7.25rem] rounded-t-sm rounded-b-md bg-gradient-to-b from-gray-600 from-65% to-gray-700 shadow-[inset_0_1px_0px] shadow-white/10 before:absolute before:top-0 before:left-1/2 before:h-[0.125rem] before:w-[1.25rem] before:-translate-x-1/2 before:rounded-b-full before:bg-gray-700 before:shadow-[inset_2px_0_1px_-2px_theme(colors.black/50%),inset_-2px_0_1px_-2px_theme(colors.black/50%),0_1px_0_theme(colors.white/10%)]"></div>
                </motion.div>
            </div>
        </div>
    );
};

export default ScrollingMacbook;
