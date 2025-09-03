'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'motion/react';
import Image from 'next/image';
import { IconGripVertical } from '@tabler/icons-react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { type Container, type ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { cn } from '@/lib/utils';

interface RevealSliderProps {
    className?: string;
    leftImgClassName?: string;
    rightImgClassName?: string;
    leftImgSrc?: string;
    rightImgSrc?: string;
    slideDirection?: 'left' | 'right';
    autoplay?: boolean;
    duration?: number;
}

export const RevealPane = ({
    className,
    leftImgClassName,
    rightImgClassName,
    leftImgSrc,
    rightImgSrc,
    slideDirection = 'right',
    autoplay = false,
    duration = 5000,
}: RevealSliderProps) => {
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

    // Helper function to get position from event (mouse or touch)
    const getEventPosition = (e: any) => {
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        return { clientX, clientY };
    };

    // Helper function to update slider position
    const updateSliderPosition = (clientX: number, rect: DOMRect) => {
        const x = clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        setSliderPosition(Math.min(Math.max(percentage, 0), 100));
    };

    const handleMove = (e: any) => {
        if (!isDragging) return;

        const { clientX } = getEventPosition(e);
        const rect = e.currentTarget.getBoundingClientRect();
        updateSliderPosition(clientX, rect);
    };

    const handleStart = () => {
        setIsDragging(true);
    };

    const handleEnd = () => {
        setIsDragging(false);
    };

    const handleClick = (e: any) => {
        // Prevent click handling if it was a drag operation
        if (isDragging) return;

        const { clientX } = getEventPosition(e);
        const rect = e.currentTarget.getBoundingClientRect();
        updateSliderPosition(clientX, rect);
    };

    useEffect(() => {
        const handleGlobalEnd = () => setIsDragging(false);

        const handleGlobalMove = (e: any) => {
            if (!isDragging) return;

            const { clientX, clientY } = getEventPosition(e);
            const containers = document.querySelectorAll(
                '[data-slider-container]'
            );

            containers.forEach((container) => {
                const rect = container.getBoundingClientRect();
                if (
                    clientX >= rect.left &&
                    clientX <= rect.right &&
                    clientY >= rect.top &&
                    clientY <= rect.bottom
                ) {
                    updateSliderPosition(clientX, rect);
                }
            });
        };

        // Add both mouse and touch event listeners
        document.addEventListener('mouseup', handleGlobalEnd);
        document.addEventListener('mousemove', handleGlobalMove);
        document.addEventListener('touchend', handleGlobalEnd);
        document.addEventListener('touchmove', handleGlobalMove, {
            passive: false,
        });

        return () => {
            document.removeEventListener('mouseup', handleGlobalEnd);
            document.removeEventListener('mousemove', handleGlobalMove);
            document.removeEventListener('touchend', handleGlobalEnd);
            document.removeEventListener('touchmove', handleGlobalMove);
        };
    }, [isDragging]);

    return (
        <div
            className={cn(
                'relative aspect-auto min-h-72 min-w-84 cursor-pointer touch-none overflow-hidden rounded-lg bg-gray-800 select-none sm:aspect-[4/3] sm:min-h-96 sm:min-w-96',
                className
            )}
            data-slider-container
            // Mouse events
            onMouseMove={handleMove}
            onMouseDown={handleStart}
            onMouseUp={handleEnd}
            onClick={handleClick}
            // Touch events
            onTouchStart={handleStart}
            onTouchMove={handleMove}
            onTouchEnd={handleEnd}
        >
            {/* right image */}
            <div className={cn('absolute inset-0', rightImgClassName)}>
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
                className={cn('absolute inset-0', leftImgClassName)}
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
                        particleColor="#ffffff"
                        speed={1}
                    />
                </div>
            </motion.div>
        </div>
    );
};

type ParticlesProps = {
    className?: string;
    background?: string;
    particleSize?: number;
    minSize?: number;
    maxSize?: number;
    speed?: number;
    particleColor?: string;
    particleDensity?: number;
};

export const Sparkles = ({
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
}: ParticlesProps) => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const fadeInControls = useAnimation();

    const particlesLoaded = async (container?: Container): Promise<void> => {
        container &&
            fadeInControls.start({
                opacity: 1,
                transition: { duration: 1 },
            });
    };

    const options: ISourceOptions = {
        background: {
            color: {
                value: background || '#0d47a1',
            },
        },
        fullScreen: {
            enable: false,
            zIndex: 1,
        },

        particles: {
            color: {
                value: particleColor || '#ffffff',
            },
            move: {
                angle: {
                    offset: 0,
                    value: 90,
                },
                center: {
                    x: 50,
                    y: 50,
                    mode: 'percent',
                    radius: 0,
                },
                enable: true,
                random: false,
                size: false,
                speed: {
                    min: 0.1,
                    max: 1,
                },
            },
            number: {
                density: {
                    enable: true,
                    width: 400,
                    height: 400,
                },
                limit: {
                    mode: 'delete',
                    value: 0,
                },
                value: particleDensity || 120,
            },
            opacity: {
                value: {
                    min: 0.1,
                    max: 1,
                },
                animation: {
                    enable: true,
                    speed: speed || 4,
                    sync: false,
                    mode: 'auto',
                    startValue: 'random',
                    destroy: 'none',
                },
            },
            shape: {
                close: true,
                fill: true,
                options: {},
                type: 'circle',
            },
            size: {
                value: {
                    min: minSize || 1,
                    max: maxSize || 3,
                },
            },
        },
    };

    if (init) {
        return (
            <motion.div
                animate={fadeInControls}
                className={cn('h-full w-full opacity-0')}
            >
                <Particles
                    className="h-full w-full"
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={options}
                />
            </motion.div>
        );
    }

    return <></>;
};
