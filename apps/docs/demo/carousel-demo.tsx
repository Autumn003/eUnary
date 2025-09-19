'use client';

import { Carousel } from '@/components/ui/carousel';
import React from 'react';

const sampleSlides = [
    {
        imageSrc: '/media/reveal-pane.png',
        title: 'Reveal Pane',
        navigationTitle: 'Explore Component',
        navigationLink: 'https://ui.eunary.com/components/reveal-pane',
    },
    {
        imageSrc: '/media/file-upload.png',
        title: 'File Upload',
        navigationTitle: 'Explore Component',
        navigationLink: 'https://ui.eunary.com/components/file-upload',
    },
    {
        imageSrc: '/media/featured-globe.png',
        title: 'Featured Globe',
        navigationTitle: 'Explore Component',
        navigationLink: 'https://ui.eunary.com/components/featured-globe',
    },
    {
        imageSrc: '/media/floating-elements-card.png',
        title: 'Floating Elements Card',
        navigationTitle: 'Explore Component',
        navigationLink:
            'https://ui.eunary.com/components/floating-elements-card',
    },
    {
        imageSrc: '/media/flip-words.png',
        title: 'Flip Words',
        navigationTitle: 'Explore Component',
        navigationLink: 'https://ui.eunary.com/components/flip-words',
    },
];

const CarouselDemo = () => {
    return (
        <div className="w-full overflow-hidden rounded-md bg-gradient-to-r from-slate-100 via-slate-300 to-slate-100 p-4 dark:from-slate-950 dark:via-slate-800 dark:to-slate-950">
            <Carousel slides={sampleSlides} />
        </div>
    );
};

export default CarouselDemo;
