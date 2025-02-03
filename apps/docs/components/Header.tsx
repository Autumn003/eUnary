import Image from 'next/image';
import 'remixicon/fonts/remixicon.css';
import { ThemeToggler } from './ThemeToggler';
import Link from 'next/link';

export default function Header() {
    return (
        <>
            <div className="bg-primary-background grid h-16 min-w-full grid-cols-12 px-8">
                <Link href="/" className="col-span-2 flex items-center gap-2">
                    <Image
                        src="/logo-dark.jpg"
                        alt="logo"
                        width={28}
                        height={28}
                        className="rounded-lg dark:invert"
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
                <div className="col-span-6 flex items-center gap-8 px-4 text-[15px] font-semibold">
                    <Link
                        href="/components"
                        className="text-secondary-foreground hover:text-primary-foreground transition-colors duration-200 hover:cursor-pointer"
                    >
                        Components
                    </Link>
                    <Link
                        href="/"
                        target="_blank"
                        className="text-secondary-foreground hover:text-primary-foreground transition-colors duration-200 hover:cursor-pointer"
                    >
                        Templates
                    </Link>
                    <Link
                        href="/"
                        target="_blank"
                        className="text-secondary-foreground hover:text-primary-foreground transition-colors duration-200 hover:cursor-pointer"
                    >
                        Pricing
                    </Link>
                    <Link
                        href="/"
                        target="_blank"
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
                    <h1 className="border-muted-foreground text-secondary-foreground h-9 w-56 rounded-xl border p-1 shadow-[-2px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                        search bar
                    </h1>
                </div>
            </div>
        </>
    );
}
