'use client';

import { useEffect, useRef } from 'react';

// Gallery items
const galleryItems = [
    {
        type: 'image',
        src: '/sample_img_1.webp',
        className: 'col-span-2 row-span-1 self-center h-44 w-full',
    },
    {
        type: 'video',
        src: '/sample_1.mp4',
        className: 'col-span-2 row-span-2 h-full w-full',
    },
    {
        type: 'image',
        src: '/sample_img_3.png',
        className: 'col-span-2 row-span-1 self-center h-44 w-full',
    },
    {
        type: 'image',
        src: '/sample_img_2.png',
        className: 'col-span-1 self-center',
    },
    { type: 'video', src: '/sample_2.mp4', className: 'col-span-1 h-64' },
    { type: 'image', src: '/sample_img_4.png', className: 'col-span-1' },
    {
        type: 'video',
        src: '/sample_3.mp4',
        className: 'col-span-1 h-64 mix-blend-exclusion',
    },
    {
        type: 'video',
        src: '/sample_4.mp4',
        className: 'col-span-4 h-64 w-full',
    },
];

// Gallery Item Component
const GalleryItem = ({
    type,
    src,
    className,
}: {
    type: string;
    src: string;
    className: string;
}) =>
    type === 'video' ? (
        <video
            src={src}
            className={`rounded-lg object-cover ${className}`}
            autoPlay
            loop
            muted
            playsInline
        />
    ) : (
        <img
            src={src}
            alt="gallery_image"
            className={`rounded-lg object-cover ${className}`}
        />
    );

// Auto Scrolling Gallery Component
const AutoScrollingGallery = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const scrollSpeed = 1;
        const intervalTime = 40; // Increased interval to slow it down

        const interval = setInterval(() => {
            if (!scrollContainer) return;

            scrollContainer.scrollTop += scrollSpeed;

            // If the first half of the content is out of view, reset to the top
            if (scrollContainer.scrollTop >= scrollContainer.scrollHeight / 2) {
                scrollContainer.scrollTop = 0;
            }
        }, intervalTime);

        return () => clearInterval(interval);
    }, []);

    // Duplicate the items to create an infinite scrolling effect
    const duplicatedItems = [...galleryItems, ...galleryItems];

    return (
        <div className="relative h-72 overflow-hidden lg:h-[30rem]">
            <div className="absolute top-0 z-10 h-full w-full bg-[radial-gradient(at_80%_50%,_rgba(0,0,0,_0)_10%,_rgba(255,255,255,_0.8)_40%,_rgba(255,255,255,1)_100%)] dark:bg-[radial-gradient(at_80%_50%,_rgba(255,255,255,_0)_10%,_rgba(0,0,0,_0.8)_40%,_rgba(0,0,0,1)_100%)]">
                <div className="container flex h-full items-center justify-between lg:flex-col lg:items-start lg:justify-center">
                    <h2 className="text-primary-foreground w-[50%] text-4xl font-semibold md:text-6xl">
                        Ship{' '}
                        <span className="bg-gradient-to-b from-blue-300 to-blue-600 bg-clip-text text-transparent">
                            faster
                        </span>{' '}
                        with beautiful components
                    </h2>
                    <div>buttons</div>
                </div>
            </div>
            {/* Scrollable Content */}
            <div
                ref={scrollRef}
                className="no-scrollbar relative h-full overflow-hidden"
            >
                <div className="grid grid-cols-4 gap-4 py-10">
                    {duplicatedItems.map((item, index) => (
                        <GalleryItem
                            key={index}
                            type={item.type}
                            src={item.src}
                            className={item.className}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AutoScrollingGallery;
