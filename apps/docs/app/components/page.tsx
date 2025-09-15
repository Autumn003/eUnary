'use client';

import Link from 'next/link';
import data from '@/comp.json';
import { motion } from 'motion/react';

export default function ShowcasePage() {
    const sortedItems = [...data.items].sort((a, b) =>
        a.title.localeCompare(b.title)
    );
    return (
        <div className="no-scrollbar grid w-full grid-cols-2 gap-4 overflow-auto px-2">
            {sortedItems.map((item, index) => (
                <Link
                    key={index}
                    href={`/components/${item.name}`}
                    className="group col-span-2 m-3 mx-auto h-fit w-full rounded-2xl px-2 sm:col-span-1"
                >
                    <motion.div
                        className="border-muted-background flex w-full flex-col items-start justify-center overflow-hidden rounded-3xl border"
                        whileHover={{
                            scale: 1.03,
                        }}
                    >
                        <motion.img
                            src={item.thumbnail}
                            alt={`Illustrative image for ${item.title} components, ${item.description}`}
                            className="aspect-[3/2] min-w-full rounded-3xl object-cover p-2"
                            fetchPriority="high"
                            whileHover={{
                                scale: 0.96,
                            }}
                        />
                        <div className="m-2 px-2 sm:px-4">
                            <h2 className="dark:text-primary-foreground text-xl font-semibold text-neutral-800 transition-transform ease-in-out group-hover:scale-105">
                                {item.title}
                            </h2>
                            <p className="text-secondary-foreground line-clamp-2 text-[15px] transition-transform ease-in-out group-hover:scale-95">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                </Link>
            ))}
        </div>
    );
}
