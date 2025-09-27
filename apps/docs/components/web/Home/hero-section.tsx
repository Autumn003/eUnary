'use client';

import { FlipWords } from '@/components/ui/flip-words';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
    IconArrowRight,
    IconBlocks,
    IconTemplate,
    IconTerminal,
} from '@tabler/icons-react';
import { QuickAccessCard } from '@/components/ui/quick-access-card';
import { ProgressCard } from '@/components/ui/progress-card';

const ProgressTasks = [
    {
        icon: IconBlocks,
        label: 'Components',
        completed: 12,
        total: 15,
    },
    {
        icon: IconTemplate,
        label: 'Template',
        completed: 1,
        total: 4,
    },
];

const HeroSection = () => {
    return (
        <div className="relative container flex h-full flex-col items-center bg-[url(/media/whirl.svg)] bg-cover bg-center bg-no-repeat py-16 xl:flex-row">
            <div className="bg-primary-background/30 absolute inset-0 z-10 backdrop-blur-lg" />
            <div className="z-20 flex h-full w-full flex-col items-start justify-center px-8 md:px-0">
                <div className="dark:text-primary-foreground text-secondary-foreground mb-6 max-w-4xl text-left text-4xl font-bold md:text-7xl">
                    Build your <br /> website with <br /> Eunary{' '}
                    <FlipWords
                        words={[
                            'modern',
                            'fast',
                            'beautiful',
                            'aesthetic',
                            'sleek',
                        ]}
                        className="bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-600 bg-clip-text text-transparent"
                    />
                </div>
                <p className="dark:text-secondary-foreground antialiase relative mb-8 max-w-2xl text-left text-sm leading-relaxed tracking-wide text-neutral-400 sm:text-base sm:tracking-wider">
                    Beautiful, accessible, and highly customizable React
                    components that help you build modern interfaces with
                    extraordinary speed.
                </p>
                <div className="flex w-full flex-col gap-4 sm:flex-row sm:px-0">
                    <Link
                        href="/components"
                        className="group to flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-400 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_25px_40px_rgba(97,95,255,0.5)] dark:from-indigo-500 dark:to-indigo-800"
                    >
                        Get Started
                        <IconArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                        href="/docs/cli"
                        className="group flex items-center justify-center gap-2 rounded-full border border-indigo-400 bg-indigo-400/10 px-8 py-4 text-lg font-semibold text-indigo-500 backdrop-blur-sm transition-all duration-300 hover:scale-105 dark:border-white/20 dark:bg-white/5 dark:text-white"
                    >
                        Installation
                        <IconTerminal className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>

            {/* Attractive Hero Visual */}
            <div className="no-scrollbar z-20 hidden h-full w-full items-center justify-center overflow-x-visible overflow-y-hidden xl:block">
                <div className="full ml-10 flex h-full gap-4 py-6">
                    <motion.div
                        initial={{
                            y: -10,
                        }}
                        animate={{
                            y: 10,
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 2,
                            repeatType: 'reverse',
                        }}
                        className="flex flex-col gap-4"
                    >
                        <div className="">
                            <ProgressCard
                                title="Performance Score"
                                description="Optimized components with fast loading time and smooth
                        user interactions."
                                percentage={92}
                                themeColor="#615FFF"
                            />
                        </div>
                        <div className="">
                            <ProgressCard
                                title="Development Progress"
                                tasks={ProgressTasks}
                                themeColor="#615FFF"
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{
                            y: 10,
                        }}
                        animate={{
                            y: -10,
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 2.5,
                            repeatType: 'reverse',
                        }}
                        className="w-full"
                    >
                        <QuickAccessCard />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
