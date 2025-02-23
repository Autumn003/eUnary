import { ThemeToggler } from '@/components';
import ComponentShowcase from '@/components/web/code/component-showcase';
import { getFileContent } from '@/lib/getFileContent';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components';

const page = async () => {
    const code = await getFileContent('components/web/ThemeToggler.tsx');
    return (
        <div className="h-full w-full">
            <div>
                <Tabs defaultValue="account" className="w-[400px]">
                    <TabsList className="text-secondary-foreground">
                        <TabsTrigger value="account">Account</TabsTrigger>
                        <TabsTrigger value="password">Password</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        Make changes to your account here.
                    </TabsContent>
                    <TabsContent value="password">
                        Change your password here.
                    </TabsContent>
                </Tabs>
            </div>

            <ComponentShowcase
                component={<ThemeToggler />}
                code={code}
                className=""
            />
        </div>
    );
};

export default page;
