import {
    AutoScrollingGallery,
    ComponentExample,
    FileContent,
    HeroSection,
    Home,
} from '../components';

export default function page() {
    return (
        <div>
            {/* <Home /> */}
            <HeroSection />
            <AutoScrollingGallery />
            {/* <FileContent filePath="/components/ThemeToggler.tsx" /> */}
            <ComponentExample />
        </div>
    );
}
