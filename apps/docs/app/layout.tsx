import '@/styles/globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Header, Footer } from '@/components';

// Define custom font
const customFont = localFont({
    variable: '--font-primary',
    display: 'swap',
    preload: true,
    src: [
        {
            path: '../public/fonts/font-regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/font-bold.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
});

// Metadata for SEO optimization
export const metadata: Metadata = {
    metadataBase: new URL('https://ui.eunary.com/'),
    title: {
        default: 'Eunary UI | Powerful Components for Your SaaS Product',
        template: '%s | Eunary UI',
    },
    description:
        'Eunary UI - A comprehensive components library to quickly build and design modern SaaS applications. Fully customizable, lightweight, and optimized for performance.',
    keywords: [
        'UI component library',
        'React UI components',
        'SaaS UI toolkit',
        'customizable UI components',
        'component library for developers',
    ],
    authors: [{ name: 'Eunary' }],
    creator: 'Eunary',
    publisher: 'Eunary',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://ui.eunary.com',
        title: 'Eunary UI - Powerful Components for SaaS Applications',
        description:
            'Explore Eunary UI: Fully customizable components library designed to speed up your SaaS development.',
        images: [
            {
                url: '/media/hero-image.png',
                width: 1200,
                height: 630,
                alt: 'Eunary UI Components Showcase',
            },
        ],
        siteName: 'Eunary UI',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Eunary UI - Powerful Components for SaaS Apps',
        description:
            'Build faster with Eunary UI – A modern UI component library optimized for SaaS developers.',
        images: ['/media/hero-image.png'],
    },
    alternates: {
        canonical: 'https://ui.eunary.com',
    },
    other: {
        'theme-color': '#AD46FF',
        'msapplication-TileColor': '#AD46FF',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html suppressHydrationWarning lang="en">
            <head>
                <link
                    rel="icon"
                    href="/media/logo-dark.png"
                    type="image/png"
                    sizes="32*32"
                />
                <link
                    rel="preload"
                    href="/media/logo-dark.png"
                    as="image"
                    fetchPriority="high"
                />

                <link rel="dns-prefetch" href="//fonts.googleapis.com" />
                <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />

                {/* theme initialization script */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                var theme = localStorage.getItem('theme');
                                if (theme === 'light') {
                                    document.documentElement.classList.remove('dark');
                                } else {
                                    document.documentElement.classList.add('dark');
                                    if (!theme) {
                                        localStorage.setItem('theme', 'dark');
                                    }
                                }
                            })();
                        `,
                    }}
                />

                {/* organization structured data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Organization',
                            '@id': 'https://ui.eunary.com/#organization',
                            name: 'Eunary UI',
                            url: 'https://ui.eunary.com',
                            logo: {
                                '@type': 'ImageObject',
                                url: 'https://ui.eunary.com/media/logo-dark.png',
                                width: 800,
                                height: 600,
                            },
                            description:
                                'Eunary UI is a modern, customizable component library designed to help developers build SaaS applications faster and easier.',
                            foundingDate: '2025',
                            numberOfEmployees: {
                                '@type': 'QuantitativeValue',
                                value: 1,
                            },
                            areaServed: [{ '@type': 'Place', name: 'Global' }],
                            serviceType: [
                                'UI Component Library',
                                'Frontend Development Tools',
                                'SaaS Application Design',
                                'Pre-built Templates for SaaS Applications',
                            ],
                        }),
                    }}
                />

                {/* website structured data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'WebSite',
                            '@id': 'https://ui.eunary.com/#website',
                            url: 'https://ui.eunary.com',
                            name: 'Eunary UI',
                            description:
                                'Eunary UI is a modern, customizable component library and template system designed to help developers build SaaS applications faster and easier.',
                            publisher: {
                                '@id': 'https://ui.eunary.com/#organization',
                            },
                            inLanguage: 'en-US',
                        }),
                    }}
                />
            </head>
            <body
                className={`${customFont.variable} text-primary-foreground custom-scrollbar font-sans`}
            >
                <div className="fixed inset-0 -z-50" />
                <Header />
                <main className="mt-16">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
