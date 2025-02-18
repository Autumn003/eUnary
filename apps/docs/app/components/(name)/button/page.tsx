import { ThemeToggler } from '@/components';
import ComponentShowcase from '@/components/web/code/ComponentShowcase';
import { getFileContent } from '@/lib/getFileContent';

const page = async () => {
    const code = await getFileContent('components/web/ThemeToggler.tsx');
    return (
        <div className="h-full w-full">
            <ComponentShowcase
                component={<ThemeToggler />}
                code={code}
                className=""
            />
        </div>
    );
};

export default page;
