import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandX,
} from '@tabler/icons-react';
import { motion } from 'motion/react';

const cardParentVariant = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.01,
        },
    },
};

const cardChildVariant1 = {
    initial: {
        y: 0,
    },
    animate: {
        y: 210,
        transition: {
            type: 'spring',
            stiffness: 500,
            damping: 25,
        },
    },
};

const cardChildVariant2 = {
    initial: {
        y: 0,
        scale: 0.9,
    },
    animate: {
        y: 190,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 500,
            damping: 25,
        },
    },
};

const cardChildVariant3 = {
    initial: {
        y: 0,
        scale: 0.9,
    },
    animate: {
        y: 170,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 500,
            damping: 25,
        },
    },
};

const papa = {
    initial: {
        y: 0,
    },
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const beta1 = {
    initial: {
        y: 0,
        x: 0,
        opacity: 0,
        blur: '8px',
        scale: 0.5,
    },
    animate: {
        y: -140,
        x: -180,
        opacity: 1,
        blur: '0px',
        scale: 1,
        rotate: -30,
        transition: {
            type: 'spring',
            stiffness: 500,
            damping: 30,
        },
    },
};
const beta2 = {
    initial: {
        y: 0,
        x: 0,
        opacity: 0,
        blur: '8px',
        scale: 0.5,
    },
    animate: {
        y: -180,
        x: -65,
        opacity: 1,
        blur: '0px',
        scale: 1,
        rotate: -15,
        transition: {
            type: 'spring',
            stiffness: 500,
            damping: 30,
        },
    },
};
const beta3 = {
    initial: {
        y: 0,
        x: 0,
        opacity: 0,
        blur: '8px',
        scale: 0.5,
    },
    animate: {
        y: -180,
        x: 65,
        opacity: 1,
        blur: '0px',
        scale: 1,
        rotate: 15,
        transition: {
            type: 'spring',
            stiffness: 500,
            damping: 30,
        },
    },
};
const beta4 = {
    initial: {
        y: 0,
        x: 0,
        opacity: 0,
        blur: '8px',
        scale: 0.5,
    },
    animate: {
        y: -140,
        x: 180,
        opacity: 1,
        blur: '0px',
        scale: 1,
        rotate: 30,
        transition: {
            type: 'spring',
            stiffness: 500,
            damping: 30,
        },
    },
};

export const FloatingElementsCard = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="group relative flex h-[30rem] w-[32rem] flex-col items-center justify-center gap-4 overflow-hidden px-20"
        >
            <motion.div
                variants={cardParentVariant}
                className="relative flex items-center justify-center"
            >
                <motion.div
                    variants={cardChildVariant1}
                    className="absolute z-20 h-[25rem] w-[27rem] rounded-3xl border border-neutral-300 bg-neutral-50 p-4 drop-shadow-[0_0_8px_rgba(82,82,82,0.6)]"
                >
                    {children}
                </motion.div>

                <motion.div
                    variants={cardChildVariant2}
                    className="absolute z-10 h-[25rem] w-[25rem] rounded-3xl border border-neutral-300 bg-neutral-50 drop-shadow-[0_0_8px_rgba(82,82,82,0.6)]"
                ></motion.div>

                <motion.div
                    variants={cardChildVariant3}
                    className="absolute z-0 h-[25rem] w-[23rem] rounded-3xl border border-neutral-300 bg-neutral-50 drop-shadow-[0_0_8px_rgba(82,82,82,0.6)]"
                ></motion.div>
            </motion.div>

            <motion.div
                className="relative inset-0 flex items-center justify-center gap-6"
                variants={papa}
            >
                <motion.div
                    className="absolute flex h-22 w-22 items-center justify-center rounded-full bg-neutral-50 shadow-[-5px_-5px_10px_0_rgb(255,255,255),5px_5px_10px_0_rgba(82,82,82,0.25)] hover:scale-105"
                    variants={beta1}
                >
                    <IconBrandLinkedin className="h-10 w-10 text-blue-500" />
                </motion.div>
                <motion.div
                    className="absolute flex h-22 w-22 items-center justify-center rounded-full bg-neutral-50 shadow-[-5px_-5px_10px_0_rgb(255,255,255),5px_5px_10px_0_rgba(82,82,82,0.25)]"
                    variants={beta2}
                >
                    <IconBrandX className="h-10 w-10 text-neutral-900" />
                </motion.div>
                <motion.div
                    className="absolute flex h-22 w-22 items-center justify-center rounded-full bg-neutral-50 shadow-[-5px_-5px_10px_0_rgb(255,255,255),5px_5px_10px_0_rgba(82,82,82,0.25)]"
                    variants={beta3}
                >
                    <p className="bg-gradient-to-br from-fuchsia-500 to-indigo-600 bg-clip-text text-3xl font-semibold text-transparent">
                        EU
                    </p>
                </motion.div>
                <motion.div
                    className="absolute flex h-22 w-22 items-center justify-center rounded-full bg-neutral-50 shadow-[-5px_-5px_10px_0_rgb(255,255,255),5px_5px_10px_0_rgba(82,82,82,0.25)]"
                    variants={beta4}
                >
                    <IconBrandGithub className="h-10 w-10 text-neutral-900" />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};
