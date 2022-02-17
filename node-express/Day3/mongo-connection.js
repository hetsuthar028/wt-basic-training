const { MongoClient } = require('mongodb');

const createMongoConnection = async () => {
    const mongoClient = new MongoClient('mongodb://localhost:27017/api-training');
    await mongoClient.connect();
    return mongoClient
}

let something = createMongoConnection();
something.then((connection) => {
    console.log(connection)
})
.catch((err) => {
    console.log("Error in connection", err);
})

// const collection = mongoClient.db().collection('students')

// collection.find({})
//     .toArray()
//     .then((results) => {
//         console.log("Got results", results)
//     })
//     .catch((err) => {
//         console.log("ERROR:", err);
//     })