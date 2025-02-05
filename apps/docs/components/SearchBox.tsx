'use client';

import { useEffect, useRef } from 'react';
import 'remixicon/fonts/remixicon.css';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

export default function SearchBox({
    isDialogOpen,
    setIsDialogOpen,
    className,
}: {
    isDialogOpen: boolean;
    setIsDialogOpen: (open: boolean) => void;
    className?: string;
}) {
    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                boxRef.current &&
                !boxRef.current.contains(event.target as Node)
            ) {
                setIsDialogOpen(false);
            }
        };

        if (isDialogOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isDialogOpen, setIsDialogOpen]);

    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (
                (event.ctrlKey || event.metaKey) &&
                event.key.toLowerCase() === 'k'
            ) {
                event.preventDefault();
                setIsDialogOpen(!isDialogOpen);
            }

            if (event.key === 'Escape' && isDialogOpen) {
                setIsDialogOpen(false);
            }
        }

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [setIsDialogOpen, isDialogOpen]);

    return (
        <>
            {isDialogOpen && (
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.1 }}
                    className={cn(
                        'bg-primary-background text-secondary-foreground border-muted-background h-72 w-[30rem] rounded-xl border transition-all duration-300',
                        className
                    )}
                    ref={boxRef}
                >
                    <div className="border-muted-background flex items-center gap-2 border-b px-3 py-2">
                        <i className="ri-search-line text-secondary-foreground text-lg font-semibold"></i>
                        <input
                            type="text"
                            placeholder="Search component..."
                            className="text-secondary-foreground w-full outline-none"
                        />
                        <button onClick={() => setIsDialogOpen(false)}>
                            <i className="ri-close-line text-secondary-foreground hover:bg-muted-background cursor-pointer rounded-lg p-1 transition-colors duration-200"></i>
                        </button>
                    </div>
                    <div></div>
                </motion.div>
            )}
        </>
    );
}
