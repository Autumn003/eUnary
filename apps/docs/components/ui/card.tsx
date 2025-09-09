'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface cardProps {
    heading: string;
    subheading: string;
    imageURL?: string;
    alt?: string;
    className: string;
    description: string;
    points: string[];
    solidButton?: string;
    outlineButton?: string;
    link?: string;
    linkNavigationPath?: string;
    buttonHandler?: any;
    children?: React.ReactNode;
}

const Card = ({
    heading,
    subheading,
    imageURL,
    alt = '',
    className,
    description,
    points,
    solidButton,
    outlineButton,
    link,
    linkNavigationPath,
    buttonHandler,
    children,
}: cardProps) => {
    return (
        <div
            className={cn(
                'group hover:bg-muted-background/50 relative max-w-96 min-w-80 rounded-4xl border p-6 transition-colors duration-150',
                className
            )}
        >
            <h3 className="mb-5 text-center text-4xl font-bold">{heading}</h3>
            {imageURL && (
                <Image
                    src={`${imageURL}`}
                    alt={alt}
                    width={300}
                    height={300}
                    className="mb-2"
                />
            )}

            <h4 className="text-secondary-foreground mb-4 text-lg font-semibold">
                {subheading}
            </h4>
            <p className="h-24 text-[15px]">{description}</p>
            <div className="h-[28rem] text-[15px]">
                {points.length > 0 &&
                    points.map((point, index) => (
                        <div key={index} className="my-4 flex gap-3">
                            <i className="ri-checkbox-circle-fill text-lg text-violet-500"></i>
                            <p>{point}</p>
                        </div>
                    ))}
            </div>
            {solidButton && (
                <button
                    onClick={buttonHandler}
                    className="my-5 w-full cursor-pointer rounded-xl bg-violet-500 from-violet-600 via-violet-500 to-violet-600 py-3 font-semibold text-white transition-colors duration-150 hover:bg-violet-600/90 dark:bg-gradient-to-r dark:hover:from-violet-700/80 dark:hover:via-violet-500/80 dark:hover:to-violet-700/80"
                >
                    {solidButton}
                </button>
            )}
            {outlineButton && (
                <button
                    onClick={buttonHandler}
                    className="my-5 w-full cursor-pointer rounded-xl border-[1.5px] border-violet-500 py-3 font-semibold text-violet-500 transition-all duration-150 hover:border-violet-600/90 hover:text-violet-600/90"
                >
                    {outlineButton}
                </button>
            )}
            {link && (
                <Link href={linkNavigationPath || ''}>
                    <div className="my-5 w-full cursor-pointer rounded-xl bg-violet-500 from-violet-600 via-violet-500 to-violet-600 py-3 text-center font-semibold text-white transition-colors duration-150 hover:bg-violet-600/90 dark:bg-gradient-to-r dark:hover:from-violet-700/80 dark:hover:via-violet-500/80 dark:hover:to-violet-700/80">
                        {link}
                    </div>
                </Link>
            )}
            {children}
        </div>
    );
};

export default Card;
