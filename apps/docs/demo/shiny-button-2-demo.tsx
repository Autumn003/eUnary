'use client';

import { ShinyButton } from '@/components/ui/shiny-button';

export const ShinyButtonDemo2 = () => {
    return (
        <div className="grid h-full w-full grid-cols-2 flex-col items-center justify-between divide-dashed divide-neutral-600 md:divide-x">
            <div className="col-span-2 flex aspect-[3/1] items-center justify-center md:col-span-1">
                <ShinyButton
                    className="transform bg-gradient-to-r from-cyan-700 via-blue-800 to-cyan-700 px-12 py-4 text-base font-black text-white shadow-2xl transition-all duration-500 hover:scale-110 hover:from-cyan-700/50 hover:via-blue-800/50 hover:to-cyan-700/50 hover:shadow-cyan-500/50"
                    containerClassName="bg-sky-800 dark:bg-cyan-500"
                    shine="hover"
                    shineDirection="bottom"
                    spinGlow="always"
                    spinGlowDirection="bottom"
                    spinGlowRotate="clockwise"
                    spinGlowSpeed={3}
                    onClick={() => alert('🌊 QUANTUM ACTIVATED!')}
                >
                    🌊 QUANTUM WAVES
                </ShinyButton>
            </div>
            <div className="col-span-2 flex aspect-[3/1] h-full w-full flex-col items-center justify-center gap-4 md:col-span-1">
                <ShinyButton
                    className="group transform overflow-hidden border-2 border-gray-400/50 bg-gradient-to-r from-gray-600 via-gray-300 to-gray-600 py-4 text-base font-black text-slate-800 shadow-2xl transition-all duration-500 hover:from-gray-400 hover:via-white hover:to-gray-400 hover:text-slate-900 hover:shadow-gray-400/60 dark:text-slate-700 hover:dark:text-slate-900"
                    containerClassName=""
                    shine="always"
                    shineDirection="left"
                    spinGlow="hover"
                    spinGlowDirection="bottom"
                    spinGlowRotate="clockwise"
                    spinGlowSpeed={2}
                    onClick={() => alert('You earned a ❤︎')}
                >
                    <div className="relative w-full overflow-hidden">
                        <div className="flex transition-transform duration-300 ease-out group-hover:-translate-x-full">
                            <span className="flex min-w-full items-center justify-center whitespace-nowrap">
                                ✨ Hover Me!
                            </span>
                            <span className="flex min-w-full items-center justify-center whitespace-nowrap">
                                Hi there 👋
                            </span>
                        </div>
                    </div>
                </ShinyButton>
            </div>
        </div>
    );
};
