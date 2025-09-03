import React from 'react';
import { RevealPane } from '@/components/ui/reveal-pane';

export function RevealPaneDemo() {
    return (
        <div className="rounded-3xl border border-neutral-200 bg-neutral-100 p-4 px-4 dark:border-neutral-800 dark:bg-neutral-900">
            <div className="mb-6 flex items-center gap-2 border-b border-gray-700/50 p-3">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <div className="ml-auto text-xs text-gray-400">Reveal Pane</div>
            </div>

            <RevealPane
                leftImgSrc="/media/logo-dark.jpg"
                rightImgSrc="/media/logo-dark.jpg"
                rightImgClassName="invert"
                className="h-72 w-72 md:h-96 md:w-[30rem]"
            />
        </div>
    );
}
