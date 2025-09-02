import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { type Container, type ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { cn } from '@/lib/utils';
import { motion, useAnimation } from 'motion/react';

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
    className,
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
                className={cn('opacity-0', className)}
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
