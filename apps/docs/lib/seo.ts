interface SEOProps {
    title: string;
    description: string;
    keywords?: string[];
    canonical?: string;
    images?: string[];
    type?: 'website' | 'article';
}

export function generatePageMetadata({
    title,
    description,
    keywords = [],
    canonical,
    images = ['/media/hero-image.png'],
    type = 'website',
}: SEOProps) {
    const baseKeywords = [
        'ui components',
        'eunary ui',
        'saas ui library',
        'frontend components',
        'react components',
    ];
    return {
        title,
        description,
        keywords: [...baseKeywords, ...keywords],
        openGraph: {
            title,
            description,
            type,
            images: images.map((img) => ({
                url: img,
                width: 1200,
                height: 630,
                alt: title,
            })),
            locale: 'en_US',
            siteName: 'Eunary UI',
        },
        twitter: {
            card: 'summary_large_image' as const,
            title,
            description,
            images: images[0],
        },
        alternates: canonical ? { canonical } : undefined,
    };
}
