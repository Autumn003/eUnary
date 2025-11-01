'use client';

import Link from 'next/link';
import data from '@/comp.json';
import { motion } from 'motion/react';

export default function ShowcasePage() {
    const sortedItems = [...data.items].sort((a, b) =>
        a.title.localeCompare(b.title)
    );
    return (
        <div className="no-scrollbar grid w-full grid-cols-2 gap-4 overflow-auto px-2 sm:px-8">
            {sortedItems.map((item, index) => (
                <Link
                    key={index}
                    href={`/components/${item.name}`}
                    className="group col-span-2 m-3 mx-auto h-fit w-full rounded-2xl px-2 sm:col-span-1"
                >
                    <motion.div
                        className="relative flex w-full flex-col items-start justify-center overflow-hidden rounded-3xl"
                        style={{
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
                        }}
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        variants={{
                            rest: {
                                scale: 1,
                                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
                            },
                            hover: {
                                scale: 1.03,
                                boxShadow: '0 12px 40px 0 rgba(0, 0, 0, 0.15)',
                            },
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 20,
                        }}
                    >
                        {/* blur for glass effect */}
                        <motion.div
                            className="absolute inset-0 z-10 bg-neutral-400"
                            style={{
                                filter: 'blur(12px)',
                            }}
                            variants={{
                                rest: {
                                    scale: 1,
                                    opacity: 0.15,
                                },
                                hover: {
                                    scale: 1.1,
                                    opacity: 0.2,
                                },
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 20,
                            }}
                        />

                        <motion.img
                            src={item.thumbnail}
                            alt={`Illustrative image for ${item.title} component, ${item.description}`}
                            className="z-20 aspect-[3/2] min-w-full rounded-3xl object-cover p-2"
                            fetchPriority="high"
                            variants={{
                                rest: {
                                    scale: 1,
                                },
                                hover: {
                                    scale: 0.96,
                                },
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 20,
                                delay: 0.08,
                            }}
                        />
                        <div className="relative z-10 mx-2 h-20 w-full px-2 sm:px-4">
                            <motion.h2
                                className="text-xl font-semibold text-neutral-400 drop-shadow-lg"
                                variants={{
                                    rest: {
                                        scale: 1,
                                    },
                                    hover: {
                                        scale: 1.02,
                                    },
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 400,
                                    damping: 15,
                                }}
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                className="line-clamp-2 text-[15px] text-neutral-500 drop-shadow-md dark:text-neutral-300"
                                variants={{
                                    rest: {
                                        scale: 1,
                                    },
                                    hover: {
                                        scale: 0.98,
                                    },
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 400,
                                    damping: 15,
                                }}
                            >
                                {item.description}
                            </motion.p>
                        </div>
                    </motion.div>
                </Link>
            ))}
        </div>
    );
}
