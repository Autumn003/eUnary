import { ThemeToggler } from '../../../../components';
import ComponentShowcase from '../../../../components/ComponentShowcase';
import { getFileContent } from '../../../../lib/getFileContent';

const page = async () => {
    const code = await getFileContent('components/ThemeToggler.tsx');
    return (
        <div>
            <ComponentShowcase
                component={<ThemeToggler />}
                code={code}
                className="no-scrollbar"
            />
        </div>
    );
};

export default page;
