const fs = require('fs');

// @Asynchronous - Creating the directory [Also has Sync method]

// fs.mkdir('./demoDir', (err) => {
//     if(err){
//         return console.error("Error creating the directory", err);
//     }
//     console.log("Directory created.")
// })


// @Asynchronous - Check for the existing directory [Also has Sync method]

// fs.access('./demoDir', (err) => {
//     if(err){
//         return console.error("Error accessing directory:", err)
//     }
//     console.log("Directory exists and accessible");
// })


// @Asynchronous - Lists all files inside the directory [Also has Sync method]

fs.readdir('../Day2', (err, files) => {
    if(err){
        return console.error("Error reading directory:", err)
    }

    console.log(files);
})

