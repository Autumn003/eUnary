import { cn } from '@/lib/utils';

const Badge = ({
    children,
    className,
}: {
    children: string;
    className?: string;
}) => {
    return (
        <div>
            <div
                className={cn(
                    'w-fit rounded-md border border-indigo-300/40 bg-indigo-300/40 px-2 text-sm text-indigo-400 shadow-[0_2px_3px_rgba(97,95,255,0.3)] dark:border-indigo-500 dark:bg-indigo-500/20 dark:text-indigo-500 dark:shadow-[0_2px_10px_rgba(97,95,255,0.5)]',
                    className
                )}
            >
                {children}
            </div>
        </div>
    );
};

export default Badge;
