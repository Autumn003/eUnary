'use server';
import fs from 'fs';
import path from 'path';

export const getFileContent = (filePath: string) => {
    const absolutePath = path.join(process.cwd(), filePath);
    return fs.readFileSync(absolutePath, 'utf-8');
};
