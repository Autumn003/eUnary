// 'use client';

// import { cn } from '@/lib/utils';
// import { cva, type VariantProps } from 'class-variance-authority';

// const buttonVariants = cva(
//     'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
//     {
//         variants: {
//             variant: {
//                 default:
//                     'bg-primary text-primary-foreground hover:bg-primary/90',
//                 gradient:
//                     'bg-gradient-to-br from-fuchsia-500 via-violet-500 to-blue-500 text-white hover:brightness-110',
//                 outline:
//                     'border border-input hover:bg-accent hover:text-accent-foreground',
//                 secondary:
//                     'bg-secondary text-secondary-foreground hover:bg-secondary/80',
//                 ghost: 'hover:bg-accent hover:text-accent-foreground',
//                 link: 'underline-offset-4 hover:underline text-primary',
//             },
//             size: {
//                 default: 'h-10 py-2 px-4',
//                 sm: 'h-9 px-3 rounded-md',
//                 lg: 'h-11 px-8 rounded-md',
//                 icon: 'h-10 w-10',
//             },
//         },
//         defaultVariants: {
//             variant: 'default',
//             size: 'default',
//         },
//     }
// );

// export const Button = ({
//     className,
//     variant,
//     size,
//     children,
//     ...props
// }: React.ButtonHTMLAttributes<HTMLButtonElement> &
//     VariantProps<typeof buttonVariants>) => {
//     return (
//         <button
//             className={cn(buttonVariants({ variant, size, className }))}
//             {...props}
//         >
//             <div className="inner-div">{children}</div>
//         </button>
//     );
// };

'use client';

import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion, type HTMLMotionProps } from 'framer-motion';

// Button element variants
const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
    {
        variants: {
            variant: {
                default:
                    'bg-primary text-primary-foreground hover:bg-primary/90',
                gradient:
                    'bg-gradient-to-br from-fuchsia-500 via-violet-500 to-blue-500 text-white hover:brightness-110',
                outline:
                    'border border-input hover:bg-accent hover:text-accent-foreground',
                secondary:
                    'bg-secondary text-secondary-foreground hover:bg-secondary/80',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'underline-offset-4 hover:underline text-primary',
            },
            size: {
                default: 'h-10 py-2 px-4',
                sm: 'h-9 px-3 rounded-md',
                lg: 'h-11 px-8 rounded-md',
                icon: 'h-10 w-10',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

// Inner div variants
const innerDivVariants = cva('flex items-center justify-center', {
    variants: {
        variant: {
            default: '',
            gradient: 'font-semibold tracking-wide',
            outline: 'text-current',
            secondary: 'opacity-90',
            ghost: 'underline decoration-dotted underline-offset-2',
            link: 'font-medium',
        },
        size: {
            default: '',
            sm: 'text-xs',
            lg: 'text-base font-medium',
            icon: 'text-lg',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
    },
});

// Motion properties for button based on variant
const getButtonMotionProps = (variant: string | null | undefined) => {
    const motionProps: Record<string, any> = {
        default: {
            whileHover: { scale: 1.02 },
            whileTap: { scale: 0.98 },
            transition: { type: 'spring', stiffness: 400, damping: 25 },
        },
        gradient: {
            whileHover: {
                scale: 1.05,
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
            },
            whileTap: { scale: 0.95 },
            transition: { type: 'spring', stiffness: 300, damping: 20 },
        },
        outline: {
            whileHover: {
                borderColor: 'var(--primary)',
                boxShadow: '0 0 0 2px rgba(var(--primary), 0.2)',
            },
            whileTap: { scale: 0.97 },
            transition: { duration: 0.2 },
        },
        secondary: {
            whileHover: { y: -2 },
            whileTap: { y: 0 },
            transition: { type: 'tween', duration: 0.1 },
        },
        ghost: {
            whileHover: { backgroundColor: 'rgba(var(--accent), 0.1)' },
            whileTap: { backgroundColor: 'rgba(var(--accent), 0.2)' },
            transition: { duration: 0.15 },
        },
        link: {
            whileHover: { x: 5 },
            whileTap: { x: 0 },
            transition: { type: 'spring', stiffness: 500, damping: 30 },
        },
    };

    return motionProps[variant || 'default'] || motionProps.default;
};

// Motion properties for inner div based on variant
const getInnerDivMotionProps = (variant: string | null | undefined) => {
    const motionProps: Record<string, any> = {
        default: {
            transition: { duration: 0.2 },
        },
        gradient: {
            whileHover: {
                rotate: [0, -1, 1, 0],
                transition: { duration: 0.3 },
            },
        },
        outline: {
            whileHover: {
                borderBottomWidth: 2,
                borderStyle: 'dotted',
                borderColor: 'currentColor',
            },
            transition: { duration: 0.2 },
        },
        secondary: {
            whileHover: { scale: 1.05 },
            transition: { type: 'spring', stiffness: 400, damping: 20 },
        },
        ghost: {
            whileHover: {
                textDecoration: 'underline',
                textUnderlineOffset: '4px',
            },
            transition: { duration: 0.1 },
        },
        link: {
            whileHover: { fontWeight: 600 },
            transition: { duration: 0.1 },
        },
    };

    return motionProps[variant || 'default'] || motionProps.default;
};

type ButtonProps = Omit<HTMLMotionProps<'button'>, 'className'> &
    VariantProps<typeof buttonVariants> & {
        className?: string;
        innerDivClassName?: string;
        buttonMotionProps?: any; // Override button motion props
        innerDivMotionProps?: any; // Override inner div motion props
    };

export const Button = ({
    className,
    variant,
    size,
    children,
    innerDivClassName,
    buttonMotionProps,
    innerDivMotionProps,
    ...props
}: ButtonProps) => {
    const defaultButtonMotion = getButtonMotionProps(variant);
    const defaultInnerDivMotion = getInnerDivMotionProps(variant);

    return (
        <motion.button
            className={cn(buttonVariants({ variant, size }), className)}
            {...defaultButtonMotion}
            {...buttonMotionProps} // Allow override
            {...props}
        >
            <motion.div
                className={cn(
                    innerDivVariants({ variant, size }),
                    innerDivClassName
                )}
                {...defaultInnerDivMotion}
                {...innerDivMotionProps} // Allow override
            >
                {children}
            </motion.div>
        </motion.button>
    );
};

// Optional: Create a non-motion version for cases where you don't need animations
export const StaticButton = ({
    className,
    variant,
    size,
    children,
    innerDivClassName,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof buttonVariants> & {
        innerDivClassName?: string;
    }) => {
    return (
        <button
            className={cn(buttonVariants({ variant, size }), className)}
            {...props}
        >
            <div
                className={cn(
                    innerDivVariants({ variant, size }),
                    innerDivClassName
                )}
            >
                {children}
            </div>
        </button>
    );
};
