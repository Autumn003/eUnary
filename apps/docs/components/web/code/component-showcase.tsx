'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import CodeShowcase from './code-showcase';
import 'remixicon/fonts/remixicon.css';

interface ComponentShowcaseProps {
    component: React.ReactNode;
    code: string;
    className: string;
}

const ComponentShowcase: React.FC<ComponentShowcaseProps> = ({
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
                'no-scrollbar h-full gap-4 rounded-lg p-4',
                className
            )}
        >
            <button
                onClick={showCodeBtnHandler}
                className="bg-muted-background mx-4 my-4 cursor-pointer rounded-xl px-3 py-1"
            >
                {showCode ? (
                    <div>
                        <i className="ri-window-line mr-2"></i> Component
                    </div>
                ) : (
                    <div>
                        <i className="ri-terminal-box-line"></i> Code
                    </div>
                )}
            </button>
            {!showCode && (
                <div className="border-muted-background flex min-h-96 items-center justify-center rounded-2xl border p-4">
                    <div className="rounded-lg border p-4">{component}</div>
                </div>
            )}

            {showCode && <CodeShowcase code={code} />}
        </div>
    );
};

export default ComponentShowcase;
