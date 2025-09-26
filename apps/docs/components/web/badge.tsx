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
                    'w-fit rounded-md border border-indigo-300/50 bg-indigo-300/50 px-2 text-sm text-indigo-500 shadow-[0_1px_5px_rgba(97,95,255,0.5)] dark:border-indigo-500 dark:bg-indigo-500/20 dark:shadow-[0_2px_10px_rgba(97,95,255,0.5)]',
                    className
                )}
            >
                {children}
            </div>
        </div>
    );
};

export default Badge;
