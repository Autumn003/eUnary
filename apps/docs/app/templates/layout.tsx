import { generatePageMetadata } from '@/lib/seo';
import { Metadata } from 'next';

export const metadata: Metadata = generatePageMetadata({
    title: 'Templates – Ready-to-Use React & Next.js Templates',
    description:
        'Discover premium React and Next.js templates built with Tailwind CSS. Landing pages, dashboards, and complete website templates ready for customization and deployment.',
    keywords: [
        'eunary ui templates',
        'react templates',
        'next.js templates',
        'tailwind css templates',
        'landing page templates',
        'dashboard templates',
        'website templates react',
        'ready-made templates',
        'premium react templates',
        'responsive web templates',
        'modern website templates',
        'template library',
        'ui template collection',
        'customizable templates',
        'production ready templates',
        'typescript templates',
        'component-based templates',
        'startup website templates',
        'saas templates',
        'portfolio templates',
    ],
    canonical: 'https://ui.eunary.com/templates',
});

export default function TemplatesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
