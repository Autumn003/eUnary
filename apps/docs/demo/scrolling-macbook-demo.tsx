'use client';

import ScrollingMacbook from '@/components/ui/scrolling-macbook';

const ScrollingMacbookDemo = () => {
    return (
        <div>
            <ScrollingMacbook className="flex flex-col items-center justify-center">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 text-sm font-bold text-white">
                    EU
                </div>
                <p className="mt-1 text-xs font-light text-white/80">
                    ui.eunary.com
                </p>
            </ScrollingMacbook>
        </div>
    );
};

export default ScrollingMacbookDemo;
