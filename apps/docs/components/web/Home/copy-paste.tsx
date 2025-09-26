'use client';

import { Copy, Check, Command, Folder } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FeaturedGlobe } from '@/components/ui/featured-globe';

const CopyPaste = () => {
    const [copiedStep, setCopiedStep] = useState(0);

    // Auto-animate the copy-paste steps
    useEffect(() => {
        const interval = setInterval(() => {
            setCopiedStep((prev) => (prev + 1) % 4); // 0, 1, 2, 3, then back to 0
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    const stepVariants = {
        idle: { scale: 1, opacity: 0.7 },
        active: {
            scale: 1.05,
            opacity: 1,
        },
        completed: {
            scale: 1,
            opacity: 1,
        },
    };

    const getStepState = (stepIndex: number) => {
        if (copiedStep === 0) return 'idle';
        if (stepIndex < copiedStep) return 'completed';
        if (stepIndex === copiedStep) return 'active';
        return 'idle';
    };

    const getLineHeight = () => {
        if (copiedStep === 0) return 0;
        if (copiedStep === 1) return 0;
        if (copiedStep === 2) return '33%';
        return 'calc(100% - 4rem)';
    };

    return (
        <div className="relative z-10 container mx-auto px-6 py-20">
            <div className="from-muted-background/50 absolute inset-0 -z-10 h-full bg-gradient-to-b to-transparent" />
            {/* Header */}
            <motion.div
                className="mb-15 text-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
            >
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-2xl font-semibold sm:text-4xl">
                        {/* As simple as copy and paste */}
                        Ready-to-use Components
                    </h2>
                    <p className="text-secondary-foreground mx-auto max-w-2xl">
                        {/* Just drop the code into your ui folder and start using
                        the components in your projects. It's that easy! */}
                        Simply copy the code into your{' '}
                        <span className="bg-muted-foreground/70 my-0.5 rounded-md px-1">
                            ui
                        </span>{' '}
                        folder and start importing components right away — no
                        extra setup
                    </p>
                </div>
            </motion.div>

            {/* Method Toggle */}
            <motion.div
                className="mb-16 flex justify-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
            >
                <motion.div
                    className="border-muted-foreground inline-flex rounded-full border bg-gray-200/50 p-1 backdrop-blur-xl dark:bg-gray-800/30"
                    variants={itemVariants}
                    transition={{
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                >
                    <div className="flex items-center gap-1">
                        <div className="rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-3 text-center text-sm font-medium text-blue-400 transition-all duration-300">
                            Copy & Paste
                        </div>
                        <div className="text-secondary-foreground flex items-center gap-2 px-4 text-sm">
                            <span>or</span>
                        </div>
                        <div className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-6 py-3 text-center text-sm font-medium text-indigo-400 transition-all duration-300">
                            CLI Command
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Demo Section */}
            <motion.div
                className="flex flex-col items-center justify-center gap-12 lg:flex-row lg:gap-20"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
            >
                {/* Left Panel - Component Preview */}
                <motion.div
                    className="relative"
                    variants={itemVariants}
                    transition={{
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    whileHover={{ scale: 1.02 }}
                >
                    <motion.div
                        className="rounded-xl border border-gray-700/50 bg-gray-900/80 p-1 shadow-2xl backdrop-blur-xl"
                        animate={{
                            boxShadow: [
                                '0 25px 50px -12px rgba(94, 95, 255, 0.20)',
                                // '0 25px 50px -12px rgba(59, 130, 246, 0.15)',
                                '0 25px 50px -12px rgba(94, 95, 255, 0.15)',
                                '0 25px 50px -12px rgba(94, 95, 255, 0.20)',
                            ],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        {/* Mock Browser Header */}
                        <div className="flex items-center gap-2 border-b border-gray-700/50 p-3">
                            <motion.div
                                className="h-3 w-3 rounded-full bg-red-500"
                                whileHover={{ scale: 1.2 }}
                            />
                            <motion.div
                                className="h-3 w-3 rounded-full bg-yellow-500"
                                whileHover={{ scale: 1.2 }}
                            />
                            <motion.div
                                className="h-3 w-3 rounded-full bg-green-500"
                                whileHover={{ scale: 1.2 }}
                            />
                            <div className="ml-auto text-xs text-gray-400">
                                Component Preview
                            </div>
                        </div>

                        {/* Testimonial Component */}
                        <div className="h-96 w-full overflow-hidden rounded-b-lg bg-gradient-to-br from-gray-800/50 to-gray-900/50 py-2 sm:w-xl">
                            {/* <RevealPane
                                leftImgSrc="/media/floating-elements-card.png"
                                rightImgSrc="/media/sample-code.png"
                                autoplay={true}
                                slideDirection="right"
                                duration={4}
                                loop={true}
                            /> */}
                            <FeaturedGlobe />
                        </div>
                    </motion.div>
                </motion.div>

                {/* Copy Paste Visual */}
                <motion.div
                    className="relative"
                    variants={itemVariants}
                    transition={{
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                >
                    <div className="relative lg:max-w-sm">
                        <div className="flex flex-col gap-14">
                            {/* Step 1 */}
                            <motion.div
                                className="relative flex items-center gap-6"
                                animate={getStepState(1)}
                            >
                                <motion.div
                                    className="z-10 flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-lg"
                                    variants={stepVariants}
                                    transition={{
                                        delay: 0.4,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    <Copy className="h-4 w-4 text-blue-400" />
                                </motion.div>
                                <motion.div
                                    className="flex-1"
                                    variants={stepVariants}
                                    transition={{
                                        delay: 0.4,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    <h4 className="text-lg font-semibold">
                                        Copy the component
                                    </h4>
                                    <p className="text-secondary-foreground text-sm">
                                        Select and copy the component code.
                                    </p>
                                </motion.div>
                                <div className="flex w-8 justify-center">
                                    {copiedStep >= 1 && (
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                scale: 0,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                scale: 1,
                                            }}
                                            exit={{ opacity: 0, scale: 0 }}
                                            transition={{ delay: 0.7 }}
                                            className="rounded-full border border-emerald-400 bg-emerald-300/20 p-0.5"
                                        >
                                            <Check className="h-3 w-3 text-emerald-400" />
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>

                            {/* Step 2 */}
                            <motion.div
                                className="relative flex items-center gap-6"
                                animate={getStepState(2)}
                            >
                                <motion.div
                                    className="z-10 flex h-10 w-10 items-center justify-center rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-lg"
                                    variants={stepVariants}
                                    transition={{
                                        delay: 0.4,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    <Folder className="h-4 w-4 text-indigo-400" />
                                </motion.div>
                                <motion.div
                                    className="flex-1"
                                    variants={stepVariants}
                                    transition={{
                                        delay: 0.4,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    <h4 className="text-lg font-semibold">
                                        Drop into your UI folder
                                    </h4>
                                    <p className="text-secondary-foreground text-sm">
                                        Paste it into your components directory.
                                    </p>
                                </motion.div>
                                <div className="flex w-8 justify-center">
                                    {copiedStep >= 2 && (
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                scale: 0,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                scale: 1,
                                            }}
                                            exit={{ opacity: 0, scale: 0 }}
                                            transition={{ delay: 0.7 }}
                                            className="rounded-full border border-emerald-400 bg-emerald-300/20 p-0.5"
                                        >
                                            <Check className="h-3 w-3 text-emerald-400" />
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>

                            {/* Step 3 */}
                            <motion.div
                                className="relative flex items-center gap-6"
                                animate={getStepState(3)}
                            >
                                <motion.div
                                    className="z-10 flex h-10 w-10 items-center justify-center rounded-full border border-green-500/30 bg-green-500/20 backdrop-blur-lg"
                                    variants={stepVariants}
                                    transition={{
                                        delay: 0.4,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    <Check className="h-4 w-4 text-green-400" />
                                </motion.div>
                                <motion.div
                                    className="flex-1"
                                    variants={stepVariants}
                                    transition={{
                                        delay: 0.4,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    <h4 className="text-lg font-semibold">
                                        Start using immediately
                                    </h4>
                                    <p className="text-secondary-foreground text-sm">
                                        Import and use in your projects.
                                    </p>
                                </motion.div>
                                <div className="flex w-8 justify-center">
                                    {copiedStep >= 3 && (
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                scale: 0,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                scale: 1,
                                            }}
                                            exit={{ opacity: 0, scale: 0 }}
                                            transition={{ delay: 0.7 }}
                                            className="rounded-full border border-emerald-400 bg-emerald-400/10 p-0.5"
                                        >
                                            <Check className="h-3 w-3 text-emerald-400" />
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        </div>

                        {/* Animated connecting line */}
                        <motion.div
                            className="absolute top-10 left-5 w-px bg-gradient-to-b from-blue-500/30 via-indigo-500/30 to-green-500/30"
                            initial={{ height: 0 }}
                            animate={{
                                height: getLineHeight(),
                            }}
                            transition={{
                                duration: 0.8,
                                ease: 'easeInOut',
                                type: 'tween',
                            }}
                        />
                    </div>
                </motion.div>
            </motion.div>

            {/* CLI Alternative Section */}
            <motion.div
                className="mt-20 text-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
            >
                <motion.div
                    className="mb-8 inline-flex items-center gap-3"
                    variants={itemVariants}
                    transition={{
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                >
                    <div className="h-px w-20 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
                    <span className="text-secondary-foreground text-sm font-medium">
                        OR USE CLI
                    </span>
                    <div className="h-px w-20 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
                </motion.div>

                <motion.div
                    className="mx-auto max-w-2xl"
                    variants={itemVariants}
                    transition={{
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                >
                    <h2 className="text-secondary-foreground dark:text-primary-foreground mb-4 text-base font-semibold sm:text-2xl">
                        Even simpler with CLI
                    </h2>
                    <p className="mx-auto mb-8 max-w-xl text-sm text-neutral-400 sm:text-base">
                        Install components directly from your terminal with a
                        single command
                    </p>

                    <motion.div
                        className="mx-auto max-w-lg rounded-xl border border-gray-700/50 bg-gray-900/80 p-6 text-left backdrop-blur-xl"
                        whileHover={{
                            scale: 1.02,
                            boxShadow:
                                '0 25px 50px -12px rgba(59, 130, 246, 0.15)',
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="mb-4 flex items-center gap-2">
                            <div className="flex gap-1">
                                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                            </div>
                            <span className="ml-auto text-sm text-gray-400">
                                Terminal
                            </span>
                        </div>

                        <div className="font-mono">
                            <div className="mb-2 flex items-center gap-2">
                                <span className="text-gray-500">$</span>
                                <motion.span
                                    className="text-indigo-500"
                                    animate={{
                                        opacity: [0.5, 1, 0.5],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    npx ui-components add testimonial-card
                                </motion.span>
                            </div>
                            <motion.div
                                className="text-sm text-green-400"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.5 }}
                            >
                                ✓ Component installed successfully
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="mt-6 flex justify-center"
                        variants={itemVariants}
                        transition={{
                            duration: 0.6,
                            ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                    >
                        <motion.button
                            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-400 px-6 py-3 font-medium text-white dark:to-indigo-800"
                            initial={{
                                boxShadow:
                                    '0 12px 30px -12px rgba(97, 95, 255, 0.4)',
                            }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow:
                                    '0 12px 50px 0px rgba(94, 95, 255, 0.4)',
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Command className="h-4 w-4" />
                            Copy CLI Command
                        </motion.button>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Bottom Features */}
            <motion.div
                className="mx-auto mt-24 grid max-w-4xl justify-center gap-8 md:grid-cols-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
            >
                {[
                    {
                        icon: Copy,
                        title: 'One-Click Copy',
                        description:
                            'Copy any component with a single click and paste it directly into your project.',
                        color: 'blue',
                    },
                    {
                        icon: Command,
                        title: 'Zero Setup',
                        description:
                            'No complex installation or configuration. Just drop and go.',
                        color: 'indigo',
                    },
                    {
                        icon: Check,
                        title: 'Ready to Use',
                        description:
                            'Every component is production-ready with proper styling and functionality.',
                        color: 'green',
                    },
                ].map((feature, index) => (
                    <motion.div
                        key={index}
                        className="flex cursor-pointer items-center gap-4 md:flex-col"
                        variants={itemVariants}
                        transition={{
                            duration: 0.6,
                            ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        whileHover={{ y: -5 }}
                    >
                        <motion.div
                            className={`flex min-h-10 min-w-10 items-center justify-center rounded-xl transition-all duration-300 md:mx-auto md:h-16 md:w-16 md:rounded-2xl ${
                                feature.color === 'blue'
                                    ? 'border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-blue-600/20'
                                    : feature.color === 'indigo'
                                      ? 'border border-indigo-500/30 bg-gradient-to-br from-indigo-500/20 to-indigo-600/20'
                                      : 'border border-green-500/30 bg-gradient-to-br from-green-500/20 to-green-600/20'
                            }`}
                        >
                            <feature.icon
                                className={`h-4 w-4 md:h-8 md:w-8 ${
                                    feature.color === 'blue'
                                        ? 'text-blue-400'
                                        : feature.color === 'indigo'
                                          ? 'text-indigo-400'
                                          : 'text-green-400'
                                }`}
                            />
                        </motion.div>
                        <div className="md:text-center">
                            <h3 className="text-secondary-foreground mb-2 font-semibold md:text-xl">
                                {feature.title}
                            </h3>
                            <p className="text-muted-foreground text-xs md:text-sm">
                                {feature.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default CopyPaste;
