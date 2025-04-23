// lib/saveImageData.ts
import fs from 'fs';
import path from 'path';

export const saveImageData = (data: object) => {
  const filePath = path.join(process.cwd(), 'data/images.json');
  const currentData = fs.existsSync(filePath)
    ? JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    : [];

  currentData.push(data);
  fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2));
};
