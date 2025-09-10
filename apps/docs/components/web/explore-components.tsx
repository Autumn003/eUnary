import { cn } from '@/lib/utils';
import Link from 'next/link';
import data from 'comp.json';

const ExploreComponents = ({
    currentComponent,
    className,
}: {
    currentComponent: string;
    className?: string;
}) => {
    const items = data.items;
    const sortedItems = [...data.items].sort((a, b) =>
        a.title.localeCompare(b.title)
    );

    const currentComponentIndex = sortedItems.findIndex(
        (item) => item.name === currentComponent
    );

    const nextComponent =
        sortedItems[(currentComponentIndex + 1) % sortedItems.length]?.name ||
        '/components';

    const recentComponent: string =
        items[items.length - 1]?.name || '/components';

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
                    href={`/components/${recentComponent}`}
                    className="border-muted-foreground text-primary-background bg-secondary-background w-full rounded-lg border px-2 py-4 text-center font-semibold sm:w-52 sm:px-4"
                >
                    Recent Component
                </Link>
                <Link
                    href={`/components/${nextComponent}`}
                    className="text-primary-foreground border-muted-background bg-primary-background w-full rounded-lg border p-4 text-center font-semibold sm:w-52"
                >
                    Next Component
                </Link>
            </div>
        </div>
    );
};

export default ExploreComponents;
