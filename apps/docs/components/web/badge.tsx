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
                    'w-fit rounded-md border border-emerald-700 bg-emerald-200 px-2 text-sm text-emerald-700 dark:border-emerald-500 dark:bg-emerald-300/10 dark:text-emerald-500',
                    className
                )}
            >
                {children}
            </div>
        </div>
    );
};

export default Badge;
