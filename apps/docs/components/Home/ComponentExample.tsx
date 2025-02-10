import FileContent from '../FileContent';
import ThemeToggler from '../ThemeToggler';

const ComponentExample = () => {
    return (
        <div className="container my-24">
            <div className="border-muted-background grid grid-cols-2 gap-10 rounded-4xl p-4">
                <div className="col-span-2 flex items-center justify-center md:col-span-1">
                    <ThemeToggler />
                </div>
                <div className="relative">
                    <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-br from-pink-400 via-violet-400 to-blue-400 opacity-20 blur"></div>
                    <div className="col-span-2 rounded-4xl bg-gradient-to-br from-pink-400 via-violet-400 to-blue-400 p-2 shadow-2xl drop-shadow-2xl md:col-span-1">
                        <FileContent filePath="components/ThemeToggler.tsx" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComponentExample;
