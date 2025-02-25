import Link from 'next/link';

const ExploreComponents = ({
    nextComponent,
    recentlyAddedComponent,
}: {
    nextComponent: string;
    recentlyAddedComponent: string;
}) => {
    return (
        <div className="bg-muted-background/50 my-32 grid grid-cols-4 p-8">
            <div className="col-span-4 mb-8 sm:col-span-3">
                <h1 className="mb-2 text-4xl font-bold">
                    Explore more components with Eunary
                </h1>
                <p className="text-secondary-foreground">
                    Discover and experiment with a variety of components to
                    craft a stunning and seamless experience for your product.
                </p>
            </div>
            <div className="col-span-4 my-5 flex flex-col gap-8 px-8 sm:p-0 md:flex-row md:items-end md:gap-4 lg:col-span-3">
                <div className="relative flex w-full flex-col gap-[2px] sm:w-52">
                    <span className="w-fit rounded-md border border-emerald-700 bg-emerald-200 px-2 text-sm text-emerald-700 dark:border-emerald-500 dark:bg-emerald-300/10 dark:text-emerald-500">
                        New
                    </span>
                    <Link
                        href={`/components/${recentlyAddedComponent}`}
                        className="border-secondary-background text-primary-background bg-secondary-background w-full rounded-lg border px-2 py-4 text-center text-sm font-semibold sm:w-52 sm:px-4"
                    >
                        {formatComponentName(recentlyAddedComponent)}
                    </Link>
                </div>
                <Link
                    href={`/components/${nextComponent}`}
                    className="text-primary-foreground border-secondary-background bg-primary-background w-full rounded-lg border p-4 text-center text-sm font-semibold sm:w-52"
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
