'use client';

import { motion } from 'motion/react';
import { useState, useMemo, useCallback, memo } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type HoverState = 'none' | 'left' | 'center' | 'right';

interface NavLink {
    url: string;
    icon: React.ElementType;
    label: string;
}

interface PillConfig {
    url?: string;
    content: React.ReactNode;
    label: string;
}

interface FloatingNavbarProps {
    leftPill: PillConfig;
    rightPill: PillConfig;
    navLinks: NavLink[];
    defaultActive?: string;
    onNavigate?: (url: string, label: string) => void;
    className?: string;
    pillsClassName?: string;
}

// Constants
const SPRING_CONFIG = {
    type: 'spring',
    stiffness: 150,
    damping: 25,
    mass: 0.9,
} as const;

const PILL_SPRING_CONFIG = {
    ...SPRING_CONFIG,
    damping: 10,
} as const;

// Memoized NavItem component
const NavItem = memo<{
    item: NavLink;
    isActive: boolean;
    onClick: () => void;
}>(({ item, isActive, onClick }) => {
    return (
        <Link
            href={item.url}
            onClick={onClick}
            className="relative w-full px-2 py-2 text-sm font-medium"
        >
            {isActive && (
                <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 w-full rounded-full bg-linear-to-r from-neutral-300/20 to-neutral-200/20 shadow-lg inset-shadow-sm shadow-neutral-400/40 inset-shadow-neutral-50 backdrop-blur-sm dark:from-neutral-600/20 dark:to-neutral-500/20 dark:shadow-neutral-600/40 dark:inset-shadow-neutral-400"
                    transition={{
                        type: 'spring',
                        stiffness: 160,
                        damping: 17,
                        mass: 0.9,
                    }}
                />
            )}
            <span
                className={cn(
                    'relative z-10 flex items-center justify-center gap-1',
                    isActive
                        ? 'text-neutral-800 dark:text-white'
                        : 'text-neutral-500 transition-all duration-300 hover:text-neutral-800 dark:text-neutral-400 hover:dark:text-white'
                )}
            >
                <item.icon className="size-4" />
                <div className="hidden sm:block">{item.label}</div>
            </span>
        </Link>
    );
});
NavItem.displayName = 'NavItem';

// Memoized Pill component
const Pill = memo<{
    config: PillConfig;
    position: 'left' | 'right';
    hoverState: HoverState;
    animation: Record<string, any>;
    onMouseEnter: () => void;
    onClick: () => void;
    pillsClassName?: string;
}>(
    ({
        config,
        position,
        hoverState,
        animation,
        onMouseEnter,
        onClick,
        pillsClassName,
    }) => {
        const isLeft = position === 'left';

        return (
            <motion.div
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                initial={{
                    scaleX: 1.15,
                    borderRadius: isLeft
                        ? '100px 0px 0px 100px'
                        : '0px 100px 100px 0px',
                }}
                animate={animation}
                transition={PILL_SPRING_CONFIG}
                className={cn(
                    'z-10 flex h-14 cursor-pointer items-center bg-neutral-200 whitespace-nowrap text-neutral-500 transition-colors duration-300 hover:text-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 hover:dark:text-white',
                    isLeft ? 'min-h-14 min-w-14 justify-center px-1' : 'px-2',
                    pillsClassName
                )}
            >
                <motion.div
                    initial={{ scaleX: 1 / 1.15 }}
                    animate={{
                        scaleX: hoverState === 'none' ? 1 / 1.15 : 1,
                    }}
                    transition={PILL_SPRING_CONFIG}
                    className={cn(
                        'flex items-center',
                        'justify-center overflow-hidden rounded-full border border-neutral-300 px-1 py-1 dark:border-neutral-600'
                    )}
                >
                    {!isLeft && (
                        <motion.div
                            animate={{
                                width:
                                    hoverState === 'none' ||
                                    hoverState === 'right'
                                        ? 'auto'
                                        : 0,
                                opacity:
                                    hoverState === 'none' ||
                                    hoverState === 'right'
                                        ? 1
                                        : 0,
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 120,
                                damping: 25,
                                mass: 0.9,
                            }}
                            className="overflow-hidden"
                        >
                            <div className="hidden px-1 text-sm font-medium whitespace-nowrap sm:block">
                                {config.label}
                            </div>
                        </motion.div>
                    )}
                    {config.content}
                </motion.div>
            </motion.div>
        );
    }
);
Pill.displayName = 'Pill';

