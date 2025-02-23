'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';

const CopyBtn = ({
    content,
    className,
}: {
    content: string;
    className: string;
}) => {
    const [copied, setCopied] = useState(false);

    const copyBtnHandler = () => {
        navigator.clipboard.writeText(content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (
        <div>
            <button
                className={cn(
                    'cursor-pointer rounded-xl p-2 transition-all duration-200 hover:bg-stone-800',
                    className
                )}
                onClick={copyBtnHandler}
            >
                {copied ? (
                    <>
                        <i className="ri-check-line"></i>
                    </>
                ) : (
                    <>
                        <i className="ri-file-copy-fill"></i>
                    </>
                )}
            </button>
        </div>
    );
};

export default CopyBtn;
