'use client';

import { useEffect, useState } from 'react';
import ScrollingMacbook from '@/components/ui/scrolling-macbook';
import { FlipWords } from '@/components/ui/flip-words';

const HeroSection = () => {
    const words = ['modern', 'fast', 'elegant', 'aesthetic', 'sleek'];

    const [currentWord, setCurrentWord] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prevWord) => (prevWord + 1) % words.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative container flex items-center bg-[url(/media/whirl.svg)] bg-cover bg-center bg-no-repeat">
            <div className="bg-primary-background/30 absolute inset-0 z-10 backdrop-blur-lg" />
            <div className="z-20 flex h-96 w-full flex-col items-start justify-center px-8 xl:px-0">
                <div className="dark:text-primary-foreground text-secondary-foreground relative mb-6 max-w-4xl text-left text-4xl font-bold md:text-7xl">
                    Build your website with Eunary{' '}
                    <FlipWords
                        words={[
                            'modern',
                            'fast',
                            'elegant',
                            'aesthetic',
                            'sleek',
                        ]}
                        className="bg-gradient-to-r from-violet-600 via-sky-400 to-indigo-800 bg-clip-text text-transparent"
                    />
                </div>
                <p className="dark:text-secondary-foreground antialiase relative mb-8 max-w-2xl text-left text-sm leading-relaxed tracking-wide text-neutral-400 sm:text-base sm:tracking-wider">
                    Copy paste beautifully crafted, accessible components into
                    your projects. Fully styled, animated, and ready to use with
                    your favorite frameworks.
                </p>
            </div>
            <div className="z-20 hidden h-[40rem] w-full items-center justify-center text-center xl:flex">
                <ScrollingMacbook className="flex flex-col items-center justify-center">
                    <div className="h-full w-full bg-[url(/media/mc-drk.png)] bg-cover bg-center"></div>
                </ScrollingMacbook>
            </div>
        </div>
    );
};

export default HeroSection;
