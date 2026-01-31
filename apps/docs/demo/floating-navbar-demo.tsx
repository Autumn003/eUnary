'use client';

import { FloatingNavbar } from '@/components/ui/floating-navbar';
import { IconArticle, IconNotebook, IconSmartHome } from '@tabler/icons-react';
import ThemeToggler from '@/components/ui/theme-toggler';
import Image from 'next/image';

const leftPill = {
    url: '',
    content: <ThemeToggler className="border-none" />,
    label: 'theme',
};

const rightPill = {
    url: '',
    content: (
        <Image
            src="/media/me.png"
            alt="Hemant"
            width={30}
            height={30}
            className="shrink-0 rounded-full bg-neutral-800"
        />
    ),
    label: 'Contact Me',
};

const navLinks = [
    { url: '/temp', icon: IconSmartHome, label: 'Home' },
    { url: '/temp', icon: IconArticle, label: 'About' },
    { url: '/temp', icon: IconNotebook, label: 'Projects' },
];

const FloatingNavbarDemo = () => {
    return (
        <div className="h-lvh w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px]">
            <div className="relative flex h-full w-full items-center justify-center">
                <FloatingNavbar
                    leftPill={leftPill}
                    rightPill={rightPill}
                    navLinks={navLinks}
                />
            </div>
        </div>
    );
};

export default FloatingNavbarDemo;
