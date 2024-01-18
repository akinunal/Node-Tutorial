const fsPromise = require('fs').promises;
const path = require('path');

const fileOps = async () => {
  try {
    const data = await fsPromise.readFile(path.join(__dirname, 'files', 'greetings2.txt'), 'utf8');
    console.log(data);
    await fsPromise.writeFile(path.join(__dirname, 'files', 'greetings.txt'), data);
    await fsPromise.appendFile(path.join(__dirname, 'files', 'greetings.txt'), '\n\nHellooo');
    await fsPromise.rename(path.join(__dirname, 'files', 'greetings.txt'), path.join(__dirname, 'files', 'greetings3.txt'));
    const newData = await fsPromise.readFile(path.join(__dirname, 'files', 'greetings3.txt'), 'utf8');
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
};

fileOps();

// Callback hell
// fs.writeFile(path.join(__dirname, 'greetings.txt'), 'Nice to meet you', err => {
//   if (err) throw err;
//   console.log('File has been written');

//   fs.appendFile(path.join(__dirname, 'greetings.txt'), '\n\nNice to meet you too', err => {
//     if (err) throw err;
//     console.log('File has been appended');

//     fs.rename(path.join(__dirname, 'greetings.txt'), path.join(__dirname, 'greetings2.txt'), err => {
//       if (err) throw err;
//       console.log('File has been renamed');
//     });
//   });
// });

// Throw error on purpose example.
// process.on('uncaughtException', err => {
//   console.error(`There was an uncaught error: ${err}`);
//   process.exit(1);
// });