"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { CopyBtn } from "@/components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

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

    console.log("ComponentSource received fileContent:", fileContent);

    if (!fileContent) {
        return <div className="text-red-500">Error: File content not found.</div>;
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
                    "custom-scrollbar relative w-full rounded-lg bg-[#1e1e1e] text-white",
                    !isOpened && "max-h-52 overflow-hidden",
                    isOpened && "max-h-96 overflow-auto",
                    className
                )}
            >
                <div className="sticky top-0 z-20 flex justify-end bg-transparent p-2">
                    <CopyBtn content={fileContent} className="bg-[#1e1e1e]/80" />
                </div>
                <SyntaxHighlighter
                    language="tsx"
                    style={vscDarkPlus}
                    customStyle={{
                        borderRadius: "8px",
                        overflow: "scroll",
                        whiteSpace: "pre",
                        paddingBottom: "8px",
                        scrollbarWidth: "none",
                    }}
                >
                    {fileContent}
                </SyntaxHighlighter>
                {collapsible && (
                    <div
                        className={cn(
                            "sticky z-10 flex items-center justify-center bg-gradient-to-b from-zinc-800/30 to-zinc-950/90 p-3",
                            isOpened ? "inset-x-0 bottom-0" : "absolute inset-0 top-0"
                        )}
                    >
                        <button
                            onClick={buttonHandler}
                            className="cursor-pointer rounded-lg bg-neutral-800 px-3 py-2 text-sm font-semibold transition-colors duration-150 hover:bg-neutral-800/60"
                        >
                            {isOpened ? "Collapse" : "Expand"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ComponentSource;
