'use client';

import { delay, motion } from 'motion/react';
import { useState } from 'react';

const parentVariant = {
    initial: {
        scale: 1,
        y: 0,
    },
    animate: {
        scale: 0.9,
        y: 10,
        transition: {
            staggerChildren: 0.01,
        },
    },
};
const transition = {
    duration: 0.3,
    ease: 'easeInOut',
};

const childVariant1 = {
    initial: {
        y: -10,
        scale: 0.8,
        opacity: 0.7,
        blur: '8px',
    },
    animate: {
        y: 70,
        scale: 1,
        opacity: 1,
        blur: '0',
        transition: {
            delay: 0.02,
            duration: 0.3,
            ease: 'easeInOut',
        },
    },
};

const childVariant2 = {
    initial: {
        y: -20,
        scale: 0.7,
        opacity: 0.4,
        blur: '8px',
    },
    animate: {
        y: 140,
        scale: 1,
        opacity: 1,
        blur: '0',
        transition: {
            delay: 0.02,
            duration: 0.3,
            ease: 'easeInOut',
        },
    },
};

const childVariant3 = {
    initial: {
        scale: 0.9,
    },
    animate: {
        scale: 1,
        transition: {
            delay: 0.02,
            duration: 0.3,
            ease: 'easeInOut',
        },
    },
};

const headVariant = {
    initial: {
        opacity: 0,
        y: 25,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.2,
            ease: 'easeIn',
            duration: 0.2,
        },
    },
};

export const IOSNotificationStack = () => {
    const [animated, setAnimated] = useState(false);

    return (
        <motion.div
            initial="initial"
            animate={animated ? 'animate' : 'initial'}
            exit="initial"
            variants={parentVariant}
            transition={transition}
            className="group relative flex h-96 w-74 flex-col items-center justify-center gap-2"
        >
            <motion.div
                variants={headVariant}
                className="flex w-full items-center justify-between px-2"
            >
                <div className="">Notifications</div>
                <button
                    className="cursor-pointer rounded-full bg-neutral-700/50 px-4 py-1 text-sm"
                    onClick={() => setAnimated(false)}
                >
                    Collapse
                </button>
            </motion.div>
            <motion.div
                className="flex h-full w-full cursor-pointer justify-center"
                onClick={() => {
                    setAnimated(!animated);
                    console.log('animated: ', animated);
                }}
            >
                <motion.div
                    variants={childVariant1}
                    transition={transition}
                    className="absolute z-10 h-16 w-72 rounded-2xl bg-white"
                ></motion.div>
                <motion.div
                    variants={childVariant2}
                    transition={transition}
                    className="absolute h-16 w-72 rounded-2xl bg-white"
                ></motion.div>
                <motion.div
                    variants={childVariant3}
                    className="absolute z-20 h-16 w-72 rounded-2xl bg-white"
                ></motion.div>
            </motion.div>
        </motion.div>
    );
};
