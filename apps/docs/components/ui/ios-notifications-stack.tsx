'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useCallback, useState } from 'react';

interface Notification {
    id: number;
    title: string;
    description: string;
}

interface NotificationProps {
    notifications: Notification[];
}

// Shared transition config
const TRANSITION = {
    delay: 0.02,
    duration: 0.3,
    ease: 'easeInOut',
};

// Animation variants
const containerVariants = {
    initial: {
        scale: 1.1,
        y: 0,
    },
    animate: {
        scale: [1.1, 1.07, 1.08],
        y: 10,
        transition: {
            staggerChildren: 0.01,
        },
    },
    collapse: {
        scale: 1,
        y: 0,
        transition: {
            delay: 0.3, // Delay to allow additional notifications to collapse first
            staggerChildren: 0.01,
            staggerDirection: -1,
        },
    },
};

const notificationVariants: Record<'0' | '1' | '2', any> = {
    '0': {
        initial: {
            y: -10,
            scale: 0.9,
            opacity: 0.7,
            filter: 'blur(1px)',
        },
        animate: {
            y: 70,
            scale: 0.95,
            opacity: 1,
            filter: 'blur(0px)',
            transition: {
                ...TRANSITION,
            },
        },
        collapse: {
            y: -10,
            scale: 0.9,
            opacity: 0.7,
            filter: 'blur(1px)',
            transition: {
                ...TRANSITION,
            },
        },
    },
    '1': {
        initial: {
            y: -20,
            scale: 0.8,
            opacity: 0.4,
            filter: 'blur(1px)',
        },
        animate: {
            y: 140,
            scale: 0.95,
            opacity: 1,
            filter: 'blur(0px)',
            transition: {
                ...TRANSITION,
            },
        },
        collapse: {
            y: -20,
            scale: 0.8,
            opacity: 0.4,
            filter: 'blur(1px)',
            transition: {
                ...TRANSITION,
            },
        },
    },
    '2': {
        initial: {
            scale: 1,
        },
        animate: {
            scale: 0.95,
            transition: {
                ...TRANSITION,
            },
        },
        collapse: {
            scale: 1,
            transition: {
                ...TRANSITION,
            },
        },
    },
};

const headerVariants = {
    initial: {
        opacity: 0,
        y: 25,
        scale: 1,
    },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: 0.2,
            ease: 'easeInOut',
            duration: 0.3,
        },
    },
};

const collapseButtonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const additionalNotificationVariants = {
    hidden: {
        opacity: 0,
        y: -20,
        scale: 0.8,
        filter: 'blur(2px)',
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 0.97,
        filter: 'blur(0px)',
        transition: {
            duration: 0.3,
            ease: 'easeInOut',
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        scale: 0.8,
        filter: 'blur(2px)',
        transition: {
            duration: 0.2,
            ease: 'easeIn',
        },
    },
};

// Container variants for staggered animations
const additionalContainerVariants = {
    hidden: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: 1,
        },
    },
    visible: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: 1,
        },
    },
    exit: {
        transition: {
            staggerChildren: 0.03,
            staggerDirection: -1,
        },
    },
};

const showMoreButtonVariants = {
    hidden: {
        opacity: 0,
        transition: {
            delay: 0.1,
            duration: 0.2,
        },
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.2,
            duration: 0.2,
        },
    },
};

