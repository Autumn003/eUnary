import Link from 'next/link';

const EunaryProWaiting = () => {
    return (
        <div className="container h-screen py-1 md:px-20">
            <div className="my-20 text-center">
                <h1 className="mb-5 text-4xl font-bold lg:text-7xl">
                    Comming Soon...!
                </h1>
                <h3 className="text-secondary-foreground text-2xl font-semibold lg:text-4xl">
                    Eunary Pro is launching soon with premium templates &
                    exclusive UI components.
                </h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                <Link
                    href={`/components`}
                    className="border-secondary-background text-primary-background bg-secondary-background w-full rounded-lg border px-2 py-4 text-center text-sm font-semibold sm:px-4 md:w-56"
                >
                    Explore Components
                </Link>
                <Link
                    href={`/`}
                    className="text-primary-foreground border-secondary-background bg-primary-background w-full rounded-lg border p-4 text-center text-sm font-semibold md:w-56"
                >
                    Home
                </Link>
            </div>
        </div>
    );
};

export default EunaryProWaiting;
