import { copySync } from 'fs-extra';
import { resolve, join } from 'path';

const distPath = resolve(__dirname, '../dist');
const publicPhotoPath = resolve(__dirname, '../public/photo');
const distPhotoPath = join(distPath, 'photo');

// Copy public/photo to dist/photo
copySync(publicPhotoPath, distPhotoPath, { overwrite: true });

console.log('Postbuild script executed: photo folder copied.');