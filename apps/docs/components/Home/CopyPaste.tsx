import FileContent from '../FileContent';

const CopyPaste = () => {
    return (
        <div className="container my-24 grid grid-cols-2">
            <div className="col-span-2 my-10 text-center">
                <h3 className="mb-5 text-xl font-semibold">
                    As simple as copy and paste
                </h3>
                <p className="text-secondary-foreground">
                    Just drop the code into your ui folder and start using the
                    components in your projects. It’s that easy!
                </p>
            </div>
            <div className="relative col-span-1">
                <div className="absolute flex h-8 w-full items-center gap-2 rounded-t-[22px] bg-zinc-100 px-3 dark:bg-zinc-900">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <FileContent filePath="components/ThemeToggler.tsx" />
            </div>
            <div className="col-span-1"> section 2</div>
        </div>
    );
};

export default CopyPaste;
