'use client';

import { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { CopyBtn } from '@/components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const ComponentSource = ({
    className,
    collapsible = false,
    fileContent,
}: {
    className: string;
    collapsible: boolean;
    fileContent: string | null;
}) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);

    if (!fileContent) {
        return (
            <div className="text-red-500">Error: File content not found.</div>
        );
    }

    const buttonHandler = () => {
        setIsOpened((prev) => {
            if (prev && containerRef.current) {
                containerRef.current.scrollTop = 0;
            }
            return !isOpened;
        });
    };

    return (
        <div>
            <div
                ref={containerRef}
                className={cn(
                    'custom-scrollbar relative mt-4 mb-9 flex w-full flex-col rounded-lg bg-[#1e1e1e] text-white',
                    !isOpened && 'max-h-64 overflow-hidden',
                    isOpened && 'max-h-[30rem] overflow-auto',
                    className
                )}
            >
                <div className="absolute top-2 right-2 z-20 my-auto">
                    <CopyBtn
                        content={fileContent}
                        className="bg-[#1e1e1e]/80"
                    />
                </div>
                <SyntaxHighlighter
                    language="tsx"
                    style={vscDarkPlus}
                    className="custom-scrollbar"
                    customStyle={{
                        borderRadius: '8px',
                        overflow: 'scroll',
                        whiteSpace: 'pre',
                        paddingBottom: '8px',
                    }}
                >
                    {fileContent}
                </SyntaxHighlighter>
                {collapsible && (
                    <div
                        className={cn(
                            'absolute z-10 flex items-center justify-center bg-gradient-to-b from-zinc-800/30 to-zinc-950/90 p-3',
                            isOpened
                                ? 'inset-x-0 bottom-0'
                                : 'absolute inset-0 top-0 left-0'
                        )}
                    >
                        <button
                            onClick={buttonHandler}
                            className="cursor-pointer rounded-lg bg-neutral-800 px-3 py-2 text-sm font-semibold transition-colors duration-150 hover:bg-neutral-800/60"
                        >
                            {isOpened ? 'Collapse' : 'Expand'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ComponentSource;
