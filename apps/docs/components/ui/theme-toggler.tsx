'use client';

import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

export default function ThemeToggler({
    className,
    iconsClassName,
}: {
    className?: string;
    iconsClassName?: string;
}) {
    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDark(true);
        }
    }, []);

    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        setIsDark((prev) => !prev);
    };

    return (
        <>
            <button
                className={cn(
                    'border-muted-background h-8 w-8 cursor-pointer rounded-xl border-[1.5px]',
                    className
                )}
                onClick={toggleTheme}
            >
                <div
                    className={cn(
                        'text-secondary-foreground hover:text-primary-foreground transition-all duration-200 ease-in-out hover:-rotate-20',
                        iconsClassName
                    )}
                >
                    {isDark ? (
                        <i className="ri-sun-fill text-xl"></i>
                    ) : (
                        <i className="ri-moon-clear-fill text-xl"></i>
                    )}
                </div>
            </button>
        </>
    );
}
