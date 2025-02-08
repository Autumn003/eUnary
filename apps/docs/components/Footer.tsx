import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className="p-8">
            <div className="flex flex-col md:flex-row">
                <div className="w-full">
                    <Link
                        href="/"
                        className="col-span-2 flex items-center gap-2"
                    >
                        <Image
                            src="/logo-dark.jpg"
                            alt="logo"
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
                <div className="flex w-full">
                    <div className="flex w-full flex-col items-end">
                        <div className="text-secondary-foreground flex flex-col gap-8">
                            <Link href="/components">Pricing</Link>
                            <Link href="/components">Components</Link>
                            <Link href="/components">Templates</Link>
                            <Link href="/components">Posts</Link>
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-end">
                        section 2
                    </div>
                    <div className="flex w-full flex-col items-end">
                        section 3
                    </div>
                </div>
            </div>
            <footer className="text-secondary-foreground pt-10 text-center text-sm">
                <p>
                    © {new Date().getFullYear()} Eunary UI. All rights reserved
                </p>
            </footer>
        </div>
    );
}
