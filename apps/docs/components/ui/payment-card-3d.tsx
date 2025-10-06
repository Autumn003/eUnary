'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Nfc } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

const MAX_TILT = 12;

interface cardProps {
    cardHolder: string;
    cardNumber: number;
    cardExpiryMonth: number;
    cardExpiryYear: number;
    cardBankName: string;
    themeColor: string;
    chipColor?: 'silver' | 'gold';
}

export const PaymentCard3D = ({
    cardHolder,
    cardNumber,
    cardExpiryMonth,
    cardExpiryYear,
    cardBankName,
    themeColor,
    chipColor = 'gold',
}: cardProps) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isHidden, setIsHidden] = useState(true);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
    const cardRef = useRef<HTMLDivElement | null>(null);
    const rafRef = useRef<number | null>(null);

    const handlePointerMove = useCallback((e: React.PointerEvent) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;
        const rotateX = ((y - centerY) / centerY) * -MAX_TILT;
        const rotateY = ((x - centerX) / centerX) * MAX_TILT;

        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
            setTilt({ x: rotateX, y: rotateY });
            setGlarePosition({ x: glareX, y: glareY });
        });
    }, []);

    const handlePointerLeave = useCallback(() => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        setTilt({ x: 0, y: 0 });
    }, []);

    const toggleFlip = useCallback(() => {
        setIsFlipped((s) => !s);
        setIsHidden(true);
    }, []);
    const toggleHidden = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        setIsHidden((s) => !s);
    }, []);

    useEffect(() => {
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    const computedRotateX = isFlipped ? -tilt.x : tilt.x;
    const computedRotateZ = (isFlipped ? -1 : 1) * tilt.y * 0.08;
    const glareStyle = {
        background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(212,212,216,0.2) 0%, rgba(161,161,170,0.15) 20%, transparent 60%)`,
    };

    const cardNumberFormatted =
        cardNumber
            .toString()
            .match(/.{1,4}/g)
            ?.join(' ') || cardNumber;
    const cardNumberMasked = `XXXX XXXX XXXX ${cardNumber.toString().slice(-4)}`;

    return (
        <div className="flex min-h-screen w-full items-center justify-center p-4 perspective-[1000]">
            <motion.div
                ref={cardRef}
                onClick={toggleFlip}
                onPointerMove={handlePointerMove}
                onPointerLeave={handlePointerLeave}
                style={{ transformStyle: 'preserve-3d' }}
                animate={{
                    rotateY: isFlipped ? 180 : 0,
                    rotateX: computedRotateX,
                    rotateZ: computedRotateZ,
                }}
                transition={{
                    duration: 0.8,
                    type: 'spring',
                    stiffness: 70,
                    damping: 12,
                    rotateX: { duration: 0.25 },
                    rotateZ: { duration: 0.25 },
                }}
                whileHover={{ scale: 1.02 }}
                className="group relative z-10 aspect-[5/3] w-full max-w-sm cursor-pointer"
            >
                {/* FRONT */}
                <CardFace
                    isVisible={!isFlipped}
                    glareStyle={glareStyle}
                    baseClass="from-zinc-900 via-zinc-800 to-zinc-950 shadow-[inset_-5px_5px_15px_5px_rgba(63,63,70,0.8)]"
                >
                    <div className="absolute left-0 h-full w-20 bg-zinc-950/50" />
                    <div className="absolute inset-0 size-[120%] -translate-x-30 -translate-y-1/2 -rotate-30 bg-gradient-to-l from-zinc-500/5 via-zinc-600/10 to-transparent" />
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            background: `radial-gradient(circle at 30% 50%, ${themeColor}, transparent 50%)`,
                        }}
                    />

                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="relative h-full w-full text-zinc-100">
                            <motion.div
                                className="absolute bottom-0 left-14"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <Chip chipColor={chipColor} />
                            </motion.div>
                            <Nfc className="absolute top-5 right-5 h-5 w-5 sm:h-7 sm:w-7" />
                        </div>

                        <div className="relative h-full w-full">
                            <div className="absolute bottom-5 flex w-full items-end-safe justify-between px-4">
                                <div className="px-1">
                                    <p className="text-[10px] font-semibold text-zinc-400 sm:text-xs">
                                        Card Holder
                                    </p>
                                    <div
                                        className="text-sm font-semibold uppercase [text-shadow:_2px_2px_3px_#000000,_0.3px_-0.3px_0_rgba(255,195,68,0.5)] sm:text-base"
                                        style={{
                                            color: themeColor,
                                        }}
                                    >
                                        {cardHolder}
                                    </div>
                                </div>

                                <div className="flex min-h-8 w-fit max-w-20 items-end text-center text-[10px] font-semibold text-wrap text-zinc-400 uppercase sm:min-h-10 sm:max-w-24 sm:text-xs">
                                    {cardBankName}
                                </div>
                            </div>

                            <p className="absolute bottom-1 w-full text-center text-[10px] font-semibold text-zinc-500/50 sm:bottom-2 sm:text-xs">
                                Tap to flip
                            </p>
                        </div>
                    </div>
                </CardFace>

                {/* BACK */}
                <CardFace
                    isVisible={isFlipped}
                    glareStyle={glareStyle}
                    baseClass="from-zinc-950 via-zinc-800 to-zinc-900 shadow-[inset_5px_5px_15px_5px_rgba(63,63,70,0.8)]"
                    style={{ transform: 'rotateY(180deg)' }}
                >
                    <div className="absolute right-0 h-full w-20 bg-zinc-950/50" />
                    <div className="absolute inset-0 size-[120%] -translate-x-30 -translate-y-1/2 -rotate-30 bg-gradient-to-l from-zinc-500/5 via-zinc-600/10 to-transparent" />
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            background: `radial-gradient(circle at 70% 50%, ${themeColor}, transparent 50%)`,
                        }}
                    />

                    <button
                        onClick={toggleHidden}
                        className="absolute top-2 right-2 z-10 h-5 w-10 rounded-full bg-zinc-800 text-xs font-semibold text-zinc-400 transition-colors duration-300 hover:text-zinc-300"
                    >
                        {isHidden ? 'Show' : 'Hide'}
                    </button>

                    <div className="h-full w-full">
                        <div className="flex min-h-8 w-5/6 items-center px-3 text-center sm:min-h-10 sm:px-5">
                            <p className="py-1 text-[8px] text-zinc-400 text-shadow-none sm:text-[9px]">
                                Use this card securely. Do not share your CVV or
                                PIN with anyone.
                            </p>
                        </div>
                        <div className="h-10 w-full bg-zinc-950 sm:h-12" />
                        <div
                            className="text-shadow:_2px_2px_3px_#000000,_0.3px_-0.3px_0_rgba(255,195,68,0.5)] flex h-full w-full flex-col items-center justify-center gap-2 px-4 font-mono sm:gap-4 sm:px-6"
                            style={{
                                color: themeColor,
                            }}
                        >
                            <div className="h-full w-full">
                                <div>
                                    <span className="text-[5px] text-zinc-400 text-shadow-none sm:text-[6px]">
                                        AUTHORIZED SIGNATURE
                                    </span>
                                    <div className="flex h-6 w-3/4 items-center justify-end bg-gradient-to-r from-zinc-800 via-zinc-700/50 to-transparent px-1 text-xs tracking-widest sm:h-8 sm:px-2 sm:text-sm">
                                        <div className="overflow-hidden rounded-md bg-zinc-700/60 px-1">
                                            <AnimatePresence mode="popLayout">
                                                <motion.div
                                                    key={
                                                        isHidden
                                                            ? 'hidden-cvv'
                                                            : 'visible-cvv'
                                                    }
                                                    initial={{
                                                        opacity: 0,
                                                        x: -10,
                                                        filter: 'blur(5px)',
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        x: 0,
                                                        filter: 'blur(0)',
                                                    }}
                                                    exit={{
                                                        opacity: 0,
                                                        x: -10,
                                                        filter: 'blur(5px)',
                                                    }}
                                                    transition={{
                                                        duration: 0.5,
                                                        delay: 0.1,
                                                    }}
                                                    className="text-xs tracking-widest sm:text-sm"
                                                >
                                                    {isHidden ? 'CVV' : '123'}
                                                </motion.div>
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </div>

                                <AnimatePresence mode="popLayout">
                                    <motion.div
                                        key={isHidden ? 'hidden' : 'visible'}
                                        initial={{
                                            opacity: 0,
                                            x: -10,
                                            filter: 'blur(5px)',
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                            filter: 'blur(0)',
                                        }}
                                        exit={{
                                            opacity: 0,
                                            x: 10,
                                            filter: 'blur(5px)',
                                        }}
                                        transition={{ duration: 0.5 }}
                                        className="text-sm tracking-[3px] sm:text-base sm:tracking-[4px]"
                                    >
                                        {isHidden
                                            ? cardNumberMasked
                                            : cardNumberFormatted}
                                    </motion.div>

                                    <div className="mt-1">
                                        <p className="text-[10px] font-semibold text-zinc-400 text-shadow-none sm:text-xs">
                                            Expires
                                        </p>
                                        <motion.div
                                            key={
                                                isHidden
                                                    ? 'hidden-date'
                                                    : 'visible-date'
                                            }
                                            initial={{
                                                opacity: 0,
                                                x: -10,
                                                filter: 'blur(5px)',
                                            }}
                                            animate={{
                                                opacity: 1,
                                                x: 0,
                                                filter: 'blur(0)',
                                            }}
                                            exit={{
                                                opacity: 0,
                                                x: -10,
                                                filter: 'blur(5px)',
                                            }}
                                            transition={{
                                                duration: 0.5,
                                                delay: 0.1,
                                            }}
                                            className="text-xs tracking-widest sm:text-sm"
                                        >
                                            {isHidden
                                                ? 'MM/YY'
                                                : `${cardExpiryMonth}/${cardExpiryYear}`}
                                        </motion.div>
                                    </div>
                                </AnimatePresence>
                            </div>

                            <p className="absolute bottom-1 w-full text-center text-[10px] font-semibold text-zinc-500/50 text-shadow-none sm:bottom-2 sm:text-xs">
                                Tap to flip back
                            </p>
                        </div>
                    </div>
                </CardFace>
            </motion.div>
        </div>
    );
};

interface CardFaceProps {
    isVisible: boolean;
    glareStyle: React.CSSProperties;
    baseClass: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
}

const CardFace: React.FC<CardFaceProps> = React.memo(
    ({ isVisible, glareStyle, baseClass, style, children }) => (
        <motion.div
            animate={{ opacity: isVisible ? 1 : 0.5 }}
            transition={{ duration: 0.18 }}
            style={{
                backfaceVisibility: 'hidden',
                willChange: 'transform',
                ...style,
            }}
            className={`absolute inset-0 overflow-hidden rounded-2xl border border-zinc-700/50 bg-gradient-to-br ${baseClass}`}
        >
            <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={glareStyle}
            />

            {isVisible && (
                <>
                    <motion.div
                        initial={{ x: '-200%' }}
                        animate={{ x: '150%' }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                        className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        style={{
                            transformOrigin: 'left',
                            pointerEvents: 'none',
                            mixBlendMode: 'screen',
                        }}
                    />
                </>
            )}

            {children}
        </motion.div>
    )
);

const Chip = React.memo(({ chipColor }: { chipColor: 'silver' | 'gold' }) => (
    <svg
        width="50"
        height="35"
        viewBox="0 0 200 150"
        stroke="black"
        strokeWidth="4"
    >
        <defs>
            <linearGradient
                id="chipGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
            >
                <stop
                    offset="0%"
                    stopColor={chipColor === 'silver' ? '#f4f4f5' : '#FFE177'}
                />
                <stop
                    offset="50%"
                    stopColor={chipColor === 'silver' ? '#d4d4d8' : '#FFC344'}
                />
                <stop
                    offset="100%"
                    stopColor={chipColor === 'silver' ? '#71717a' : '#FF8C00'}
                />
            </linearGradient>
        </defs>
        <rect
            x="10"
            y="10"
            width="180"
            height="130"
            rx="20"
            fill="url(#chipGradient)"
        />
        <path
            d="M70,15 v40 a20,20 0 0,0 -10,20 a20,20 0 0,0 10,20 v40"
            fill="none"
        />
        <path
            d="M130,15 v40 a20,20 0 0,1 10,20 a20,20 0 0,1 -10,20 v40"
            fill="none"
        />
        <line x1="10" y1="55" x2="70" y2="55" />
        <line x1="130" y1="55" x2="190" y2="55" />
        <line x1="10" y1="95" x2="70" y2="95" />
        <line x1="130" y1="95" x2="190" y2="95" />
    </svg>
));
