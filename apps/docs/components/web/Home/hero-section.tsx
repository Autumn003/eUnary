'use client';

import { useEffect, useState } from 'react';

// Add custom styles for animations
const styles = `
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .animate-spin-slow {
    animation: spin-slow 8s linear infinite;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}
import { FlipWords } from '@/components/ui/flip-words';
import Link from 'next/link';
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
            <div className="z-20 flex h-full w-full flex-col items-start justify-center px-8 xl:px-0">
                <div className="dark:text-primary-foreground text-secondary-foreground mb-6 max-w-4xl text-left text-4xl font-bold md:text-7xl">
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

            {/* Attractive Hero Visual */}
            <div className="z-20 hidden h-[40rem] w-full items-center justify-center xl:flex">
                <div className="relative flex h-full w-full items-center justify-center">
                    {/* Floating Orbs */}
                    <div className="absolute inset-0">
                        <div className="absolute top-20 left-10 h-32 w-32 animate-pulse rounded-full bg-gradient-to-r from-violet-400 to-purple-600 opacity-20 blur-xl"></div>
                        <div className="absolute top-32 right-20 h-24 w-24 animate-bounce rounded-full bg-gradient-to-r from-sky-400 to-cyan-600 opacity-30 blur-lg delay-1000"></div>
                        <div className="absolute bottom-40 left-20 h-20 w-20 animate-pulse rounded-full bg-gradient-to-r from-emerald-400 to-teal-600 opacity-25 blur-lg delay-500"></div>
                        <div className="absolute right-10 bottom-20 h-28 w-28 animate-bounce rounded-full bg-gradient-to-r from-pink-400 to-rose-600 opacity-20 blur-xl delay-700"></div>
                    </div>

                    {/* Central Hero Element */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-center">
                        {/* Glowing Ring */}
                        <div className="relative mb-8">
                            <div className="border-gradient-to-r animate-spin-slow h-64 w-64 rounded-full border-2 from-violet-400 via-sky-400 to-indigo-600 opacity-30"></div>
                            <div className="absolute inset-4 h-56 w-56 animate-pulse rounded-full border border-white/20"></div>
                            <div className="absolute inset-8 h-48 w-48 rounded-full bg-gradient-to-br from-violet-500/10 via-sky-500/10 to-indigo-500/10 backdrop-blur-sm"></div>

                            {/* Center Icon/Logo */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 shadow-2xl">
                                    <svg
                                        className="h-12 w-12 animate-pulse text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-4">
                            <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                                <Link
                                    href="/components"
                                    className="relative z-10"
                                >
                                    Get Started
                                </Link>
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-700 to-indigo-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                            </button>
                            <Link
                                href="/docs/cli"
                                className="rounded-full border border-white/20 bg-white/5 px-8 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
                            >
                                Installation
                            </Link>
                        </div>

                        {/* Stats or Features */}
                        <div className="mt-12 flex space-x-12 text-center">
                            <div className="group cursor-pointer">
                                <div className="bg-gradient-to-r from-violet-400 to-sky-400 bg-clip-text text-3xl font-bold text-transparent transition-transform duration-300 group-hover:scale-110">
                                    10+
                                </div>
                                <div className="text-sm text-white/60">
                                    Components
                                </div>
                            </div>
                            <div className="group cursor-pointer">
                                <div className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-3xl font-bold text-transparent transition-transform duration-300 group-hover:scale-110">
                                    Copy
                                </div>
                                <div className="text-sm text-white/60">
                                    & Paste
                                </div>
                            </div>
                            <div className="group cursor-pointer">
                                <div className="bg-gradient-to-r from-emerald-400 to-pink-400 bg-clip-text text-3xl font-bold text-transparent transition-transform duration-300 group-hover:scale-110">
                                    99%
                                </div>
                                <div className="text-sm text-white/60">
                                    Satisfaction
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Particles */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-1/4 left-1/4 h-2 w-2 animate-ping rounded-full bg-white/30 delay-300"></div>
                        <div className="absolute top-3/4 right-1/4 h-1 w-1 animate-ping rounded-full bg-white/40 delay-700"></div>
                        <div className="absolute top-1/2 left-1/3 h-1.5 w-1.5 animate-ping rounded-full bg-white/20 delay-1000"></div>
                        <div className="absolute top-1/3 right-1/3 h-1 w-1 animate-ping rounded-full bg-white/50 delay-500"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
