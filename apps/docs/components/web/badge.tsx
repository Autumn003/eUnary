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
                    'w-fit rounded-md border border-purple-500 bg-purple-500/20 px-2 text-sm text-purple-500',
                    className
                )}
            >
                {children}
            </div>
        </div>
    );
};

export default Badge;
