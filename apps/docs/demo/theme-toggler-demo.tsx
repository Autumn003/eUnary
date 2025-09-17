'use client';

import ThemeToggler from '@/components/ui/theme-toggler';
import { IconMenuDeep } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

const ThemeTogglerDemo = () => {
    return (
        <div className="w-full p-6 md:p-12">
            <div className="bg-primary-background border-muted-background flex h-16 w-full items-center justify-between rounded-3xl border p-4 shadow-[-2px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                <Link href="/" className="">
                    <Image
                        src="/media/logo-dark.png"
                        alt="Eunary UI, a modern component library built with React, Tailwind CSS, and Motion, providing accessible and animated components"
                        width={35}
                        height={35}
                        className="rounded-xl dark:invert"
                    />
                </Link>
                <div className="divide-muted-background hidden items-center divide-x md:flex">
                    <div className="text-secondary-foreground hover:text-muted-foreground cursor-not-allowed px-4 font-semibold transition-colors duration-150">
                        Products
                    </div>
                    <div className="text-secondary-foreground hover:text-muted-foreground cursor-not-allowed px-4 font-semibold transition-colors duration-150">
                        Category
                    </div>
                    <div className="text-secondary-foreground hover:text-muted-foreground cursor-not-allowed px-4 font-semibold transition-colors duration-150">
                        Services
                    </div>
                </div>
                <div className="flex items-center">
                    <ThemeToggler className="border-primary-foreground" />
                    <IconMenuDeep className="text-secondary-foreground hover:text-muted-foreground ml-4 h-7 w-7 cursor-not-allowed transition-colors duration-150" />
                </div>
            </div>
        </div>
    );
};

export default ThemeTogglerDemo;
