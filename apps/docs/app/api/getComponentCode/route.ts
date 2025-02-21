import { NextResponse } from 'next/server';
import { getFileContent } from '@/lib/getFileContent';

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const componentName = searchParams.get('name');

        if (!componentName) {
            return NextResponse.json(
                { error: 'Component name is required' },
                { status: 400 }
            );
        }

        const filePath = `components/ui/${componentName}.tsx`;
        const code = await getFileContent(filePath);

        return NextResponse.json({ code });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch component code' },
            { status: 500 }
        );
    }
}
