import * as React from 'react';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';

import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';

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
    IOSNotificationsStackDemo,
    IOSNotificationsStackDemo2,
    RevealPaneDemo,
    ShinyButtonDemo,
} from '@/demo';

const components = {
    h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1
            className={cn(
                'mt-2 scroll-m-20 text-4xl font-bold tracking-tight',
                className
            )}
            {...props}
        />
    ),
    h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2
            className={cn(
                'mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0',
                className
            )}
            {...props}
        />
    ),
    h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3
            className={cn(
                'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight',
                className
            )}
            {...props}
        />
    ),
    h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h4
            className={cn(
                'mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
                className
            )}
            {...props}
        />
    ),
    h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h5
            className={cn(
                'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
                className
            )}
            {...props}
        />
    ),
    h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h6
            className={cn(
                'mt-8 scroll-m-20 text-base font-semibold tracking-tight',
                className
            )}
            {...props}
        />
    ),
    a: ({
        className,
        ...props
    }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
        <a
            className={cn(
                'font-medium underline underline-offset-4',
                className
            )}
            {...props}
        />
    ),
    p: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p
            className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
            {...props}
        />
    ),
    ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
        <ul className={cn('my-6 ml-6 list-disc', className)} {...props} />
    ),
    ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
        <ol className={cn('my-6 ml-6 list-decimal', className)} {...props} />
    ),
    li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
        <li className={cn('mt-2', className)} {...props} />
    ),
    blockquote: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLQuoteElement>) => (
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
    th: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLTableCellElement>) => (
        <th
            className={cn(
                'border-muted-foreground border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
                className
            )}
            {...props}
        />
    ),
    td: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLTableCellElement>) => (
        <td
            className={cn(
                'border-muted-foreground border px-4 py-3 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
                className
            )}
            {...props}
        />
    ),
    pre: ({
        className,
        children,
        ...props
    }: React.HTMLAttributes<HTMLPreElement>) => {
        // Function to extract text from nested children
        const extractText = (node: any): string => {
            if (typeof node === 'string') {
                return node;
            }
            if (React.isValidElement(node as any) && node.props.children) {
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
    code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <code
            className={cn(
                'relative rounded py-1.5 font-mono text-sm',
                className
            )}
            {...props}
        />
    ),
    Callout: ({
        className,
        ...props
    }: React.HTMLAttributes<HTMLSpanElement>) => (
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
    Steps: ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => (
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
    IOSNotificationsStackDemo,
    IOSNotificationsStackDemo2,
    RevealPaneDemo,
    ShinyButtonDemo,
};

interface MdxProps {
    content: string;
    description?: string;
    preview?: React.ReactNode;
    fileContent?: string;
}

export function Mdx({ content, preview, description, fileContent }: MdxProps) {
    return (
        <div className="mdx">
            {preview}
            <MDXRemote
                source={content}
                components={{
                    ...components,
                    ComponentSource: (props: any) => (
                        <ComponentSource {...props} fileContent={fileContent} />
                    ),
                    ComponentPreview: (props: any) => (
                        <ComponentPreview {...props} />
                    ),
                    h1: ({
                        className,
                        ...props
                    }: React.HTMLAttributes<HTMLHeadingElement>) => (
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
                options={{
                    parseFrontmatter: true,
                    mdxOptions: {
                        remarkPlugins: [remarkGfm],
                        rehypePlugins: [
                            rehypeSlug,
                            [
                                rehypePrettyCode,
                                {
                                    theme: 'github-dark',
                                    keepBackground: false,
                                    onVisitLine(node: any) {
                                        if (node.children.length === 0) {
                                            node.children = [
                                                { type: 'text', value: ' ' },
                                            ];
                                        }
                                    },
                                    onVisitHighlightedLine(node: any) {
                                        if (!node.properties.className) {
                                            node.properties.className = []; // Initialize if undefined
                                        }
                                        node.properties.className.push(
                                            'line--highlighted'
                                        );
                                    },
                                    onVisitHighlightedWord(node: any) {
                                        if (!node.properties.className) {
                                            node.properties.className = []; // Initialize if undefined
                                        }
                                        node.properties.className.push(
                                            'word--highlighted'
                                        );
                                    },
                                },
                            ],
                            [
                                rehypeAutolinkHeadings,
                                {
                                    properties: {
                                        className: ['subheading-anchor'],
                                        ariallabel: 'Link to section',
                                    },
                                },
                            ],
                        ],
                    },
                }}
            />
        </div>
    );
}
