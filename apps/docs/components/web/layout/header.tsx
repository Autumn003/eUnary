'use client';

import Image from 'next/image';
import 'remixicon/fonts/remixicon.css';
import Link from 'next/link';
import { useState } from 'react';
import SearchBox from '../search-box';
import ThemeToggler from '../theme-toggler';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleMenuOpner = () => {
        setIsOpen(!isOpen);
    };

    const handleSearchBtn = () => {
        setIsDialogOpen(!isDialogOpen);
    };

    return (
        <div>
            <div className="bg-primary-background/30 border-muted-background fixed inset-0 z-50 container hidden h-16 max-w-[88rem] grid-cols-12 border-b px-8 backdrop-blur-md lg:grid">
                <Link href="/" className="col-span-2 flex items-center gap-2">
                    <Image
                        src="/media/logo-dark.jpg"
                        alt="Eunary UI, a modern component library built with React, Tailwind CSS, and Motion, providing accessible and animated components"
                        width={28}
                        height={28}
                        className="rounded-lg dark:invert"
                    />
                    <div className="-mb-1 flex items-end gap-1">
                        <h1 className="text-primary-foreground text-2xl font-semibold">
                            Eunary
                        </h1>
                        <p className="border-secondary-foreground text-secondary-foreground mb-1 rounded-md border px-[2.5px] text-xs font-light">
                            UI
                        </p>
                    </div>
                </Link>
                <div className="col-span-6 flex items-center gap-8 px-4 text-[15px] font-semibold">
                    <Link
                        href="/components"
                        className="text-secondary-foreground hover:text-primary-foreground transition-colors duration-200 hover:cursor-pointer"
                    >
                        Components
                    </Link>
                    <Link
                        href="/templates"
                        className="text-secondary-foreground hover:text-primary-foreground transition-colors duration-200 hover:cursor-pointer"
                    >
                        Templates
                    </Link>
                    <Link
                        href="/pricing"
                        className="text-secondary-foreground hover:text-primary-foreground transition-colors duration-200 hover:cursor-pointer"
                    >
                        Pricing
                    </Link>
                    <Link
                        href="/posts"
                        className="text-secondary-foreground hover:text-primary-foreground transition-colors duration-200 hover:cursor-pointer"
                    >
                        Posts
                    </Link>
                </div>
                <div className="col-span-4 flex items-center justify-around">
                    <Link
                        href="https://x.com/Hemantsh03"
                        target="_blank"
                        className="text-secondary-foreground hover:text-primary-foreground text-[22px] transition-colors duration-200 hover:cursor-pointer"
                    >
                        <i className="ri-twitter-x-line"></i>
                    </Link>
                    <Link
                        href="https://github.com/Autumn003/eUnary"
                        target="_blank"
                        className="text-secondary-foreground hover:text-primary-foreground text-2xl transition-colors duration-200 hover:cursor-pointer"
                    >
                        <i className="ri-github-fill"></i>
                    </Link>
                    <ThemeToggler />
                    <button
                        onClick={handleSearchBtn}
                        className="border-muted-foreground text-secondary-foreground flex h-9 w-56 cursor-pointer items-center justify-around rounded-xl border p-1 shadow-[-2px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                    >
                        <i className="ri-search-line"></i>
                        <p className="text-[12px]">Search components...</p>
                        <div className="bg-muted-background flex items-center gap-1 rounded-md px-2 py-1 text-[11px]">
                            <i className="ri-command-line"></i>
                            <p>K</p>
                        </div>
                    </button>
                </div>
            </div>
            {isOpen ? (
                <div className="bg-primary-background/30 fixed top-0 z-40 flex h-full w-dvw flex-col gap-12 px-10 py-6 backdrop-blur-md transition-all duration-300 lg:hidden">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex h-fit gap-2">
                            <Image
                                src="/media/logo-dark.jpg"
                                alt="Eunary UI, a modern component library built with React, Tailwind CSS, and Motion, providing accessible and animated components"
                                width={28}
                                height={28}
                                className="h-fit rounded-lg dark:invert"
                            />
                            <div className="text-accent-foreground -mb-1 flex items-end gap-1">
                                <h1 className="text-primary-foreground text-2xl font-semibold">
                                    Eunary
                                </h1>
                                <p className="border-secondary-foreground text-secondary-foreground mb-1 rounded-md border px-[2.5px] text-xs font-light">
                                    UI
                                </p>
                            </div>
                        </Link>
                        <div>
                            <ThemeToggler />
                            <button onClick={handleMenuOpner}>
                                <i className="ri-close-large-line text-secondary-foreground ml-4 text-xl"></i>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 px-4 font-semibold">
                        <Link
                            href="/components"
                            className="text-primary-foreground hover:text-primary-foreground transition-colors duration-200 hover:cursor-pointer"
                        >
                            Components
                        </Link>
                        <Link
                            href="/templates"
                            className="text-primary-foreground hover:text-primary-foreground transition-colors duration-200 hover:cursor-pointer"
                        >
                            Templates
                        </Link>
                        <Link
                            href="/pricing"
                            className="text-primary-foreground hover:text-primary-foreground transition-colors duration-200 hover:cursor-pointer"
                        >
                            Pricing
                        </Link>
                        <Link
                            href="/posts"
                            className="text-primary-foreground hover:text-primary-foreground transition-colors duration-200 hover:cursor-pointer"
                        >
                            Posts
                        </Link>
                    </div>
                    <div className="flex gap-5 px-4">
                        <Link
                            href="https://x.com/Hemantsh03"
                            target="_blank"
                            className="text-secondary-foreground hover:text-primary-foreground text-[22px] transition-colors duration-200 hover:cursor-pointer"
                        >
                            <i className="ri-twitter-x-line"></i>
                        </Link>
                        <Link
                            href="https://github.com/Autumn003/eUnary"
                            target="_blank"
                            className="text-secondary-foreground hover:text-primary-foreground text-2xl transition-colors duration-200 hover:cursor-pointer"
                        >
                            <i className="ri-github-fill"></i>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="bg-primary-background/30 border-muted-background fixed top-0 z-50 flex w-full items-center justify-between border-b p-4 backdrop-blur-md transition-all duration-400 lg:hidden">
                    <Link
                        href="/"
                        className="col-span-2 flex items-center gap-2"
                    >
                        <Image
                            src="/media/logo-dark.jpg"
                            alt="Eunary UI, a modern component library built with React, Tailwind CSS, and Motion, providing accessible and animated components"
                            width={28}
                            height={28}
                            className="rounded-lg dark:invert"
                        />
                    </Link>
                    <button onClick={handleMenuOpner}>
                        <i className="ri-menu-3-line text-secondary-foreground ml-4 text-xl"></i>
                    </button>
                </div>
            )}

            {/* Overlay to block ALL interactions when search is open */}
            {isDialogOpen && (
                <div
                    className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
                    onClick={() => setIsDialogOpen(false)}
                />
            )}

            <SearchBox
                isDialogOpen={isDialogOpen}
                setIsDialogOpen={setIsDialogOpen}
                className="fixed top-1/2 left-1/2 z-[70] -translate-x-1/2 -translate-y-1/2"
            />
        </div>
    );
}
