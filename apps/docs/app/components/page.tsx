import ComponentShowcase from '../../components/ComponentShowcase';
import { ThemeToggler } from '../../components';
import { getFileContent } from '../../lib/getFileContent';

export default async function ShowcasePage() {
    const code = await getFileContent('components/ThemeToggler.tsx');

    return (
        <div className="container mt-20">
            <ComponentShowcase
                component={<ThemeToggler />}
                code={code}
                className="no-scrollbar"
            />
        </div>
    );
}
