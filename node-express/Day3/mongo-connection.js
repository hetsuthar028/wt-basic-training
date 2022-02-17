const { MongoClient } = require('mongodb');

const createMongoConnection = async () => {
    const mongoClient = new MongoClient('mongodb://localhost:27017/');
    await mongoClient.connect();
    return mongoClient
}

module.exports = createMongoConnection();

// let something = createMongoConnection();
// something.then((connection) => {
//     connection.db('api-training').collection('students').find({})
//         .toArray()
//         .then((results) => {
//             console.log(results)
//             connection.close();
//         })
// })
// .catch((err) => {
//     console.log("Error in connection", err);
// })

// const collection = mongoClient.db().collection('students')

// collection.find({})
//     .toArray()
//     .then((results) => {
//         console.log("Got results", results)
//     })
//     .catch((err) => {
//         console.log("ERROR:", err);
//     })