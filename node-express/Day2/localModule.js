let log = {
    getInfo: (information) => console.log("Your Info:", information),
    getError: (warning) => console.error("ERROR:", warning),
}

// Approach - 1
module.exports = log;

// Approach - 2
// exports.log = log;
