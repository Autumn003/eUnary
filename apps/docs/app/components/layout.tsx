import { Sidebar } from '@/components';
import { generatePageMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = generatePageMetadata({
    title: 'Components – React & Tailwind CSS Components',
    description:
        'Collection of production-ready React components from Eunary UI. Copy, paste, and customize modern UI components built with Tailwind CSS. Perfect for Next.js projects and rapid prototyping.',
    keywords: [
        'eunary ui components',
        'react component library',
        'tailwind css components',
        'copy paste components',
        'next.js ui library',
        'modern react components',
        'ui component gallery',
        'frontend component system',
        'accessible ui components',
        'customizable react components',
        'production ready components',
        'typescript components',
        'responsive ui components',
        'component documentation',
        'ui design system',
    ],
    canonical: 'https://ui.eunary.com/components',
});

export default function docsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="container grid grid-cols-10">
            <div className="fixed top-14 col-span-1 hidden h-[calc(100vh-3.5rem)] shrink-0 lg:sticky lg:col-span-2 lg:block lg:self-start">
                <Sidebar />
            </div>
            <div className="col-span-10 mt-10 mb-20 flex justify-center lg:col-span-8">
                {children}
            </div>
        </div>
    );
}
