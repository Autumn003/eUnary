import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { IconGripVertical } from '@tabler/icons-react';
import { Sparkles } from './sparkles';
import { cn } from '@/lib/utils';

interface RevealSliderProps {
    leftImgSrc?: string;
    rightImgSrc?: string;
}

export const RevealPane = ({ leftImgSrc, rightImgSrc }: RevealSliderProps) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const [direction, setDirection] = useState<'left' | 'right' | null>(null);
    const prevPositionRef = useRef(sliderPosition);

    useEffect(() => {
        if (sliderPosition > prevPositionRef.current && isDragging) {
            setDirection('right');
        } else if (sliderPosition < prevPositionRef.current && isDragging) {
            setDirection('left');
        } else if (!isDragging) {
            setDirection(null);
        }
        prevPositionRef.current = sliderPosition;
        console.log('Direction:', direction);
    }, [sliderPosition, isDragging]);

    const handleMouseMove = (e: any) => {
        if (!isDragging) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        setSliderPosition(Math.min(Math.max(percentage, 0), 100));
    };

    const handleMouseDown = () => {
        setIsDragging(true);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleClick = (e: any) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        setSliderPosition(Math.min(Math.max(percentage, 0), 100));
    };

    useEffect(() => {
        const handleGlobalMouseUp = () => setIsDragging(false);
        const handleGlobalMouseMove = (e: any) => {
            if (isDragging) {
                const containers = document.querySelectorAll(
                    '[data-slider-container]'
                );
                containers.forEach((container) => {
                    const rect = container.getBoundingClientRect();
                    if (
                        e.clientX >= rect.left &&
                        e.clientX <= rect.right &&
                        e.clientY >= rect.top &&
                        e.clientY <= rect.bottom
                    ) {
                        const x = e.clientX - rect.left;
                        const percentage = (x / rect.width) * 100;
                        setSliderPosition(
                            Math.min(Math.max(percentage, 0), 100)
                        );
                    }
                });
            }
        };

        document.addEventListener('mouseup', handleGlobalMouseUp);
        document.addEventListener('mousemove', handleGlobalMouseMove);

        return () => {
            document.removeEventListener('mouseup', handleGlobalMouseUp);
            document.removeEventListener('mousemove', handleGlobalMouseMove);
        };
    }, [isDragging]);

    return (
        <div className="mx-auto max-w-4xl">
            <div
                className="relative mx-auto aspect-[4/3] min-h-96 w-full max-w-2xl min-w-96 cursor-pointer overflow-hidden rounded-lg bg-gray-800 select-none"
                data-slider-container
                onMouseMove={handleMouseMove}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onClick={handleClick}
            >
                {/* right image */}
                <div className="absolute inset-0">
                    <Image
                        src={rightImgSrc || '/media/sample-code.png'}
                        alt="right image"
                        width={800}
                        height={800}
                        className="h-full w-full object-cover"
                        draggable={false}
                    />
                </div>

                {/* left image*/}
                <motion.div
                    className="absolute inset-0"
                    style={{
                        clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                    }}
                    animate={{
                        clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                    }}
                    transition={{
                        type: 'tween',
                        duration: isDragging ? 0 : 0.3,
                        ease: 'easeOut',
                    }}
                >
                    <Image
                        src={leftImgSrc || '/media/floating-elements-card.png'}
                        alt="Cute animals in color"
                        className="h-full w-full object-cover"
                        width={800}
                        height={800}
                        draggable={false}
                    />
                </motion.div>

                {/* Slider Line */}
                <motion.div
                    className="absolute top-0 bottom-0 z-10 w-0.5 bg-gradient-to-b from-transparent via-purple-400 to-transparent shadow-lg"
                    style={{ left: `${sliderPosition}%` }}
                    animate={{ left: `${sliderPosition}%` }}
                    transition={{
                        type: 'tween',
                        duration: isDragging ? 0 : 0.3,
                        ease: 'easeOut',
                    }}
                >
                    {/* Slider Handle */}
                    <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transform">
                        <motion.div
                            className="z-20 flex h-8 w-8 cursor-grab items-center justify-center rounded-full border-1 border-purple-400 bg-purple-500 shadow-lg active:cursor-grabbing"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            animate={{
                                scale: isDragging ? 1.1 : 1,
                                boxShadow: isDragging
                                    ? '0 0 50px rgba(173,70,255)'
                                    : '0 0 15px rgba(173,70,255,0.5)',
                            }}
                        >
                            <IconGripVertical className="h-4 w-4 text-white" />
                        </motion.div>
                    </div>
                    <div
                        className={cn(
                            'absolute top-1/2 left-1/2 h-full w-20 -translate-y-1/2 transform bg-purple-300/10',
                            direction === 'left' &&
                                'translate-x-0 [mask-image:radial-gradient(400px_1000px_at_left,white,transparent_20%)]',
                            direction === 'right' &&
                                '-translate-x-full [mask-image:radial-gradient(400px_1000px_at_right,white,transparent_20%)]',
                            !direction && 'hidden'
                        )}
                    >
                        <Sparkles
                            background="transparent"
                            minSize={0.4}
                            maxSize={1}
                            particleDensity={100}
                            className="h-full w-full"
                            particleColor="#ffffff"
                            speed={1}
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
