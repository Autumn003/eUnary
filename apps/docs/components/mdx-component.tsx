// @ts-nocheck

'use client';

import * as React from 'react';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { cn } from '@/lib/utils';

import {
    ThemeToggler,
    ComponentSource,
    ComponentPreview,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    CopyBtn,
    ExploreComponents,
} from '@/components';

import {
    ThemeTogglerDemo,
    ExpandableCardDemo,
    AlertDemo,
    AlertErrorDemo,
    AlertDefaultDemo,
    AlertProcessDemo,
    ScrollingMacbookDemo,
    FlipWordsDemo,
    FlipWordsDemo2,
    FileUploadDemo,
    FloatingElementsCardDemo,
} from '@/demo';

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
        <div className="mt-4 mb-10 w-full overflow-y-auto">
            <table
                className={cn(
                    'border-muted-background w-full border-collapse border',
                    className
                )}
                {...props}
            />
        </div>
    ),
    tr: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLTableRowElement>) => (
        <tr
            className={cn(
                'even:bg-muted-background border-muted-background m-0 border-t p-0',
                className
            )}
            {...props}
        />
    ),
    th: ({ className, ...props }) => (
        <th
            className={cn(
                'border-muted-foreground border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
                className
            )}
            {...props}
        />
    ),
    td: ({ className, ...props }) => (
        <td
            className={cn(
                'border-muted-foreground border px-4 py-3 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
                className
            )}
            {...props}
        />
    ),
    pre: ({ className, children, ...props }) => {
        // Function to extract text from nested children
        const extractText = (node) => {
            if (typeof node === 'string') {
                return node;
            }
            if (React.isValidElement(node) && node.props.children) {
                return React.Children.toArray(node.props.children)
                    .map(extractText)
                    .join('');
            }
            return '';
        };

        // Extract text from children
        const codeText = React.Children.toArray(children)
            .map(extractText)
            .join('');

        return (
            <div
                className={cn(
                    'border-muted-foreground custom-scrollbar relative my-4 flex h-full max-h-96 overflow-auto rounded-lg border bg-[#1e1e1e] py-3',
                    className
                )}
            >
                {codeText && (
                    <div className="absolute top-2 right-2 z-20 my-auto bg-[#1e1e1e]/80">
                        <CopyBtn content={codeText} className="" />
                    </div>
                )}
                <pre
                    className="custom-scrollbar w-full overflow-auto px-4 py-1"
                    {...props}
                >
                    {children}
                </pre>
            </div>
        );
    },
    code: ({ className, ...props }) => (
        <code
            className={cn(
                'relative rounded py-1.5 font-mono text-sm',
                className
            )}
            {...props}
        />
    ),
    Callout: ({ className, ...props }) => (
        <span
            className={cn(
                'rounded-lg bg-[#ededed] px-2 py-1 font-mono text-sm dark:bg-[#27272a]',
                className
            )}
            {...props}
        />
    ),
    Step: ({ className, ...props }: React.ComponentProps<'h3'>) => (
        <div
            className={cn(
                'font-heading relative mt-10 mb-6 scroll-m-20 font-semibold tracking-tight',
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
    Tabs: ({ className, ...props }: React.ComponentProps<typeof Tabs>) => (
        <Tabs className={cn('relative mt-6 w-full', className)} {...props} />
    ),
    TabsList: ({
        className,
        ...props
    }: React.ComponentProps<typeof TabsList>) => (
        <TabsList
            className={cn(
                'border-muted-background w-full justify-start rounded-none border-b bg-transparent p-0',
                className
            )}
            {...props}
        />
    ),
    TabsTrigger: ({
        className,
        ...props
    }: React.ComponentProps<typeof TabsTrigger>) => (
        <TabsTrigger
            className={cn(
                'text-secondary-foreground data-[state=active]:border-b-primary-foreground data-[state=active]:text-primary-foreground relative h-9 cursor-pointer rounded-none border-b-2 border-b-transparent bg-transparent px-4 pt-2 pb-3 font-semibold shadow-none transition-none data-[state=active]:shadow-none',
                className
            )}
            {...props}
        />
    ),
    TabsContent: ({
        className,
        ...props
    }: React.ComponentProps<typeof TabsContent>) => (
        <TabsContent
            className={cn(
                'relative [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold',
                className
            )}
            {...props}
        />
    ),
    Image,
    ThemeToggler,
    ComponentSource,
    ComponentPreview,
    ExploreComponents,
    ThemeTogglerDemo,
    ExpandableCardDemo,
    AlertDemo,
    AlertErrorDemo,
    AlertDefaultDemo,
    AlertProcessDemo,
    ScrollingMacbookDemo,
    FlipWordsDemo,
    FlipWordsDemo2,
    FileUploadDemo,
    FloatingElementsCardDemo,
};

interface MdxProps {
    code: string;
    description: string;
    preview?: React.ReactNode;
    fileContent?: string;
}

export function Mdx({ code, preview, description, fileContent }: MdxProps) {
    const Component = useMDXComponent(code);

    return (
        <div className="mdx">
            {preview} {/* Inject server-rendered ComponentPreview */}
            <Component
                components={{
                    ...components,
                    ComponentSource: (props) => (
                        <ComponentSource {...props} fileContent={fileContent} />
                    ),
                    ComponentPreview: (props) => (
                        <ComponentPreview {...props} />
                    ),
                    h1: ({ className, ...props }) => (
                        <div className="mb-16">
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
                        </div>
                    ),
                }}
            />
        </div>
    );
}
