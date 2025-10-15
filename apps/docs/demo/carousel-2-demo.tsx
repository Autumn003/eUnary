'use client';

import { Carousel } from '@/components/ui/carousel';
import React from 'react';

const sampleSlides = [
    {
        imageSrc: '/media/n2.jpg',
        title: 'Knysna Heads',
    },

    {
        imageSrc: '/media/n3.jpg',
        title: 'Haydarpasa Train Station',
    },
    {
        imageSrc: '/media/n4.jpg',
        title: 'Danube Loop',
    },
    {
        imageSrc: '/media/n5.jpg',
        title: 'Great Wall of China',
    },
    {
        imageSrc: '/media/n1.jpg',
        title: 'Aescher-wildkirchli',
    },
];

const CarouselDemo2 = () => {
    return (
        <div className="w-full overflow-hidden rounded-md bg-gradient-to-r from-slate-100 via-slate-300 to-slate-100 p-4 dark:from-slate-950 dark:via-slate-800 dark:to-slate-950">
            <Carousel slides={sampleSlides} />
        </div>
    );
};

export default CarouselDemo2;