// Main component
export function FloatingNavbar({
    leftPill,
    rightPill,
    navLinks,
    defaultActive = 'Home',
    onNavigate,
    className,
    pillsClassName,
}: FloatingNavbarProps) {
    const router = useRouter();
    const [hoverState, setHoverState] = useState<HoverState>('none');
    const [active, setActive] = useState(defaultActive);

    // Navigation handler
    const handleNavClick = useCallback(
        (url: string, label: string) => {
            setActive(label);
            if (onNavigate) {
                onNavigate(url, label);
            } else {
                window.history.pushState(null, '', url);
            }
        },
        [onNavigate]
    );

    // Pill click handlers
    const handleLeftPillClick = useCallback(() => {
        if (leftPill.url) router.push(leftPill.url);
    }, [leftPill.url, router]);

    const handleRightPillClick = useCallback(() => {
        if (rightPill.url) router.push(rightPill.url);
    }, [rightPill.url, router]);

    // Animation objects
    const leftPillAnimation = useMemo(
        () => ({
            scaleX: hoverState === 'none' ? 1.15 : 1,
            borderRadius:
                hoverState === 'left' || hoverState === 'center'
                    ? '100px 100px 100px 100px'
                    : '100px 0px 0px 100px',
        }),
        [hoverState]
    );

    const rightPillAnimation = useMemo(
        () => ({
            scaleX: hoverState === 'none' ? 1.15 : 1,
            borderRadius:
                hoverState === 'right' || hoverState === 'center'
                    ? '100px 100px 100px 100px'
                    : '0px 100px 100px 0px',
        }),
        [hoverState]
    );

    const centerAnimation = useMemo(
        () => ({
            x: hoverState === 'left' ? 10 : hoverState === 'right' ? -10 : 0,
            scaleX: hoverState === 'none' ? 1.05 : 1,
            borderRadius:
                hoverState === 'left'
                    ? '50px 0px 0px 50px'
                    : hoverState === 'right'
                      ? '0px 50px 50px 0px'
                      : hoverState === 'center'
                        ? '50px 50px 50px 50px'
                        : '0px 0px 0px 0px',
            paddingLeft: hoverState !== 'none' ? 24 : 20,
            paddingRight: hoverState !== 'none' ? 24 : 20,
            marginLeft:
                hoverState === 'right' ? 0 : hoverState !== 'none' ? 8 : 0,
            marginRight:
                hoverState === 'left' ? 0 : hoverState !== 'none' ? 8 : 0,
        }),
        [hoverState]
    );

    // Hover handlers
    const handleLeftEnter = useCallback(() => setHoverState('left'), []);
    const handleCenterEnter = useCallback(() => setHoverState('center'), []);
    const handleRightEnter = useCallback(() => setHoverState('right'), []);
    const handleMouseLeave = useCallback(() => setHoverState('none'), []);

    return (
        <div
            className={cn(
                'bottom-0 z-100 mb-4 flex h-full max-h-14 origin-bottom items-center justify-center',
                className
            )}
        >
            <motion.div
                initial={{
                    y: 50,
                    opacity: 0,
                    filter: 'blur(10px)',
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                    filter: 'blur(0px)',
                }}
                transition={{
                    ease: 'easeOut',
                    duration: 0.5,
                    delay: 0.2,
                }}
                className="relative flex items-center"
                onMouseLeave={handleMouseLeave}
            >
                {/* LEFT PILL */}
                <Pill
                    config={leftPill}
                    position="left"
                    hoverState={hoverState}
                    animation={leftPillAnimation}
                    onMouseEnter={handleLeftEnter}
                    onClick={handleLeftPillClick}
                    pillsClassName={pillsClassName}
                />

                {/* CENTER NAVBAR */}
                <motion.div
                    onMouseEnter={handleCenterEnter}
                    initial={{
                        x: 0,
                        scaleX: 1.05,
                        borderRadius: '0px 0px 0px 0px',
                        paddingLeft: 20,
                        paddingRight: 20,
                        marginLeft: 0,
                        marginRight: 0,
                    }}
                    animate={centerAnimation}
                    transition={SPRING_CONFIG}
                    className="flex h-14 items-center gap-2 bg-neutral-200 px-5 dark:bg-neutral-900"
                >
                    {navLinks.map((item) => (
                        <NavItem
                            key={item.label}
                            item={item}
                            isActive={active === item.label}
                            onClick={() => handleNavClick(item.url, item.label)}
                        />
                    ))}
                </motion.div>

                {/* RIGHT PILL */}
                <Pill
                    config={rightPill}
                    position="right"
                    hoverState={hoverState}
                    animation={rightPillAnimation}
                    onMouseEnter={handleRightEnter}
                    onClick={handleRightPillClick}
                    pillsClassName={pillsClassName}
                />
            </motion.div>
        </div>
    );
}
