'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';

const cardVariants = {
    initial: {
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        rotate: 0,
        translateZ: 0,
    },
    animate: {
        rotateX: 20,
        rotateY: 20,
        rotate: -20,
        scale: 0.7,
        translateZ: 100,
        transition: {
            duration: 0.3,
            ease: 'easeInOut',
        },
    },
    exit: {
        rotateX: 0,
        rotateY: 0,
        scale: 1.2,
        translateZ: 0,
        transition: {
            duration: 0.3,
            ease: 'easeOut',
        },
    },
};

export const Abc = ({ children }: { children?: React.ReactNode }) => {
    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="group flex h-full flex-col items-center justify-center gap-4 overflow-hidden px-20"
            style={{
                perspective: 1200,
                transformStyle: 'preserve-3d',
            }}
        >
            <div className="" style={{ transformStyle: 'preserve-3d' }}>
                <AnimatePresence>
                    <motion.div
                        variants={cardVariants}
                        className={cn(
                            'h-[25rem] w-[30rem] rounded-3xl border border-neutral-300/50 bg-gradient-to-br from-neutral-50 to-neutral-100 p-4 shadow-[10px_10px_20px_0px_rgba(166,171,189,0.25),-10px_-10px_20px_0px_rgba(255,251,255,0.25)] backdrop-blur-xl dark:border-neutral-700/50 dark:from-neutral-800/90 dark:to-neutral-900/90',
                            'transform-gpu'
                        )}
                    >
                        <div className="transition-transform duration-200 ease-in-out group-hover:scale-115">
                            {children}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.div>
    );
};
