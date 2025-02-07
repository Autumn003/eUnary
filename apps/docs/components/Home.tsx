'use client';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import AutoScrollingGallery from './AutoScrollingGallery';

export default function Home() {
    const words = ['modern', 'fast', 'elegant', 'aesthetic', 'sleek'];

    const [currentWord, setCurrentWord] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prevWord) => (prevWord + 1) % words.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="">
            <div className="container flex items-center">
                <div className="flex h-96 w-full flex-col items-start justify-center px-8 xl:px-0">
                    <h1 className="dark:text-primary-foreground text-secondary-foreground relative mb-6 max-w-4xl text-left text-4xl font-bold md:text-7xl">
                        Build your website with Eunary
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentWord}
                                className="absolute ml-2 h-20 bg-gradient-to-r from-violet-600 via-sky-400 to-indigo-800 bg-clip-text text-transparent"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{
                                    duration: 0.5,
                                    ease: 'easeInOut',
                                }}
                            >
                                {words[currentWord]}
                            </motion.span>
                        </AnimatePresence>
                    </h1>
                    <p className="dark:text-secondary-foreground antialiase relative mb-8 max-w-2xl text-left text-sm leading-relaxed tracking-wide text-neutral-400 sm:text-xl">
                        Copy paste the most trending components and use them in
                        your websites without having to worry about styling and
                        animations.
                    </p>
                </div>
                <div className="hidden h-[40rem] w-full items-center justify-center p-20 text-center xl:flex">
                    <h1 className="h-full w-full rounded-2xl bg-gray-400 text-center">
                        right section
                    </h1>
                </div>
            </div>
            <AutoScrollingGallery />
            <div>Section 3</div>
            <div>Section 4</div>
        </div>
    );
}
