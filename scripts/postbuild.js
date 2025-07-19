const fs = require('fs-extra');
const path = require('path');

const distPath = path.resolve(__dirname, '../dist');
const publicPhotoPath = path.resolve(__dirname, '../public/photo');
const distPhotoPath = path.join(distPath, 'photo');

// Copy public/photo to dist/photo
fs.copySync(publicPhotoPath, distPhotoPath, { overwrite: true });

console.log('Postbuild script executed: photo folder copied.');