export default function IOSNotificationStack({
    notifications,
}: NotificationProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const [isCollapsing, setIsCollapsing] = useState(false);

    const toggleExpanded = useCallback(() => {
        if (isExpanded) {
            // Start collapse sequence
            setIsCollapsing(true);

            // First hide additional notifications if they're showing
            if (showAll) {
                setShowAll(false);
                // Wait for additional notifications to collapse, then collapse main stack
                setTimeout(() => {
                    setIsExpanded(false);
                    setIsCollapsing(false);
                }, 300); // Duration of additional notifications exit animation
            } else {
                // No additional notifications, collapse main stack directly
                setIsExpanded(false);
                setIsCollapsing(false);
            }
        } else {
            // Expand
            setIsExpanded(true);
            setIsCollapsing(false);
        }
    }, [isExpanded, showAll]);

    const collapseStack = useCallback(() => {
        setIsCollapsing(true);

        // First hide additional notifications if they're showing
        if (showAll) {
            setShowAll(false);
            // Wait for additional notifications to collapse, then collapse main stack
            setTimeout(() => {
                setIsExpanded(false);
                setIsCollapsing(false);
            }, 300);
        } else {
            // No additional notifications, collapse main stack directly
            setIsExpanded(false);
            setIsCollapsing(false);
        }
    }, [showAll]);

    const toggleShowAll = useCallback((e: any) => {
        e.stopPropagation();
        setShowAll((prev) => !prev);
    }, []);

    const handleKeyDown = useCallback(
        (event: any) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                toggleExpanded();
            }
        },
        [toggleExpanded]
    );

    const visibleNotifications = notifications.slice(-3);
    const additionalNotifications = notifications.slice(0, -3);

    // Determine animation state for container
    const getContainerAnimationState = () => {
        if (isCollapsing && !showAll) {
            return 'collapse';
        }
        return isExpanded ? 'animate' : 'initial';
    };

    return (
        <div className="">
            <motion.div
                initial="initial"
                animate={getContainerAnimationState()}
                variants={containerVariants}
                exit="collapse"
                className="relative flex h-[30rem] flex-col gap-2 overflow-auto"
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}
            >
                {/* Header */}
                <motion.div
                    variants={headerVariants}
                    className="sticky flex w-full items-center justify-between px-2 text-white"
                >
                    <span className="font-medium">Notifications</span>
                    <motion.button
                        className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/30 focus:ring-2 focus:ring-white/50 focus:outline-none disabled:opacity-50"
                        variants={collapseButtonVariants}
                        initial="hidden"
                        animate={isExpanded ? 'visible' : 'hidden'}
                        transition={{ duration: 0.2 }}
                        onClick={collapseStack}
                        disabled={!isExpanded}
                        aria-label="Collapse notifications"
                    >
                        Collapse
                    </motion.button>
                </motion.div>

                {/* Notification Stack Container */}
                <div className="relative">
                    {/* Main Stack */}
                    <div
                        className="relative h-52 w-72 cursor-pointer"
                        onClick={toggleExpanded}
                        onKeyDown={handleKeyDown}
                        tabIndex={0}
                        role="button"
                        aria-label={
                            isExpanded
                                ? 'Collapse notifications'
                                : 'Expand notifications'
                        }
                        aria-expanded={isExpanded}
                    >
                        {visibleNotifications.map((notification, index) => (
                            <motion.div
                                key={`main-${notification.id}-${index}`}
                                variants={
                                    notificationVariants[
                                        String(index) as '0' | '1' | '2'
                                    ]
                                }
                                className={`absolute top-0 left-0 h-16 w-72 rounded-2xl bg-white/70 px-3 py-2 shadow-lg backdrop-blur-lg ${
                                    index === 2
                                        ? 'z-20'
                                        : index === 1
                                          ? 'z-10'
                                          : 'z-0'
                                }`}
                                style={{
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                                }}
                            >
                                <div className="text-sm leading-tight font-semibold text-gray-900">
                                    {notification.title}
                                </div>
                                <p className="mt-1 line-clamp-2 text-xs leading-tight text-gray-600">
                                    {notification.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Show more/less button */}
                    {isExpanded && notifications.length > 3 && (
                        <motion.div
                            className="mt-2 flex"
                            variants={showMoreButtonVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >
                            <button
                                className="mr-2 ml-auto text-sm font-medium text-white transition-colors"
                                onClick={toggleShowAll}
                            >
                                {showAll
                                    ? `Show less`
                                    : `Show ${notifications.length - 3} more`}
                            </button>
                        </motion.div>
                    )}

                    {/* Additional Notifications with AnimatePresence */}
                    <AnimatePresence mode="wait">
                        {isExpanded &&
                            showAll &&
                            additionalNotifications.length > 0 && (
                                <motion.div
                                    key="additional-notifications"
                                    className="mt-4 space-y-2"
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={additionalContainerVariants}
                                >
                                    {additionalNotifications.map(
                                        (notification, index) => (
                                            <motion.div
                                                key={`additional-${notification.id}-${index}`}
                                                variants={
                                                    additionalNotificationVariants
                                                }
                                                className="h-16 w-72 rounded-2xl bg-white px-3 py-2 shadow-lg"
                                                style={{
                                                    boxShadow:
                                                        '0 4px 20px rgba(0, 0, 0, 0.15)',
                                                }}
                                            >
                                                <div className="text-sm leading-tight font-semibold text-gray-900">
                                                    {notification.title}
                                                </div>
                                                <p className="mt-1 line-clamp-2 text-xs leading-tight text-gray-600">
                                                    {notification.description}
                                                </p>
                                            </motion.div>
                                        )
                                    )}
                                </motion.div>
                            )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
}
