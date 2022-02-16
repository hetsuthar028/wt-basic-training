const fs = require('fs');

let readStream = fs.createReadStream('./demo.txt');
let writeStream = fs.createWriteStream('./demo3.txt');

readStream.pipe(writeStream);

console.log("Piping Done...");