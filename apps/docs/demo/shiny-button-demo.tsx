'use client';

import { ShinyButton } from '@/components/ui/shiny-button';

export const ShinyButtonDemo = () => {
    return (
        <div className="flex h-lvh w-full items-center justify-center">
            <ShinyButton
                className="text-sm"
                containerClassName=""
                shine="always"
                shineDirection="right"
                spinGlow="hover"
                spinGlowDirection="bottom"
                spinGlowRotate="clockwise"
                spinGlowSpeed={3}
                onClick={() => alert('Button Clicked!')}
            >
                Hover me to see the magic!
            </ShinyButton>
        </div>
    );
};
