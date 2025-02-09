import fs from 'fs';
import path from 'path';
import ComponentShowcase from '../../components/ComponentShowcase';
import { ThemeToggler } from '../../components';

const getComponentCode = () => {
    const filePath = path.join(process.cwd(), 'components/ThemeToggler.tsx');
    return fs.readFileSync(filePath, 'utf-8');
};

export default function ShowcasePage() {
    const code = getComponentCode();

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
