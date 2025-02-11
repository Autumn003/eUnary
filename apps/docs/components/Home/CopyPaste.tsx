'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import 'remixicon/fonts/remixicon.css';

const CopyPaste = () => {
    const words = ['C', 'V'];

    const [currentWord, setCurrentWord] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prevWord) => (prevWord + 1) % words.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const videos = ['/Copy-Paste.mp4', '/sample_1.mp4'];
    const [videoIndex, setVideoIndex] = useState(0);
    const [key, setKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
            setKey((prevKey) => prevKey + 1);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container my-24 grid grid-cols-2">
            <div className="col-span-2 my-10 text-center">
                <h3 className="mb-5 text-xl font-semibold">
                    As simple as copy and paste
                </h3>
                <p className="text-secondary-foreground">
                    Just drop the code into your ui folder and start using the
                    components in your projects. It’s that easy!
                </p>
            </div>
            <div className="border-muted-background z-20 col-span-1 overflow-hidden rounded-2xl border bg-[#1e1e1e]">
                <div className="flex h-8 w-full items-center gap-2 bg-zinc-100 px-3 dark:bg-zinc-900">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <AnimatePresence mode="wait">
                    <motion.video
                        key={key}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeInOut',
                        }}
                        src={videos[videoIndex]}
                        className="object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </AnimatePresence>
            </div>
            <div className="border-muted-background z-10 col-span-1 mx-auto my-auto flex h-fit w-fit items-center justify-center rounded-3xl border px-14 py-16">
                <Image
                    src="/cmd_btn.png"
                    alt="Command"
                    width={200}
                    height={200}
                    className="bg-blend-multiply drop-shadow-2xl"
                ></Image>
                <p className="text-muted-foreground mx-5 text-8xl font-bold">
                    +
                </p>
                <div className="mx-2 flex h-28 w-28 items-center justify-center rounded-2xl bg-[#241f21] text-center text-5xl font-bold text-neutral-50 shadow-2xl shadow-blue-500/30">
                    <AnimatePresence mode="wait">
                        <motion.h1
                            key={currentWord}
                            className="mx-5"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{
                                duration: 0.5,
                                ease: 'easeInOut',
                            }}
                        >
                            {words[currentWord]}
                        </motion.h1>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default CopyPaste;
