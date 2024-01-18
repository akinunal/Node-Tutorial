const fs = require('fs');
const path = require('path');

const readStream = fs.createReadStream(path.join(__dirname, 'files', 'hello.txt'), { encoding: 'utf8' });
const writeStream = fs.createWriteStream(path.join(__dirname, 'files', 'new-hello.txt'));

readStream.pipe(writeStream);