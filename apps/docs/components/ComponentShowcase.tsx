'use client';

import React, { useState } from 'react';
import { cn } from '../lib/utils';
import CodeShowcase from './CodeShowcase';

interface ComponentShowcaseProps {
    title: string;
    component: React.ReactNode;
    code: string;
    className: string;
}

const ComponentShowcase: React.FC<ComponentShowcaseProps> = ({
    title,
    component,
    code,
    className,
}) => {
    const [showCode, setShowCode] = useState(false);

    const showCodeBtnHandler = () => {
        setShowCode(!showCode);
    };

    return (
        <div
            className={cn(
                'no-scrollbar gap-4 rounded-lg border p-4 shadow-md',
                className
            )}
        >
            <button
                onClick={showCodeBtnHandler}
                className="bg-muted-background rounded-xl px-4 py-1"
            >
                {showCode ? 'Component' : 'Code'}
            </button>
            {!showCode && (
                <div className="flex items-center justify-center p-4">
                    <div className="rounded-lg border p-4">{component}</div>
                </div>
            )}

            {showCode && <CodeShowcase code={code} title={title} />}
        </div>
    );
};

export default ComponentShowcase;
