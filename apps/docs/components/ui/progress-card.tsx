'use client';

import { cn } from '@/lib/utils';
import { IconChecks } from '@tabler/icons-react';
import { motion, animate } from 'motion/react';
import { useEffect, useState } from 'react';

interface Task {
    icon?: any;
    label?: string;
    completed: number;
    total: number;
}

interface ProgressCardProps {
    title?: string;
    description?: string;
    themeColor?: string;
    tasks?: Task[];
    percentage?: number;
    className?: string;
}

export const ProgressCard = ({
    title,
    description,
    themeColor = '#7f9cf5',
    tasks,
    percentage,
    className,
}: ProgressCardProps) => {
    const circumference = 2 * Math.PI * 45; // radius of 45
    const strokeDasharray = circumference;

    const [displayPercentage, setDisplayPercentage] = useState(0);

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check initial theme
        const checkTheme = () => {
            const isDark =
                document.documentElement.classList.contains('dark') ||
                document.body.classList.contains('dark');

            if (
                !isDark &&
                !document.documentElement.classList.contains('light')
            ) {
                const savedTheme = localStorage?.getItem('theme');
                return savedTheme === 'dark';
            }

            return isDark;
        };

        setIsDarkMode(checkTheme());

        // Listen for theme changes
        const observer = new MutationObserver(() => {
            setIsDarkMode(checkTheme());
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        return () => observer.disconnect();
    }, []);

    const titleColor = isDarkMode ? '#FFFFFF' : themeColor;
    const percentageColor = isDarkMode ? '#FFFFFF' : `${themeColor}cc`;

    useEffect(() => {
        if (percentage) {
            const controls = animate(0, percentage, {
                duration: 1.5,
                ease: 'easeInOut',
                delay: 0.2,
                onUpdate: (value) => {
                    setDisplayPercentage(Math.round(value));
                },
            });

            return () => controls.stop();
        }
    }, [percentage]);

    return (
        <div
            className={cn(
                'group relative overflow-hidden rounded-2xl p-6 backdrop-blur-md transition-transform duration-300 hover:scale-103',
                className
            )}
            style={{
                background: isDarkMode ? '#5252521a' : `${themeColor}1a`,
            }}
        >
            {/* Background geometric shapes */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute top-8 right-12 h-16 w-16 rotate-12 rounded-lg border-2 transition-all duration-300 group-hover:scale-105 group-hover:rotate-30"
                    style={{ borderColor: themeColor }}
                ></div>
                <div
                    className="absolute right-8 bottom-12 h-12 w-12 rounded-full transition-transform duration-300 group-hover:-translate-1 group-hover:scale-125"
                    style={{ background: themeColor }}
                ></div>
                <div
                    className="absolute top-16 right-4 h-8 w-8 rotate-45 rounded border-2 transition-all duration-300 group-hover:scale-105 group-hover:rotate-12"
                    style={{ borderColor: `${themeColor}80` }}
                ></div>
            </div>

            {/* Header */}
            <div className="mb-6 flex items-start justify-between">
                <div>
                    {title && (
                        <h2
                            className="mb-2 text-xl font-semibold transition-colors duration-300"
                            style={{ color: titleColor }}
                        >
                            {title}
                        </h2>
                    )}
                    {description && (
                        <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-300">
                            {description}
                        </p>
                    )}
                </div>

                {percentage ? (
                    <div className="mt-1 flex space-x-1">
                        {[...Array(5)].map((_, index) => {
                            const dotThreshold = (index + 1) * 20; // Each dot represents 20%
                            const isColored =
                                percentage && percentage >= dotThreshold;

                            return (
                                <motion.div
                                    key={index}
                                    className={cn(
                                        'h-1.5 w-1.5 rounded-full transition-colors duration-300'
                                    )}
                                    style={{
                                        background: isColored
                                            ? themeColor
                                            : '#a0aec0',
                                    }}
                                    initial={{ scale: 0.8, opacity: 0.5 }}
                                    animate={{
                                        scale: 1.1,
                                        opacity: 1,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.1 + 0.8,
                                        ease: 'easeOut',
                                    }}
                                />
                            );
                        })}
                    </div>
                ) : (
                    <IconChecks className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
                )}
            </div>

            {/* Circular Progress */}
            {percentage && (
                <div className="mt-4 flex justify-center">
                    <div className="relative">
                        <svg
                            width="120"
                            height="120"
                            className="-rotate-90 transform transition-all duration-300 group-hover:scale-105 group-hover:-rotate-120"
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
                            {/* Animated Progress circle */}
                            <motion.circle
                                cx="60"
                                cy="60"
                                r="45"
                                stroke={themeColor}
                                strokeWidth="4"
                                fill="transparent"
                                strokeLinecap="round"
                                strokeDasharray={strokeDasharray}
                                initial={{ strokeDashoffset: circumference }}
                                animate={{
                                    strokeDashoffset:
                                        circumference -
                                        (percentage / 100) * circumference,
                                }}
                                transition={{
                                    duration: 1.5,
                                    ease: 'easeInOut',
                                    delay: 0.2,
                                }}
                                style={{
                                    filter: `drop-shadow(0 0 8px ${themeColor}80)`,
                                }}
                            />
                        </svg>
                        {/* Animated Percentage text */}
                        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                            <motion.span
                                className="text-3xl font-bold transition-colors duration-300"
                                style={{ color: percentageColor }}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.8,
                                    ease: 'easeOut',
                                    delay: 0.5,
                                }}
                            >
                                {displayPercentage}%
                            </motion.span>
                        </div>
                    </div>
                </div>
            )}

            {/* Tasks List */}
            {tasks && tasks.length > 0 && (
                <div className="space-y-5">
                    {tasks.map((task, index) => {
                        const Icon = task.icon;
                        const progressWidth =
                            (task.completed / task.total) * 100;
                        const [isTaskHovered, setIsTaskHovered] =
                            useState(false);

                        return (
                            <motion.div
                                key={index}
                                className="relative cursor-pointer space-y-3"
                                onHoverStart={() => setIsTaskHovered(true)}
                                onHoverEnd={() => setIsTaskHovered(false)}
                                whileHover={{
                                    x: 5,
                                    transition: { duration: 0.2 },
                                }}
                            >
                                <div className="absolute inset-0 z-0" />
                                {/* Task Info */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <motion.div
                                            animate={{
                                                scale: isTaskHovered ? 1.2 : 1,
                                                rotate: isTaskHovered ? -10 : 0,
                                                color: isTaskHovered
                                                    ? 'rgb(124, 134, 255)'
                                                    : 'rgb(156, 163, 175)',
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Icon className="h-5 w-5 text-gray-400" />
                                        </motion.div>
                                        <span className="font-medium text-gray-600 dark:text-white">
                                            {task.label}
                                        </span>
                                    </div>
                                    <motion.span
                                        className="text-sm text-neutral-500 dark:text-neutral-300"
                                        animate={{
                                            opacity: isTaskHovered ? 1 : 0.8,
                                            scale: isTaskHovered ? 1.05 : 1,
                                        }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {task.completed} of {task.total} ready
                                    </motion.span>
                                </div>

                                {/* Animated Progress Bar */}
                                <div className="relative">
                                    {/* Background dashed line */}
                                    <div
                                        className="h-0.5 border-t-2 border-dashed border-gray-600"
                                        style={{ width: '100%' }}
                                    ></div>

                                    {/* Animated Progress line */}
                                    <motion.div
                                        className="absolute top-0 h-0.5"
                                        initial={{ width: '0%' }}
                                        animate={{
                                            width: `${progressWidth}%`,
                                            height: isTaskHovered
                                                ? '2px'
                                                : '2px',
                                        }}
                                        transition={{
                                            duration: 1.2,
                                            ease: 'easeOut',
                                            delay: 0.8 + index * 0.1,
                                        }}
                                        style={{
                                            filter: isTaskHovered
                                                ? `drop-shadow(0 0 8px ${themeColor}80)`
                                                : `drop-shadow(0 0 4px ${themeColor}80)`,
                                            boxShadow: isTaskHovered
                                                ? `0 0 8px ${themeColor}80`
                                                : 'none',
                                            background: themeColor,
                                        }}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};
