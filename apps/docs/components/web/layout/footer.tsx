import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className="border-muted-background border-t px-8">
            <div className="flex flex-col gap-10 py-14 md:flex-row md:gap-0">
                <div className="w-full">
                    <Link
                        href="/"
                        className="col-span-2 flex items-center gap-2"
                    >
                        <Image
                            src="/media/logo-dark.png"
                            alt="Eunary UI, a modern component library built with React, Tailwind CSS, and Motion, providing accessible and animated components"
                            width={40}
                            height={40}
                            className="rounded-xl dark:invert"
                        />
                        <div className="-mb-1 flex items-end gap-1">
                            <h1 className="text-primary-foreground text-3xl font-semibold">
                                Eunary
                            </h1>
                            <p className="border-secondary-foreground text-secondary-foreground mb-1 rounded-md border px-1 text-sm font-light">
                                UI
                            </p>
                        </div>
                    </Link>
                    <div className="text-secondary-foreground my-5 flex flex-col gap-2 text-sm">
                        <p>Product by Eunary</p>
                        <div>
                            Building in public by{' '}
                            <Link
                                href="https://x.com/Hemantsh03"
                                target="_blank"
                                className="font-semibold"
                            >
                                Hemant Sharma
                            </Link>{' '}
                        </div>
                    </div>
                </div>
                <div className="w-full"></div>
                <div className="flex w-full">
                    <div className="flex w-full flex-col">
                        <div className="text-secondary-foreground flex flex-col gap-8 text-sm">
                            <Link
                                href="/pricing"
                                className="hover:text-primary-foreground transition-colors duration-200"
                            >
                                Pricing
                            </Link>
                            <Link
                                href="/components"
                                className="hover:text-primary-foreground transition-colors duration-200"
                            >
                                Components
                            </Link>
                            <Link
                                href="/templates"
                                className="hover:text-primary-foreground transition-colors duration-200"
                            >
                                Templates
                            </Link>
                            <Link
                                href="/posts"
                                className="hover:text-primary-foreground transition-colors duration-200"
                            >
                                Posts
                            </Link>
                        </div>
                    </div>
                    <div className="flex w-full flex-col">
                        <div className="flex w-full flex-col">
                            <div className="text-secondary-foreground flex flex-col gap-8 text-sm">
                                <Link
                                    href="https://x.com/Hemantsh03"
                                    target="_blank"
                                    className="hover:text-primary-foreground transition-colors duration-200"
                                >
                                    Twitter
                                </Link>
                                <Link
                                    href="https://github.com/Autumn003/eUnary"
                                    target="_blank"
                                    className="hover:text-primary-foreground transition-colors duration-200"
                                >
                                    GitHub
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full flex-col">
                        <div className="text-secondary-foreground flex flex-col gap-8 text-sm">
                            <Link
                                href="https://pro.eunary.com"
                                target="_blank"
                                className="hover:text-primary-foreground transition-colors duration-200"
                            >
                                UI Eunary Pro
                            </Link>
                            <Link
                                href="https://eunary.com"
                                target="_blank"
                                className="hover:text-primary-foreground transition-colors duration-200"
                            >
                                Eunary
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="text-secondary-foreground py-10 text-center text-sm">
                <p>
                    © {new Date().getFullYear()} Eunary UI. All rights reserved
                </p>
            </footer>
        </div>
    );
}
