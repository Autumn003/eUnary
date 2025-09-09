'use client';

import { FlipWords } from '@/components/ui/flip-words';
import Link from 'next/link';
import { motion } from 'motion/react';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <div className="relative container flex flex-col items-center bg-[url(/media/whirl.svg)] bg-cover bg-center bg-no-repeat py-16 xl:flex-row xl:py-0">
            <div className="bg-primary-background/30 absolute inset-0 z-10 backdrop-blur-lg" />
            <div className="z-20 flex h-full w-full flex-col items-start justify-center xl:px-0">
                <div className="dark:text-primary-foreground text-secondary-foreground mb-6 max-w-4xl text-left text-4xl font-bold md:text-7xl">
                    Build your <br /> website with <br /> Eunary{' '}
                    <FlipWords
                        words={[
                            'modern',
                            'fast',
                            'elegant',
                            'aesthetic',
                            'sleek',
                        ]}
                        className="bg-gradient-to-r from-violet-600 via-sky-400 to-indigo-800 bg-clip-text text-transparent"
                    />
                </div>
                <p className="dark:text-secondary-foreground antialiase relative mb-8 max-w-2xl text-left text-sm leading-relaxed tracking-wide text-neutral-400 sm:text-base sm:tracking-wider">
                    Copy paste beautifully crafted, accessible components into
                    your projects. Fully styled, animated, and ready to use with
                    your favorite frameworks.
                </p>
            </div>

            {/* Attractive Hero Visual */}
            <div className="z-20 hidden h-[40rem] w-full items-center justify-center xl:flex">
                <div className="relative flex h-full w-full items-center justify-center">
                    {/* Central Hero Element */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-center">
                        {/* Glowing Ring */}
                        <div className="relative mb-8">
                            <motion.div
                                initial={{}}
                                animate={{
                                    rotate: 360,
                                    transition: {
                                        repeat: Infinity,
                                        duration: 3,
                                        ease: 'linear',
                                    },
                                }}
                                className="h-64 w-64 rounded-full bg-gradient-to-r from-violet-400 via-sky-400 to-indigo-600 p-1 opacity-30"
                            >
                                <div className="bg-primary-background h-full w-full rounded-full"></div>
                            </motion.div>

                            <div className="absolute inset-4 h-56 w-56 animate-pulse rounded-full border border-violet-500/20 dark:border-violet-300/20"></div>
                            <div className="absolute inset-8 h-48 w-48 rounded-full bg-gradient-to-br from-violet-500/10 via-sky-500/10 to-indigo-500/10 backdrop-blur-sm"></div>

                            {/* Center Icon/Logo */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 shadow-2xl">
                                    {/* Shine overlay */}
                                    <motion.div
                                        className="absolute inset-0 rotate-30 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                        initial={{ x: '-100%' }}
                                        animate={{ x: '200%' }}
                                        transition={{
                                            duration: 2,
                                            ease: 'easeInOut',
                                            repeat: Infinity,
                                            repeatDelay: 1.5,
                                            delay: 1,
                                        }}
                                    />

                                    {/* Logo image */}
                                    <Image
                                        src="/media/logo-dark.png"
                                        alt="Eunary UI, a modern component library built with React, Tailwind CSS, and Motion, providing accessible and animated components"
                                        width={100}
                                        height={100}
                                        className="relative h-20 w-20 mix-blend-lighten"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-4">
                            <Link
                                href="/components"
                                className="relative overflow-hidden rounded-full bg-gradient-to-r from-violet-400 to-indigo-400 px-8 py-3 font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl dark:from-violet-600 dark:to-indigo-600"
                            >
                                Get Started
                            </Link>
                            <Link
                                href="/docs/cli"
                                className="rounded-full border border-indigo-600/20 bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text px-8 py-3 font-semibold text-transparent transition-transform duration-300 hover:scale-105 dark:border-white/20 dark:text-white"
                            >
                                Installation
                            </Link>
                        </div>

                        {/* Stats or Features */}
                        <div className="mt-12 flex space-x-12 text-center">
                            <div className="group cursor-pointer">
                                <div className="bg-gradient-to-r from-fuchsia-400 to-indigo-400 bg-clip-text text-3xl font-bold text-transparent transition-transform duration-300 group-hover:scale-110">
                                    10+
                                </div>
                                <div className="text-sm font-semibold text-neutral-400">
                                    Components
                                </div>
                            </div>
                            <div className="group cursor-pointer">
                                <div className="bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-3xl font-bold text-transparent transition-transform duration-300 group-hover:scale-110">
                                    Copy
                                </div>
                                <div className="text-sm font-semibold text-neutral-400">
                                    & Paste
                                </div>
                            </div>
                            <div className="group cursor-pointer">
                                <div className="bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text text-3xl font-bold text-transparent transition-transform duration-300 group-hover:scale-110">
                                    99%
                                </div>
                                <div className="text-sm font-semibold text-neutral-400">
                                    Satisfaction
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Particles */}
                    <motion.div
                        initial={{}}
                        animate={{
                            transition: {
                                staggerChildren: 0.1,
                            },
                        }}
                        className="absolute inset-0 overflow-hidden"
                    >
                        <motion.div
                            initial={{
                                scale: 1,
                                opacity: 0.3,
                            }}
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.2, 0.8, 0.2],
                                transition: {
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: 'reverse',
                                    delay: 0.5,
                                    ease: 'easeInOut',
                                },
                            }}
                            className="absolute top-1/4 left-1/4 h-1.5 w-1.5 rounded-full bg-white/30"
                        />
                        <motion.div
                            initial={{
                                scale: 1,
                                opacity: 0.2,
                            }}
                            animate={{
                                scale: [1, 2.2, 1],
                                opacity: [0.2, 0.8, 0.2],
                                transition: {
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatType: 'reverse',
                                    delay: 1.8,
                                    ease: 'easeInOut',
                                },
                            }}
                            className="absolute top-1/2 left-1/3 h-1.5 w-1.5 rounded-full bg-white/20"
                        />
                        <motion.div
                            initial={{
                                scale: 1,
                                opacity: 0.5,
                            }}
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 0.9, 0.5],
                                transition: {
                                    duration: 1.8,
                                    repeat: Infinity,
                                    repeatType: 'reverse',
                                    delay: 0.3,
                                    ease: 'easeInOut',
                                },
                            }}
                            className="absolute top-1/3 right-1/3 h-1 w-1 rounded-full bg-white/50"
                        />
                        <motion.div
                            initial={{
                                scale: 1,
                                opacity: 0.25,
                            }}
                            animate={{
                                scale: [1, 1.6, 1],
                                opacity: [0.25, 0.6, 0.25],
                                transition: {
                                    duration: 2.2,
                                    repeat: Infinity,
                                    repeatType: 'reverse',
                                    delay: 2.5,
                                    ease: 'easeInOut',
                                },
                            }}
                            className="absolute top-2/4 left-4/5 h-1 w-1 rounded-full bg-white/30"
                        />
                        <motion.div
                            initial={{
                                scale: 1,
                                opacity: 0.15,
                            }}
                            animate={{
                                scale: [1, 2.5, 1],
                                opacity: [0.15, 0.5, 0.15],
                                transition: {
                                    duration: 3.5,
                                    repeat: Infinity,
                                    repeatType: 'reverse',
                                    delay: 0.1,
                                    ease: 'easeInOut',
                                },
                            }}
                            className="absolute top-1/6 right-1/5 h-0.5 w-0.5 rounded-full bg-white/35"
                        />
                    </motion.div>
                </div>
            </div>

            <div className="space-4 z-20 flex w-full flex-col gap-4 self-start sm:flex-row xl:hidden">
                <Link
                    href="/components"
                    className="overflow-hidden rounded-full bg-gradient-to-r from-violet-400 to-indigo-400 px-8 py-3 text-center font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl dark:from-violet-600 dark:to-indigo-600"
                >
                    Get Started
                </Link>
                <Link
                    href="/docs/cli"
                    className="rounded-full border border-indigo-600/20 bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text px-8 py-3 text-center font-semibold text-transparent transition-transform duration-300 hover:scale-105 dark:border-white/20 dark:text-white"
                >
                    Installation
                </Link>
            </div>
        </div>
    );
};

export default HeroSection;
