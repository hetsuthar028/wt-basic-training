const fs = require('fs');

// Readable Stream

// let data = '';
// let readStream = fs.createReadStream('./demo.txt');

// readStream.on('data', (chunk) => {
//     data +=chunk.toString();
// })

// readStream.on('end', () => {
//     console.log("Stream End\n", data);
// })

// readStream.on('error', (err) => {
//     console.log("Error in stream reading", err);
// })

// readStream.on('open', (fd) => {
//     console.log("Stream Open", fd)
// })


// Writable Stream

let dummyText = "Text written by Writable Stream";
let writeStream = fs.createWriteStream('./demo2.txt');

writeStream.write(dummyText);

writeStream.on('error', () => {
    console.log("Error in writable stream", err);
})

writeStream.on('finish', () => {
    console.log("Writing Finished...");
})

writeStream.on('drain', () => {
    console.log("Stream drain");
})

writeStream.end();