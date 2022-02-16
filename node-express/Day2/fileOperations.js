const fs = require('fs');

// @Asynchronous - File Reading

// console.log("Before File Reading");
// fs.readFile('./demo.txt', (err, data) => {
//     if(err){
//         return console.log("ERROR Reading the file", err);
//     }

//     console.log("Reading file...👇")
//     console.log(data.toString());
// })
// console.log("After File Reading");


// @Synchronous - File Reading

// console.log("\nBefore File Reading");
// let data = fs.readFileSync('./demo.txt')
// console.log(data.toString());
// console.log("After File Reading");


// @Asynchronous - File Writing

// fs.writeFile('./demo2.txt', 'This is the 2nd demo file', (err) => {
//     if(err){
//         return console.log("Error:", err)
//     }
//     console.log("File write done - Async");
// });


// @Synchronous - File Writing

// let ss = fs.writeFileSync('./demo2.txt', 'This is the 2nd demo file', (err) => {
//     if(err){
//         return console.log("Error:", err)
//     }
// });
// console.log("File write done - Sync");


// @Asynchronous - Append data into the files [Also has Sync method]
// Creates a new file if doesn't exists

// fs.appendFile('./demo3.txt', '\nThis data will be appended to the file', (err) => {
//     if(err){
//         return console.log("Error appending content:", err);
//     }
//     console.log("File Append Done");
// });


// @Asynchronous - Delete file [Also has Sync method]

fs.unlink('./demo2.txt', (err) => {
    if(err){
        return console.log("Error deleting the file", err)
    }
    console.log("File Deleted")
})

