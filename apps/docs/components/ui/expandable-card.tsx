'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

const ExpandableCard = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } =
            e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 15; // Reduce movement range
        const y = (e.clientY - top - height / 2) / 15;
        setMousePosition({ x, y });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 }); // Reset to original position
    };

    return (
        <motion.div
            initial={{ width: 300, height: 400 }}
            animate={
                isHovered
                    ? { width: 500, height: 300 }
                    : { width: 300, height: 400 }
            }
            className="group relative h-64 w-[28rem] overflow-hidden rounded-4xl bg-[url(/media/shoes.jpg)] bg-cover bg-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                initial={{ x: 0, y: 0 }}
                animate={{
                    x: mousePosition.x,
                    y: mousePosition.y,
                    margin: isHovered ? 15 : 0,
                }}
                transition={{ type: 'tween', ease: 'easeOut', duration: 0.2 }}
                className="BLUR_BG absolute inset-0 overflow-hidden rounded-3xl bg-black/30 backdrop-blur"
            >
                <div className="grid grid-cols-3">
                    <motion.div
                        initial={{ y: 20, x: 0 }}
                        animate={
                            isHovered
                                ? { y: 0, x: 0 }
                                : { y: 70, x: 71, scale: 1.8 }
                        }
                        transition={{ duration: 0.3 }}
                        className="col-span-1 m-4 h-32 w-32"
                    >
                        <Image
                            src="/media/shoe.jpg"
                            alt="bg-image"
                            width={200}
                            height={200}
                            className="h-32 w-32 rounded-2xl"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ y: 50, opacity: 1 }}
                        animate={
                            isHovered
                                ? { y: 0, opacity: 1 }
                                : { x: -70, y: 270, opacity: 1 }
                        }
                        transition={{ duration: 0.3 }}
                        className="col-span-2 m-4 flex flex-col justify-center"
                    >
                        <h3 className="text-xl font-semibold text-stone-400">
                            Nike Air 3
                        </h3>
                        <h2 className="my-2 text-2xl font-bold text-white">
                            $249
                        </h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={
                                isHovered ? { opacity: 1 } : { opacity: 0 }
                            }
                            className="text-sm text-stone-200"
                        >
                            Jordan Air Jordan 1 High OG "Shadow 2.0" Sneakers -
                            Grey
                        </motion.p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.3 }}
                    className="my-6 flex items-center justify-around"
                >
                    <Button>Add Cart</Button>
                    <Button>Delete</Button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

const Button = ({ children }: { children: string }) => {
    return (
        <div>
            <button
                className="h-12 w-48 cursor-pointer rounded-[14px] bg-white/60 font-semibold text-stone-900 backdrop-blur transition-all duration-150 hover:bg-white/90"
                onClick={() => alert('alerttt')}
            >
                {children}
            </button>
        </div>
    );
};

export default ExpandableCard;
