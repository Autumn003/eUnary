'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { IconChevronRight } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

interface SlideData {
    title: string;
    navigationLink?: string;
    navigationTitle?: string;
    imageSrc: string;
}

interface carouselProps {
    slides: SlideData[];
    className?: string;
}

// Slide animation variants for center image
const slideVariants = {
    enter: (direction: number) => ({}),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
    },
    exit: (direction: number) => ({
        x: direction < 0 ? 400 : -400,
        opacity: 0.7,
        scale: 0.75,
    }),
};

// Side images animation variants with direction-based movement
const leftSideVariants = {
    enter: (direction: number) => ({
        x: direction < 0 ? -450 : -400,
        opacity: direction < 0 ? 0 : 0.7,
        scale: direction < 0 ? 0.7 : 0.75,
    }),
    center: {
        x: -400,
        opacity: 0.7,
        scale: 0.75,
    },
    exit: (direction: number) => ({
        x: direction < 0 ? 0 : -600,
        opacity: direction < 0 ? 1 : 0,
        scale: direction < 0 ? 1 : 0.6,
    }),
};

const rightSideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 450 : 400,
        opacity: direction > 0 ? 0 : 0.7,
        scale: direction > 0 ? 0.7 : 0.75,
    }),
    center: {
        x: 400,
        opacity: 0.7,
        scale: 0.75,
    },
    exit: (direction: number) => ({
        x: direction > 0 ? 0 : 600,
        opacity: direction > 0 ? 1 : 0,
        scale: direction > 0 ? 1 : 0.6,
    }),
};

export const Carousel = ({ className, slides }: carouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const goToPrevious = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const getPreviousIndex = () => {
        return currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    };

    const getNextIndex = () => {
        return currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    };

    const currentSlide = slides[currentIndex];

    return (
        <div className={cn('h-full w-full', className)}>
            <div className="relative flex h-72 w-full items-center justify-center md:h-96">
                <div className="relative h-full w-full">
                    {/* Left side image with directional animation */}
                    {slides.length > 1 && (
                        <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 cursor-pointer sm:block">
                            <AnimatePresence
                                initial={false}
                                custom={direction}
                                mode="wait"
                            >
                                <motion.div
                                    key={`left-${getPreviousIndex()}`}
                                    custom={direction}
                                    variants={leftSideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: {
                                            ease: 'easeInOut',
                                        },
                                        opacity: { duration: 0.3 },
                                        scale: { duration: 0.3 },
                                    }}
                                    onClick={goToPrevious}
                                    whileHover={{ scale: 0.8, opacity: 0.6 }}
                                    className="group relative overflow-hidden rounded-4xl"
                                >
                                    <Image
                                        src={
                                            slides[getPreviousIndex()]
                                                ?.imageSrc || ''
                                        }
                                        alt={`Previous image - ${slides[getPreviousIndex()]?.title}`}
                                        width={500}
                                        height={500}
                                        className="h-72 w-72 object-cover shadow-2xl md:h-96 md:w-96"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    )}

                    {/* Center/Main image with sliding animation */}
                    <div className="z-10 flex items-center justify-center rounded-md sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
                        <div className="relative">
                            <AnimatePresence
                                initial={false}
                                custom={direction}
                                mode="wait"
                            >
                                <motion.div
                                    key={currentIndex}
                                    custom={direction}
                                    variants={slideVariants}
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: {
                                            ease: 'easeInOut',
                                        },
                                        opacity: { duration: 0.3 },
                                        scale: { duration: 0.3 },
                                    }}
                                    className="relative overflow-hidden rounded-4xl"
                                >
                                    <Image
                                        src={currentSlide?.imageSrc || ''}
                                        alt={`Main image - ${currentSlide?.title}`}
                                        width={500}
                                        height={500}
                                        className="h-72 w-72 object-cover shadow-2xl md:h-96 md:w-96"
                                    />
                                    {/* Image overlay with subtle gradient */}
                                    <motion.div
                                        className="absolute inset-0 flex h-full w-full items-end justify-center bg-gradient-to-t from-black/60 via-transparent to-transparent"
                                        initial={{
                                            opacity: 0,
                                        }}
                                        animate={{
                                            opacity: 1,
                                        }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <motion.div className="flex w-full flex-col items-center gap-4 p-4 text-white">
                                            <motion.h2 className="line-clamp-1 text-center text-2xl leading-tight font-semibold break-words hyphens-auto md:text-3xl">
                                                {currentSlide?.title}
                                            </motion.h2>
                                            {/* Fixed navigation link */}
                                            {currentSlide?.navigationLink &&
                                                currentSlide?.navigationTitle && (
                                                    <Link
                                                        href={
                                                            currentSlide.navigationLink
                                                        }
                                                        className="relative rounded-full bg-white/20 px-4 py-2 text-gray-200 backdrop-blur-md transition-all duration-200 hover:bg-white/30 hover:text-white"
                                                    >
                                                        {
                                                            currentSlide.navigationTitle
                                                        }
                                                    </Link>
                                                )}
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right side image with directional animation */}
                    {slides.length > 1 && (
                        <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 cursor-pointer sm:block">
                            <AnimatePresence
                                initial={false}
                                custom={direction}
                                mode="wait"
                            >
                                <motion.div
                                    key={`right-${getNextIndex()}`}
                                    custom={direction}
                                    variants={rightSideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: {
                                            ease: 'easeInOut',
                                        },
                                        opacity: { duration: 0.3 },
                                        scale: { duration: 0.3 },
                                    }}
                                    onClick={goToNext}
                                    whileHover={{ scale: 0.8, opacity: 0.6 }}
                                    className="group relative overflow-hidden rounded-4xl"
                                >
                                    <Image
                                        src={
                                            slides[getNextIndex()]?.imageSrc ||
                                            ''
                                        }
                                        alt={`Next image - ${slides[getNextIndex()]?.title}`}
                                        width={500}
                                        height={500}
                                        className="h-72 w-72 object-cover shadow-2xl md:h-96 md:w-96"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    )}
                </div>
            </div>

            {/* Navigation buttons */}
            {slides.length > 1 && (
                <div className="mt-4 flex items-center justify-center gap-8">
                    <motion.button
                        onClick={goToPrevious}
                        className="flex items-center justify-center rounded-full bg-neutral-200 p-3 text-neutral-800 shadow-lg hover:bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-600"
                        aria-label="Previous image"
                        whileHover={{
                            scale: 1.1,
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        <IconChevronRight className="h-6 w-6 rotate-180" />
                    </motion.button>

                    <motion.button
                        onClick={goToNext}
                        className="flex items-center justify-center rounded-full bg-neutral-200 p-3 text-neutral-800 shadow-lg hover:bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-600"
                        aria-label="Next image"
                        whileHover={{
                            scale: 1.1,
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        <IconChevronRight className="h-6 w-6" />
                    </motion.button>
                </div>
            )}
        </div>
    );
};
