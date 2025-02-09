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
        <div className="container mx-auto mt-20 overflow-scroll">
            <ComponentShowcase
                title="Theme Toggler"
                component={<ThemeToggler />}
                code={code}
                className={'components/ThemeToggler.tsx'}
            />
        </div>
    );
}
