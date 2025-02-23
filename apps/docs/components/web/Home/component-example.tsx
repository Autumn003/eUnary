import FileContent from '../code/file-content';
import ThemeToggler from '../theme-toggler';

const ComponentExample = () => {
    return (
        <div className="container my-24">
            <div className="border-muted-background grid grid-cols-2 gap-10 rounded-4xl p-4">
                <div className="relative col-span-2 flex flex-col items-center justify-center md:col-span-1">
                    <h1
                        className="absolute top-1/2 left-0 -z-10 -translate-y-1/2 text-5xl font-bold text-transparent sm:text-7xl md:text-7xl lg:text-9xl"
                        style={{
                            WebkitTextStroke: '1px rgba(82, 82, 82, 0.3)',
                        }}
                    >
                        Customize Your Component
                    </h1>

                    <ThemeToggler />
                </div>
                <div className="relative col-span-2 md:col-span-1">
                    <div className="absolute -inset-1 rounded-[40px] bg-gradient-to-br from-pink-400 via-violet-400 to-blue-400 opacity-30 blur-xl"></div>
                    <div className="col-span-2 rounded-[28px] bg-gradient-to-br from-pink-400 via-violet-400 to-blue-400 p-1 shadow-2xl drop-shadow-2xl md:col-span-1">
                        <FileContent filePath="components/web/ThemeToggler.tsx" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComponentExample;
