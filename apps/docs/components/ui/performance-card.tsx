import React from 'react';

export const PerformanceCard = () => {
    const percentage = 92;
    const circumference = 2 * Math.PI * 45; // radius of 45
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="relative aspect-square h-full w-full overflow-hidden rounded-2xl bg-indigo-300/20 p-6 backdrop-blur-lg dark:bg-neutral-600/20">
            {/* Background geometric shapes */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-8 right-12 h-16 w-16 rotate-12 rounded-lg border-2 border-indigo-600"></div>
                <div className="absolute right-8 bottom-12 h-12 w-12 rounded-full bg-indigo-700"></div>
                <div className="absolute top-16 right-4 h-8 w-8 rotate-45 rounded border-2 border-indigo-600"></div>
            </div>

            {/* Header */}
            <div className="mb-6 flex items-start justify-between">
                <div>
                    <h2 className="mb-2 text-xl font-semibold text-indigo-500 dark:text-white">
                        Performance Score
                    </h2>
                    <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-300">
                        Optimized components with fast loading time and smooth
                        user interactions.
                    </p>
                </div>
                <div className="mt-1 flex space-x-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-indigo-400"></div>
                    <div className="h-1.5 w-1.5 rounded-full bg-indigo-400"></div>
                    <div className="h-1.5 w-1.5 rounded-full bg-indigo-400"></div>
                    <div className="h-1.5 w-1.5 rounded-full bg-indigo-400"></div>
                    <div className="h-1.5 w-1.5 rounded-full bg-indigo-400"></div>
                    <div className="h-1.5 w-1.5 rounded-full bg-white dark:bg-gray-600"></div>
                </div>
            </div>

            {/* Circular Progress */}
            <div className="mt-4 flex justify-center">
                <div className="relative">
                    <svg
                        width="120"
                        height="120"
                        className="-rotate-90 transform"
                    >
                        {/* Background circle */}
                        <circle
                            cx="60"
                            cy="60"
                            r="45"
                            stroke="rgb(55, 65, 81)"
                            strokeWidth="4"
                            fill="transparent"
                        />
                        {/* Progress circle */}
                        <circle
                            cx="60"
                            cy="60"
                            r="45"
                            stroke="rgb(124, 134, 255)"
                            strokeWidth="4"
                            fill="transparent"
                            strokeLinecap="round"
                            strokeDasharray={strokeDasharray}
                            strokeDashoffset={strokeDashoffset}
                            className="transition-all duration-1000 ease-in-out"
                            style={{
                                filter: 'drop-shadow(0 0 8px rgb(97, 95, 255, 0.8))',
                            }}
                        />
                    </svg>
                    {/* Percentage text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-bold text-indigo-400 dark:text-white">
                            {percentage}%
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
