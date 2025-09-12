'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export const ShinyButton = ({
    className,
    containerClassName,
    children,
    onClick,
    shine,
    shineDirection = 'right',
    shineDelay = 2,
    shineDuration = 1.5,
    spinGlow,
    spinGlowDirection = 'bottom',
    spinGlowRotate,
    spinGlowSpeed = 4,
}: {
    className?: string;
    containerClassName?: string;
    children?: React.ReactNode;
    onClick?: () => void;
    shine?: 'always' | 'hover';
    shineDirection?: 'top' | 'bottom' | 'left' | 'right';
    shineDelay?: number;
    shineDuration?: number;
    spinGlow?: 'always' | 'hover';
    spinGlowDirection?: 'top' | 'bottom' | 'left' | 'right';
    spinGlowSpeed?: number;
    spinGlowRotate?: 'clockwise' | 'anticlockwise';
}) => {
    const getGradientAngle = (
        direction: 'top' | 'bottom' | 'left' | 'right'
    ) => {
        switch (direction) {
            case 'right':
                return 45;
            case 'bottom':
                return 135;
            case 'left':
                return 225;
            case 'top':
                return 315;
            default:
                return 135;
        }
    };

    // Function to get shine animation direction
    const getShineAnimation = (
        direction: 'top' | 'bottom' | 'left' | 'right'
    ) => {
        switch (direction) {
            case 'right':
                return { x: '-100%', y: '0%' };
            case 'left':
                return { x: '200%', y: '0%' };
            case 'top':
                return { x: '0%', y: '200%' };
            case 'bottom':
                return { x: '0%', y: '-100%' };
            default:
                return { x: '-100%', y: '0%' };
        }
    };

    // Function to get shine end animation
    const getShineEndAnimation = (
        direction: 'top' | 'bottom' | 'left' | 'right'
    ) => {
        switch (direction) {
            case 'right':
                return { x: '200%', y: '0%' };
            case 'left':
                return { x: '-100%', y: '0%' };
            case 'top':
                return { x: '0%', y: '-100%' };
            case 'bottom':
                return { x: '0%', y: '200%' };
            default:
                return { x: '200%', y: '0%' };
        }
    };

    const gradientAngle = getGradientAngle(spinGlowDirection);
    const shineInitial = getShineAnimation(shineDirection);
    const shineAnimate = getShineEndAnimation(shineDirection);

    const rotationAnimation = spinGlowRotate
        ? {
              rotate: spinGlowRotate === 'clockwise' ? 360 : -360,
          }
        : {};

    return (
        <div
            className={cn(
                'group relative flex h-fit w-fit items-center justify-center overflow-hidden rounded-full bg-neutral-300 p-[1.5px] shadow-lg dark:bg-neutral-600',
                containerClassName
            )}
        >
            {/* Spinning glow effect */}
            {spinGlow && (
                <motion.div
                    className={cn(
                        'absolute inset-[-1000%] transition-opacity duration-300',
                        spinGlow === 'always'
                            ? 'opacity-100'
                            : 'opacity-0 group-hover:opacity-100'
                    )}
                    style={{
                        background: `conic-gradient(from ${gradientAngle}deg, transparent 0, #FFFFFF 45deg, transparent 90deg)`,
                    }}
                    animate={rotationAnimation}
                    transition={{
                        duration: spinGlowSpeed,
                        ease: 'linear',
                        repeat: Infinity,
                    }}
                />
            )}

            <button
                onClick={onClick}
                className={cn(
                    `relative z-10 inline-flex h-full w-full cursor-pointer items-center justify-center overflow-hidden rounded-full bg-slate-200 px-5 py-3 font-medium text-neutral-600 backdrop-blur-3xl transition-all duration-200 dark:bg-slate-900 dark:text-white`,
                    className
                )}
            >
                {/* Shine overlay */}
                {shine && (
                    <motion.div
                        className={cn(
                            'absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-opacity duration-300 dark:via-white/20',
                            shineDirection === 'top' ||
                                shineDirection === 'bottom'
                                ? '-skew-y-12 bg-gradient-to-b'
                                : '-skew-x-12 bg-gradient-to-r',
                            shine === 'always'
                                ? 'opacity-100'
                                : 'opacity-0 group-hover:opacity-100'
                        )}
                        initial={shineInitial}
                        animate={shineAnimate}
                        transition={{
                            duration: shineDuration,
                            ease: 'easeInOut',
                            repeat: Infinity,
                            repeatDelay: shineDelay,
                        }}
                    />
                )}
                {children}
            </button>
        </div>
    );
};
