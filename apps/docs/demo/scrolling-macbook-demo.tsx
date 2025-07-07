'use client';

import ScrollingMacbook from '@/components/ui/scrolling-macbook';

const ScrollingMacbookDemo = () => {
    return (
        <div>
            <ScrollingMacbook className="flex flex-col items-center justify-center">
                <div className="h-full w-full bg-[url(/media/mc-screen.webp)] bg-cover bg-center" />
            </ScrollingMacbook>
        </div>
    );
};

export default ScrollingMacbookDemo;
