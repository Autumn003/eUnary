'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface FlipwordsProps {
    words?: string[];
    duration?: number;
    className?: string;
}

export const FlipWords = ({
    words = ['Eunary', 'Beautiful', 'Elegant', 'Aesthetic', 'Sleek'],
    duration = 3000,
    className,
}: FlipwordsProps) => {
    const [currentWord, setCurrentWord] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prevWord) => (prevWord + 1) % words.length);
        }, duration);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence mode="wait">
            <motion.p
                key={currentWord}
                className={cn('inline-block h-fit py-2', className)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                    opacity: 0,
                    y: -20,
                    scale: 1.2,
                    filter: 'blur(8px)',
                }}
                transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 20,
                }}
            >
                {words[currentWord]}
            </motion.p>
        </AnimatePresence>
    );
};
