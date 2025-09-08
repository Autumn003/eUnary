import { generatePageMetadata } from '@/lib/seo';
import { Metadata } from 'next';

export const metadata: Metadata = generatePageMetadata({
    title: 'Pricing – Affordable React Component Library Plans',
    description:
        'Choose the perfect plan for your project. Get access to premium React components, templates, and design resources. Free tier available with commercial licensing options.',
    keywords: [
        'eunary ui pricing',
        'react components pricing',
        'ui library subscription',
        'component library cost',
        'affordable ui components',
        'premium react components',
        'commercial license ui',
        'developer pricing plans',
        'tailwind css components price',
        'ui design system cost',
        'frontend components subscription',
        'next.js components pricing',
        'component library membership',
        'ui toolkit pricing',
        'react ui library plans',
    ],
    canonical: 'https://ui.eunary.com/pricing',
});

export default function PricingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
