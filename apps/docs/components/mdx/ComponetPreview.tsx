'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import ComponentSource from './ComponentSource';
import 'remixicon/fonts/remixicon.css';

interface ComponentShowcaseProps {
    component: React.ReactNode;
    name: string;
    className: string;
}

const ComponentPreview: React.FC<ComponentShowcaseProps> = ({
    component,
    name,
    className,
}) => {
    const [showCode, setShowCode] = useState(false);
    const [showComponent, setShowComponent] = useState(true);

    const showCodeBtnHandler = () => {
        setShowCode(true);
        setShowComponent(false);
    };
    const showComponentBtnHandler = () => {
        setShowComponent(true);
        setShowCode(false);
    };

    return (
        <div
            className={cn('no-scrollbar my-4 h-full rounded-lg p-4', className)}
        >
            <div className="my-2 flex gap-2">
                <button
                    onClick={showComponentBtnHandler}
                    className={`border-muted-background w-32 cursor-pointer rounded-lg border py-2 ${showComponent && 'bg-muted-background'} transition-colors duration-150`}
                >
                    <i className="ri-window-line"></i>{' '}
                    <span className="text-sm font-semibold">Preview</span>
                </button>
                <button
                    onClick={showCodeBtnHandler}
                    className={`border-muted-background w-32 cursor-pointer rounded-lg border px-3 py-2 ${showCode && 'bg-muted-background'} transition-colors duration-150`}
                >
                    <i className="ri-terminal-box-line"></i>{' '}
                    <span className="text-sm font-semibold">Code</span>
                </button>
            </div>

            {showComponent && (
                <div className="border-muted-background flex min-h-96 items-center justify-center rounded-lg border p-4">
                    <div className="rounded-lg border p-4">{component}</div>
                </div>
            )}

            {showCode && <ComponentSource componentName={name} />}
        </div>
    );
};

export default ComponentPreview;
