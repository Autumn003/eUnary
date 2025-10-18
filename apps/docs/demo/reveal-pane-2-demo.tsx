import React from 'react';
import { RevealPane } from '@/components/ui/reveal-pane';

export function RevealPaneDemo2() {
    return (
        <div className="rounded-3xl border border-neutral-200 bg-neutral-100 p-4 px-4 dark:border-neutral-800 dark:bg-neutral-900">
            <RevealPane
                leftImgSrc="/media/home-dark.png"
                rightImgSrc="/media/home-light.png"
                rightImgClassName=""
                className="h-72 w-72 md:h-96 md:w-[30rem]"
                autoplay={true}
                duration={6}
                pauseOnHover={true}
                loop={true}
            />
        </div>
    );
}
