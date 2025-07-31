'use client';

import { useEffect, useRef, useState } from 'react';
import 'remixicon/fonts/remixicon.css';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { items } from '@/comp.json';
import Link from 'next/link';
import { IconBrandTabler, IconCircle, IconFile } from '@tabler/icons-react';

const links = [
    {
        title: 'Components',
        link: '/components',
    },
    {
        title: 'Templates',
        link: '/templates',
    },
    {
        title: 'Showcase',
        link: '/showcase',
    },
    {
        title: 'Posts',
        link: '/posts',
    },
];

const installation = [
    {
        title: 'Install Next.js',
        link: '/docs/install-nextjs',
    },
    {
        title: 'Install Tailwind v4',
        link: '/docs/tailwind-v4',
    },
    {
        title: 'Add Utilities',
        link: '/docs/add-utilities',
    },
    {
        title: 'CLI',
        link: '/docs/cli',
    },
];

export default function SearchBox({
    isDialogOpen,
    setIsDialogOpen,
    className,
}: {
    isDialogOpen: boolean;
    setIsDialogOpen: (open: boolean) => void;
    className?: string;
}) {
    const boxRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                boxRef.current &&
                !boxRef.current.contains(event.target as Node)
            ) {
                setIsDialogOpen(false);
            }
        };

        if (isDialogOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isDialogOpen, setIsDialogOpen]);

    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (
                (event.ctrlKey || event.metaKey) &&
                event.key.toLowerCase() === 'k'
            ) {
                event.preventDefault();
                setIsDialogOpen(!isDialogOpen);
            }

            if (event.key === 'Escape' && isDialogOpen) {
                setIsDialogOpen(false);
            }
        }

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [setIsDialogOpen, isDialogOpen]);

    // Focus input when dialog opens
    useEffect(() => {
        if (isDialogOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isDialogOpen]);

    // Reset search when dialog closes
    useEffect(() => {
        if (!isDialogOpen) {
            setSearchQuery('');
        }
    }, [isDialogOpen]);

    const components = [...items].sort((a, b) =>
        a.title.localeCompare(b.title)
    );

    // Filter items based on search query
    const filteredLinks = links.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredInstallation = installation.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredComponents = components.filter(
        (item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const hasResults =
        filteredLinks.length > 0 ||
        filteredInstallation.length > 0 ||
        filteredComponents.length > 0;

    return (
        <>
            {isDialogOpen && (
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.1 }}
                    className={cn(
                        'bg-primary-background text-secondary-foreground border-muted-background flex h-90 w-[35rem] flex-col rounded-xl border pb-2 transition-all duration-300',
                        className
                    )}
                    ref={boxRef}
                >
                    <div className="border-muted-background flex items-center gap-2 border-b px-4 py-3">
                        <i className="ri-search-line text-secondary-foreground text- font-semibold"></i>
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Search components..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="text-secondary-foreground placeholder:text-muted-foreground w-full bg-transparent outline-none"
                        />
                        <button
                            onClick={() => setIsDialogOpen(false)}
                            className="flex-shrink-0"
                        >
                            <i className="ri-close-line text-secondary-foreground hover:bg-muted-background cursor-pointer rounded-lg p-1 transition-colors duration-200"></i>
                        </button>
                    </div>

                    <div className="custom-scrollbar flex h-full flex-col overflow-y-auto px-2 py-4">
                        {!hasResults && searchQuery && (
                            <div className="flex h-full items-center justify-center">
                                <p className="text-secondary-foreground">
                                    No results found for "{searchQuery}"
                                </p>
                            </div>
                        )}

                        {(!searchQuery || filteredLinks.length > 0) && (
                            <div className="mb-2">
                                {!searchQuery && (
                                    <h3 className="text-secondary-foreground px-2 text-sm font-semibold">
                                        Navigation
                                    </h3>
                                )}
                                {filteredLinks.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.link}
                                        onClick={() => setIsDialogOpen(false)}
                                        className="hover:bg-muted-background text-primary-foreground flex w-full items-center gap-4 rounded-md p-3 text-sm transition-colors duration-200"
                                    >
                                        <IconFile className="text-secondary-foreground h-5 w-5" />
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        )}

                        {(!searchQuery || filteredInstallation.length > 0) && (
                            <div className="mb-2">
                                {!searchQuery && (
                                    <h3 className="text-secondary-foreground px-2 text-sm font-semibold">
                                        Installation
                                    </h3>
                                )}
                                {filteredInstallation.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.link}
                                        onClick={() => setIsDialogOpen(false)}
                                        className="hover:bg-muted-background text-primary-foreground flex w-full items-center gap-4 rounded-md p-3 text-sm transition-colors duration-200"
                                    >
                                        <IconBrandTabler className="text-secondary-foreground h-5 w-5" />
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        )}

                        {(!searchQuery || filteredComponents.length > 0) && (
                            <div>
                                {!searchQuery && (
                                    <h3 className="text-secondary-foreground px-2 text-sm font-semibold">
                                        Components
                                    </h3>
                                )}
                                {filteredComponents.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={`/components/${item.name}`}
                                        onClick={() => setIsDialogOpen(false)}
                                        className="hover:bg-muted-background text-primary-foreground flex w-full items-center gap-4 rounded-md p-3 text-sm transition-colors duration-200"
                                    >
                                        <IconCircle className="text-secondary-foreground h-5 w-5" />
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </motion.div>
            )}
        </>
    );
}
