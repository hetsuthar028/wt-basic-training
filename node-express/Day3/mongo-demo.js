const mongodb = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";


// Creating the db and collection
// mongodb.connect(url, (err, db) => {
//     if(err){
//         throw err;
//     }
//     let dbase = db.db('api-training');
//     dbase.createCollection("students", (err, res) => {
//         if(err){
//             throw err
//         }
//         console.log("Collection created...")
//         db.close();
//     })
// })


// Insert one document
// mongodb.connect(url, (err, db) => {
//     if(err){
//         throw err;
//     }
//     let dbase = db.db('api-training');
//     let dummyRecord = {name: "John", age: 21, marks: 90}

//     dbase.collection('students').insertOne(dummyRecord, (err, res) => {
//         if(err){
//             throw err
//         }

//         console.log("Record inserted successfully...")
//         db.close();
//     })
// });


// @Homework - Insert many documents
// mongodb.connect(url, (err, db) => {
//     if(err){
//         throw err;
//     }
//     let dbase = db.db('api-training');
//     let dummyRecords = [{name: "ABC", age: 21, marks: 89}, {name: "Prakash", age: 22, marks: 85}, {name: "Bharat", age: 22, marks: 90}]

//     dbase.collection('students').insertMany(dummyRecords, (err, res) => {
//         if(err){
//             throw err
//         }

//         console.log("Records inserted successfully...")
//         db.close();
//     })
// });


// Fetch documents
// mongodb.connect(url, (err, db) => {
//     if(err){
//         throw err
//     }

//     let dbase = db.db('api-training')
    
//     dbase.collection('students').find({})
//         .toArray((err, results) => {
//             if(err){
//                 throw err;
//             }

//             console.log(results);
//             db.close();
//         })
// })


// Query with find
// mongodb.connect(url, (err, db) => {
//     if(err){
//         throw err
//     }

//     let dbase = db.db('api-training');

//     dbase.collection('students').find({name: 'ABC'})
//         .toArray((err, results) => {
//             if(err){
//                 throw err
//             }
//             console.log(results);
//             db.close();
//         })
// });


// FindOne
// mongodb.connect(url, (err, db) => {
//     if(err){
//         throw err
//     }
    
//     let dbase = db.db('api-training');
    
//     dbase.collection('students').findOne({name: "ABC"})
//         .then((result) => {
//             console.log(result);
//             db.close();
//         })
//         .catch((err) => {
//             throw err;
//         })
// })


// Delete one document
// mongodb.connect(url, (err, db) => {
//     if(err){
//         throw err
//     }

//     let dbase = db.db('api-training');
//     dbase.collection('students').deleteOne({name: 'ABC'})
//         .then((result) => {
//             console.log(result);
//             db.close();
//         })
//         .catch((err) => {
//             console.log(err)
//             throw err;
//         })
// });



// @Homework - Update One
// mongodb.connect(url, (err, db) => {
//     if(err){
//         throw err
//     }

//     let dbase = db.db('api-training');
//     dbase.collection('students').updateOne({marks: {$gt: 90}}, {$set: {"grade": "A"}})
//         .then((result) => {
//             console.log("Update Result --", result);
//             db.close();
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })


// @Homework - Update Many
// mongodb.connect(url, (err, db) => {
//     if(err){
//         throw err
//     }

//     let dbase = db.db('api-training');
//     dbase.collection('students').updateMany({marks: {$gte: 90}}, {$set: {"grade": "A"}})
//         .then((result) => {
//             console.log("Update Many Result --", result);
//             db.close();
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });


// @Homework - Delete Many
// mongodb.connect(url, (err, db) => {
//     if(err){
//         throw err
//     }

//     let dbase = db.db('api-training');
//     dbase.collection('students').deleteMany({age: {$gte: 22}})
//         .then((result) => {
//             console.log("Delete Many Result --", result);
//             db.close();
//         })
//         .catch((err) => {
//             console.log(err)
//         });
// });