'use client';

import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';
import { useSpring } from 'react-spring';
import { Sparkles } from './sparkles';
import {
    motion,
    useScroll,
    useTransform,
    useMotionTemplate,
} from 'motion/react';
import { cn } from '@/lib/utils';

interface props {
    globeClassName?: string;
    containerClassName?: string;
    textClassName?: string;
    text?: string;
    textSize?: 'xl' | 'lg' | 'md' | 'sm';
    globeSize?: number;
    globeRotateDirection?: 'left' | 'right';
}

export const FeaturedGlobe = ({
    globeClassName,
    containerClassName,
    textClassName,
    text = 'EUNARY UI',
    textSize = 'md',
    globeSize = 500,
    globeRotateDirection = 'right',
}: props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end center'],
    });

    const textY = useTransform(
        scrollYProgress,
        [0, 0.25, 0.5, 0.75],
        [300, 100, 0, -100]
    );
    const textOpacity = useTransform(
        scrollYProgress,
        [0, 0.25, 0.5, 0.75],
        [0, 0, 0.5, 1]
    );
    const textScale = useTransform(
        scrollYProgress,
        [0, 0.25, 0.5, 0.75],
        [0.8, 0.85, 0.9, 1]
    );
    const textBlur = useTransform(
        scrollYProgress,
        [0, 0.2, 0.4, 0.6],
        [9, 6, 3, 0]
    );

    const getTextSizeClasses = () => {
        switch (textSize) {
            case 'sm':
                return 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl';
            case 'md':
                return 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl';
            case 'lg':
                return 'text-6xl sm:text-7xl md:text-8xl lg:text-9xl';
            case 'xl':
            default:
                return 'text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem]';
        }
    };
    const textSizeClasses = getTextSizeClasses();

    return (
        <div className="relative h-full w-full">
            <div
                ref={containerRef}
                className={cn(
                    'sticky flex min-h-[30rem] w-full items-center justify-center overflow-hidden',
                    containerClassName
                )}
            >
                {/* Globe Component */}
                <div className="absolute -bottom-48 z-20 flex aspect-[1] items-center justify-center">
                    <Globe
                        globeSize={globeSize}
                        globeClassName={globeClassName}
                        globeRotateDirection={globeRotateDirection}
                    />
                </div>

                {/* Animated Text */}
                <motion.div
                    style={{
                        y: textY,
                        opacity: textOpacity,
                        scale: textScale,
                        filter: useMotionTemplate`blur(${textBlur}px)`,
                    }}
                    className="absolute z-10 flex items-center justify-center text-nowrap"
                >
                    <div
                        className={cn(
                            'bg-gradient-to-b from-white to-gray-600 bg-clip-text text-center font-bold text-transparent',
                            textSizeClasses,
                            textClassName
                        )}
                    >
                        {text}
                    </div>
                </motion.div>

                {/* Background Sparkles */}
                <Sparkles
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={50}
                    className="z-0 h-full w-full"
                    particleColor="#ffffff"
                    speed={2}
                />
            </div>
        </div>
    );
};

const Globe = ({
    globeClassName,
    globeSize,
    globeRotateDirection,
}: {
    globeClassName?: string;
    globeSize: number;
    globeRotateDirection?: 'left' | 'right';
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pointerInteracting = useRef<number | null>(null);
    const pointerInteractionMovement = useRef(0);

    const [{ r }, api] = useSpring(() => ({
        r: 0,
        config: {
            mass: 1,
            tension: 280,
            friction: 40,
            precision: 0.001,
        },
    }));

    useEffect(() => {
        let phi = 0;
        const width: number = globeSize;
        if (!canvasRef.current) return;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2,
            phi: 0,
            theta: 0.3,
            dark: 1,
            diffuse: 3,
            mapSamples: 16000,
            mapBrightness: 1.2,
            baseColor: [1, 1, 1],
            markerColor: [40 / 255, 100 / 255, 215 / 255],
            glowColor: [255 / 255, 255 / 255, 255 / 255],
            markers: [
                {
                    location: [28.61402, 77.22955], // Delhi
                    size: 0.1,
                },
                {
                    location: [40.75833, -73.99167], // New York
                    size: 0.2,
                },
                {
                    location: [22.575, 88.325], // Kolkata
                    size: 0.05,
                },
                {
                    location: [25.18333, 55.26667], // Dubai
                    size: 0.05,
                },
            ],

            onRender: (state) => {
                // This prevents rotation while dragging
                if (!pointerInteracting.current) {
                    // Called on every animation frame.
                    // `state` will be an empty object, return updated params.

                    globeRotateDirection === 'left'
                        ? (phi -= 0.005)
                        : (phi += 0.005);
                }
                state.phi = phi + r.get();
                state.width = width * 2;
                state.height = width * 2;
            },
        });
        setTimeout(
            () => canvasRef.current && (canvasRef.current.style.opacity = '1')
        );

        return () => {
            globe.destroy();
        };
    }, []);

    return (
        <div
            className={cn('rounded-full', globeClassName)}
            style={{
                width: 500,
                height: 500,
                maxWidth: 600,
                aspectRatio: 1,
                margin: 'auto',
                position: 'relative',
            }}
        >
            <canvas
                ref={canvasRef}
                onPointerDown={(e) => {
                    pointerInteracting.current =
                        e.clientX - pointerInteractionMovement.current;
                    canvasRef.current &&
                        (canvasRef.current.style.cursor = 'grabbing');
                }}
                onPointerUp={() => {
                    pointerInteracting.current = null;
                    canvasRef.current &&
                        (canvasRef.current.style.cursor = 'grab');
                }}
                onPointerOut={() => {
                    pointerInteracting.current = null;
                    canvasRef.current &&
                        (canvasRef.current.style.cursor = 'grab');
                }}
                onMouseMove={(e) => {
                    if (pointerInteracting.current !== null) {
                        const delta = e.clientX - pointerInteracting.current;
                        pointerInteractionMovement.current = delta;
                        api.start({
                            r: delta / 200,
                        });
                    }
                }}
                onTouchMove={(e) => {
                    if (pointerInteracting.current !== null && e.touches[0]) {
                        const delta =
                            e.touches[0].clientX - pointerInteracting.current;
                        pointerInteractionMovement.current = delta;
                        api.start({
                            r: delta / 100,
                        });
                    }
                }}
                style={{
                    width: '100%',
                    height: '100%',
                    cursor: 'grab',
                    contain: 'layout paint size',
                    opacity: 0,
                    transition: 'opacity 1s ease',
                }}
            />
        </div>
    );
};
