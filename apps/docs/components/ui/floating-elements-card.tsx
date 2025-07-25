import { cn } from '@/lib/utils';
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandX,
} from '@tabler/icons-react';
import { motion } from 'motion/react';

const SPRING_CONFIG = {
    type: 'spring' as const,
    stiffness: 500,
    damping: 25,
};

const ICON_SPRING_CONFIG = {
    type: 'spring' as const,
    stiffness: 500,
    damping: 30,
};

const cardParentVariant = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.01,
        },
    },
};

// Generate card variants dynamically
const createCardVariant = (yOffset: number, scale = 1) => ({
    initial: { y: 0, scale: scale === 1 ? undefined : 0.9 },
    animate: {
        y: yOffset,
        scale,
        transition: SPRING_CONFIG,
    },
});

const cardVariants = [
    createCardVariant(210),
    createCardVariant(190, 1),
    createCardVariant(170, 1),
];

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

// Icon configuration with modern colors
const iconConfigs = [
    {
        variant: createIconVariant(-180, -120, -30),
        icon: <IconBrandLinkedin className="h-10 w-10 text-blue-400" />,
        key: 'linkedin',
    },
    {
        variant: createIconVariant(-65, -160, -15),
        icon: (
            <IconBrandX className="h-10 w-10 text-neutral-800 dark:text-neutral-50" />
        ),
        key: 'x',
    },
    {
        variant: createIconVariant(65, -160, 15),
        icon: (
            <p className="bg-gradient-to-br from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-3xl font-bold text-transparent">
                EU
            </p>
        ),
        key: 'custom',
    },
    {
        variant: createIconVariant(180, -120, 30),
        icon: (
            <IconBrandGithub className="h-10 w-10 text-neutral-600 dark:text-neutral-300" />
        ),
        key: 'github',
    },
];

// Card configuration with modern styling
const cardConfigs = [
    { width: 'w-[27rem]', zIndex: 'z-20', hasContent: true },
    { width: 'w-[25rem]', zIndex: 'z-10', hasContent: false },
    { width: 'w-[23rem]', zIndex: 'z-0', hasContent: false },
];

const baseCardClasses =
    'absolute h-[25rem] rounded-3xl border dark:border-neutral-700/50 border-neutral-300/50 bg-gradient-to-br dark:from-neutral-800/90 dark:to-neutral-900/90 from-neutral-50 to-neutral-100 backdrop-blur-xl shadow-xl shadow-neutral-900/25';

const iconBaseClasses =
    'absolute flex h-22 w-22 items-center justify-center rounded-full bg-gradient-to-br from-white dark:from-neutral-700 to-slate-100 dark:to-neutral-800 border border-slate-200 dark:border-neutral-600/50 shadow-lg shadow-neutral-900/50 dark:shadow-neutral-600/50 backdrop-blur-sm';

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
                {cardConfigs.map((config, index) => (
                    <motion.div
                        key={`card-${index}`}
                        variants={cardVariants[index]}
                        className={cn(
                            baseCardClasses,
                            config.width,
                            config.zIndex,
                            config.hasContent ? 'p-4' : ''
                        )}
                    >
                        {config.hasContent && children}
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                className="relative inset-0 flex items-center justify-center gap-6"
                variants={iconParentVariant}
            >
                {iconConfigs.map((config) => (
                    <motion.div
                        key={config.key}
                        className={cn(iconBaseClasses)}
                        variants={config.variant}
                    >
                        {config.icon}
                    </motion.div>
                ))}
            </motion.div>
            <div className="absolute bottom-0 z-50 hidden h-24 w-full bg-gradient-to-t from-white to-transparent group-hover:block dark:from-black"></div>
        </motion.div>
    );
};
