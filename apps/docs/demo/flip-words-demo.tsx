import { FlipWords } from '@/components/ui/flip-words';

const FlipWordsDemo = () => {
    return (
        <div className="dark:text-primary-foreground text-secondary-foreground relative mb-6 max-w-4xl text-left text-4xl font-bold md:text-7xl">
            Build your website with Eunary{' '}
            <FlipWords
                words={['modern', 'fast', 'elegant', 'aesthetic', 'sleek']}
                className="bg-gradient-to-r from-violet-600 via-sky-400 to-indigo-800 bg-clip-text text-transparent"
            />
        </div>
    );
};

export default FlipWordsDemo;
export const metadata = {
    title: 'Flip Words Demo',
    description: 'Demo for Flip Words component in Eunary UI',
};
