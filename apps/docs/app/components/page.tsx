'use client';

import Link from 'next/link';
import data  from '@/comp.json';
import { motion } from 'motion/react';

export default function ShowcasePage() {
    const sortedItems = [...data.items].sort((a, b) =>
        a.title.localeCompare(b.title)
    );
    return (
        <div className="no-scrollbar grid grid-cols-2 gap-4 overflow-auto">
            {sortedItems.map((item, index) => (
                <Link
                    key={index}
                    href={`/components/${item.name}`}
                    className="group col-span-2 m-3 h-fit rounded-2xl md:col-span-1"
                >
                    <motion.div
                        className="border-muted-background flex max-w-96 items-center justify-center overflow-hidden rounded-3xl border p-2 lg:max-w-full"
                        whileHover={{
                            scale: 1.03,
                        }}
                    >
                        <motion.img
                            src={item.thumbnail}
                            alt={item.title}
                            className="h-44 w-full rounded-2xl object-cover sm:h-64"
                            whileHover={{
                                scale: 0.96,
                            }}
                        />
                    </motion.div>
                    <div className="px-2 sm:m-2 sm:px-4">
                        <h2 className="dark:text-primary-foreground text-xl font-semibold text-neutral-800 transition-transform ease-in-out group-hover:scale-105">
                            {item.title}
                        </h2>
                        <p className="text-secondary-foreground text-[15px] transition-transform ease-in-out group-hover:scale-95">
                            {item.description}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
