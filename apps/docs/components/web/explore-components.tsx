import { cn } from '@/lib/utils';
import Link from 'next/link';

const ExploreComponents = ({
    nextComponent,
    recentlyAddedComponent,
    className,
}: {
    nextComponent: string;
    recentlyAddedComponent: string;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                'bg-muted-background/50 my-32 grid grid-cols-4 p-8',
                className
            )}
        >
            <div className="col-span-4 mb-8 sm:col-span-3">
                <h1 className="mb-2 text-4xl font-bold">
                    Explore more components with Eunary
                </h1>
                <p className="text-secondary-foreground">
                    Discover and experiment with a variety of components to
                    craft a stunning and seamless experience for your product.
                </p>
            </div>
            <div className="col-span-4 flex flex-col gap-4 sm:my-5 sm:p-0 sm:px-8 md:flex-row md:items-end lg:col-span-3">
                <Link
                    href={`/components/${recentlyAddedComponent}`}
                    className="border-muted-foreground text-primary-background bg-secondary-background w-full rounded-lg border px-2 py-4 text-center font-semibold sm:w-52 sm:px-4"
                >
                    {formatComponentName(recentlyAddedComponent)}
                </Link>
                <Link
                    href={`/components/${nextComponent}`}
                    className="text-primary-foreground border-muted-background bg-primary-background w-full rounded-lg border p-4 text-center font-semibold sm:w-52"
                >
                    {formatComponentName(nextComponent)}
                </Link>
            </div>
        </div>
    );
};

const formatComponentName = (name: string) => {
    return name
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

export default ExploreComponents;
