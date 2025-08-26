'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Upload, Bell, Laptop, Layers } from 'lucide-react';

import ScrollingMacbook from '@/components/ui/scrolling-macbook';
import { FlipWords } from '@/components/ui/flip-words';
import { FileUpload } from '@/components/ui/file-upload';
import { IOSNotificationsStack } from '@/components/ui/ios-notifications-stack';
import { FloatingElementsCardDemo } from '@/demo';
import { IconPointerFilled } from '@tabler/icons-react';

const notifications = [
    {
        id: 1,
        title: '🎧 New Music Drop',
        description:
            'Your favorite artist just released a new track. Listen now!',
    },
    {
        id: 2,
        title: '🎉 You’ve Hit a Streak!',
        description:
            'You’ve completed your tasks 5 days in a row. Keep it going!',
    },
    {
        id: 3,
        title: '🔥 Trending Now',
        description:
            'A post you liked is going viral! See what people are saying.',
    },
];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0
    },
};

export default function UIShowcase() {
    return (
        <div className="py-16">
            <div className="from-primary-background relative min-h-screen overflow-hidden bg-gradient-to-br via-gray-200/60 to-gray-200 dark:from-black dark:via-neutral-900 dark:to-neutral-950/50">
                <div className="from-primary-background absolute top-0 z-10 h-20 w-full bg-gradient-to-b to-transparent" />
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl"></div>
                    <div className="absolute top-2/3 left-2/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-cyan-500/10 blur-3xl"></div>
                    <div className="absolute top-1/3 left-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-cyan-500/10 blur-3xl"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-16 text-center"
                    >
                        <h3 className="to mb-6 bg-gradient-to-r from-gray-100 via-gray-500 to-gray-800 bg-clip-text text-xl font-bold text-transparent sm:text-4xl dark:from-white dark:via-gray-200 dark:to-gray-400">
                            <FlipWords
                                words={[
                                    'Modern',
                                    'Beautiful',
                                    'Elegant',
                                    'Interactive',
                                    'Stunning',
                                ]}
                                className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                            />
                            <br />
                            UI Components
                        </h3>
                        <p className="text-secondary-foreground mx-auto max-w-2xl leading-relaxed">
                            Discover a collection of beautifully crafted,
                            interactive UI components built with React, Framer
                            Motion, and modern design principles.
                        </p>
                    </motion.div>

                    {/* Bento Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                    >
                        {/* Scrolling Macbook card */}
                        <motion.div
                            variants={itemVariants}
                            transition={ {
            duration: 0.6,
            ease: [0.215, 0.61, 0.355, 1],
        }}
                            className="group rounded-3xl border border-black/10 bg-black/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-black/20 hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10"
                        >
                            <div className="mb-4 flex items-center">
                                <Laptop
                                    className="mr-3 text-blue-400"
                                    size={24}
                                />
                                <h3 className="text-xl font-semibold">
                                    Scrolling MacBook
                                </h3>
                            </div>
                            <p className="mb-6 text-gray-400">
                                Interactive 3D MacBook with scroll-triggered
                                animations and hover effects.
                            </p>
                            <div className="flex h-full w-full items-center py-24">
                                <ScrollingMacbook className="flex flex-col items-center justify-center">
                                    <div className="h-full w-full bg-[url(/media/mc-drk.png)] bg-cover bg-center" />
                                </ScrollingMacbook>
                            </div>
                        </motion.div>

                        {/* Floating Elements Card - Large Card */}
                        <motion.div
                            variants={itemVariants}
                            transition={ {
            duration: 0.6,
            ease: [0.215, 0.61, 0.355, 1],
        }}
                            className="group rounded-3xl border border-black/10 bg-black/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-black/20 hover:bg-black/10 lg:col-span-2 lg:row-span-2 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10"
                        >
                            <div className="mb-4 flex items-center">
                                <Layers
                                    className="mr-3 text-purple-400"
                                    size={20}
                                />
                                <h3 className="text-lg font-semibold">
                                    Floating Elements Card
                                </h3>
                            </div>
                            <p className="mb-4 text-sm text-gray-400">
                                Interactive card with floating animated elements
                                that respond to hover.
                            </p>
                            <div className="overflow-hidden rounded-3xl">
                                <FloatingElementsCardDemo />
                            </div>
                        </motion.div>

                        {/* Flip Word Card */}
                        <motion.div
                            variants={itemVariants}
                            transition={ {
            duration: 0.6,
            ease: [0.215, 0.61, 0.355, 1],
        }}
                            className="group rounded-3xl border border-black/10 bg-black/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-black/20 hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10"
                        >
                            <div className="mb-4 flex items-center">
                                <Code
                                    className="mr-3 text-cyan-400"
                                    size={20}
                                />
                                <h3 className="text-lg font-semibold">
                                    Flip Words
                                </h3>
                            </div>
                            <p className="mb-6 text-sm text-gray-400">
                                Animated text that cycles through words with
                                smooth transitions in a sentence.
                            </p>
                            <div className="text-center">
                                <div className="text-4xl font-bold">
                                    <span className="text-neutral-500 dark:text-white">
                                        Make your product{' '}
                                    </span>
                                    <FlipWords
                                        words={[
                                            'Amazing',
                                            'Stunning',
                                            'Beautiful',
                                            'Elegant',
                                            'Modern',
                                        ]}
                                        className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* File Upload Card */}
                        <motion.div
                            variants={itemVariants}
                            transition={ {
            duration: 0.6,
            ease: [0.215, 0.61, 0.355, 1],
        }}
                            className="group rounded-3xl border border-black/10 bg-black/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-black/20 hover:bg-black/10 lg:col-span-2 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10"
                        >
                            <div className="mb-4 flex items-center">
                                <Upload
                                    className="mr-3 text-orange-400"
                                    size={20}
                                />
                                <h3 className="text-lg font-semibold">
                                    File Upload
                                </h3>
                            </div>
                            <p className="mb-4 text-sm text-gray-400">
                                Drag & drop file upload with animations.
                            </p>
                            <FileUpload />
                        </motion.div>

                        {/* Notifications Card */}
                        <motion.div
                            variants={itemVariants}
                            transition={ {
            duration: 0.6,
            ease: [0.215, 0.61, 0.355, 1],
        }}
                            className="group rounded-3xl border border-black/10 bg-black/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-black/20 hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10"
                        >
                            <div className="mb-4 flex items-center">
                                <Bell
                                    className="mr-3 text-green-400"
                                    size={20}
                                />
                                <h3 className="text-lg font-semibold">
                                    iOS Notifications
                                </h3>
                            </div>
                            <p className="mb-4 text-sm text-gray-400">
                                Stack of notifications with iOS-style
                                animations.
                            </p>
                            <p className="text-primary-foreground mx-auto flex items-center gap-2 text-sm font-semibold">
                                Click to expand
                                <IconPointerFilled className="h-4 w-4" />
                            </p>
                            <div className="relative flex h-72 w-full flex-col items-center justify-center">
                                <IOSNotificationsStack
                                    notifications={notifications}
                                    className="px-8 py-6"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
                <div className="from-primary-background absolute bottom-0 z-10 h-20 w-full bg-gradient-to-t to-transparent" />
            </div>
        </div>
    );
}
