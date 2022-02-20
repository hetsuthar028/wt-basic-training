// Used to store raw data
// Seperate memory is allocated for the buffers
// Used to perform pure binary operations in JS

let buffer1 = new Buffer(15);
let something = buffer1.write("Something");
console.log(buffer1, something);

let buffer2 = new Buffer([10, 20, 30]);
console.log(buffer2, buffer2.length);