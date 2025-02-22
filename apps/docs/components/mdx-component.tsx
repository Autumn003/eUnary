// @ts-nocheck

'use client';

import * as React from 'react';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { cn } from '@/lib/utils';

import ThemeToggler from '@/components/web/ThemeToggler';
import { SearchBox } from '@/components';
import ComponentSource from '@/components/mdx/ComponentSource';
import ComponetPreview from '@/components/mdx/ComponetPreview';
import dynamic from 'next/dynamic';

// const ComponentSource = dynamic(
//     () => import('@/components/mdx/ComponentSource'),
//     {
//         ssr: false, // Prevents SSR, ensures it runs only on the client
//     }
// );

const components = {
    h1: ({ className, ...props }) => (
        <h1
            className={cn(
                'mt-2 scroll-m-20 text-4xl font-bold tracking-tight',
                className
            )}
            {...props}
        />
    ),
    h2: ({ className, ...props }) => (
        <h2
            className={cn(
                'mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0',
                className
            )}
            {...props}
        />
    ),
    h3: ({ className, ...props }) => (
        <h3
            className={cn(
                'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight',
                className
            )}
            {...props}
        />
    ),
    h4: ({ className, ...props }) => (
        <h4
            className={cn(
                'mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
                className
            )}
            {...props}
        />
    ),
    h5: ({ className, ...props }) => (
        <h5
            className={cn(
                'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
                className
            )}
            {...props}
        />
    ),
    h6: ({ className, ...props }) => (
        <h6
            className={cn(
                'mt-8 scroll-m-20 text-base font-semibold tracking-tight',
                className
            )}
            {...props}
        />
    ),
    a: ({ className, ...props }) => (
        <a
            className={cn(
                'font-medium underline underline-offset-4',
                className
            )}
            {...props}
        />
    ),
    p: ({ className, ...props }) => (
        <p
            className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
            {...props}
        />
    ),
    ul: ({ className, ...props }) => (
        <ul className={cn('my-6 ml-6 list-disc', className)} {...props} />
    ),
    ol: ({ className, ...props }) => (
        <ol className={cn('my-6 ml-6 list-decimal', className)} {...props} />
    ),
    li: ({ className, ...props }) => (
        <li className={cn('mt-2', className)} {...props} />
    ),
    blockquote: ({ className, ...props }) => (
        <blockquote
            className={cn(
                '[&>*]:text-muted-foreground mt-6 border-l-2 pl-6 italic',
                className
            )}
            {...props}
        />
    ),
    img: ({
        className,
        alt,
        ...props
    }: React.ImgHTMLAttributes<HTMLImageElement>) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            className={cn('rounded-md border', className)}
            alt={alt}
            {...props}
        />
    ),
    hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
    table: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLTableElement>) => (
        <div className="my-6 w-full overflow-y-auto">
            <table className={cn('w-full', className)} {...props} />
        </div>
    ),
    tr: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLTableRowElement>) => (
        <tr
            className={cn('even:bg-muted m-0 border-t p-0', className)}
            {...props}
        />
    ),
    th: ({ className, ...props }) => (
        <th
            className={cn(
                'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
                className
            )}
            {...props}
        />
    ),
    td: ({ className, ...props }) => (
        <td
            className={cn(
                'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
                className
            )}
            {...props}
        />
    ),
    pre: ({ className, ...props }) => (
        <pre
            className={cn(
                'border-muted-foreground mt-6 mb-4 overflow-x-auto rounded-lg border bg-[#1e1e1e] py-4',
                className
            )}
            {...props}
        />
    ),
    code: ({ className, ...props }) => (
        <code
            className={cn(
                'relative px-4 py-[0.2rem] font-mono text-sm',
                className
            )}
            {...props}
        />
    ),
    Step: ({ className, ...props }: React.ComponentProps<'h3'>) => (
        <div
            className={cn(
                'font-heading relative mt-8 scroll-m-20 font-semibold tracking-tight',
                className
            )}
        >
            <div className="bg-muted-background absolute -left-8 h-7 w-1.5 rounded-r"></div>
            <h3 {...props} />
        </div>
    ),
    Steps: ({ ...props }) => (
        <div
            className="[&>h3]:step steps border-muted-background mb-12 border-l pl-8 [counter-reset:step]"
            {...props}
        />
    ),
    Image,
    SearchBox,
    ThemeToggler,
    ComponentSource,
    ComponetPreview,
};

interface MdxProps {
    code: string;
    description: string;
    preview?: React.ReactNode;
}

export function Mdx({ code, preview, description }: MdxProps) {
    const Component = useMDXComponent(code);

    return (
        <div className="mdx">
            {preview} {/* Inject server-rendered ComponentPreview */}
            <Component
                components={{
                    ...components,
                    h1: ({ className, ...props }) => (
                        <>
                            <h1
                                className={cn(
                                    'mt-2 scroll-m-20 text-4xl font-bold tracking-tight',
                                    className
                                )}
                                {...props}
                            />
                            {description && (
                                <p className="text-secondary-foreground mt-2">
                                    {description}
                                </p>
                            )}
                        </>
                    ),
                }}
            />
        </div>
    );
}
