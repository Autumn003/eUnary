'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';

const ICON_SPRING_CONFIG = {
    type: 'spring' as const,
    stiffness: 500,
    damping: 30,
};

const cardVariants = {
    initial: {
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        rotate: 0,
        translateZ: 0,
    },
    animate: {
        rotateX: 30,
        rotateY: 30,
        rotate: -30,
        scale: 0.6,
        translateZ: 100, // Now properly in the variants
        transition: {
            duration: 0.3,
            ease: 'easeInOut',
        },
    },
};

const iconParentVariant = {
    initial: { y: 0 },
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const createIconVariant = (x: number, y: number, rotate: number) => ({
    initial: {
        y: 0,
        x: 0,
        opacity: 0,
        filter: 'blur(8px)',
        scale: 0.5,
    },
    animate: {
        y,
        x,
        opacity: 1,
        filter: 'blur(0px)',
        scale: 1,
        rotate,
        transition: ICON_SPRING_CONFIG,
    },
});

type iconLink = {
    icon: React.ReactNode;
    link: string;
};

interface Props {
    children?: React.ReactNode;
    icons?: iconLink[];
}

export const Abc = ({ children, icons = [] }: Props) => {
    const iconConfigs = [
        {
            variant: createIconVariant(-140, -150, -30),
            ...icons[0],
            key: '0',
        },
        {
            variant: createIconVariant(-200, 80, -15),
            ...icons[1],
            key: '1',
        },
        {
            variant: createIconVariant(60, -200, 15),
            ...icons[2],
            key: '2',
        },
        {
            variant: createIconVariant(220, -40, 30),
            ...icons[3],
            key: '3',
        },
        {
            variant: createIconVariant(100, 160, 30),
            ...icons[4], // Fixed: was icons[3] again
            key: '4', // Fixed: was '3' again
        },
    ].filter(Boolean);

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="group relative flex h-[32rem] w-[34rem] flex-col items-center justify-center gap-4 overflow-hidden px-20"
            style={{
                perspective: 1200, // Fixed: proper perspective
                transformStyle: 'preserve-3d', // Added: needed for 3D transforms
            }}
        >
            <div className="absolute" style={{ transformStyle: 'preserve-3d' }}>
                <AnimatePresence>
                    <motion.div
                        variants={cardVariants}
                        exit={{
                            rotateX: 0,
                            rotateY: 0,
                            scale: 1.2,
                            translateZ: 0, // Reset translateZ on exit
                            transition: {
                                duration: 0.5,
                                ease: 'easeInOut',
                            },
                        }}
                        className={cn(
                            'h-[25rem] w-[30rem] rounded-3xl border border-neutral-300/50 bg-gradient-to-br from-neutral-50 to-neutral-100 p-4 shadow-[10px_10px_20px_0px_rgba(166,171,189,0.25),-10px_-10px_20px_0px_rgba(255,251,255,0.25)] backdrop-blur-xl dark:border-neutral-700/50 dark:from-neutral-800/90 dark:to-neutral-900/90',
                            'transform-gpu'
                        )}
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </div>

            <motion.div
                className="relative inset-0 flex items-center justify-center gap-6"
                variants={iconParentVariant}
            >
                {iconConfigs.map(({ icon, link, variant, key }) => (
                    <motion.div
                        key={key}
                        className="absolute"
                        variants={variant}
                    >
                        <a
                            href={link || 'https://ui.eunary.com'}
                            target="_blank"
                            className={cn(
                                'flex h-22 w-22 items-center justify-center rounded-full border border-slate-200 bg-gradient-to-br from-white to-slate-100 shadow-lg shadow-neutral-900/50 backdrop-blur-sm dark:border-neutral-600/50 dark:from-neutral-700 dark:to-neutral-800 dark:shadow-neutral-600/50',
                                'origin-center transition-all duration-200 ease-out hover:scale-110'
                            )}
                        >
                            {icon}
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};
