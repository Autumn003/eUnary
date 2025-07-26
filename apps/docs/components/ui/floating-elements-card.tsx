import { cn } from '@/lib/utils';
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

// Card configuration with modern styling
const cardConfigs = [
    { width: 'w-[27rem]', zIndex: 'z-20', hasContent: true },
    { width: 'w-[25rem]', zIndex: 'z-10', hasContent: false },
    { width: 'w-[23rem]', zIndex: 'z-0', hasContent: false },
];

type iconLink = {
    icon: React.ReactNode;
    link: string;
};

interface Props {
    children: React.ReactNode;
    icons: iconLink[];
}

export const FloatingElementsCard = ({ children, icons = [] }: Props) => {
    const iconConfigs = [
        {
            variant: createIconVariant(-180, -120, -30),
            ...icons[0],
            key: '0',
        },
        {
            variant: createIconVariant(-65, -160, -15),
            ...icons[1],
            key: '1',
        },
        {
            variant: createIconVariant(65, -160, 15),
            ...icons[2],
            key: '2',
        },
        {
            variant: createIconVariant(180, -120, 30),
            ...icons[3],
            key: '3',
        },
    ].filter(Boolean);

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
                            'absolute h-[25rem] rounded-3xl border border-neutral-300/50 bg-gradient-to-br from-neutral-50 to-neutral-100 shadow-[0_0_10px_2px_rgba(83,83,83,0.15)] backdrop-blur-xl group-hover:shadow-[0_-5px_10px_2px_rgba(83,83,83,0.15)] dark:border-neutral-700/50 dark:from-neutral-800/90 dark:to-neutral-900/90',
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
            <div className="absolute bottom-0 z-50 hidden h-24 w-full bg-gradient-to-t from-white to-transparent group-hover:block dark:from-black"></div>
        </motion.div>
    );
};
