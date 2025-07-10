import { FlipWords } from '@/components/ui/flip-words';

const FlipWordsDemo2 = () => {
    return (
        <div className="flex h-[40rem] w-full items-center justify-center px-4">
            <div className="mx-auto text-4xl font-normal text-neutral-600 dark:text-neutral-400">
                Build{' '}
                <FlipWords className="text-neutral-950 dark:text-neutral-100" />{' '}
                <br />
                websites with Eunary UI
            </div>
        </div>
    );
};

export default FlipWordsDemo2;
export const metadata = {
    title: 'Flip Words Demo 2',
    description: 'Demo for Flip Words component in Eunary UI',
};
