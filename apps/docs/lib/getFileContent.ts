'use server';

import fs from 'fs';
import path from 'path';

export async function getFileContent(filePath: string): Promise<string> {
    try {
        const absolutePath = path.join(process.cwd(), filePath);
        return await fs.promises.readFile(absolutePath, 'utf-8');
    } catch (error) {
        console.error(`Error reading file: ${filePath}`, error);
        return 'Error loading file content.';
    }
}
