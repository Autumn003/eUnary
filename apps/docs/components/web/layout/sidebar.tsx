'use client';

import Link from 'next/link';
import data from '@/registry.json';
import { Badge } from '@/components';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { useState } from 'react';

const Sidebar = () => {
    const pathname = usePathname();

    const installationTabs = [
        { title: 'Install Next.js', target: 'install-nextjs', featured: false },
        {
            title: 'Install Tailwind v4',
            target: 'tailwind-v4',
            featured: false,
        },
        { title: 'Add Utilities', target: 'add-utilities', featured: false },
        { title: 'CLI', target: 'cli', featured: false },
    ];

    const sortedItem = [...data.items].sort((a, b) =>
        a.title.localeCompare(b.title)
    );

    return (
        <div className="h-full pb-4">
            <div className="custom-scrollbar flex h-full flex-col overflow-x-hidden overflow-y-auto py-6 text-[15px] lg:py-8">
                <div className="my-2 flex flex-col">
                    <h4 className="my-2 font-semibold">Installation</h4>
                    {installationTabs.map((item, index) => {
                        const isActive = pathname === `/docs/${item.target}`;
                        const [isHovered, setIsHovered] = useState(false);

                        return (
                            <motion.div
                                key={index}
                                whileHover={{ x: 6 }}
                                transition={{
                                    duration: 0.2,
                                    ease: [0.4, 0.0, 0.2, 1], // Custom cubic-bezier for smoother motion
                                }}
                                className={`hover:text-primary-foreground group flex items-stretch gap-2 py-1.5 text-wrap transition-all duration-150 ${isActive ? 'text-primary-foreground font-semibold' : 'text-secondary-foreground'} `}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <Link
                                    href={`/docs/${item.target}`}
                                    className="flex w-full items-center gap-2"
                                >
                                    <div className="flex h-full w-1 items-center justify-center">
                                        <motion.div
                                            className="bg-secondary-foreground/50 h-full w-full rounded-r"
                                            initial={{ scaleY: 0, opacity: 0 }}
                                            animate={{
                                                scaleY:
                                                    isActive || isHovered
                                                        ? 1
                                                        : 0,
                                                opacity:
                                                    isActive || isHovered
                                                        ? 1
                                                        : 0,
                                            }}
                                            transition={{
                                                duration: 0.3,
                                                ease: [0.25, 0.1, 0.25, 1],
                                                type: 'spring',
                                                stiffness: 300,
                                                damping: 30,
                                            }}
                                            style={{ originY: 0.5 }}
                                        />
                                    </div>
                                    {item.title}
                                    {item.featured && (
                                        <Badge className="mx-1 px-1 text-xs">
                                            New
                                        </Badge>
                                    )}
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
                <div className="my-2 flex flex-col">
                    <h4 className="my-2 font-semibold">Components</h4>
                    {sortedItem.map((item, index) => {
                        const isActive =
                            pathname === `/components/${item.name}`;
                        const [isHovered, setIsHovered] = useState(false);

                        return (
                            <motion.div
                                key={index}
                                whileHover={{ x: 6 }}
                                transition={{
                                    duration: 0.2,
                                    ease: [0.4, 0.0, 0.2, 1],
                                }}
                                className={`hover:text-primary-foreground group flex items-stretch gap-2 py-1.5 text-wrap transition-all duration-150 ${isActive ? 'text-primary-foreground font-semibold' : 'text-secondary-foreground'} `}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <Link
                                    href={`/components/${item.name}`}
                                    className="flex w-full items-center gap-2"
                                >
                                    <div className="flex h-full w-1 items-center justify-center">
                                        <motion.div
                                            className="bg-secondary-foreground/50 h-full w-full rounded-r"
                                            initial={{ scaleY: 0, opacity: 0 }}
                                            animate={{
                                                scaleY:
                                                    isActive || isHovered
                                                        ? 1
                                                        : 0,
                                                opacity:
                                                    isActive || isHovered
                                                        ? 1
                                                        : 0,
                                            }}
                                            transition={{
                                                duration: 0.3,
                                                ease: [0.25, 0.1, 0.25, 1],
                                                type: 'spring',
                                                stiffness: 300,
                                                damping: 30,
                                            }}
                                            style={{ originY: 0.5 }}
                                        />
                                    </div>
                                    {item.title}
                                    {item.featured && (
                                        <Badge className="mx-1 px-1 text-xs">
                                            New
                                        </Badge>
                                    )}
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
