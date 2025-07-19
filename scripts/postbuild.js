const fs = require('fs-extra');
const path = require('path');

const distPath = path.resolve(__dirname, '../dist');
const publicPhotoPath = path.resolve(__dirname, '../public/photo');
const distPhotoPath = path.join(distPath, 'photo');
const redirectsFilePath = path.join(distPath, '_redirects');

// Copy public/photo to dist/photo
fs.copySync(publicPhotoPath, distPhotoPath, { overwrite: true });

// Create _redirects file in dist
const redirectContent = '/* /index.html 200';
fs.writeFileSync(redirectsFilePath, redirectContent);

console.log('Postbuild script executed: photo folder copied and _redirects created.');
