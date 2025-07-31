'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { useDropzone } from 'react-dropzone';
import { IconArrowBarDown, IconX } from '@tabler/icons-react';

const mainVariant = {
    initial: {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
    },
    animate: {
        x: 15,
        y: -15,
        scale: 1.1,
        opacity: 0.9,
    },
};

const childVariant = {
    initial: {
        y: 0,
        scale: 1,
        opacity: 1,
    },
    animate: {
        y: -3,
        scale: 1.05,
        opacity: 0.8,
    },
};

const parentVariant = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const secondaryVariant = {
    initial: {
        opacity: 0,
        scale: 0.9,
        y: -10,
    },
    animate: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: 'easeInOut',
        },
    },
    exit: {
        opacity: 0,
        scale: 0.9,
        y: -10,
        transition: {
            duration: 0.3,
            ease: 'easeInOut',
        },
    },
};

export const FileUpload = ({
    onChange,
    multiple = false,
}: {
    onChange?: (files: File[]) => void;
    multiple?: boolean;
}) => {
    const customMaskStyle = {
        '--r': '10px', // the radius
        '--s': '10px', // size of inner curve
        '--x': '30px', // horizontal offset (no percentage)
        '--y': '0.1px', // vertical offset (no percentage)
        '--_m': '/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%,#0000 72%)',
        '--_g': 'conic-gradient(at calc(100% - var(--r)) var(--r),#0000 25%,#000 0)',
        '--_d': '(var(--s) + var(--r))',
        mask: `calc(100% - var(--_d) - var(--x)) 0 var(--_m),
           100% calc(var(--_d) + var(--y)) var(--_m),
           radial-gradient(var(--s) at 100% 0,#0000 99%,#000 calc(100% + 1px))
            calc(-1*var(--r) - var(--x)) calc(var(--r) + var(--y)),
           var(--_g) calc(-1*var(--_d) - var(--x)) 0,
           var(--_g) 0 calc(var(--_d) + var(--y))`,
        maskRepeat: 'no-repeat',
    };

    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [removingFile, setRemovingFile] = useState<string | null>(null);

    const handleFileChange = (newFiles: File[]) => {
        const updatedFiles = multiple
            ? [...selectedFiles, ...newFiles]
            : newFiles;
        setSelectedFiles(updatedFiles);

        onChange && onChange(newFiles);
    };

    const handleRemoveFile = (file: File, event: React.MouseEvent) => {
        event.stopPropagation();
        event.preventDefault();

        setRemovingFile(file.name);
        // Remove the file after animation completes
        setTimeout(() => {
            const updatedFiles = selectedFiles.filter(
                (f) => f.name !== file.name
            );
            setSelectedFiles(updatedFiles);
            setRemovingFile(null);
            onChange && onChange(updatedFiles);
        }, 300);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        multiple,
        onDrop: handleFileChange,
        onDropRejected: (error) => {
            console.log(error);
        },
    });

    return (
        <div className="w-full" {...getRootProps()}>
            <motion.div
                className="group relative block w-full cursor-pointer overflow-hidden rounded-lg border border-dashed border-neutral-300 dark:border-neutral-700"
                initial="initial"
                whileHover="animate"
            >
                <input {...getInputProps()} />
                <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
                    <GridPattern />
                </div>
                <div className="relative mx-auto flex h-full w-full max-w-xl flex-col items-center p-10">
                    <div className="my-10 flex flex-col items-center justify-center text-center">
                        <p className="relative font-sans text-base font-bold text-neutral-700 dark:text-neutral-300">
                            Upload file
                        </p>
                        <p className="relative mt-2 font-sans text-base font-normal text-neutral-400 dark:text-neutral-400">
                            Click or just drag & drop your files here
                        </p>
                    </div>
                    <AnimatePresence mode="popLayout">
                        {selectedFiles.length > 0 && (
                            <div className="no-scrollbar max-h-96 w-full overflow-y-auto">
                                {selectedFiles.map((file, idx) => (
                                    <motion.div
                                        key={file.name + idx}
                                        initial="initial"
                                        animate={
                                            removingFile === file.name
                                                ? 'exit'
                                                : 'animate'
                                        }
                                        exit="exit"
                                        variants={secondaryVariant}
                                        layout
                                        className={cn(
                                            'relative z-40 mx-auto mt-4 flex w-full flex-col items-start justify-start overflow-hidden rounded-xl bg-white p-4 inset-shadow-sm inset-shadow-neutral-200 md:h-24 dark:bg-neutral-900 dark:inset-shadow-neutral-700',
                                            'shadow-sm'
                                        )}
                                    >
                                        <div className="flex w-full items-center justify-between gap-4">
                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                layout
                                                className="max-w-xs truncate text-base text-neutral-700 dark:text-neutral-300"
                                            >
                                                {file.name}
                                            </motion.p>
                                            <button>
                                                <motion.p
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    layout
                                                    className="rounded-lg bg-neutral-100 px-1 py-1 text-sm text-neutral-600 dark:bg-neutral-800 dark:text-white"
                                                    onClick={(e) =>
                                                        handleRemoveFile(
                                                            file,
                                                            e
                                                        )
                                                    }
                                                >
                                                    <IconX className="h-4 w-4" />
                                                </motion.p>
                                            </button>
                                        </div>

                                        <div className="mt-2 flex w-full flex-col items-start justify-between gap-2 text-sm text-neutral-600 md:flex-row md:items-center dark:text-neutral-400">
                                            <div className="flex items-center gap-2 text-xs">
                                                <motion.p
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    layout
                                                    className="rounded-md border border-dashed border-neutral-300 px-1 py-0.5 dark:border-neutral-600"
                                                >
                                                    {file.type}
                                                </motion.p>

                                                <motion.p
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    layout
                                                    className="rounded-md border border-dashed border-neutral-300 px-1 py-0.5 dark:border-neutral-600"
                                                >
                                                    {(
                                                        file.size /
                                                        (1024 * 1024)
                                                    ).toFixed(2)}{' '}
                                                    MB
                                                </motion.p>
                                            </div>
                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                layout
                                            >
                                                modified:{' '}
                                                {new Date(file.lastModified)
                                                    .toLocaleDateString(
                                                        'en-GB',
                                                        {
                                                            day: '2-digit',
                                                            month: 'short',
                                                            year: 'numeric',
                                                        }
                                                    )
                                                    .replace(/\//g, ' ')
                                                    .replace(/,/g, ',')}
                                            </motion.p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </AnimatePresence>
                    {!selectedFiles.length && (
                        <div className="transition-discrete duration-200 group-hover:drop-shadow-[0px_10px_25px_rgba(35,228,255,0.15)]">
                            <motion.div
                                variants={mainVariant}
                                transition={{
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 20,
                                }}
                                className="relative flex h-28 w-32 justify-center rounded-xl bg-neutral-100 inset-shadow-sm inset-shadow-neutral-200 dark:bg-neutral-900 dark:inset-shadow-neutral-600"
                                style={customMaskStyle}
                            >
                                <motion.div
                                    variants={parentVariant}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <motion.div
                                        variants={childVariant}
                                        className="absolute bottom-0 mx-1 h-20 w-26 rounded-lg bg-sky-200 dark:bg-cyan-700"
                                    />
                                    <motion.div
                                        variants={childVariant}
                                        className="absolute bottom-0 mx-1 h-18 w-28 rounded-lg bg-cyan-200 dark:bg-cyan-400"
                                    />
                                </motion.div>
                                <div className="absolute bottom-0 h-16 w-full rounded-xl bg-neutral-100 inset-shadow-sm inset-shadow-neutral-200 dark:bg-neutral-800 dark:inset-shadow-neutral-600">
                                    {isDragActive && (
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="flex h-full flex-col items-center justify-center text-sm text-neutral-600"
                                        >
                                            Drop
                                            <IconArrowBarDown className="h-4 w-4" />
                                        </motion.p>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export function GridPattern() {
    const columns = 41;
    const rows = 11;
    return (
        <div className="flex shrink-0 scale-105 flex-wrap items-center justify-center gap-px bg-gray-100 dark:bg-neutral-900">
            {Array.from({ length: rows }).map((_, row) =>
                Array.from({ length: columns }).map((_, col) => {
                    const index = row * columns + col;
                    return (
                        <div
                            key={`${col}-${row}`}
                            className={`flex h-10 w-10 shrink-0 rounded-[2px] ${
                                index % 2 === 0
                                    ? 'bg-gray-50 dark:bg-neutral-950'
                                    : 'bg-gray-50 shadow-[0px_0px_1px_3px_rgba(255,255,255,1)_inset] dark:bg-neutral-950 dark:shadow-[0px_0px_1px_3px_rgba(0,0,0,1)_inset]'
                            }`}
                        />
                    );
                })
            )}
        </div>
    );
}
