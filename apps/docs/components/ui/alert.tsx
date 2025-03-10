'use client';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { AnimatePresence, motion, spring } from 'motion/react';
import { useEffect, useState } from 'react';

const alertVariants = cva(
    'relative max-w-[26rem] rounded-xl border border-red-400 bg-red-400/20 px-3 py-2 backdrop-blur-2xl',
    {
        variants: {
            variant: {
                default: 'bg-neutral-500/30 border-neutral-400',
                success:
                    'bg-emerald-400/20 border-emerald-400/30 text-emerald-400',
                error: 'bg-red-400/20 border-red-400/30 text-red-400',
                processing:
                    'bg-amber-400/20 border-amber-400/30 text-amber-500',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
);

interface AlertProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof alertVariants> {
    delay?: number;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
    ({ className, variant, delay = 9000, ...props }, ref) => {
        const [isVisible, setIsVisible] = useState(true);

        useEffect(() => {
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, delay);
            return () => clearTimeout(timer);
        }, [delay]);

        return (
            <div {...props}>
                <AnimatePresence>
                    {isVisible && (
                        <motion.div
                            ref={ref}
                            className={cn(
                                alertVariants({ variant }),
                                className
                            )}
                            initial={{
                                opacity: 0,
                                scale: 0.98,
                                filter: 'blur(10px)',
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                filter: 'blur(0px)',
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 100,
                                damping: 15,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.98,
                                filter: 'blur(10px)',
                            }}
                        >
                            {props.children}
                            <button
                                onClick={() => setIsVisible(false)}
                                className="absolute top-2 right-2 flex h-5 w-5 cursor-pointer items-center justify-center rounded-md text-center font-semibold transition-all duration-200 hover:text-lg hover:text-neutral-400"
                            >
                                <i className="ri-close-line"></i>
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    }
);

const AlertTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h5
        ref={ref}
        className={cn(
            'mb-1 leading-none font-medium tracking-tight',
            className
        )}
        {...props}
    />
));

const AlertDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            'text-sm text-neutral-500 [&_p]:leading-relaxed',
            className
        )}
        {...props}
    />
));

export { Alert, AlertTitle, AlertDescription };
